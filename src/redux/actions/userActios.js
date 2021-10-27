import {
  GET_USERS,
  SUCCESS_GET_USERS,
  GET_USER,
  SUCCESS_GET_USER,
} from "../actionsType/userActionsType";

export const getUsers = (payload) => ({
  type: GET_USERS,
  ...payload,
});

export const successGetUsers = (payload) => ({
  type: SUCCESS_GET_USERS,
  ...payload,
});

export const getUser = (id) => ({
  type: GET_USER,
  payload:id,
});

export const successGetUser = (payload) => ({
  type: SUCCESS_GET_USER,
  ...payload,
});
