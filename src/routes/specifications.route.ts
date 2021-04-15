import { Router } from "express";
import { createSpecificationController} from "../Modules/cars/useCases/createSpecification";
import { listSpecificationsController } from "../Modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();


specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.hendle(request, response)
})

specificationsRoutes.get("/", (request, response) => {
   return listSpecificationsController.handle(request, response)
  
})
export { specificationsRoutes };
