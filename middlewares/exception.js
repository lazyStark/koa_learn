const { HttpException } = require("../core/http-exception")

const catchError = async (ctx, next) => {
  try {
    // 利用洋葱模型
    await next()
  }
  catch(error) {
    // 已知异常
    if (error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {
      // 未知异常
      ctx.body = {
        msg: 'error',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = 500
    }
  }
}

module.exports = catchError
