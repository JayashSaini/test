const app = require("./app.js");
const connectDB = require("./db");

(async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit(1);
  }
})();
