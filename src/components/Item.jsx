import styles from "./Item.module.css"

export default function Item({ListItem , deleteItem}){

    const handleDelete=()=>{
        deleteItem( ListItem.name, ListItem.date );
    }

    return(
        <>
        <div>
            <div className={`${styles.all} ${styles.name}`}>{ListItem.name}</div>
            <div className={`${styles.all} ${styles.date}`}>{ListItem.date}</div>
            <button onClick={handleDelete} className={`${styles.all} ${styles.button}`}>Delete</button>
        </div>
        </>
    )
}
//{ListItemName , ListItemDate}