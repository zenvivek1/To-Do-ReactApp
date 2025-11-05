

export const setLocalStorage = (data)=>{
    localStorage.setItem('tasklist',JSON.stringify(data))
}
export const getLocalStorage = ()=>{
    const data = localStorage.getItem("tasklist")
    return data? JSON.parse(data) : null
}

export const clearLocalStorage = ()=>{
    localStorage.clear("tasklist");
}