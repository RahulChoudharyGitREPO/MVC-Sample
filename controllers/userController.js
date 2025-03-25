import { User } from '../models/User.js'


export const userRegister = async (req, res) => {
    console.log(req.body)
    try {
        let user = await User.create(req.body);
        res.json({ message: "User created", NewUser: user, success: true })



    } catch (error) {
        res.json({ message: "User Not Created", success: false, error: error.message })
    }

}