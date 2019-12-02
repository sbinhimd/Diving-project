import axios  from "axios"
import Swal from 'sweetalert2'

// register
export const register = (newuser)=>{
    return axios.post('/user/register' ,newuser )
    .then(res => console.log("registerd ! "))
    .catch(err => console.log(err))
}
// login 
export const login = (user)=>{
//user = email password


    return axios.post('/user/login' , user)
    .then(token =>{
            //console.log(token.data)
            if(token.data.token !== undefined){
localStorage.setItem('usertoken' , token.data.token)
         console.log("after set token to storage");
            }else{
                Swal.fire({
                    position: 'top-mid',
                    icon: 'error',
                    title: 'Your email or password is wrong',
                    showConfirmButton: false,
                    timer: 1500
                  }) 
            }
         
         
         return true
    })
    .catch(err=>console.log(err))
}


