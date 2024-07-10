import styles from "./AddToDo.module.css"
import { useState } from "react";

export default function AddToDo({ Add }) {

    const [newName, setName] = useState("");
    const [newDate, setDate] = useState("");

    const handleChangingName = (event) => {
        setName(event.target.value);
    }
    const handleChangingDate = (event) => {
        setDate(event.target.value);
    }

    const addingTheItem = () => {
        if(newName === "" && newDate === ""){
            alert("Enter all the asked details (NAME , DATE)");
           
        }else if (newDate === "" ){
            alert("Date cannot be empty");
        }else if(newName === "") {
            alert("Task cannot be empty");
        }
         else {
            { Add(newName, newDate) };
            setName("");
            setDate("");
        }
    }

    return (
        <>
            <input type="text" onChange={handleChangingName} value={newName} className={`${styles.all} ${styles.name}`} placeholder="Enter the task to do" />
            <input type="Date" onChange={handleChangingDate} value={newDate} className={`${styles.all} ${styles.date}`} />
            <button onClick={addingTheItem} className={`${styles.all} ${styles.button}`}>Add</button>
        </>
    );
}