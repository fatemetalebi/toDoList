import { faEdit } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const ToDoInfo = ({ taskitems, remove, edit }) => {
  let [checkstate, setCheckState] = React.useState(taskitems.status);
  React.useEffect(() => {
    {
      taskitems.status === true ? setCheckState(true) : setCheckState(false);
    }
  }, [taskitems.status]);

  return (
    <div className="todo-list  ">
      <div className="todo-item">
        <div className="checker mr-2">
          <span className="">
            <input
              type="checkbox"
              checked={checkstate}
              onChange={(event) => setCheckState(event.target.value)}
            />
          </span>
        </div>
        <span className="ml-2 ">{taskitems.title}</span>{" "}
        <button
          className="btn btn-primary btn-sm mr-4 "
          style={{ float: "right" }}
          onClick={() => edit(taskitems.id, true)}
        >
          edit
        </button>
        <button
          className="btn btn-danger btn-sm  "
          style={{ float: "right" }}
          onClick={() => remove(taskitems.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
};
