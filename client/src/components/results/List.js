import React from "react";
import ListItem from "./ListItem";

const List = ({items}) => items.map(item => <ListItem key={item.id} item={item} />);

export default List;
