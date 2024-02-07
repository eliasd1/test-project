"use client";

import ServerList from "./ServerList";

const ServerFilters = ({ servers }: { servers: string[] }) => {
  return (
    <div>
      <ServerList servers={servers} />
    </div>
  );
};

export default ServerFilters;
