"use client";

import { DataResponse } from "@/constants/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ModemCharts from "@/app/(main)/_components/ModemCharts";
import SimCharts from "@/app/(main)/_components/SimCharts";
import ServerUtilizationCharts from "@/app/(main)/_components/ServerUtilizationCharts";
import ServerFilters from "@/app/(main)/_components/ServerFilters";

const fetchData = async ({ serverId }: { serverId?: string }) => {
  const response = await fetch(
    `http://localhost:3000/api/server?serverId=${serverId}`
  );
  return response.json();
};

const fetchServers = async () => {
  const response = await fetch(`http://localhost:3000/api/servers`);
  return response.json();
};

export default function Home() {
  const [data, setData] = useState<DataResponse>();
  const [serverList, setServerList] = useState<string[]>([]);
  const [selectedModemIndex, setSelectedModemIndex] = useState<number>(0);
  const [selectedSimIndex, setSelectedSimIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    setSelectedModemIndex(0);
    setSelectedSimIndex(0);

    const fetchInfo = async () => {
      const data = await fetchData({
        serverId: searchParams.get("serverId") as string,
      });
      setData(data);
      setIsLoading(false);
    };
    fetchInfo();
  }, [searchParams]);

  useEffect(() => {
    const getServers = async () => {
      const fetchedServers = await fetchServers();
      setServerList(fetchedServers);
    };
    getServers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex w-full h-[100vh] justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      {data && (
        <div className="mt-4 space-y-7">
          <div className="filters flex justify-end">
            <ServerFilters servers={serverList} />
          </div>
          <ServerUtilizationCharts server={data.data.analytics[0]} />
          <ModemCharts
            modems={data.data.analytics[0].modem_details}
            selectedModemIndex={selectedModemIndex}
            setSelectedModemIndex={setSelectedModemIndex}
          />
          <SimCharts
            sims={data.data.analytics[0].sims_details}
            selectedSimIndex={selectedSimIndex}
            setSelectedSimIndex={setSelectedSimIndex}
          />
        </div>
      )}
    </div>
  );
}
