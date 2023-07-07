import axios from "./api"

const AuthService = {
    // register
     async UserRegister(user) {
        const response = await axios.post("/users", {user})
        return response.data
     } ,
    //  Login
     async userLogin (user) {
        const response = await axios.post("/users/login",{user})
        return response.data
     },
    //  get user
      async getUser () {
        const response = await axios.get("/user")
        return response.data
     }
}

export default AuthService