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

export default StatsCard;
