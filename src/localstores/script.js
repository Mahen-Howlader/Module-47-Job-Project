
export function getData() {
    const get = localStorage.getItem("form")
    if (get) {
        return JSON.parse(get)
    }
    return [];
}


export function saveData(id) {
    const get = getData()
    const exist = get.find(localId => localId === id)
    if(!exist){
        get.push(id)
        localStorage.setItem("form", JSON.stringify(get));
    }
}
