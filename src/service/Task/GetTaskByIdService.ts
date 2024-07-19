import { Request } from "express"
import { TaskRepository } from "../../repository/TaskRepository"

export class GetTaskByIdService  {

    async execute(req: Request) {
        const taskRespository = new TaskRepository()
        const id = req.params.id
        return await taskRespository.getById(id)
    }
}