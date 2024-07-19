import { Request, Response } from "express"
import { UserRepository } from "../../repository/UserRepository"
import bcrypt from "bcrypt"
import User from "../../model/User"

export class UpdateUserService  {

    async execute(req: Request, res: Response) {

        const userRepository = new UserRepository()
        const password = req.body.password
        const id = req.params.id

        const user = await User.findById({_id: id})

        if(!user) {
            return `User Id ${id} not found!`
        }

        // create password encoded
        const salt = await bcrypt.genSalt(12) //add dificult
        const passwordHash = await bcrypt.hash(password, salt) //create password encoded

        await userRepository.update(req, passwordHash)
        return `User update is success!`
    }
}