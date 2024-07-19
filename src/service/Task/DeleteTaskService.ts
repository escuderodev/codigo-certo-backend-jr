import { Request } from "express"
import { TaskRepository } from "../../repository/TaskRepository"

export class DeleteTaskService  {

    async execute(req: Request) {
        const taskRepository = new TaskRepository()
        return taskRepository.delete(req)
    }
}