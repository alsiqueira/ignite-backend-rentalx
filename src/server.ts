import express from "express";

import { specificationsRoutes} from "./routes/specifications.route"
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => {
  console.log(" ✈  Server started on port 3333!");
});
