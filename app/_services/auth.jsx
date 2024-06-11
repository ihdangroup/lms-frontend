import axios from "axios";

const MASTER_URL = `http://127.0.0.1:8000/`;
export const LoginUser = async (dataUser) => {
  const { data } = await axios.post(MASTER_URL + "api/login", dataUser);
  return data;
};
export const RegisterUser = async (dataUser) => {
  const { data } = await axios.post(MASTER_URL + "api/register", dataUser);
  console.log(data);
  return data;
};
export const Verifikasi = async (id) => {
  const { data } = await axios.post(
    MASTER_URL + "api/users/" + id + "/verify-email"
  );
  console.log(data);
  return data;
};
