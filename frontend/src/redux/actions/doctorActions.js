import axios from "axios";

const doctorActions = {
  editProfileDoctor: (idDoctor, profileEdited) => {
    return async () => {
      try {
        let res = await axios.put(
          `http://localhost:4000/api/doctor/perfil/${idDoctor}`,
          { profileEdited }
        );
        if (res.data.success) {
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
        return { success: true };
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
          return { success: true };
        }
      } catch (err) {
        return { success: false, res: err };
      }
    };
  },
  addReview: (user, id, text) => {
    return async (dispatch, getState) => {
      try {
        let res = await axios.put(
          `http://localhost:4000/api/doctor/${id}`,
          { text, action: "addReview" },
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
};

export default doctorActions;
