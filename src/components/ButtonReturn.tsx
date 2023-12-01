"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonReturn = () => {
  const router = useRouter();

  return (
    <div>
      <button className="btn" onClick={() => router.back()}>
        <ArrowLeft /> Back
      </button>
    </div>
  );
};

export default ButtonReturn;
