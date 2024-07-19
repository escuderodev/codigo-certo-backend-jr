import { Request } from "express"
import { UserRepository } from "../../repository/UserRepository"
import User from "../../model/User"

export class DeleteUserService  {

    async execute(req: Request) {
        const userRepository = new UserRepository()
        return userRepository.delete(req)
    }
}