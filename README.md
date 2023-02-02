# Backend-Developer-Exam"
Description
-------

Sample REST API Using Node JS without connecting to database

Features
-------

The REST API has the following features:

* Display 20 questions each question has 4 answer
* Every application re-load or re-open will be random question and answer
```bash
GET http://localhost:3000/questions
```
* Display to Leader board
```bash
GET http://localhost:3000/leader_board
```

* Submit score
```bash
PUT http://localhost:3000/users
```
Body
```json
{
       "username":"user1",
       "score": 6,
       "user_answers": [{
    "id":1,
    "answer":"choice3"
 },
 {
  "id":2,
  "answer":"choice2"
},
{
  "id":3,
  "answer":"choice4"
},
{
  "id":4,
  "answer":"choice1"
},
{
  "id":5,
  "answer":"choice2"
},
{
  "id":6,
  "answer":"choice1"
},
{
  "id":7,
  "answer":"choice1"
},
{
  "id":8,
  "answer":"choice1"
},
{
  "id":9,
  "answer":"choice1"
},
{
  "id":10,
  "answer":"choice1"
},
{
  "id":11,
  "answer":"choice1"
},
{
  "id":12,
  "answer":"choice1"
},
{
  "id":13,
  "answer":"choice1"
},
{
  "id":14,
  "answer":"choice1"
},
{
  "id":15,
  "answer":"choice1"
},
{
  "id":16,
  "answer":"choice1"
},
{
  "id":17,
  "answer":"choice1"
},
{
  "id":18,
  "answer":"choice1"
},
{
  "id":19,
  "answer":"choice1"
},
{
  "id":20,
  "answer":"choice1"
}
]
    }
```

Author
-------

**Junior**
