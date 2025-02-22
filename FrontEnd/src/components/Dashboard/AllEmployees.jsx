import { Plus, Trash, UserPen } from "lucide-react";

const AllEmployees = () => {

    
  return (
    <div className="flex flex-col w-full h-screen px-4">
      <div className="w-full flex justify-between items-center  py-10 px-4">
        <h1 className="text-2xl text-white font-medium text-center">
          Manage Employees
        </h1>
        <button className="btn btn-soft btn-success">
          <Plus size={20} /> Add Employee
        </button>
      </div>
      <div>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Father </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Random</th>
                <td>Random Father</td>
                <td>Random@user.com</td>
                <td>03001234567</td>
                <td className="flex gap-2 w-full">
                  <button className="btn btn-square btn-soft btn-success">
                    <UserPen size={20} /> 
                  </button>
                  <button className="btn btn-square btn-soft btn-error">
                    <Trash size={20} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllEmployees;
