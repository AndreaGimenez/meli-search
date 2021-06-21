import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import useFetchItem from "../../hooks/use-fetch-item";
import ResultLayout from "../result-layout";
import ItemInformation from "../item-information";


const ConnectedItemDescription = () => {
    const {fetchItemById, response} = useFetchItem();
    const {id} = useParams();
    useEffect(() => fetchItemById(id), [id]);

    if (!response.item) return null;

    return (
        <ResultLayout categories={response.categories}>
            <ItemInformation item={response.item} description={response.description}/>
        </ResultLayout>
    );
}

export default ConnectedItemDescription;
