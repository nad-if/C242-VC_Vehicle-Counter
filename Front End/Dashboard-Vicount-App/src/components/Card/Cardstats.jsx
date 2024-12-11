import { Icon } from "lucide-react";

const StatsCard = ({ name, icon: Icon, value, color }) => {
  return (
    <div className=" bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <span className="flex items-center text-sm font-medium text-gray-500">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold">{value}</p>
      </div>
    </div>
  );
};

// const CardBaru = () => {
//   return (
//     <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
//       <div className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
//         <div className="flex-auto p-4">
//           <div className="flex flex-row -mx-3">
//             <div className="flex-none w-2/3 max-w-full px-3">
//               <div>
//                 <p className="mb-0 font-sans text-sm font-semibold leading-normal">
//                   Today's Money
//                 </p>
//                 <h5 className="mb-0 font-bold">
//                   $53,000
//                   <span className="text-sm leading-normal font-weight-bolder text-lime-500">
//                     +55%
//                   </span>
//                 </h5>
//               </div>
//             </div>
//             <div className="px-3 text-right basis-1/3">
//               <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
//                 <Icon className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
export default StatsCard;
