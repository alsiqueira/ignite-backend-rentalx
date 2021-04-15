import fs from 'fs';
import csvParce from "csv-parse";

class ImportCategoryUseCase {

    execute(file : Express.Multer.File ): void {
    	const stream= fs.createReadStream(file.path)

			const parseFile = csvParce()
			stream.pipe(parseFile)

			parseFile.on("data", async (line) =>{
				console.log(line)
			} )


    }

}

export { ImportCategoryUseCase }