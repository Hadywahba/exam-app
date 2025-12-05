import Image from "next/image";
import React from "react";

export default function AuthHeader() {
  return (
    <div className="flex items-center justify-start gap-2">
      <Image
        src="/assets/icons/folder.svg"
        width={40}
        height={40}
        alt="folder"
      />
      <h1 className="text-blue-600 text-xl font-semibold ">Exam App</h1>
    </div>
  );
}
