import TopText from '../Components/TopBars/TopText.jsx';
import Footer from '../Components/Footer/Footer';
import ContactUsForm from '../Components/Forms/ContactUsForm';

function ContactUs() {
	return (
		<>
			<TopText />
			<div className='contact-us'>
				<h1>Slide Into Our DMs</h1>
				<h4>
					Whether you’re an early access user, a founder, a brand wanting to
					collab, an investor, someone who wants to contribute to our team or
					even a hater or stalker don’t be shy, Hit us up, we love hearing from
					EVERYONE!
				</h4>
				<ContactUsForm />
			</div>
			<Footer />
		</>
	);
}

export default ContactUs;
