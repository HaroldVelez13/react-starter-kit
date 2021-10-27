import React from "react";

const UserCard = ({ user, isSeleted=false, handleClick = null }) => {
  return (
    <div className="col" key={user.id}>
      <div
        className={"card" + (isSeleted ? " border-info" : "")}
        role="button"
        onClick={() => handleClick(user.id)}
      >
        <h5
          className={
            "card-header card-title text-truncate" +
            (isSeleted ? " text-info" : "")
          }
        >
          {user.username}
        </h5>
        <div className="card-body">
          <p className=" text-truncate">{user.name}</p>
          <h6 className="card-subtitle mb-2 text-muted text-truncate">
            {user.email}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
