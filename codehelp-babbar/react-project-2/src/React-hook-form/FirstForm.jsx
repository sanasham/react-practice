import React from "react";
import { useForm } from "react-hook-form";

function FirstForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const cutomSubmit = (data) => {
    console.log("submitting the form", data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(cutomSubmit)}>
        <div>
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            {...register("firstName", {
              required: true,
              minLength: 3,
              maxLength: 20,
            })}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Middle Name:</label>
          <input type="text" {...register("middleName")} />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name:</label>
          <input type="text" {...register("lastName")} />
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default FirstForm;
