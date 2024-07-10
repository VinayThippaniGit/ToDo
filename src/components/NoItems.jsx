import styles from "./NoItems.module.css";

export default function NoItems(){
    return(
        <center>
        <h3 className={styles.noItems}>There are no tasks to do</h3>
        </center>
    )
}