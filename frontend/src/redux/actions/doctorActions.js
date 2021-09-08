import axios from "axios";

const doctorActions = {
  editProfile: (typeUser, profileEdited, token) => {
    let type = "";
    if (typeUser) type = "doctor";
    else type = "patient";
    return async () => {
      try {
        let response = await axios.put(
          `http://localhost:4000/api/${type}`,
          { ...profileEdited },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (response.data.success) {
          return { success: true };
        }
      } catch (err) {
        return { success: false, res: err };
      }
    };
  },
  getDoctors: () => {
    return async (dispatch, getState) => {
      try {
        let res = await axios.get("http://localhost:4000/api/doctors");
        dispatch({ type: "GET_ALL_DOCTORS", payload: res.data.res });
        return { success: true, res: res.data.res };
      } catch (err) {
        return { success: false, res: err };
      }
    };
  },
  getOneDoctor: (id) => {
    return (dispatch, getState) => {
      dispatch({ type: "GET_ONE_DOCTOR", payload: id });
    };
  },
  getOneDoctorDB: (id) => {
    return async (dispatch, getState) => {
      try {
        let res = await axios.get(`http://localhost:4000/api/doctor/${id}`);
        if (res.data.success) {
          dispatch({ type: "GET_ONE_DOCTOR_DB", payload: res.data.res });
          return { success: true, res: res.data.res.review };
        }
      } catch (err) {
        return { success: false, res: err };
      }
    };
  },
  actionReview: (user, id, text, action, reviewId) => {
    return async () => {
      try {
        let res = await axios.put(
          `http://localhost:4000/api/doctor/${id}`,
          { text, action: action, reviewId: reviewId },
          {
            headers: {
              Authorization: "Bearer " + user,
            },
          }
        );

        return { success: true, res: res.data.res };
      } catch (err) {
        return { success: false, res: err };
      }
    };
  },

<<<<<<< HEAD
  getAppointments: (token) => {
    return async () => {
      try {
        let res = await axios.get(
          "http://localhost:4000/api/appointments/",
          {},
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        if (res.data.success) {
          return { success: true, res: res.data.res };
        }
      } catch (err) {
        return { success: false, res: err };
      }
    };
  },
  getAppointementByDoctor: (dorctorid) => {
    return async () => {
      try {
        let res = await axios.get(
          `http://localhost:4000/api/appointment/${dorctorid}`
        );
        return { success: true, res: res.data.res };
      } catch (err) {
        return { success: false };
      }
    };
  },
};
=======
   getAppointments: (token) => {
      return async () => {
         try {
            let res = await axios.get(
               "http://localhost:4000/api/appointments/",
               {
                  headers: {
                     Authorization: "Bearer " + token,
                  },
               }
            )

            if (res.data.success) {
               console.log("TENGO RES")
               return { success: true, res: res.data.res }
            }
         } catch (err) {
            return { success: false, res: err }
         }
      }
   },
   getAppointementByDoctor: (doctorId) => {
      return async () => {
         try {
            let res = await axios.get(
               `http://localhost:4000/api/appointment/${doctorId}`
            )
            return { success: true, res: res }
         } catch (err) {
            return { success: false }
         }
      }
   },
}
>>>>>>> origin/franco

export default doctorActions;
