import Navbar from '../Components/Navbar';
import ScrollText from '../Components/ScrollText';
import Footer from '../Components/Footer';
import AppUiKan60 from './kan60';
import AppUiKanTry from './kanTry';

function Home() {
	return (
		<>
			<ScrollText />
			{/* <Navbar /> */}
			<section className='lp-signup'>
				<div className='lp-signup-bg'></div>
				<h1>FASHION WAITS FOR NONE WHY SHOULD YOU ?</h1>
				<img
					className='lp-signup-logo'
					src='/svgs/Logo - TC.svg'
					alt=''
				/>
				<h3>“Freshly Curated Fits Delivered in 60 Minutess”</h3>
				<a href='/sign-up'>Sign Up for early Access</a>
			</section>

			<div className='lp-features'>
				<section className='feature-1'>
					<div className='feature-1-left'>
						<div>
							<img
								className='feature-1-img'
								src='/images/featured-image-1.webp'
								alt=''
							/>
							<img
								className='feature-1-img'
								src='/images/featured-image-2.webp'
								alt=''
							/>
							<img
								className='feature-1-img'
								src='/images/featured-image-3.webp'
								alt=''
							/>
							<img
								className='feature-1-img'
								src='/images/featured-image-4.webp'
								alt=''
							/>
							<img
								className='feature-1-img'
								src='/images/featured-image-5.webp'
								alt=''
							/>
							<img
								className='feature-1-img'
								src='/images/featured-image-6.webp'
								alt=''
							/>
						</div>
					</div>
					<div className='feature-1-right'>
						<div>
							<div>
								<h2>Trend-Tapped, OG Brands!</h2>
								<h4>
									Discover fashion that speaks your vibe— latest styles from
									emerging brands, all handpicked from our curators for the
									trendsetters.
								</h4>
							</div>
						</div>
					</div>
				</section>
				<section className='feature-2'>
					<div className='feature-2-left'>
						<div>
							<h2>Drip n Drop....</h2>
							<h4>Get your fav fits delivered in just 60 minutes</h4>
						</div>
					</div>
					<div className='feature-2-right'>
						<AppUiKan60 />
					</div>
				</section>
				<section className='feature-3'>
					<div className='feature-3-left'>
						<AppUiKanTry />
					</div>
					<div className='feature-3-right'>
						<div>
							<h2>Say “Hello” to Kan-Fits</h2>
							<h4>
								A home try n buy feature where you can test out your looks from
								the comfort of your home—keep what slays, return what doesn’t.
							</h4>
						</div>
					</div>
				</section>
			</div>

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
				<a href='/sign-up'>
					<h1>sign up noww!!</h1>
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
							From backend grit to frontend glow, I've got every click, swipe
							and scroll under control
						</h3>
					</div>
					<div className='kandisquad'>
						<img
							src='/images/kesh.png'
							alt=''
						/>
						<h2>Keshav Agarwal</h2>
						<h3>
							I am the brain behind Kandid- getting shit done with strategy and
							hustle to keep kandid top tier. No fluff, no playing around just
							bold decisions with CEO's crown!
						</h3>
					</div>
					<div className='kandisquad'>
						<img
							src='/images/bhuri.png'
							alt=''
						/>
						<h2>Bhramari Verma</h2>
						<h3>
							Prachar vibhag hamara hai CMO cum vibe-curator ensuring you're
							always in loop with Kandid. Hard-core hype ho ya Viral Trend,
							Kandid's gonna bless your feed with a perfect blend!
						</h3>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}

export default Home;
