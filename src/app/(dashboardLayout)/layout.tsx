import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: " A School Managment Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

<div className="h-screen flex">
    {/* left */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-500">
left
    </div>


    {/* right */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:[86%] bg-[#F7F8FA] ">right</div>

</div>

  )
}
