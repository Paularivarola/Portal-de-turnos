const usersReducer = (state={dataUser:{}, token: null}, action) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                dataUser: action.payload.newUser,
                token: action.payload.token
            }
            case "GET_ALL_DOCTORS":
                return {
                  ...state,
                  doctors: action.payload,
                }
            case "GET_ONE_DOCTOR":
                return{
                    ...state,
                    doctor:state.doctors.find(obj => obj._id === action.payload)
                }
            case "GET_ONE_DOCTOR_DB":
                return{
                    ...state,
                    doctor:action.payload
                }
        default:
            return state
    }
    
}
export default usersReducer
