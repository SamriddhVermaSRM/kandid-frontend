import { AnimatePresence } from 'framer-motion';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import TopText from '../Components/TopBars/TopText';
import { useState } from 'react';
import { motion } from 'framer-motion';

function BrandOnboarding() {
	const [expand, setExpand] = useState(0);
	return (
		<>
			<TopText />
			<div className='brand-onboarding'>
				<div className='carousel'>
					<div className='bg'>
						<img
							src='/images/carousel-1.png'
							alt=''
						/>
						<img
							src='/images/carousel-2.png'
							alt=''
						/>
						<img
							src='/images/carousel-3.png'
							alt=''
						/>
						<img
							src='/images/carousel-4.png'
							alt=''
						/>
						<img
							src='/images/carousel-5.png'
							alt=''
						/>
						<img
							src='/images/carousel-6.png'
							alt=''
						/>
						<img
							src='/images/carousel-1.png'
							alt=''
						/>
						<img
							src='/images/carousel-2.png'
							alt=''
						/>
						<img
							src='/images/carousel-3.png'
							alt=''
						/>
						<img
							src='/images/carousel-4.png'
							alt=''
						/>
						<img
							src='/images/carousel-5.png'
							alt=''
						/>
						<img
							src='/images/carousel-6.png'
							alt=''
						/>
					</div>
					<div className='content'>
						<div className='planets'>
							<div className='circle-1'>
								Zero <br /> Commissions
							</div>
							<div className='circle-2'>
								Ugc <br /> Explosion
							</div>
							<div className='circle-3'>
								Quick <br /> Commerce
							</div>
							<div className='circle-4'>
								Zero <br /> onboarding <br /> fee
							</div>
						</div>
					</div>
				</div>
				<div className='about-kandid'>
					<div className='content'>
						<h1>about</h1>
						<img
							src='/svgs/Logo - Footer.svg'
							alt=''
						/>
						<h2>
							A Young Millennial and Gen Z Focused Fashion Marketplace
							Delivering Curated Fashion from innovative homegrown brands within
							60 minutes with a Try n Buy Option
						</h2>
					</div>
					<div className='pics'>
						<img
							src='/images/about-kandid-1.png'
							alt=''
						/>
						<img
							src='/images/about-kandid-2.png'
							alt=''
						/>
						<img
							src='/images/about-kandid-3.png'
							alt=''
						/>
					</div>
				</div>

				<div className='partner-with-us'>
					<h1>Why should you partner with KANDID ?</h1>
					<PartnerWithUs
						title='Speedy Sales Surge'
						content='The world is moving faster, and so are consumer expectations! With the rise of quick commerce, shoppers are no longer satisfied with waiting days for their orders . By partnering with Kandid, your brand taps into this growing demand for lightning-fast deliveries and captures the attention of an audience that values both catalogue and convenience.'
						no='1'
						expand={expand}
						setExpand={setExpand}
					/>
					<PartnerWithUs
						title='Zero Commissions, Zero Onboarding fee'
						content='For the first 3 months, you get zero commission on sales. That’s right, zero fees while you onboard with us. Focus on growing your brand without worrying about big marketplace costs.'
						no='2'
						expand={expand}
						setExpand={setExpand}
					/>
					<PartnerWithUs
						title='Quick Commerce Transition'
						content='Our Quick Commerce model means fashion arrives in 60 minutes, turning browsers into buyers faster than ever before. Watch your sales soar as we handle the speed, and you focus on the style.'
						no='3'
						expand={expand}
						setExpand={setExpand}
					/>
					<PartnerWithUs
						title='5x UGC Explosion'
						content='Stop paying for content creation! With Kandid, your customers become your best promoters. We incentivize them with cashback, boosting user-generated content (UGC) creation. That means 5x more buzz, more sales, and a massive increase in brand trust—win-win!'
						no='4'
						expand={expand}
						setExpand={setExpand}
					/>
				</div>
				<div className='apply-now'>
					<h4>don’t miss the Quick commerce transition</h4>

					<h1>
						<a href='https://forms.gle/ax75x8qEqBAqqtzP7'>apply now</a>
					</h1>
				</div>

				<div className='what-it-takes'>
					<div className='text'>
						<h2>What it takes to partner with KANDID ?</h2>
						<h3>
							We keep it simple—just a few essentials to ensure only top-quality
							brands join the Kandid crew
						</h3>
					</div>
					<div className='posts-container'>
						<div className='posts'>
							<div className='post'>
								<h4>Enthusiasm for Quick Commerce</h4>
								<h5>
									Your Enthusiasm is all we need to make it happen.We’re moving
									at the speed of style 60-minute deliveries, rapid trends, and
									endless possibilities
								</h5>
							</div>
							<div>
								<h4>Price It Right</h4>
								<h5>
									Fashion that oozes out of pocket ? Not our vibe. We work
									within the sweet spot—products priced under 4000. Affordable
									luxury is the name of the game!
								</h5>
							</div>
						</div>
						<div className='posts'>
							<div>
								<h4>Top-Notch Quality</h4>
								<h5>
									Your products should meet our high-quality standards because,
									let’s face it—fashion forward people don’t compromise on style
									or substance
								</h5>
							</div>
							<div className='post'>
								<h4>Your Digital Runway</h4>
								<h5>
									A sleek and functional website shows you mean a business. If
									you’ve got a website, you’re already halfway to being a Kandid
									star!
								</h5>
							</div>
						</div>
					</div>
				</div>

				<div className='process'>
					<h1>Our Onboarding Process</h1>
					<ProcessNavBar />
				</div>
			</div>
			<Footer />
		</>
	);
}

