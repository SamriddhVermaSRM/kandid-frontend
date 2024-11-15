import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './styles.css';

import Home from './Home/Home';
import Error from './Error/Error-Not-Found';
import ContactUs from './Contact-Us/ContactUs';
import UserSignUp from './UserSignUp/UserSignUp';
import Navbar from './Components/Navbar';

function App() {
	const [url, setUrl] = useState(window.location.pathname);

	const handlePageNavigation = (e) => {
		e.preventDefault();
		// alert('event fired');s
		window.location.href = e.target.getAttribute('href');
		setUrl(e.target.getAttribute('href'));
	};

	useEffect(() => {
		document.querySelectorAll('a').forEach((a) => {
			a.addEventListener('click', handlePageNavigation);
		});
		return () => {
			document
				.querySelector('a')
				.removeEventListener('click', handlePageNavigation);
		};
	}, []);

	return (
		<>
			<Navbar url={url} />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>

				<Route
					path='/sign-up'
					element={<UserSignUp />}
				/>

				<Route
					path='/contact-us'
					element={<ContactUs />}
				/>

				<Route
					path='*'
					element={<Error />}
				/>
			</Routes>
		</>
	);
}
export default App;
