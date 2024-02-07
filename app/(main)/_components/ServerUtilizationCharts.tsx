import LineChart from "@/app/_components/LineChart";
import { Analytics } from "@/constants/types";
import { formatTimeEntries } from "@/lib/utilities";
import { Suspense } from "react";

const ServerUtilizationCharts = ({ server }: { server: Analytics }) => {
  const formattedTimeEntries = formatTimeEntries(server.time_entries);

  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold">
        Server {server.server.split("server")}
      </h3>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <LineChart
          data={server.ram_usage}
          labels={formattedTimeEntries}
          title="Ram Usage"
        />
        <LineChart
          data={server.cpu_usage}
          labels={formattedTimeEntries}
          title="CPU Usage"
        />
      </div>
    </div>
  );
};

export default ServerUtilizationCharts;
