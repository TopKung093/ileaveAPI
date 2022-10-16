const jwt = require('jsonwebtoken');
const config = process.env;
const vertifyToken = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
        return res.status(403).send("A token is required for sign in!");
    }
    try{
        const decoded = jwt.verify(token,config.TOKEN_KEY);
        req.user = decoded;
    }catch{
        return res.status(401).send("Inalid Token");
    }
    return next();
}
module.exports = vertifyToken;