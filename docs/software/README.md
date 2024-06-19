# Реалізація інформаційного та програмного забезпечення

- SQL-скрипт для створення на початкового наповнення бази даних

```sql

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `login` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`originalSource`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`originalSource` ;

CREATE TABLE IF NOT EXISTS `mydb`.`originalSource` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `rating` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`media`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`media` ;

CREATE TABLE IF NOT EXISTS `mydb`.`media` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `url` VARCHAR(45) NULL,
  `metadata` VARCHAR(45) NULL,
  `originalSource_id` INT NOT NULL,
  PRIMARY KEY (`id`, `originalSource_id`),
  INDEX `fk_media_originalSource1_idx` (`originalSource_id` ASC) VISIBLE,
  CONSTRAINT `fk_media_originalSource1`
    FOREIGN KEY (`originalSource_id`)
    REFERENCES `mydb`.`originalSource` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `created` VARCHAR(45) NULL,
  `media_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `media_id`),
  INDEX `fk_request_media1_idx` (`media_id` ASC) VISIBLE,
  INDEX `fk_request_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_media1`
    FOREIGN KEY (`media_id`)
    REFERENCES `mydb`.`media` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`requestResult`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`requestResult` ;

CREATE TABLE IF NOT EXISTS `mydb`.`requestResult` (
  `id` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  `rating` INT NULL,
  `request_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `request_id`),
  INDEX `fk_requestResult_request1_idx` (`request_id` ASC) VISIBLE,
  INDEX `fk_requestResult_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_requestResult_request1`
    FOREIGN KEY (`request_id`)
    REFERENCES `mydb`.`request` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_requestResult_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`, `description`)
VALUES (1, 'user', 'desc1'),
       (2, 'admin', 'desc2');

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`user` (`id`, `name`, `login`, `password`, `email`, `role_id`)
VALUES (1, 'name1', 'login1', 'pass1', 'email1@gmail.com', 1),
	   (2, 'name2', 'login2', 'pass2', 'email2@gmail.com', 1),
       (3, 'name3', 'login3', 'pass3', 'email3@gmail.com', 1);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`originalSource_id`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`originalSource` (`id`, `name`, `type`, `url`, `rating`)
VALUES (1, 'name1', 'type1', 'url1', NULL),
       (2, 'name2', 'type2', 'url2', NULL);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`media`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`media` (`id`, `name`, `type`, `url`, `metadata`, `originalSource_id`)
VALUES (1, 'name1', 'type1', 'url1', 'metadata1', 1),
       (2, 'name2', 'type2', 'url2', 'metadata2', 1);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`request`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`request` (`id`, `name`, `description`, `created`, `media_id`, `user_id`)
VALUES (1, 'Text search', 'desc', '2024-05-18', 1, 1),
       (2, 'Video search', 'desc', '2024-05-18', 2, 2);

COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`requestResult`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`requestResult` (`id`, `description`, `rating`, `request_id`, `user_id`)
VALUES (1, 'desc1', 4, 1, 1),
       (2, 'desc2', 3, 2, 2);

COMMIT;

```

- RESTfull сервіс для управління даними

```
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

```
