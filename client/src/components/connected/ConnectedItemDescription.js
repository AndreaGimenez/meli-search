import React from "react";
import {useParams} from "react-router-dom";
import useFetchItem from "../../hooks/use-fetch-item";
import ResultLayout from "../result-layout";
import ItemInformation from "../item-information";


const ConnectedItemDescription = () => {
    const {id} = useParams();
    const {response} = useFetchItem(id);

    if (!response.item) {
        return null;
    }

    const { categories, item, description } = response;

    return (
        <ResultLayout categories={categories}>
            <ItemInformation item={item} description={description}/> 
        </ResultLayout>
    );
}

export default ConnectedItemDescription;
