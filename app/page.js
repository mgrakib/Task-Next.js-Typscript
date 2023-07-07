/** @format */

"use client";

import { useRouter } from "next/navigation";

import FormComponents from "./components/FormComponents/FormComponents";
import SummaryComponents from "./components/SummaryComponents/SummaryComponents";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [userName, useUserName] = useState([])
	return (
		<main className=''>
			<div className='bg-[#0C1427] text-white text-[28px] font-bold py-2 text-center rounded mb-[32px]'>
				<h1>JOB Task - Next.js || Typscript</h1>
			</div>

			<div className='flex flex-col md:flex-row items-center  justify-between gap-20'>
				<div className='w-full md:w-1/2 order-2 md:order-1'>
					<SummaryComponents userName={userName} />
				</div>
				<div className='w-full md:w-1/2 order-1 md:order-2'>
					<FormComponents
						useUserName={useUserName}
						userName={userName}
					/>
				</div>
			</div>
		</main>
	);
}
