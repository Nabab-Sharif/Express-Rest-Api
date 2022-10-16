
const port = 4000;
const app = require("./app");

app.listen(port, () => {
  console.log(`Server is running success at http://localhost:${port}`);
})