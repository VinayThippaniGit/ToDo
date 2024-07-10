import Item from "./Item"
export default function Items({List , deleteItem}){

    return(
        <>
            {
                List.map(
                    (ListItem) => (
                        <Item key={[ListItem.name,ListItem.date]} ListItem={ListItem} deleteItem={deleteItem}/>
                    )
                )
            }
        </>
    )
}
//ListItemName={ListItem.name} ListItemDate={ListItem.date}