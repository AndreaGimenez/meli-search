import React from "react";
import ListItem from "./ListItem";

const List = ({data}) => data.items.map(item => <ListItem key={item.id} item={item} />);

export default List;
