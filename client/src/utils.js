export const getQueryStringParam = (location, q) => {
    const qs = new URLSearchParams(location.search);
    return qs.get(q); 
}