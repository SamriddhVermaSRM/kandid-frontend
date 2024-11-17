import TopText from '../Components/TopText';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

function ContactUs() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const phone = e.target.phone.value;
		const message = e.target.message.value;

		const data = {
			name: name,
			email: email,
			phone: phone,
			message: message,
		};

		await fetch('http://localhost:8080/forms/contact-us/save', {
			body: JSON.stringify(data),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => {
				console.log('respnse : ', res);
			})
			.then((data) => {
				console.log('data : ', data);
			})
			.catch((err) => {
				console.log('error : ', err);
			});
		console.log(data);
	};

	return (
		<>
			<TopText />
			<div className='contact-us'>
				{/* <NavBar /> */}
				<h1>Slide Into Our DMs</h1>
				<h4>
					Whether you’re an early access user, a founder, a brand wanting to
					collab, an investor, someone who wants to contribute to our team or
					even a hater or stalker don’t be shy, Hit us up, we love hearing from
					EVERYONE!
				</h4>
				<form onSubmit={handleSubmit}>
					<h2>Contact Us</h2>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
						placeholder='Name'
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						id='email'
						placeholder='Email'
						required
					/>
					<label htmlFor='phone'>Phone</label>
					<input
						type='tel'
						id='phone'
						placeholder='Phone'
						required
					/>
					<label htmlFor='message'>Message</label>
					<textarea
						id='message'
						placeholder='Message'
					></textarea>
					<button>Submit</button>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default ContactUs;
