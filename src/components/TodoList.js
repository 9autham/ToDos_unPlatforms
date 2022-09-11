import React, { useEffect, useState } from "react";
import CreateTaskPopup from "../models/CreateTask";
import Card from "./Card";
import { MDBIcon } from "mdb-react-ui-kit";
import MBDFooter from "../components/Football";
import CountUp from "react-countup";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <div
        className="header text-center"
        style={{ "background-color": "#100c24" }}
      >
        <h3 style={{ color: "#61dafb" }}>
          Todo List {<MDBIcon fab icon="react" style={{ color: "#61dafb" }} />}
        </h3>

        <button className="btn btn-light mt-2" onClick={() => setModal(true)}>
          <b>Create Task</b>
        </button>
        <br />
        <a
          href="https://github.com/9autham"
          target="_blank"
          rel="nooopener noreferrer"
        >
          <MDBIcon
            fab
            icon="github"
            style={{ color: "#61dafb", padding: "1px" }}
          />
        </a>
        <br />
        <span className="spanning" style={{ color: "#61dafb" }}>
          A customizable to-do-list, time &amp; date picker for React Native.
        </span>
      </div>
      <div className="container" style={{ padding: "50px" }}>
        {taskList.length === 0 && (
          <div>
            <div class="alert alert-success" role="alert">
              <h4 class="alert-heading">Well done!!</h4>
              <p>
                Aww yeah, you successfully read this important alert message.
                You have successfully completed your taskList.
              </p>
              <hr />
              <p class="mb-0">
                "A good plan implemented today is better than a perfect plan
                implemented tomorrow"
              </p>
            </div>
            <div class="alert alert-danger" role="alert">
              <h4 class="alert-heading">Welcome New Users!!</h4>
              <p>
                You have visted a right platform, in which you can plan your in
                a systematic order and execute it. Click CreateTask option above
                and get started with daily tasks and Hope you will see the Well
                done!! message everyday.
              </p>
              <hr />
              <p class="mb-0">
                "A good plan implemented today is better than a perfect plan
                implemented tomorrow"
              </p>
            </div>
            <div class="alert alert-info" role="alert">
              <h4 class="alert-heading">Statistics</h4>
              <h1 style={{ fontSize: "50px" }}>
                <CountUp
                  start={100}
                  end={75000}
                  suffix="+ Hours"
                  duration={5}
                />
              </h1>
              <h1 style={{ fontSize: "50px" }}>
                <CountUp
                  start={100}
                  end={8000}
                  suffix="+  Students"
                  duration={5}
                />
              </h1>
              <h1 style={{ fontSize: "50px" }}>
                <CountUp
                  start={100}
                  end={20000}
                  suffix="+  ToDo's"
                  duration={5}
                />
              </h1>
              <hr />
              <p class="mb-0">
                Whenever you need to, be sure to use utilities to keep things
                nice and tidy.
              </p>
            </div>
          </div>
        )}
        {taskList.length !== 0 && (
          <div className="task-container">
            {taskList &&
              taskList.map((obj, index) => (
                <Card
                  taskObj={obj}
                  index={index}
                  deleteTask={deleteTask}
                  updateListArray={updateListArray}
                />
              ))}
          </div>
        )}
      </div>
      <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} />
      {/* <div className="footer">
        </div> */}
      <MBDFooter />
    </>
  );
};

export default TodoList;
