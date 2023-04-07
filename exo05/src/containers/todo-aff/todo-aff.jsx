import { useState } from "react";
import FormList from "../../components/form-list";
import ListeTodo from "../../components/listetodo";

const TodoAff = () => {
  const [tab, setTab] = useState([]);

  const newTache = ({nom,description, prio}) => {
        setTab([...tab,{
            id: tab.length + 1,
            isDone: false,
            nom,
            description,
            prio
          }]);
          console.log(tab);  
  };

  const onDelete = (id) => {
    let tabTemp = tab.filter(t => {

      return t.id !== id

    }
    )

    setTab(tabTemp)
  }

  const onChange = (id) => {
   let tabTemp = [...tab]
   tabTemp.forEach(tache => {
       if (tache.id === id) {
        return tache.isDone = !tache.isDone
       }
       setTab(tabTemp)
    })
    
  }


  return (
    <div>
      <h2>Todo List</h2>
      <FormList onValidation={newTache} />
      <ListeTodo onDelete={onDelete} onChange={onChange}  listTache={tab} />
      
    </div>
  );
};

export default TodoAff;
