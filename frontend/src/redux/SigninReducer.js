const initialState = {
    name: "",
    password: ""
  };
  
  export function signin(state = initialState, action) {
    switch (action.type) {
      case "SET_USER_DATA":
        return {
          ...state,
          name: action.payload.name,
          password: action.payload.password,
        };
      default:
        return {
          state
        };
    }
  }
  