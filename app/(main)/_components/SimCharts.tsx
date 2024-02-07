"use client";

import { ChangeEvent, Dispatch, SetStateAction, useMemo } from "react";
import { SimsDetail } from "@/constants/types";

import LineChart from "@/app/_components/LineChart";

import { calculateIncrementalData, formatTimeEntries } from "@/lib/utilities";

const SimCharts = ({
  sims,
  selectedSimIndex,
  setSelectedSimIndex,
}: {
  sims: SimsDetail[];
  selectedSimIndex: number;
  setSelectedSimIndex: Dispatch<SetStateAction<number>>;
}) => {
  const selectedSim = sims[selectedSimIndex];

  const handleSimChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.currentTarget.value);
    setSelectedSimIndex(index);
  };

  const lineData = useMemo(() => {
    return calculateIncrementalData(selectedSim.messages_sent);
  }, [selectedSim]);

  const formattedTimeEntries = useMemo(() => {
    return formatTimeEntries(selectedSim.time_entries);
  }, [selectedSim]);

  return (
    <>
      <div className="flex justify-between gap-2">
        <h3 className="text-xl md:text-2xl font-bold">
          Sim {selectedSim.on_prem_id.split("sim")}
        </h3>
        <select
          className="select select-bordered md:min-w-[200px]"
          onChange={handleSimChange}
          value={selectedSimIndex}
        >
          {sims.map((sim, i) => (
            <option key={sim.on_prem_id} value={i}>
              Sim {sim.on_prem_id.split("sim")}
            </option>
          ))}
        </select>
      </div>
      <div>
        <LineChart
          title="Messages Sent"
          labels={formattedTimeEntries}
          data={lineData}
        />
      </div>
    </>
  );
};

export default SimCharts;
