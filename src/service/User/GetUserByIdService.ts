import { Request } from "express"
import { UserRepository } from "../../repository/UserRepository"

export class GetUserByIdService  {

    async execute(req: Request) {
        const userRepository = new UserRepository()
        const id = req.params.id
        return await userRepository.getById(id)
    }
}