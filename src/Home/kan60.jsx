function AppUiKan60() {
	window.addEventListener('resize', () => {
		const w = window.innerWidth;
		document.querySelectorAll('.lp-app-ui').forEach((el) => {
			el.style.scale = w < 800 ? w / 1000 : 1;
		});
	});
	return (
		<>
			<div className='lp-app-ui'>
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
							KAN 60{' '}
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
									Exchange/return allowed up to 7 days from date of delivery
								</h4>
							</li>
						</ul>
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
							Delivery charges <span>₹25</span>
						</h2>
					</div>
					<h3>
						Total Amount <span>₹1524</span>
					</h3>
					<h4>Pay ₹1524</h4>
				</div>
			</div>
		</>
	);
}

export default AppUiKan60;
