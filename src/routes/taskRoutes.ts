import { Router } from "express"
import { createTask } from "../controller/Task/CreateTaskController"
import { getAllTasks } from "../controller/Task/GetAllTasksController"
import { getTaskById } from "../controller/Task/GetTaskByIdController"
import { updateTask } from "../controller/Task/UpdateTaskController"
import { deleteTask } from "../controller/Task/DeleteTaskController"
import { LoginService } from "../service/User/LoginService"

const taskRouter = Router()

const loginService = new LoginService()

// criar task
taskRouter.post("/tasks", loginService.checkToken, createTask)

// // listar todos as tasks
taskRouter.get("/tasks", getAllTasks)

// // listar apenas uma task
taskRouter.get("/tasks/:id", getTaskById)

// // atualizar task
taskRouter.put("/tasks/:id", loginService.checkToken, updateTask)

// // deletar task
taskRouter.delete("/tasks/:id", loginService.checkToken, deleteTask)

export {taskRouter}