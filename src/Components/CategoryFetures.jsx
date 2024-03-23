import { useEffect, useState } from "react";
import JobSingle from "./JobSingle";

function CategoryFetures() {
        const [job, setJob] = useState([]);
        const [dataLength,setDataLength] = useState(4)
        useEffect(() => {
            fetch("jobs.json")
            .then(ref => ref.json())
            .then(ref => setJob(ref))
        }, [])
  return (
    <div>
      <div className="text-center my-5 space-y-3">
        <h1 className="text-3xl font-bold"> Featured Jobs</h1>
        <p className="text-xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-20">
        {
            job.slice(0,dataLength).map((data,index) => <JobSingle data={data} key={index}></JobSingle>)
        }
      </div>

      <div className={`flex justify-center my-10 ${dataLength === job.length ? 'hidden' : 'show'}`}>
      <button onClick={() => setDataLength(job.length)} className="btn btn-primary">Show All Job</button>
      </div>
    </div>
  );
}

export default CategoryFetures;
