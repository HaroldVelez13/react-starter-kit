import { useEffect } from "react";

import { getUsers, getUser } from "../../redux/actions/userActios";
import { useDispatch, useSelector } from "react-redux";

function useUsers() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const user = useSelector((state) => state.userReducer.user);
  const last = useSelector((state) => state.userReducer.lastRequest);

  const setUser = (id)=>{
    dispatch(getUser(id));
  }

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return { users, user, last, setUser };
}

export default useUsers;
