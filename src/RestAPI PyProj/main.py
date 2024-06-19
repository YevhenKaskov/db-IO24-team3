import json
import fastapi
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import pymysql

app = FastAPI()


class DataBase(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DataBase, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__connect()

    def __connect(self):
        self.connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='1214',
            database='mydb',
        )
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)

    def execute(self, command):
        self.cursor.execute(command)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result


@app.get("/api/users")
async def get_users():
    db = DataBase()
    json_body = json.loads((JSONResponse(db.execute('SELECT COUNT(id) as len FROM user;'))).body)
    return {'length': json_body[0]['len'],
            'Users': json.loads((JSONResponse(db.execute('SELECT * FROM user;'))).body)}


@app.get("/api/requests")
async def get_requests():
    db = DataBase()
    json_body = json.loads((JSONResponse(db.execute('SELECT COUNT(id) as len FROM request;'))).body)
    return {'length': json_body[0]['len'],
            'Requests': json.loads((JSONResponse(db.execute('SELECT * FROM request;'))).body)}


@app.get('/api/users/{id}')
def get_user_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM user WHERE id={id};')
    if not result:
        raise fastapi.HTTPException(status_code=404, detail="No user has such ID.")
    return JSONResponse(result)


@app.get('/api/requests/{id}')
def get_request_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM request WHERE id={id};')
    if not result:
        raise fastapi.HTTPException(status_code=404, detail="No request with such ID found.")
    return JSONResponse(result)


@app.post('/api/adduser', status_code=201)
async def add_new_user(req: Request):
    req_dict = await req.json()
    try:
        name = req_dict['name']
        login = req_dict['login']
        password = req_dict['password']
        email = req_dict['email']
        role_id = req_dict['role_id']
    except KeyError:
        raise fastapi.HTTPException(status_code=400, detail="Missing required fields.")
    db = DataBase()
    try:
        db.execute(
            f"INSERT INTO user (`name`, `login`, `password`, `email`, `role_id`) "
            f"VALUES ('{name}', '{login}', '{password}', '{email}', {role_id});")
        json_data = JSONResponse(db.execute('SELECT * FROM user ORDER BY id DESC LIMIT 1;'))
    except Exception:
        raise fastapi.HTTPException(status_code=404, detail="Wrong role ID.")

    return {'message': 'New user added!', 'data': json.loads(json_data.body)}


@app.post('/api/addrequest', status_code=201)
async def add_new_request(req: Request):
    req_dict = await req.json()
    try:
        name = req_dict['name']
        description = req_dict['description']
        created = req_dict['created']
        media_id = req_dict['media_id']
        user_id = req_dict['user_id']
    except KeyError:
        raise fastapi.HTTPException(status_code=400, detail="Missing required fields.")

    db = DataBase()
    try:
        db.execute(
            f"INSERT INTO request (`name`, `description`, `created`, `media_id`, `user_id`)"
            f"VALUES ('{name}', '{description}', '{created}', {media_id}, {user_id});")
        json_data = JSONResponse(db.execute('SELECT * FROM request ORDER BY id DESC LIMIT 1;'))
    except Exception:
        raise fastapi.HTTPException(status_code=404, detail="Wrong media or user ID.")

    return {'message': 'New request added!', 'data': json.loads(json_data.body)}


@app.put('/api/updateuser/{id}')
async def update_user(id, req: Request):
    req_dict = await req.json()
    db = DataBase()
    if not db.execute(f'SELECT * FROM user WHERE id={id};'):
        raise fastapi.HTTPException(status_code=404, detail="No user has such ID.")
    for key in req_dict:
        try:
            db.execute(f'UPDATE user SET {key}="{req_dict[key]}" WHERE id={id};')
        except Exception as e:
            raise fastapi.HTTPException(status_code=404, detail=str(e))
    json_data = JSONResponse(db.execute(f'SELECT * FROM user WHERE id={id};'))
    return {"message": 'Updated!', 'Updated user': json.loads(json_data.body)}


@app.delete('/api/deleteuser/{id}')
def delete_user(id):
    db = DataBase()
    if not db.execute(f'SELECT * FROM user WHERE id={id};'):
        raise fastapi.HTTPException(status_code=404, detail="No user has such ID.")
    json_data = JSONResponse(db.execute(f'SELECT * FROM user WHERE id={id};'))
    db.execute(f'DELETE FROM user WHERE id={id};')
    return {'message': f'User with ID = {id} deleted', 'Deleted user': json.loads(json_data.body)}
