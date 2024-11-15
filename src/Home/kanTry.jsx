function AppUiKanTry() {
	return (
		<>
			<div
				style={{ scale: '0.9' }}
				className='lp-app-ui'
			>
				<div className='delivery-address'>
					<img
						src='/ui/home.svg'
						alt=''
					/>
					<div>
						<h2>Delivery in 60 minutes | Keshav</h2>
						<h4>Home : Vijay Khand, Gomti Nagar, Lucknow </h4>
					</div>
				</div>
				<div className='product'>
					<img
						src='/ui/shirt.png'
						alt=''
					/>
					<div>
						<div>
							<h2>Eccentric</h2>
							<h4>Beige White Shirt Check</h4>
						</div>
						<div className='btns'>
							<div className='btn'>
								Size: L{' '}
								<img
									src='/ui/down-arrow.svg'
									alt=''
								/>
							</div>
							<div className='btn'>
								Qty: 1{' '}
								<img
									src='/ui/down-arrow.svg'
									alt=''
								/>
							</div>
						</div>
						<h6>
							₹1499 <span className='dp'>₹2999</span>{' '}
							<span className='d'>50% off</span>
						</h6>
					</div>
				</div>
				<div className='delivery-options'>
					<h1>DELIVERY OPTION</h1>
					<div className='delivery-options-deets'>
						<h3>
							KAN-FITS{' '}
							<img
								src='/ui/tick.svg'
								alt=''
							/>
						</h3>
						<ul>
							<li>
								<h4>Our Delivery partner will reach you in 60 minutes</h4>
							</li>
							<li>
								<h4>
									He will wait patiently till you try the outfit and make the
									decision
								</h4>
							</li>
							<li>
								<h4>No Exchange/return allowed once you make the purchase</h4>
							</li>
						</ul>
						<div className='kan-extra'>
							<h5>+ ₹50</h5>
							<h6>Additonal</h6>
						</div>
					</div>
				</div>

				<div className='bill-details'>
					<h1>BILL DETAILS</h1>
					<div>
						<h2>
							Item total <span>₹1499</span>
						</h2>
						<div className='divider'></div>
						<h2>
							Delivery charges <span>₹75</span>
						</h2>
					</div>
					<h3>
						Total Amount <span>₹1574</span>
					</h3>
					<h4>Pay ₹1574</h4>
				</div>
			</div>
		</>
	);
}

export default AppUiKanTry;
