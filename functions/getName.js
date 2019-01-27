exports.handler = function(event, context, callback) {
  const { name, status } = JSON.parse(event.body)
  callback(null, {
    statusCode: 200,
    body: `Hello ${name}. I know you are ${status}`
  })
}
