export interface User{
    user: any;
    designation: string;
    accessToken: string;
    _id:string;
    name:string;
    email:string
}


export interface LoginPayload {
    email?:string,
    password:string,
    phone?:string,
}

export interface RegisterPayload {
    fullName:string,
    email:string,
    password:string,
    phone:string,
}

export interface ApiResponse<T>{
    statusCode?:boolean;
    message?:string;
    error?:string;
    accessToken?:string
    data:T;
}

