const session = require('koa-generic-session')
const redisStore = require('koa-redis')

class InitSessionRedis {
  constructor(app) {
    this.initRedis(app)
  }
  initRedis(app) {
    // session 配置
    app.keys = ['siwenfeng#$']
    app.use(session({
      // 配置cookie
      cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
      },
      // redis 配置
      store: redisStore({
        host: '127.0.0.1',
        port: 6379,
        password: 'siwenfeng'
      })
    }))
  }
}
module.exports = InitSessionRedis
