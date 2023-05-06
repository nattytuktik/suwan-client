const urlApi = 'http://localhost:5001/'


export default async function getDataFetch(endpoint:string) {
    const result = await fetch(urlApi+`${endpoint}`);
    return result;
}