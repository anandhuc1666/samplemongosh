import jwt, { decode } from "jsonwebtoken"

const verifyuser = (req,res,next)=>{
   const token = req.cookies?.userToken;
   if(!token){
    return res.status(404).json({message:"token not found"})
   }
   try {
jwt.verify(token, process.env.Access_Key, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    req.user = decoded;
    next();
  });
   } catch (error) {
    console.log(error)
   }
}
export default verifyuser