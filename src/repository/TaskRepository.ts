import { Request } from "express"
import Task from "../model/Task"

export class TaskRepository {
    async save(req: Request) {
        const { title, description } = req.body
        const task = {
            title: title,
            description: description
        }
        const newTask = await Task.create(task)
        return newTask
    }

    async getAll() {
        return await Task.find()
    }

    async getById(id: string) {
        return await Task.findById(id)
    }

    async update(req: Request) {

        const id = req.params.id
        const { title, description } = req.body

        const task = {
            id: id,
            title: title,
            description: description,
            updatedAt: Date.now()
        }
        return await Task.updateOne({_id: id}, task)
    }

    async delete(req: Request) {
        const id = req.params.id
        return await Task.deleteOne({_id: id})
    }
}