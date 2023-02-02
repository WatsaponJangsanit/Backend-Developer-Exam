const users = require('./users')
const questions = require('./questions')
const express = require("express")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
  res.send("Hello! Quizs");
})


// Display to Leader board
app.get('/leader_board', (req, res) => {
  ranks = Object.values(users).sort((a, b) => b.score - a.score);
  res.json(ranks)
})


// Create user before start quiz
app.post('/users', (req, res) => {
  if (users.findIndex(user => user.username === req.body.username) !== -1)
  {
    return res.status(400).send({
      message: "Failed! User name is already in use!"
    })
  }
  req.body.score = 0
  req.body.id = users.length + 1
  users.push(req.body)
  let json = req.body
  res.send(`Add new user '${json.username}' completed.`)
})


// Display 20 questions each question has 4 answer
// Every application re-load or re-open will be random question
// Start play
app.get('/questions', (req, res) => {
    shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random())
    shuffledQuestions.forEach(q => q.choice.sort((a, b) => 0.5 - Math.random()));
    console.log(shuffledQuestions)
    res.json(shuffledQuestions)
  })


// submit score
// count score will be done from front-end but let's recheck one more time
app.put('/users', (req, res) => {
  
  const updateIndex = users.findIndex(user => user.username === req.body.username)
  if (updateIndex === -1)
  {
    return res.status(404).send({
      message: "User Not found."
    })
  }
  const user_answers = req.body.user_answers
  let score = 0
 for (let i = 0; i < user_answers.length; i++) {
  answerIndex = questions.findIndex(q => q.id === Number(user_answers[i].id))
  if (user_answers[i].answer === questions[answerIndex].answer) {
    score = score + 1
  }
}
  if (score != req.body.score)
{
  return res.status(422).send({
    message: "Submitted scores do not match."
  })
}
  users[updateIndex].username = req.body.username
  users[updateIndex].score = score
  res.send(`Update score for user: '${users[updateIndex].username}' completed.`)
})

// run rest api
app.listen(port, () => {
  console.log(`Starting node.js at port ${port}`);
});
