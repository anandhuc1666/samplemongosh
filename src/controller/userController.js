import User from "../model/userSchema.js"

export const register = async(req,res)=>{
    const {name,email,password,number}= req.body;
    try {
        if(!name||!email||!password||!number){
            return res.status(400).json({message:"please fill the form"})
        }
        const user = await User.findOne({email})
        if(user){
            return res.status(404).json({message:"user already exsisited"})
        }
    } catch (error) {
        console.log(error)
    }

}