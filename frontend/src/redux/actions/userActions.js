import axios from "axios"

const userActions = {
   signUpUser: (user) => {
      return async (dispatch) => {
         try {
            let res = await axios.post("http://localhost:4000/api/user", user)
            if (res.data.success) {
               dispatch({
                  type: "SIGN_UP",
                  payload: {
                     userExist: res.data.res,
                     token: res.data.res.token,
                  },
               })
               return { success: true, res: res }
            }else {
               return res
            }
         } catch (err) {
            return { success: false, res: err.message }
         }
      }
   },

   logUserWithLs: (token) => {
      return async (dispatch) => {
         try {
            let res = await axios.get("http://localhost:4000/api/verifyToken", {
               headers: {
                  Authorization: "Bearer " + token,
               },
            })
            dispatch({
               type: "SIGN_UP",
               payload: { userExist: res.data, token },
            })
         } catch (err) {
            return dispatch({ type: "LOG_OUT" })
         }
      }
   },

   logIn: (user, validUser) => {
      let typeUser = null
      if (validUser === "comun") {
         typeUser = "patient"
      } else {
         typeUser = "doctor"
      }
      return async (dispatch) => {
         try {
            let res = await axios.post(
               `http://localhost:4000/api/${typeUser}`,
               user
            )
            if (res.data.success) {
               dispatch({
                  type: "SIGN_UP",
                  payload: {
                     userExist: res.data.res,
                     token: res.data.res.token,
                  },
               })
            } else {
               throw new Error()
            }
         } catch (err) {
            return { success: false, res: err.message }
         }
      }
   },

   logOut: () => {
      return (dispatch) => {
         dispatch({ type: "LOG_OUT" })
      }
   },
}

export default userActions
