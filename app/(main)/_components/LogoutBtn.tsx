"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    toast.success("Logout successful");
    router.replace("/login");
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutBtn;
