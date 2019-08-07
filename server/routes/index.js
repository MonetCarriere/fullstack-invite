const router = require('express').Router()

const users = {
  going: [],
  notgoing: []
}

const going = []
const notgoing = []

router.post('going', (req, res, next) => {
  going.push(req.body)

  res.json ({
    message: 'user added to going list',
    user: req.body
  })

  console.log(users)

})

router.post('/notgoing', (req, res, next) => {
  going.push(req.body)

  res.json({
    message: 'user added not going to list',
    user: req.body
  })
})

console.log(users)

module.exports = router