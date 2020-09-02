const router = require('koa-router')()
const { ParameterException } = require('../core/http-exception')
router.prefix('/blog')

router.get('/list', async (ctx, next) => {
  ctx.body = 'this is a blogs list'
  // 已知异常抛出
  // const error = new ParameterException()
  // 未知异常报错
  // abc
  throw error
})

module.exports = router
