import { Request, Response } from "express"
import { TaskRepository } from "../../repository/TaskRepository"

export class CreateTaskService {

    async execute(req: Request, res: Response) {

        const taskRepository = new TaskRepository()

        const { title, description} = req.body

        // validations
    
        // check requireds fields
        if(!title) {
            return res.status(422).json({message: 'title field is required!'})
        }
        if(!description) {
            return res.status(422).json({message: 'description field is required!'})
        }
    
        // create task
        return taskRepository.save(req)

    }
}