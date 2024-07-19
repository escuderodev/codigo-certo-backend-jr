import { Request, Response } from "express"
import { DeleteTaskService } from "../../service/Task/DeleteTaskService"
import Task from "../../model/Task"

export const deleteTask = async (req: Request, res: Response) => {

    const deleteTaskService = new DeleteTaskService()
    const id = req.params.id

    const task = await Task.findById({_id: id})
    if(!task) {
      res.status(200).json({message: `Task Id ${req.params.id} not found!`})
      return
    }
    
    try {
        await deleteTaskService.execute(req)
        res.status(200).json({message: 'Task deleted!'})
    } catch (error) {
        res.status(500).json({erro: error})
    }
}