
const app = require("./app");


const dotenv = require("dotenv"); //Environment file import
dotenv.config({ path: "./config.env" });  //file path 

const port = process.env.RUNNING_PORT  //Environment variable use here

app.listen(port, () => {
  console.log(`Server is running success at http://localhost:${port}`);
})