import jwt from "jsonwebtoken";

export const verifyoken = async ( req,res next ) => {

    try {
        let token = req.header("Authorization")
        if(!token) {
            return res.status(403).send("Access Denied")
        }
        
    } catch (err) {
        res.status(500).json({error:err.message});
        
    }
}
