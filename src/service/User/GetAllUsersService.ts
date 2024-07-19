import { Request } from "express"
import { UserRepository } from "../../repository/UserRepository"

export class GetAllUsersService  {

    async execute(req: Request) {

        const userRepository = new UserRepository()
        return await userRepository.getAll()
    }
}