const { GET_EVENTS } = require("../actions/actionTypes");

const eventReducer = (state = null, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

export default eventReducer;
