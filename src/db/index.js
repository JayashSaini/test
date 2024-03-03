const { connect } = require("mongoose");

module.exports = async function connectDB() {
  try {
    const res = await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to database", res.Connection.host);
  } catch {
    console.log("Could not connect to database");
    process.exit(1);
  }
};
