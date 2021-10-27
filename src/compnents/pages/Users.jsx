import React from "react";
import WrapperApp from "../atoms/WrapperApp";
import useUsers from "../../hooks/users/useUsers";
import UserCard from "../molecules/users/UserCard";

function Users() {
  const { users, user, last, setUser } = useUsers();

  return (
    <WrapperApp>
      <div className="px-5">
        <h1 className="text-center my-3">Users List</h1>
        <p className="text-center my-3">Users last request {last}</p>
        <p className="text-center my-3">
          {user.id ? `User selected ${user.name}` : "Not Selected"}
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3">
          {users.length > 0 &&
            users.map((u) => (
              <UserCard
                key={u.id}
                user={u}
                isSeleted={u?.id === user?.id}
                handleClick={setUser}
              />
            ))}
            
        </div>
      </div>
    </WrapperApp>
  );
}

export default Users;
