import Footer from '../Components/Footer/Footer';
import TopText from '../Components/TopBars/TopText';

function PrivacyPolicy() {
	return (
		<>
			<TopText />
			<div className='privacy-policy'>
				<h1>Privacy Policy</h1>
				<div className='text'>
					At <span>Kandid</span>, we are committed to protecting the privacy and
					personal information of our users. This Privacy Policy outlines how we
					collect, use, and safeguard the information you provide to us while
					using our website <a href='/'>kandid.me</a> and our services.
					<h2>Information Collection:</h2>
					We collect certain personal information from our users, such as name,
					contact details, and preferences, when you voluntarily provide it to
					us during the registration process or while using our services.
					Additionally, we may automatically collect certain non-personal
					information, such as device information and website usage data,
					through cookies and similar technologies.
					<h2>Use of Information:</h2>
					We use the collected information to facilitate and improve our
					services, including but not limited to providing personalized property
					recommendations, facilitating communication between users, and
					enhancing user experience on our platform. We may also use the
					information for marketing and promotional purposes, with your consent.
					<h2>Information Sharing:</h2>
					We may share your personal information with third-party service
					providers, business partners, or affiliates who assist us in
					delivering our services or fulfilling your requests. However, we do
					not sell, rent, or lease your personal information to any third
					parties for their marketing purposes.
					<h2>Data Security:</h2>
					We take appropriate security measures to protect your personal
					information from unauthorized access, disclosure, alteration, or
					destruction. However, please note that no method of transmission over
					the internet or electronic storage is 100% secure, and we cannot
					guarantee absolute security of your data.
					<h2>Data Retention:</h2>
					We retain your personal information only for as long as necessary to
					fulfill the purposes outlined in this Privacy Policy or as required by
					law. We will securely delete or anonymize your information once it is
					no longer needed.
					<h2>Third-Party Links:</h2>
					Our website may contain links to third-party websites or services that
					are not owned or controlled by Kandid. We are not responsible for the
					privacy practices or content of these websites. We encourage you to
					review the privacy policies of any third-party sites or services
					before providing any personal information.
					<h2>Updates to Privacy Policy:</h2>
					We reserve the right to update or modify this Privacy Policy at any
					time. Any changes will be effective immediately upon posting on our
					website. It is your responsibility to review this Privacy Policy
					periodically to stay informed about our practices.
					<br />
					If you have any questions or concerns about our Privacy Policy or the
					use of your personal information, please contact us at
					<a href='mailto:officiallykandid@gmail.com'>
						officiallykandid@gmail.com
					</a>
					<br />
					By using our website and services, you acknowledge that you have read
					and understood this Privacy Policy and consent to the collection, use,
					and disclosure of your information as described herein.
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PrivacyPolicy;
