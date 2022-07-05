const { connect } = require("mongoose")
const { mongoURI } = require("./config")

connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))
