const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitRoutes {
  constructor(app) {
    this.initRouteModule(app)
  }
  initRouteModule(app) {
    const routePath = `${process.cwd()}/routes`
    requireDirectory(module, routePath, {
      visit: (obj) => {
        obj instanceof Router && app.use(obj.routes(), obj.allowedMethods())
      }
    })
  }
}


module.exports = InitRoutes