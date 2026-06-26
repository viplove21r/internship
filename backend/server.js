const express = require("express");
const app = express();
const PORT=5000;
app.use(express.json());


//API   

app.get("/", (req, res) => {
  res.send("backend server running successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});