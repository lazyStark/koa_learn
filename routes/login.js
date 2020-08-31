const router = require('koa-router')()

router.prefix('/user')

router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body
  ctx.body = {
    msg: 'ok',
    username,
    password
  }
})

module.exports = router