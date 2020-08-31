const router = require('koa-router')()

router.prefix('/blog')

router.get('/list', async (ctx, next) => {
  ctx.body = 'this is a blogs list'
})

module.exports = router
