const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        console.log("reached reducer")
        return {
          currentUser: action.payload,
        };
      }
      case "LOGOUT": {
        return {
          currentUser: null,
        };
      }
      case "UPDATE_USER":
        return {...state,
        currentUser:{...state.currentUser,...action.payload}}
      default:
        return state;
    }
  };
  
  export default AuthReducer;