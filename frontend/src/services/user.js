import axios from "axios";

export const login = async (user) => {
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
    ...user,
  });
  return response;
};

export const register = async (user) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...user }),
  });
  return response;
};

export const getAlllUsers = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/all`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  console.log("resp me", response);
  return response;
};
