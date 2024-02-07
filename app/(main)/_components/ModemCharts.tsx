"use client";

import { ChangeEvent, Dispatch, SetStateAction, useMemo } from "react";
import { ModemDetail, MultiAxisLineDataSet } from "@/constants/types";
import { calculateIncrementalData, formatTimeEntries } from "@/lib/utilities";

import MultiAxisLineChart from "@/app/_components/MultiAxisLineChart";

const ModemCharts = ({
  modems,
  selectedModemIndex,
  setSelectedModemIndex,
}: {
  modems: ModemDetail[];
  selectedModemIndex: number;
  setSelectedModemIndex: Dispatch<SetStateAction<number>>;
}) => {
  const selectedModem = modems[selectedModemIndex];

  const dataSets: MultiAxisLineDataSet[] = useMemo(
    () => [
      {
        label: "Download Data Usage (bytes)",
        data: calculateIncrementalData(selectedModem.download_data_usage_bytes),
        borderColor: "rgb(54, 162, 235)",
        yAxisID: "y1",
      },
      {
        label: "Packets Sent",
        data: calculateIncrementalData(selectedModem.packets_sent),
        borderColor: "rgb(75, 192, 192)",
        yAxisID: "y2",
      },
    ],
    [selectedModem]
  );

  const formattedTimeEntries = useMemo(() => {
    return formatTimeEntries(selectedModem.time_entries);
  }, [selectedModem]);

  const handleModemChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.currentTarget.value);
    setSelectedModemIndex(index);
  };

  return (
    <>
      <div className="flex justify-between gap-2">
        <h3 className="text-xl md:text-2xl font-bold">
          Modem {selectedModem.on_prem_id.split("modem")}
        </h3>
        <select
          className="select select-bordered md:min-w-[200px]"
          onChange={handleModemChange}
          value={selectedModemIndex}
        >
          {modems.map((modem, i) => (
            <option key={modem.on_prem_id} value={i}>
              Modem {modem.on_prem_id.split("modem")}
            </option>
          ))}
        </select>
      </div>
      <MultiAxisLineChart labels={formattedTimeEntries} dataSets={dataSets} />
    </>
  );
};

export default ModemCharts;
