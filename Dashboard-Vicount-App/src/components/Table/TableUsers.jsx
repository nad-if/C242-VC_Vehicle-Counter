import React from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  return new Intl.DateTimeFormat("en-GB", options).format(new Date(dateString));
};

// const TableUser = ({ UsersData, onDelete }) => {
//   return (
//     <div className="relative my-5 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
//       <div className="relative mx-4 bg-gradient-to-tr from-dark to-primary text-white shadow-lg -mt-6 mb-8 p-6 rounded-xl">
//         <h6 className="font-sans text-base font-semibold">Users Table</h6>
//       </div>
//       <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
//         <table className="w-full min-w-[640px] table-auto">
//           <thead>
//             <tr>
//               {["Author", "Function", "Status", "Employed", ""].map((header, index) => (
//                 <th key={index} className="border-b border-blue-gray-50 py-3 px-5 text-left">
//                   <p className="font-sans text-[11px] font-bold uppercase text-blue-gray-400">
//                     {header}
//                   </p>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {UsersData && UsersData.length > 0 ? (
//               UsersData.map((author, index) => (
//                 <tr key={index}>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <div className="flex items-center gap-4">
//                       <img
//                         src={author.avatar || "/assets/profile/default-avatar.jpg"}
//                         alt="avatar"
//                         className="w-9 h-9 rounded-md object-cover"
//                       />
//                       <div>
//                         <p className="font-sans text-sm font-semibold text-blue-gray-900">
//                           {author.fullname}
//                         </p>
//                         <p className="font-sans text-xs text-blue-gray-500">
//                           {author.email}
//                         </p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <p className="font-sans text-md font-semibold text-blue-gray-600">
//                       {author.role}
//                     </p>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <div
//                       className={`py-0.5 px-2 rounded-lg text-[11px] font-medium text-white ${
//                         author.status === "online"
//                           ? "bg-green-400"
//                           : author.status === "offline"
//                           ? "bg-red-400"
//                           : "bg-gray-400"
//                       }`}
//                     >
//                       {author.status}
//                     </div>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <p className="font-sans text-xs font-semibold text-blue-gray-600">
//                       {formatDate(author.createdAt)}
//                     </p>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <Link
//                       to={`/editAccount/${author.id}`}
//                       className="text-xs font-semibold text-blue-gray-600 hover:text-primary"
//                     >
//                       Edit
//                     </Link>
//                   </td>
//                   <td className="py-3 px-5 border-b border-blue-gray-50">
//                     <button
//                       onClick={() => onDelete(author.id)}
//                       className="text-xs font-semibold text-blue-gray-600 hover:text-red-600"
//                       aria-label={`Remove ${author.fullname}`}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="py-3 px-5 text-center">
//                   No data available
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

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
            {UsersData && UsersData.length > 0 ? (
              UsersData.map((author, index) => (
                <tr key={index}>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <div className="flex items-center gap-4">
                      <img
                        src="/assets/profile/bruce-mars.jpg"
                        alt="avatar"
                        className="inline-block relative object-cover object-center w-9 h-9 rounded-md"
                      />
                      <div>
                        <p className="block font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                          {author.fullname}
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
                      className={`relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr ${
                        author.status === "online"
                          ? "from-green-600 to-green-400"
                          : author.status === "offline"
                          ? "from-red-600 to-red-400"
                          : "from-gray-600 to-gray-400"
                      } text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit`}
                    >
                      <span>{author.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <p className="block font-sans text-xs font-semibold text-blue-gray-600">
                      {formatDate(author.createdAt)}
                    </p>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <Link
                      to={`/editAccount/${author.id}`}
                      className="block font-sans text-xs font-semibold text-blue-gray-600 hover:text-primary"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50">
                    <button
                      onClick={() => onDelete(author.id)}
                      className="block font-sans text-xs font-semibold text-blue-gray-600 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-3 px-5 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default React.memo(TableUser);
