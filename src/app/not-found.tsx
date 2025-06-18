'use client';

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";

export default function NotfoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-w">
      <Image
        src={"/images/logo.svg"}
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center"></div>
    </div>
  )
}
