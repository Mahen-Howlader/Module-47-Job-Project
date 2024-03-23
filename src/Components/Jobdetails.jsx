import { useLoaderData, useParams } from "react-router-dom";

function Jobdetails() {
    const data = useLoaderData()
    const {id} = useParams()
console.log(id)
    const filData = data.find((val) => val.id === parseInt(id))
    console.log(filData)
    const {educational_requirements,experiences,job_responsibility,job_description,salary,job_title,contact_information} = filData;
    const {phone,email,address} = contact_information;



    // applyHandel button 
    function applyHandel (){
            
    }

    return (
        <div className="grid grid-cols-3 my-10 gap-x-10">
            <div className="col-span-2 space-y-3">
                    <h2><span className="text-2xl font-semibold">Job Description: </span> <span >{job_description}</span></h2>
                    <h2><span className="text-2xl font-semibold">Job Responsibility: </span><span >{job_responsibility}</span></h2>
                    <h2><span className="text-2xl font-semibold">Educational Requirements: </span><span >{educational_requirements}</span></h2>
                    <h2><span className="text-2xl font-semibold">Experiences: </span>{experiences}</h2>
            </div>
            <div className="col-span-1 bg-red-100 p-5 rounded-xl">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold">Job Details</h2>
                        <h2><span className="text-2xl font-semibold">Salary : </span><span >{salary}</span></h2>
                        <h2><span className="text-2xl font-semibold">Job Title : </span><span >{job_title}</span></h2>
                        <h2 className="text-2xl font-semibold">Contact Information</h2>
                        <h2><span className="text-2xl font-semibold">Phone : </span><span >{phone}</span></h2>
                        <h2><span className="text-2xl font-semibold">Email : </span><span >{email}</span></h2>
                        <h2><span className="text-2xl font-semibold">Address : </span><span >{address}</span></h2>
                        <button onClick={applyHandel} className="w-full text-center py-2 bg-blue-800 text-2xl font-semibold uppercase rounded-xl text-white">Apply Now</button>
                    </div>
            </div>
        </div>
    );
}

export default Jobdetails;