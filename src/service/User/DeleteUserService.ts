import { Request } from "express"
import { UserRepository } from "../../repository/UserRepository"

export class DeleteUserService  {

    async execute(req: Request) {
        const userRepository = new UserRepository()
        return userRepository.delete(req)
    }
}