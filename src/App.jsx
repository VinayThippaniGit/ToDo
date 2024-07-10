import styles from "./App.module.css"
import AddToDo from "./components/AddToDo";
import Items from "./components/Items";
import { useState } from "react";
import NoItems from "./components/NoItems";

export default function App(){

    const initialData=[
        {name:"Develop Calculator using react",date:"10/07/2024"},
        {name:"Practice React",date:"12/07/2024"},
    ];

    const [toDoItems , setToDoItems]=useState(initialData);

    const Add = (name , date) =>{
        const newItems = [...toDoItems , {name:name , date:date}]
        setToDoItems(newItems);
    }

    const deleteItem = (dName , dDate) =>{
        const newToDoItems = toDoItems.filter((item) => item.name != dName);
        setToDoItems(newToDoItems);
    }

    return(
        <>
        <div className={styles.total}>
            
            <h1 className={styles.heading}>ToDo App</h1>
            <AddToDo Add={Add}/>
            <Items List={toDoItems} deleteItem={deleteItem}/>
            {toDoItems.length === 0 && <NoItems/> }
        </div>
        </>
    );
}