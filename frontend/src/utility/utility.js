export const getAccessTokenFromLocalStorage = () =>
  localStorage.getItem("accessToken");

export const setAccesTokenStorage = (succes) => {
  console.log("token", succes);
  const { token, login } = succes;
  const accessToken = { login, token: token };
  console.log("accès token", accessToken);
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
};
