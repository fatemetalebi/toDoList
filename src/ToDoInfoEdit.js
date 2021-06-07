import React from "react";

export const ToDoInfoEdit = ({ taskitems, save }) => {
  let [checkstate, setCheckState] = React.useState(taskitems.status);
  let [task, setTask] = React.useState(taskitems.title);
  React.useEffect(() => {
    {
      taskitems.status === true ? setCheckState(true) : setCheckState(false);
    }
  }, [taskitems.status]);
  return (
    <div className="todo-list  ">
      <div className="todo-item">
        <div className="checker mr-2"></div>
        <div className="form-group">
          <input
            type="text"
            className="ml-2 form-control "
            value={task}
            onChange={(event) => setTask(event.target.value)}
          ></input>
          <button
            className="btn btn-success btn-sm mr-4 "
            style={{ float: "right" }}
            onClick={() => save(taskitems.id, task)}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
};
