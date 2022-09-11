import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import LocalizationProvider from "../models/DateTime.js";
// import { DateRangePicker } from "rsuite";
// import * as ReactDOM from "react-dom";
const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };
  const [userInfo, updateUserInfo] = useState("");
  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["Time"] = userInfo;
    if (!(taskName.length >= 4 || taskName.length <= 20))
      alert("TaskName should be atleast 4 and atmost 20 characters!!");
    else if (description.length > 100 || description.length < 20)
      alert("Description should be in the range of 20-100 characters");
    else save(taskObj);
  };
  // console.log("Keerthana",userInfo);
  return (
    // const {name} = this.state;
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
            required
          />
          <p className="text-danger">
            *TaskName should contain atleast 4 and atmost 20 characters
          </p>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
            required
          ></textarea>
          <p className="text-danger">
            *Description should not exceed 100 characters
          </p>
        </div>
        <div className="form-group">
          <br />
          <LocalizationProvider updateUserInfo={updateUserInfo} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskPopup;
