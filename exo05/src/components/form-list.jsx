import { useId, useState } from "react";
import style from './formlist.module.css'

const FormList = ({ onValidation }) => {
  const id = useId();
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prio, setPrio] = useState("tranquille");
  const handleSubmit = (e) => {
    e.preventDefault();
    onValidation({ nom, description, prio });
  };

  return (
    <div className={style['main']}>


    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-1">
        <label  className={style['label']}  htmlFor={id + "nom"}>Tâche : </label>
        <input className={"form-control" + " " + style['form-control']} 
          type="text"
          id={id + "nom"}
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="form-floating mb-3"> 
        <label className={style['label']} htmlFor={id + "desc"}>Description : </label>
        <input className={"form-control" + " " + style['form-control']} 
          type="text"
          id={id + "desc"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label style={{"color": "white"}}>Priority</label>
        <select className={"form-select" + " " + style['form-control']} 
          value={prio}
          onChange={(e) => setPrio(e.target.value)}
          id={id + "prio"}
        >
          <option value="tranquille">Tranquille</option>
          <option value="normal">Normal</option>
          <option value="urgent">Urgent</option>
        </select>
        <button className="btn btn-primary btn-md" style={{"margin-top": "5px"}} type="submit">Ajouter la tâche</button>
      </div>
    </form>
    </div>
  );
};

export default FormList;
