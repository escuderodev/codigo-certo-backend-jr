import { Request } from "express"
import { TaskRepository } from "../../repository/TaskRepository"

export class GetAllTasksService  {

    async execute(req: Request) {

        const taskRepository = new TaskRepository()
        return await taskRepository.getAll()
    }
}