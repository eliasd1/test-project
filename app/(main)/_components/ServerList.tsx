import { ChangeEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const ServerList = ({ servers }: { servers: string[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleServerChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    const serverId = e.currentTarget.value;

    if (serverId) {
      params.set("serverId", serverId);
      router.push(`?${params.toString()}`);
    }
  };

  if (!servers.length) return null;

  return (
    <select
      className="select select-bordered md:min-w-[200px]"
      onChange={handleServerChange}
      defaultValue={searchParams.get("serverId") || ""}
    >
      {servers.map((server, i) => (
        <option key={server} value={server}>
          Server {server.split("server")}
        </option>
      ))}
    </select>
  );
};

export default ServerList;
