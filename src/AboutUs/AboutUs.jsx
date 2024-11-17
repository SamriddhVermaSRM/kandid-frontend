import Footer from '../Components/Footer';
import TopText from '../Components/TopText';

function AboutUs() {
	return (
		<>
			<TopText />
			<div className='about-us'>
				<h1>About-us</h1>

				<div className='text'>
					KANDID is redefining fashion for the modern shopper. Featuring curated
					trends from homegrown brands we aim at elevating shopping experience
					by delivering handpicked pieces in just 60 mins.
					<br />
					<br />
					Let’s dive deeper into how KANDID benefits both shoppers and brands
					alike.
					<br />
					<br />
					For the Fashion-Forward Shopper : Dear Gen Z and millennials, we
					understand that most of the shopping decisions are influenced by the
					fashion content people engage with on social media. But let’s face it:
					finding your unique style on Myntra, AJio, etc. is tough, and trusting
					Instagram stores can be a major hit or miss.
					<br />
					<br />
					That's where KANDID steps in! We’re not about the mainstream,
					seen-everywhere pieces: we curate exclusive styles, tailored to your
					taste, to be delivered at your doorstep in just 60 minutes.
					<br />
					<br /> You’ll love our "TRY AND BUY" feature, allowing you to test
					items before you commit.
					<br />
					<br />
					For any query or help call us on :{' '}
					<a href='tel:9305709846'>9305709846</a> || Send your query on :{' '}
					<a href='mailto:officiallykandid@gmail.com'>
						officiallykandid@gmail.com
					</a>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default AboutUs;
