import { Request, Response } from "express"
import { GetTaskByIdService } from "../../service/Task/GetTaskByIdService"

export const getTaskById = async (req: Request, res: Response) => {

  const getTaskByIdService = new GetTaskByIdService()
  const task = await getTaskByIdService.execute(req)

  if(!task) {
    res.status(200).json({message: `Task Id ${req.params.id} not found!`})
    return
  }
  
  res.status(200).json({message: task})
}