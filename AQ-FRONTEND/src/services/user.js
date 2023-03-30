import Axios from "axios";
import ReturnApiUrls from ".";

const { URL } = ReturnApiUrls();

const userSignup = (data) => Axios.post(`${URL}/signup`, data);
const userLogin = (data)=>Axios.post(`${URL}/login` , data)

const userServiceOperations = () => {
  return {
    userSignup,
    userLogin
  };
};
export default userServiceOperations;
