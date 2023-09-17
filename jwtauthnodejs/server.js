require('dotenv').config()

const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT || 3000;

const posts = [
  {
    username: "kyle",
    title:"Post 1"
  },
  {
    username: "jim",
    title:"Post 2"
  }
]

app.use(express.json())

app.post('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

app.post('/login', (req, res) => {
  //authenticate user öğren ve bak vid1de ve node yaz gir ve require('crypto').randomBytes(64).toString('hex')
  const username = req.body.username
  const user = {name: username}
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  res.json({ accessToken: accessToken})
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
  //Bearer TOKEN
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})