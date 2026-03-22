import bcrypt from 'bcrypt';

export const hashedPassword = async(password:string) => { 
return await bcrypt.hash(password , 10);
};

export const comparePassword = async(userPasswd:string , dbPasswd:string) => { 
return await bcrypt.compare(userPasswd , dbPasswd);
};
