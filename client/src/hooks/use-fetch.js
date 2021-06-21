import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let responseData = await fetch(url, {
                    method: "GET",
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
        }
        fetchData(url);
    }, [url]);

    return {
        response,
        error,
        loading
    };
}

export default useFetch;
