/** @format */
import { create } from "zustand";
import { useForm } from "react-hook-form";
const FormComponents = ({ useUserName, userName }) => {
	const {
		register,
		handleSubmit,
        watch,
        reset,
		formState: { errors },
	} = useForm();
    const onSubmit = data => {
        useUserName([...userName, data]);
        reset();
    };
	return (
		<div className='bg-[#090D2B]  rounded'>
			<h2 className='text-[#CBCACE] text-[22px] font-semibold p-5 border-b border-[#2A2649]'>
				Form
			</h2>

			<div className='p-5'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex items-center  gap-5 '>
						<div className='w-1/2'>
							<label
								htmlFor=''
								className='text-[12px] text-[#CBCACE] '
							>
								Name
							</label>
							<div className='h-[50px] px-3 border border-border-color rounded-[5px] '>
								<input
									type='text'
									{...register("name", {
										required: true,
									})}
									placeholder='name'
									className='w-full h-full bg-transparent outline-none placeholder:text-dark-gray text-white'
								/>
								{errors.name?.type === "required" && (
									<p
										role='alert'
										className='text-red-500 text-sm'
									>
										Name is required
									</p>
								)}
							</div>
						</div>
						<div className='w-1/2'>
							<label
								htmlFor=''
								className='text-[12px] text-[#CBCACE] '
							>
								Email
							</label>
							<div className='h-[50px] px-3 border border-border-color rounded-[5px] '>
								<input
									type='email'
									{...register("email", {
										required: true,
									})}
									placeholder='name'
									className='w-full h-full bg-transparent outline-none placeholder:text-dark-gray text-white'
								/>
								{errors.email?.type === "required" && (
									<p
										role='alert'
										className='text-red-500 text-sm'
									>
										Email is required
									</p>
								)}
							</div>
						</div>

						<div className='w-1/2'>
							<label
								htmlFor=''
								className='text-[12px] text-[#CBCACE] '
							>
								Age
							</label>
							<div className='h-[50px] px-3 border border-border-color rounded-[5px] '>
								<input
									type='number'
									{...register("age", {
										required: true,
									})}
									placeholder='name'
									className='w-full h-full bg-transparent outline-none placeholder:text-dark-gray text-white'
								/>
								{errors.age?.type === "required" && (
									<p
										role='alert'
										className='text-red-500 text-sm'
									>
										Age is required
									</p>
								)}
							</div>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='w-full bg-[#2BB3C0] mt-[25px] py-3 rounded text-white font-bold'
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormComponents;
