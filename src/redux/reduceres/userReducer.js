import { SUCCESS_GET_USERS,SUCCESS_GET_USER, LAST_REQUEST_SUCCESS} from "../actionsType/userActionsType";

const initialState = {
  users: [],
  user: {},
  lastRequest: "",
};

export default function userReducer(state = initialState, event) {
  switch (event.type) {
    case SUCCESS_GET_USERS:
      return {
        ...state,
        users: event.payload,
      };
      case SUCCESS_GET_USER:
        return {
          ...state,
          user: event.payload,
        };
    case LAST_REQUEST_SUCCESS:
      return {
        ...state,
        lastRequest: event.payload,
      };
    default:
      return state;
  }
}
