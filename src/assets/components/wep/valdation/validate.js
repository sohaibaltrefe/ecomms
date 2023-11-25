import *as yup from 'yup';

 
 export const registerSchema=yup.object({
    userName:yup.string().required("username is rquired").min(3,"must be at least 3 char").max(30,"max is  30 char"),
    email:yup.string().required("email is rquired").email(),
    password:yup.string().required("password is rquired").min(3,"must be at least 3 char").max(30,"max is  30 char"),

})