function ProcessNavBar() {
	const data = [
		'Start  by filling out our partner form. It’s the first step to join the Kandid family and showcase your brand’s offerings!',
		'Our team will check out your website and social media. We’re here to ensure your vibe aligns with ours. Let’s see how we can make fashion magical together!',
		'Our team will schedule a call within 48  hours of your form completion  if your brand  passes our review process to dive deeper into your brand and answer any questions you have about our onboarding process and Kandid. Communication is key to our partnership!',
		'Send a product sample of the item we’ve selected to our address. Remember, the cost of shipping is on you, but think of it as an investment in your Q- Commerce journey with us!',
	];
	const [NavActive, setNavActive] = useState(1);

	return (
		<>
			<div className='nav-bar'>
				<ul>
					<li>
						<div
							className={NavActive == 1 ? 'focused' : 'not-focused'}
							onClick={() => setNavActive(1)}
						>
							Partner Form Filling
						</div>
					</li>
				</ul>
				<ul>
					<li>
						<div
							className={NavActive == 2 ? 'focused' : 'not-focused'}
							onClick={() => setNavActive(2)}
						>
							Team Review
						</div>
					</li>
				</ul>
				<ul>
					<li>
						<div
							className={NavActive == 3 ? 'focused' : 'not-focused'}
							onClick={() => setNavActive(3)}
						>
							Clarity Call
						</div>
					</li>
				</ul>
				<ul>
					<li>
						<div
							className={NavActive == 4 ? 'focused' : 'not-focused'}
							onClick={() => setNavActive(4)}
						>
							Product Testing
						</div>
					</li>
				</ul>
			</div>
			<h2>
				{data[NavActive - 1]}
				<a href='https://forms.gle/ax75x8qEqBAqqtzP7'>Apply Now!!!</a>
			</h2>
		</>
	);
}

function PartnerWithUs({ title, content, no, expand, setExpand }) {
	return (
		<>
			<div className='text'>
				<h2
					style={
						expand
							? { boxShadow: '0 2px 3px 0 #00000020' }
							: { boxShadow: '0 0px 0px 0 #00000030' }
					}
					onClick={() => {
						expand == no ? setExpand(0) : setExpand(no);
					}}
				>
					<div>
						0{no} &nbsp;&nbsp;{title}
					</div>
					<div className={expand == no ? 'arrow active' : 'arrow'}></div>
				</h2>
				<AnimatePresence>
					{
						<motion.h3
							initial={{
								opacity: 0,
								height: 0,
								borderRadius: '10px',
							}}
							animate={expand == no ? { opacity: 1, height: 'auto' } : {}}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							key={1}
							onClick={() => {
								setExpand(0);
							}}
						>
							<div>{content}</div>
						</motion.h3>
					}
				</AnimatePresence>
			</div>
		</>
	);
}

export default BrandOnboarding;
