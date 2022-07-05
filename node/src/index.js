const app = require("./app")
require("./bd.js")
require("./config.js")
const { PORT } = require("./config")

app.listen(PORT, () => {
  console.log("Server is running")
})
