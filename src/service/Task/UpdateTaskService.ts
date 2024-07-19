import { Request } from "express"
import { TaskRepository } from "../../repository/TaskRepository"
import Task from "../../model/Task"

export class UpdateTaskService  {

    async execute(req: Request) {

        const taskRepository = new TaskRepository()
        const { title, description } = req.body
        const id = req.params.id

        const task = await Task.findById({_id: id})

        if(!task) {
            return `Task Id ${id} not found!`
        }

        await taskRepository.update(req)
        return `Task update is success!`
    }
}