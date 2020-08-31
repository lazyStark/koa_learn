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
router.get('/session-test', async (ctx, next) => {
  // debugger
  if (ctx.session.viewCount === null) {
    ctx.session.viewCount = 0
  }
  // console.log(ctx.session)
  ctx.session.viewCount++
  ctx.body = {
    msg: 'ok',
    viewCount: ctx.session.viewCount
  }
})

module.exports = router