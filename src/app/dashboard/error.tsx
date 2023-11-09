"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="bg-red-500 w-1/4 p-4 rounded-md">
        <h2 className="text-white font-bold text-lg mb-2">
          Oops, there is a dashboard error!
        </h2>
        <button
          type="button"
          onClick={() => reset()}
          className="bg-white text-red-500 font-bold py-2 px-4 rounded"
        >
          Try again?
        </button>
      </div>
    </div>
  );
}
