import './Home.styles.css';

function Home() {
	return (
		<>
			<main className='home'>
				<section className='lp-signup'>
					<h1>FASHION WAITS FOR NONE WHY SHOULD YOU ?</h1>
					<img
						className='lp-signup-logo'
						src='/svg/Logo - TC.svg'
						alt=''
					/>
					<h3>“Freshly Curated Fits Delivered in 60 Minutess”</h3>
					<a href='/signup'>Sign Up Now</a>
				</section>

				<section className='features'>
					<div className='l1'>
						{[1, 2, 3, 4, 5, 6].map((i) => (
							<img
								key={i}
								className='feature-1-img'
								src={`/images/featured-image-${i}.webp`}
								alt=''
							/>
						))}
					</div>
					<div className='r1'>
						<h2>Trend-Tapped, OG Brands!</h2>
						<h4>
							Discover fashion that speaks your vibe— latest styles from
							emerging brands, all handpicked from our curators for the
							trendsetters.
						</h4>
					</div>
					<div className='l2'>
						<h2>Drip n Drop....</h2>
						<h4>Get your fav fits delivered in just 60 minutes</h4>
					</div>
					<div className='r2'>
						<AppUiKan60 />
					</div>
					<div className='l3'>
						<AppUiKanTry />
					</div>
					<div className='r3'>
						<h2>Say “Hello” to Kan-Fits</h2>
						<h4>
							A home try n buy feature where you can test out your looks from
							the comfort of your home—keep what slays, return what doesn’t.
						</h4>
					</div>
				</section>

				<section className='lp-lucknow'>
					<h1>Get Set, Lucknow! </h1>
					<h4>KANDID'S READY TO TURN YOUR CITY'S FASHION GAME UPSIDE DOWN</h4>
					<div className='images'>
						{[
							'/images/lucknow-1.png',
							'/images/lucknow-2.png',
							'/images/lucknow-3.png',
							'/images/lucknow-4.png',
						].map((img, index) => (
							<img
								key={index}
								src={img}
								alt=''
							/>
						))}
					</div>
				</section>

				<section className='lp-sign-up'>
					<a href='/signup'>
						<h1>
							sign up noww <span>!</span>
							<span>!</span>
						</h1>
					</a>

					<h4>Karke dekho...accha lagta hai</h4>
				</section>

				<section className='lp-kandid-squad'>
					<h1>MEET THE KANDID SQUAD</h1>
					<h4>Hit Us Up Whenever You Feel Like</h4>
					<div className='squad'>
						<div className='kandisquad'>
							<img
								src='/images/sam.png'
								alt=''
							/>
							<h2>Samriddh Verma</h2>
							<h3>
								I am the socially awkward CTO keeping kandid's tech game lit af.
								Be it the backend grit to frontend glow, I got them clicks,
								swipes and scrolls under my control.
							</h3>
							<a href='https://www.linkedin.com/in/samriddh-verma/'></a>
						</div>
						<div className='kandisquad'>
							<img
								src='/images/kesh.png'
								alt=''
							/>
							<h2>Keshav Agarwal</h2>
							<h3>
								I am the brain behind Kandid- getting shit done with strategy
								and hustle to keep kandid top tier. No fluff, no playing around
								just bold decisions with CEO's crown!
							</h3>
							<a href='https://www.linkedin.com/in/keshav-agarwal-47a287238/'></a>
						</div>
						<div className='kandisquad'>
							<img
								src='/images/bhuri.png'
								alt=''
							/>
							<h2>Bhramari Verma</h2>
							<h3>
								Prachar vibhag hamara hai <br /> CMO cum vibe-curator ensuring
								you're always in loop with Kandid. Hard-core hype ho ya Viral
								Trend, Kandid's gonna bless your feed with a perfect blend!
							</h3>
							<a href='https://www.linkedin.com/in/bhramari/'></a>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

function AppUiKan60() {
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

function AppUiKanTry() {
	return (
		<>
			<div
				// style={{ scale: '0.9' }}
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

export default Home;
