const axios = require("axios")

exports.handler = function(event, context, callback) {
  const API_URL = "https://api.github.com/users"
  const API_CLIENT_ID = "cb9ccbb3555f288738b6"
  const API_CLIENT_SECRET = "fd7182028baa30228cd4cfe6fa3b23624cf18293"

  const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`

  // Send User Response
  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    })
  }

  //Perform API call
  const getUsers = async () => {
    axios.get(URL).then(res => send(res.data))
  }

  if (event.httpMethod == "GET") {
    getUsers()
  }

  // // Send User Response
  // send(getUsers.data)
}
