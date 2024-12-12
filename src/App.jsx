import { NavBarContext } from './Components/NavBar/NavBar.context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import NavBar from './Components/NavBar/NavBar.component';
import TopBar from './Components/TopBar/TopBar.component';

import Home from './Pages/Home/Home.page';
import Signup from './Pages/Signup/Signup.page';
import BrandOnboarding from './Pages/BrandOnboarding/BrandOnboarding.page';
import ContactUs from './Pages/ContactUs/ContactUs.page';
import Footer from './Components/Footer/Footer.component';
import AboutUs from './Pages/AboutUs/AboutUs.page';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy.page';

function App() {
	const loc = window.location.pathname;
	console.log(loc);

	return (
		<>
			<NavBarContext.Provider value={loc}>
				<TopBar />
				<NavBar />
				<Router>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='/signup'
							element={<Signup />}
						/>
						<Route
							path='/onboarding'
							element={<BrandOnboarding />}
						/>
						<Route
							path='/contact-us'
							element={<ContactUs />}
						/>
						<Route
							path='/about-us'
							element={<AboutUs />}
						/>
						<Route
							path='/privacy-policy'
							element={<PrivacyPolicy />}
						/>
					</Routes>
				</Router>
				<Footer />
			</NavBarContext.Provider>
		</>
	);
}

export default App;
