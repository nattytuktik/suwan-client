const urlApi = 'http://localhost:5001/'


export default async function getDataFetch(endpoint:string) {
    let Data:[] = [];
    const result = fetch(urlApi+`${endpoint}`);
    return result;
}