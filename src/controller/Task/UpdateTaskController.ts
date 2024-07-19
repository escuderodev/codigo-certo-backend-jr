import { Request, Response } from "express"
import { UpdateTaskService } from "../../service/Task/UpdateTaskService"

export const updateTask = async (req: Request, res: Response) => {

    const updateTaskService = new UpdateTaskService()

    const result = await updateTaskService.execute(req)
    
    res.status(200).json({
        message: result,
    })

}