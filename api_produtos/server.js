import { carregarAmbiente } from "./config/ambiente.js";

const config = carregarAmbiente(".env");
const { app } = await import("./app.js");

const port = config.port || 3000;

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
