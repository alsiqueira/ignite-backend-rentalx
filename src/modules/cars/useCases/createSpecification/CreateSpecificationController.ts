import { Response, Request } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
	constructor(private createSpecificationUseCase: CreateSpecificationUseCase){}

    hendle(request: Request, response: Response): Response {
			const { name, description } = request.body;

			this.createSpecificationUseCase.execute({name, description})

			return response.status(201).send()
		}
}


export { CreateSpecificationController }