import { IoLocationSharp } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { NavLink } from "react-router-dom";
function JobSingle({ data }) {
  const {
    logo,
    job_title,
    location,
    remote_or_onsite,
    company_name,
    job_type,
    salary,
    experiences,
    id
  } = data;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl border">
       <div className="min-h-[200px] flex justify-center items-center">
       <figure className="">
          <img src={logo || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcNh0ODWk1dZXoH-o6tSqGMlx1-bOLRN-jfZ6tzCGMKw&s'} />
        </figure>
       </div>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-x-3">
            <button className="px-3 py-2 border border-2 rounded-lg border-blue-800">
              {remote_or_onsite}
            </button>
            <button className="px-3 py-2 border border-2 rounded-lg border-blue-800">
              {job_type}
            </button>
          </div>
          <div className="flex justify-between space-y-4">
            <div className="flex gap-x-3 items-center">
              <IoLocationSharp />
              <p>{location}</p>
            </div>
            <div className="flex gap-x-3 items-center">
                <MdAttachMoney></MdAttachMoney>
                {salary}</div>
          </div>
          <div className="card-actions justify-start">
            <NavLink to={`/job/${id}`} className="btn btn-primary">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobSingle;
