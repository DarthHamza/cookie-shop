const DELETE_COOKIE = "DELETE_COOKIE";
const CREATE_COOKIE = "CREATE_COOKIE";

export const deleteCookie = (cookieId) => {
  return {
    type: DELETE_COOKIE,
    payload: { cookieId },
  };
};

export const createCookie = (newCookie) => {
  return {
    type: CREATE_COOKIE,
    payload: { newCookie },
  };
};
