import Navbar from '../Components/Navbar';
import TopText from '../Components/TopText';

function UserSignUp() {
	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const email = e.target.email.value;
		const phone = e.target.phone.value;
		const password = e.target.password.value;

		const data = {
			name: name,
			email: email,
			phone: phone,
			password: password,
		};

		console.log(data);
	};

	return (
		<>
			<div className='user-sign-up'>
				<TopText />
				{/* <Navbar /> */}
				<h1>Sign Up</h1>
				<form onSubmit={handleSubmit}>
					<h2>Sign Up</h2>
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
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						placeholder='Password'
						required
					/>
					<button type='submit'>Sign Up</button>
				</form>
			</div>
		</>
	);
}

export default UserSignUp;
