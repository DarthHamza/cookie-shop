import cookiesData from "../cookies";

const initialState = {
  cookies: cookiesData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_COOKIE":
    // Delete cookie

    default:
      return state;
  }
};
