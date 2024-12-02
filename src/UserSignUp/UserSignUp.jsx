import Footer from '../Components/Footer/Footer';
import UserSignUpForm from '../Components/Forms/UserSignUpForm';
import TopText from '../Components/TopBars/TopText.jsx';

function UserSignUp() {
	return (
		<>
			<TopText />
			<div className='user-sign-up'>
				<UserSignUpForm />

				<div className='kandidate'>
					<h1>
						Why become a <span>KANDIDate</span> ?
					</h1>
					<div className='kandidate-cards'>
						<h2>
							Because you deserve instant gratification <br /> with zero
							commitment!
						</h2>
						<div>
							<h2>Like it?</h2>
							<h2>Want it!?</h2>
							<h2>Just get it!!!....</h2>
						</div>
						<h2>That's how we match your vibe at KANDID</h2>
						<h2>
							We're here to deliver hot off-the-rack <br />
							looks at your doorstep in just 60 minutes
						</h2>
						<h2>With a try n buy option</h2>
						<h2>
							Get ready to embark on a closet <br /> glow up journey with us!
						</h2>
						<h2>
							Don't miss out bro, fashion <br /> slay is just a click away!
						</h2>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default UserSignUp;
