import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import TopText from '../Components/TopText';
import { useState } from 'react';

function UserSignUp() {
	const [student, setStudent] = useState(false);
	console.log(student);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const phone = e.target.phone.value;
		const location = e.target.location.value;
		const student = e.target.student.value;
		const college = student === 'true' ? e.target.college.value : 'none';
		const message = e.target.message.value;

		const data = {
			name: name,
			email: email,
			phone: phone,
			location: location,
			student: student,
			college: college,
			message: message,
		};

		await fetch('http://localhost:8080/forms/user-signup/save', {
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
			<div className='user-sign-up'>
				<SignUpForm
					handleSubmit={handleSubmit}
					student={student}
					setStudent={setStudent}
				/>

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

function SignUpForm({ handleSubmit, student, setStudent }) {
	return (
		<form onSubmit={handleSubmit}>
			<h2>User Sign Up</h2>
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
				type='text'
				id='phone'
				placeholder='Phone'
				minLength={10}
				maxLength={13}
				required
			/>
			<label htmlFor='location'>Location</label>
			<input
				type='text'
				id='location'
				placeholder='Locality'
				required
			/>
			<div className='student'>
				<label>Are you a college student</label>
				<div>
					<input
						type='radio'
						name='student'
						value='true'
						id='student-yes'
						required
						onChange={() => setStudent(true)}
					/>
					<label htmlFor='student-yes'>Yes</label>
				</div>
				<div>
					<input
						type='radio'
						name='student'
						value='false'
						id='student-no'
						defaultChecked
						required
						onChange={() => setStudent(false)}
					/>
					<label htmlFor='student-no'>No</label>
				</div>
			</div>
			{student ? (
				<>
					<label htmlFor='college'>College Name</label>
					<input
						type='text'
						name='college'
						id='college'
						placeholder='College Name'
						required
					/>
				</>
			) : (
				<></>
			)}
			<label htmlFor='message'>Message</label>
			<textarea
				id='message'
				placeholder='Message If Any'
			></textarea>
			<button type='submit'>Sign Up</button>
		</form>
	);
}

export default UserSignUp;
