import React, {useEffect} from 'react';
import ListItem from './ListItem';

const List = ({items}) => {
    return items.map(item => <ListItem key={item.id} item={item} />);
}

export default List;


