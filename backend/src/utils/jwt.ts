import jwt , {JwtPayload} from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET;
if(!JWT_SECRET){ 
throw new Error("jwt key not found");
}

export interface AuthPayload extends JwtPayload { 
userId:string;
email:string;
};
export const createToken = (userId:string , email:string) => { 
return jwt.sign({userId:userId , email:email}, JWT_SECRET, {expiresIn:'7d'});
};

export const verifyToken = (token:string) => { 
return jwt.verify(token, JWT_SECRET);
};
