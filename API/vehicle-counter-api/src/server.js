const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server berhasil running di http://localhost:${PORT}`);
});
