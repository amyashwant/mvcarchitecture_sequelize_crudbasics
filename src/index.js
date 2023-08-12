const express = require("express");
const app = express();
const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

app.use(express.json());
app.use("/api", apiRoutes);

app.use(express.urlencoded({ extended: true }));

app.listen(ServerConfig.PORT, () => {
  console.log("server listening at ", ServerConfig.PORT);
});
