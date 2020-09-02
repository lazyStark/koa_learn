class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, code = 500) {
    super()
    this.msg = msg
    this.code = code
    this.errorCode = errorCode
  }
}
class ParameterException extends HttpException {
  constructor(msg , errorCode) {
    super()
    this.code = 400
    this.msg = msg || '参数校验不合法！'
    this.errorCode = errorCode || 10001
  }
}

module.exports = {
  HttpException,
  ParameterException
}
