import { useState } from 'react';

function UserSignUpForm() {
	const url = import.meta.env.VITE_URL;

	const [student, setStudent] = useState(false);
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

		await fetch(url + '/api/forms/user-signup/save', {
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
		alert('Your response has been recorded');
		window.location.reload();
	};

	return (
		<>
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
		</>
	);
}

export default UserSignUpForm;
