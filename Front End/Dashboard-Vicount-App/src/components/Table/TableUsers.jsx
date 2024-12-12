import { Link } from "react-router-dom";

const TableUser = ({ UsersData, onDelete }) => {
  return (
    <div className="relative my-5 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-dark to-primary text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
        <h6 className="block font-sans text-base font-semibold leading-relaxed text-white">
          Users Table
        </h6>
      </div>
      <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["Author", "Function", "Status", "Employed", ""].map(
                (header, index) => (
                  <th
                    key={index}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <p className="block font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                      {header}
                    </p>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {UsersData.map((author, index) => (
              <tr key={index}>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <img
                      src={author.imgSrc}
                      alt={author.name}
                      className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                    />
                    <div>
                      <p className="block font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        {author.name}
                      </p>
                      <p className="block font-sans text-xs font-normal text-blue-gray-500">
                        {author.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block font-sans text-md font-semibold text-blue-gray-600">
                    {author.role}
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className={`relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr ${author.status === "Online"
                        ? "from-green-600 to-green-400" // Hijau untuk online
                        : author.status === "Offline"
                          ? "from-red-600 to-red-400" // Merah untuk offline
                          : "from-gray-600 to-gray-400" // Default jika status lain
                      } text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit`}
                  >
                    <span>{author.status}</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block font-sans text-xs font-semibold text-blue-gray-600">
                    {author.employedDate}
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  {/* To Do Handle Edit */}
                  <Link
                    to={`/editAccount/${author.id}`} // Pastikan ID sudah ada di URL
                    className="block font-sans text-xs font-semibold text-blue-gray-600 hover:text-primary"
                  >
                    Edit
                  </Link>
                </td>
                {/* To Do Handle Delete */}
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <button
                    onClick={() => onDelete(author.id)} // Panggil fungsi onDelete
                    className="block font-sans text-xs font-semibold text-blue-gray-600 hover:text-red-600"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableUser;
