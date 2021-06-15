import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useFetchItem from "../../hooks/use-fetch-item";
import ResultLayout from "../results/ResultLayout";
import ItemInformation from "../results/ItemInformation";


const ConnectedItemDescription = () => {
    const {fetchItemById, response, loading, error} = useFetchItem();
    const {id} = useParams();
    useEffect(() => fetchItemById(id), [id]);
    
    if (!response.item) return null;
    
    return (
        <ResultLayout>
            <ItemInformation data={response}/>
        </ResultLayout>
    );
}

export default ConnectedItemDescription;