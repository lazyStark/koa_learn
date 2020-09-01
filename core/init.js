const initSessionRedis = require('./initSession')
const initRoutes = require('./initRoutes')

class InitMain {
  static initCore(app) {
    InitMain.app = app
    // 初始化session
    new initSessionRedis(app)
    // 路由注册
    new initRoutes(app)
  }
}
module.exports = InitMain