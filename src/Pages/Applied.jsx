import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../localstores/script";
import Storedata from "../Components/Storedata";

function Applied() {
    const [applied,setApplied] = useState([]);
    const loadData = useLoaderData()
    useEffect(()=> {
        const get = getData()

        if(loadData.length){
            const jobApplied = [];
            for(let id of get){
                const fil = loadData.find(val => val.id === id)
                if(fil){
                    jobApplied.push(fil) 
                }
            }
            setApplied(jobApplied)
        }
    }, [])
    
    return (
        <div>
            {/* <h1>Applied</h1> */}
            {
              applied.map(val => <Storedata key={val.id} data={val}></Storedata>)  
            }
        </div>
    );
}

export default Applied;