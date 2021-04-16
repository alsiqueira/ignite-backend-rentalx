import { Response, Request } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
	constructor(private createCategoryUseCase: CreateCategoryUseCase){}

   async hendle(request: Request, response: Response): Promise<Response> {
			const { name, description } = request.body;

		await	this.createCategoryUseCase.execute({name, description})

			return response.status(201).send()
		}
}


export { CreateCategoryController }