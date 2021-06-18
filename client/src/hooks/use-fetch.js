import {useState} from "react";

const useFetch = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendRequest = async (url, method, body) => {
        try {
            setLoading(true);
            let responseData = await fetch(url, {
                method,
                body,
                headers: {
                    "Content-Type": "application/json"
                }
            })
            responseData = await responseData.json();
            setResponse(responseData);
            setLoading(false);
        } catch(error) {
            setError(error);
        }
    };

    return {
        sendRequest,
        response,
        error,
        loading
    };
}

export default useFetch;
