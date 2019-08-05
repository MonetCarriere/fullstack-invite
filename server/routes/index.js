const router = require('express').Router()

/*
  code here
*/

router.get("/greeting", (req, res, next) => {
  res.json({
    greeting: 'Hello World from Express and Node!'
  })
})

module.exports = router