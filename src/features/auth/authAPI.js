import axios from "axios";

const API_URL = "http://localhost:5000";
export const sign_in = async (email, password) => {
  let url = `${API_URL}/auth/login`;
  let data = {
    email,
    password,
  };

  return await axios.post(url, data);
};

export const sign_out = async () => {
  let url = `${API_URL}/auth/logout`;
  return await axios.post(url);
};

export const sign_up = async (
  UserName,
  UserEmail,
  UserFirstname,
  UserLastname,
  UserLogo,
  UserType,
  Address,
  ContactNo,
  FounderName,
  Password
) => {
  let url = `${API_URL}/auth/logout`;
  let data = {
    UserName,
    UserEmail,
    UserFirstname,
    UserLastname,
    UserLogo,
    UserType,
    Address,
    ContactNo,
    FounderName,
    Password,
  };

  return await axios.post(url, data);
};
