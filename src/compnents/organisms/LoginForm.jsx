import React from "react";
import { useForm } from "react-hook-form";
import InputError from "../atoms/InputError";

const Genders = ["Male", "Female", "Other"];

function LoginForm({ auth }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={"form-control" + (errors.email ? " is-invalid" : "")}
          id="loginEmail"
          {...register("email", {
            required: "The Email is  required",
            maxLength: { value: 30, message: "The Max Length for email is 30" },
          })}
          defaultValue={auth?.email || ""}
        />
        {errors.email && <InputError error={errors.email} name="email" />}
      </div>
      <div className="mb-3">
        <label htmlFor="loginPass" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={"form-control" + (errors.password ? " is-invalid" : "")}
          id="loginPass"
          {...register("password", {
            required: "The Password is  required",
            minLength: {
              value: 8,
              message: "The Min Length for password is 8",
            },
          })}
          defaultValue={auth?.password || ""}
        />
        {errors.password && (
          <InputError error={errors.password} name="password" />
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="loginGender" className="form-label">
          Gender
        </label>
        <select
          {...register("gender")}
          className="form-select"
          id="loginGender"
          defaultValue={auth?.gender || ""}
        >
          {Genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>
      <div className="d-flex flex-row-reverse">
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="loginRemember"
            {...register("remember")}
            defaultChecked={auth?.remember || false}
          />
          <label className="form-check-label" htmlFor="loginRemember">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-outline-info">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
