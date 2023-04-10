import { useState, useEffect } from "react";
import FormList from "../../components/form-list";
import ListeTodo from "../../components/listetodo";
import style from "./todoaff.module.css";
import ModalConfirm from "./modal-confirm";

const showPriority = ["All", "Urgent", "Normal", "Tranquille"];
const TodoAff = () => {
  const [originalTab, setOriginalTab] = useState([]);
  const [filter, setFilter] = useState("All");
  let tabFiltered = [];
  const [modal, setModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [id, setId] = useState();

  const newTache = ({ nom, description, prio }) => {
    setOriginalTab([
      ...originalTab,
      {
        id: originalTab.length + 1,
        isDone: false,
        nom,
        description,
        prio,
      },
    ]);
  };

  const unshowModal =  () => {
    setModal(false)
  }

  const catchId = (id) => {
    setModal(true);
    return setId(id);
  };
  const onDelete = () => {
    let tabTemp = originalTab.filter((t) => {
      return t.id !== id;
    });
    setModal(m => !m);
    setOriginalTab(tabTemp);
  };

  const onChange = (id) => {
    let tabTemp = [...originalTab];
    tabTemp.forEach((tache) => {
      if (tache.id === id) {
        return (tache.isDone = !tache.isDone);
      }
    });
    setOriginalTab(tabTemp);
  };

  tabFiltered = originalTab.filter((t) => {
    switch (filter) {
      case "Urgent":
        return t.prio === "urgent";

      case "Normal":
        return t.prio === "normal";
      case "Tranquille":
        return t.prio === "tranquille";

      default:
        return true;
    }
  });

  return (
    <div className={style['total']}>
       <ModalConfirm sendDelete={onDelete} sendNoDelete={unshowModal} modalOn={modal}/>
      <h2>Todo List</h2>
      <div className={style['filter']}>
      {showPriority.map((p) => {
        return (
          <button className="btn btn-primary btn-sm" key={p} value={p} onClick={() => setFilter(p)}>
            {p}
          </button>
        );
      })}


      </div>
      <FormList onValidation={newTache} />
      <ListeTodo
        onDelete={onDelete}
        onChange={onChange}
        listTache={tabFiltered}
        onCatch={catchId}
      />
    </div>
  );
};

export default TodoAff;
