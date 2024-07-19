import { Request, Response } from "express"
import { GetAllTasksService } from "../../service/Task/GetAllTasksService"

export const getAllTasks = async (req: Request, res: Response) => {

    const getAllTasksService = new GetAllTasksService()
    const taskList = await getAllTasksService.execute(req)
    res.status(200).json({taskList})
}