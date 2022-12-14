import React, { useState } from "react";
import EditTask from "../models/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC"
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1"
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1"
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1"
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD"
    }
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };
  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>

      <div class="task-holder ">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "10px",
            color: "#100c24"
          }}
        >
          <b>{taskObj.Name}</b>
        </span>
        <i className="mt-3 fonty">
          <i class="fab fa-sketch "></i>
          {taskObj.Description}
        </i>
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit mr-3"
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
              padding: "5px"
            }}
            onClick={() => setModal(true)}
          ></i>
          <i
            class="fas fa-trash-alt"
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
              padding: "5px"
            }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />

      <div className="youtube">
        <i class="fas fa-angle-double-right"></i>
        <i>DeadLine</i>
        {/* <i class="fas fa-angle-double-left"></i> */}
        <br />
        <i class="fas fa-calendar" style={{ padding: "5px" }}></i>
        <i>{taskObj.Time}</i>
        <i class="far fa-clock" style={{ padding: "5px" }}></i>
      </div>
    </div>
  );
};

export default Card;
