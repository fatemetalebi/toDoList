import React from "react";
import { ToDoInfo } from "./ToDoInfo";
import { ToDoInfoEdit } from "./ToDoInfoEdit";
let intialdolist = [
  { id: 1, title: "Create theme", status: false, editmode: false },
  {
    id: 2,
    title: " Error solve in HTML template",
    status: true,
    editmode: true,
  },
];

export const ToDoList = () => {
  let [dolist, setDoList] = React.useState(intialdolist);
  let [item, setItem] = React.useState("");

  const addTask = (event) => {
    if (event.key === "Enter") {
      console.log(item);
      let tmp = { id: 200, title: item, status: false };
      setDoList([...dolist, tmp]);
    }

    // let temp = [...dolist];
    // let newtask = [temp, [{ id: 300, title: item, status: false }]];
    // setDoList(newtask);
  };
  const removeItem = (id) => {
    console.log(id);
    let tmp = [...dolist];
    tmp = tmp.filter((q) => q.id != id);
    setDoList(tmp);
  };

  const ediItem = (id, mode = true) => {
    console.log("tasid", id);
    let edititem = [...dolist];
    const index = edititem.findIndex((q) => q.id === id);
    edititem[index].editmode = mode;
    setDoList([...edititem]);
  };

  const saveTask = (id, tasknew, mode = false) => {
    let saveitem = [...dolist];
    const index = saveitem.findIndex((q) => q.id === id);
    saveitem[index].editmode = mode;
    saveitem[index].title = tasknew;
    console.log(saveitem);
    setDoList([...saveitem]);
  };
  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white ">
            <div className="card-body">
              <input
                type="text"
                placeholder="New Task..."
                className="form-control add-task"
                onChange={(event) => setItem(event.target.value)}
                onKeyPress={(event) => addTask(event)}
              />
              {dolist.map((task, index) =>
                task.editmode ? (
                  <ToDoInfoEdit taskitems={task} save={saveTask}></ToDoInfoEdit>
                ) : (
                  <ToDoInfo
                    taskitems={task}
                    remove={removeItem}
                    edit={ediItem}
                  ></ToDoInfo>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
