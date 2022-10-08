import CustomErrorHandler from "../services/customError";

const auth= (req, res, next) =>{
    let authHeader = req.headers.authorization;

    if(!authHeader){
        return next(CustomErrorHandler.unAuthorized())
    }

    const token = authHeader.split(' ')[1];
    console.log(token)
}

export default auth