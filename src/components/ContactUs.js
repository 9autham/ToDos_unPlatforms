import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MBDFooter from "../components/Football";
function Contactus() {
  let [usersList, setUsersList] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onFormSubmission = (userObj) => {
    setUsersList([...usersList, userObj]);
  };
  return (
    <div>
      <h1 className="display-2 text-center text-info">Contact Form</h1>
      <form className="w-50 mx-auto" onSubmit={handleSubmit(onFormSubmission)}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name=""
            id="username"
            className="form-control"
            {...register("username", { required: true, minLength: 4 })}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-danger">
              *Username should contain atleast 4 characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="username"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">*Email is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dob">Date Of Birth</label>
          <input
            type="date"
            name=""
            id="dob"
            className="form-control"
            {...register("dob", { required: true })}
          />
          {errors.dob?.type === "required" && (
            <p className="text-danger">*DOB is required</p>
          )}
        </div>
        {/* Check Box */}
        <div className="mb-3">
          <label>Select Skill</label>
          <div>
            <input
              type="checkbox"
              id="js"
              className="form-check-input"
              {...register("skills")}
              value="javascript"
            />
            <label htmlFor="js" className="form-check-label">
              Javascript
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="react"
              className="form-check-input"
              {...register("skills")}
              value="react"
            />
            <label htmlFor="react" className="form-check-label">
              ReactJs
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="angular"
              className="form-check-input"
              {...register("skills", { required: true })}
              valur="angular"
            />
            <label htmlFor="angular" className="form-check-label">
              AngularJs
            </label>
            {errors.skills?.type === "required" && (
              <p className="text-danger">*Atleast one skill is required</p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="feedback">FeedBack</label>
          <textarea
            name=" id="
            rows="5"
            className="form-control"
            {...register("feedback", { required: true })}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success d-block mx-auto">
          Send
        </button>
      </form>
      <hr />
      {/* tablular View */}
      <p className="display-2 text-center text-danger">Submissions</p>
      <div className="container">
        {/* If Table is Empty */}
        {usersList.length === 0 && (
          <h1 className="text-warning text-center">Submission List is empty</h1>
        )}
        {/* If table is not Empty */}
        {usersList.length !== 0 && (
          <table className="table text-center">
            <thead>
              <tr>
                <td>UserName</td>
                <td>Email</td>
                <td>Date Of Birth</td>
              </tr>
            </thead>
            <tbody>
              {usersList.map((userObj) => (
                <tr>
                  <td>{userObj.username}</td>
                  <td>{userObj.email}</td>
                  <td>{userObj.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <MBDFooter />
    </div>
  );
}

export default Contactus;
