import React, {useEffect} from 'react';
import Breadcrumb from './Breadcrumb';
import useFetchItem from '../hooks/use-fetch-item';
import {useParams} from 'react-router-dom';


const ItemDetail = (props) => {
    const {fetchItemById, response, loading, error} = useFetchItem();
    const {id} = useParams();
    useEffect(() => fetchItemById(id), [id]);
    console.log(response)
    return (
        <div>
            <Breadcrumb />
            ProductDetail
        </div>
    );
}

export default ItemDetail;