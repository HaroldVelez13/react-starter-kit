import React from "react";

function InputError({ error, name }) {
  return (
    <div id={`${name}Help`} className="form-text text-danger ">
      <small>{error?.message ?? "Input no valid"}</small>
    </div>
  );
}

export default InputError;
