# Висновки

За результатами розробки було створено базову систему для аналізу медіа-контенту, до функцій якої входить:
- створення користувачів та управління ними
- створення та обробка заявок або пропозицій, пов'язаних з медіа даними

Для розробки сервісу взаємодії з базою даних використовувався Python. Для виконання завдання була використана база даних, яка підтримується за допомогою MySQL Server.

Python є гарним вибором для швидкої розробки REST API сервісу завдяки наявності бібліотек fastapi, json та pymysql в його арсеналі. Задача створення методів, що посилаються на базу даних та отримують відповідь від неї, мінімізується до елементарних та зрозумілих рішень стосовно коду. Авжеж йдучи даним шляхом, ми відплачуємось гнучкістю, стабільністю та ефективністю програми. Однак можна сміло вважати, що хоча б для етапу тестування й налагодження такої простої та невеликої бази даних, яка служить прикладом у даній роботі, цей підхід є доцільним і здатним виконувати поставлені задачі, а також демонструє потрібну функціональність.
