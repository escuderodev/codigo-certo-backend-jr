import { Request, Response } from "express"
import { CreateTaskService } from "../../service/Task/CreateTaskService"

export const createTask = async (req: Request, res: Response) => {

    const createTaskService = new CreateTaskService()
    await createTaskService.execute(req, res)
    
    res.status(201).json({
        message: "create task is success!"
    })
}