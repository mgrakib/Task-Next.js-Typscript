

const SummaryComponents = ({ userName }) => {
    
    
    console.log(userName)
	return (
		<div className='bg-[#090D2B]  rounded'>
			<h2 className='text-[#CBCACE] text-[22px] font-semibold p-5 border-b border-[#2A2649]'>
				Summary
			</h2>

			<div className='p-5'>
				<div className='overflow-x-auto'>
					<table className='table'>
						{/* head */}
						<thead>
							<tr className='text-[#CBCACE]'>
								<th>Sl</th>
								<th>Name</th>
								<th>Email</th>
								<th>Age</th>
							</tr>
						</thead>

						{userName.length > 0 && (
							<tbody>
								{/* row 1 */}
								{userName.map((user, index) => (
									<tr
										key={index}
										className='text-[#CBCACE]'
									>
                                        <th>{ index+1}</th>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>{user.age}</td>
									</tr>
								))}
							</tbody>
						)}
					</table>
					{userName.length === 0 && (
						<p className='text-[#CBCACE] text-[14px] pt-3 text-center'>
							No Data Available
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default SummaryComponents;