"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;

    setIsLoading(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) return toast.error(data.message);

      toast.success(data.message);
      router.replace("/");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-start">
      <form
        onSubmit={handleFormSubmit}
        className="border rounded-md p-3 md:py-7 md:px-5 shadow flex flex-col gap-5 md:w-[450px] max-w-[100%]"
      >
        <h2 className="text-xl md:text-2xl text-neutral-700">Login</h2>
        <div className="flex flex-col space-y-3">
          <input
            disabled={isLoading}
            className="input input-bordered w-full"
            name="username"
            placeholder="Enter username"
            required
          />
          <input
            disabled={isLoading}
            className="input input-bordered w-full"
            name="password"
            placeholder="Enter password"
            type="password"
            required
          />
        </div>
        <button disabled={isLoading} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
