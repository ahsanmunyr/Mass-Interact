
import React , {useEffect, useState} from 'react'

function PrivacyPolicySection() {
  const [val, onSetVal] = useState(false)
  useEffect(() => {
    onSetVal(true)
  }, []);
  return (
    <section className="privacy-policy">
	<div className="container">
		<div className="heading-privacy">
			<h3>Privacy Policy</h3>
			<h6>Effective as of July 2017</h6>
		</div>
		<div className="new-heading-priv">
			<p className="p-privacy">This Privacy Policy (the “Policy”) applies to all of the products and services offered by Massinteract  through its website located at <a href="#"> www.massinteract.com </a>and through all other websites and platforms over which it delivers its products and services, including, but not limited to, third-party websites, client websites and those of their third party service providers (collectively, the “Platforms”).  We reserve the right to modify this Policy at any time, and we will notify you of any material changes to the Policy by posting the new Policy here and changing the “Effective Date” at the top. By using or navigating any of the Platforms or any portion of the Platforms, you acknowledge that you have read, understand and agree to be bound by this Policy or any modified Policy as posted. By using this website, you consent to the data practices described in this statement.</p>
		</div>
		<div className="new-heading-priv">
			<h3 className="h-privacy">
				Collection and Use of Personal Information.
			</h3>

			<p className="p-privacy">Massinteract.com is committed to preserving your right to privacy. While we don`t ask for any registration or personal information to browse our site, some information about your server address, Web browser, and computer system are automatically transmitted to our Web servers so that we can operate our site on the Internet. Massinteract does not collect identifying information about You (such as Your name, address, telephone number, and email address) unless You voluntarily submit that information to us through our Contact Us page, our Massinteract Newsletter page, to request a quote or other means.  Our website doesn`t not require users to provide us with personal information to use the Platforms. As a client, you do, however, have the option to provide us with certain limited personal information including, but not limited to, your name, the name of your school or college, your address, phone number, and email address. We may also collect information about you through a number of other methods including those outlined below.</p>

			<p className="p-privacy">
				When you visit any of the Platforms, we may collect certain anonymous demographic information about you, including, but not limited to, your IP address, zip code and browser program. We may also collect information regarding your use of the Platforms through the use of cookies (see below for more about cookies).
			</p>

			<p className="p-privacy">
				There is also information about your computer hardware and software that is automatically collected by this website. This information can include: your IP address, browser type, domain names, access times and referring Web site addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of this Web site.
			</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Cookies</h3>

			<p className="p-privacy">We use cookies on certain of the Platforms for various purposes, including, but not limited to, improving the quality of our products and services and storing user preferences. A cookie is a small file containing a string of characters that is stored on a user`s computer for record-keeping purposes. We link the information we store in cookies to personal information you provide to us.</p>

			<p className="p-privacy">We may also use third-party tracking services that use cookies to track non-personally identifiable information about users of certain of the Platforms in the aggregate, including, but not limited to, information with respect to usage of the Platforms.</p>

		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">LogFiles</h3>
			<p className="p-privacy">As is true of most Web sites, we use third-party tracking services to gather certain information automatically and store it in log files. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamp, and clickstream data.</p>
			<p className="p-privacy">We use this information, which does not identify individual users, to analyze trends, to administer the site, to track users movements around the site and to gather demographic information about our user base as a whole.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">How We Use Your Personal Information.</h3>
			<p className="p-privacy">We use your personal information for various purposes, including, but not limited to, to provide you with products or services that you have requested, to respond to questions or communications from you, and to contact you. In addition, we may send to you e-mails including, but not limited to, e-mails offering products or services which we think you may be interested in or to ask you to participate in a survey.</p>
			<p className="p-privacy">Where applicable, we may also use your information in order to process your credit card payments, to fulfill your orders and/or requests. We also use this information to compile broad demographic and usage information about our users in general that does not contain anything that could be used to identify you personally.</p>
			<p className="p-privacy">We may use IP addresses and anonymous demographic information to tailor your experiences at our Platforms by showing content in which we think you will be interested and displaying content according to your preferences.</p>
			<p className="p-privacy">We use information collected to evaluate and improve our services. We may develop and use, in our sole discretion, consumer research, which may be based on your use of our services.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">How We Share Your Personal Information.</h3>
			<p className="p-privacy">In some cases, we will share information we collect (including personal information and/or anonymous demographic information) with third party companies, including, but not limited to, parties that may offer products or services in which we believe you may be interested, and with colleges, universities and other entities with whom Massinteract has a customer or other contractual relationship, or prospective relationship. We also share this information with third parties with whom we partner to carry out promotions or other business activities, including but not limited to, co-promoting and administering sweepstakes and contests. </p>
			<p className="p-privacy">We may also share information we collect with third party service providers to manage certain aspects of the services we provide, such as maintaining our servers and processing or fulfilling orders for products and services you purchase through the Platforms.</p>
			<p className="p-privacy">We may also disclose your information in special cases if required to do so by law, court order or governmental authority or when we believe in good faith that disclosing this information is otherwise necessary or advisable, including, for instance, to identify, contact, or bring legal action against someone who may be causing injury to or interfering with the rights or property of Massinteract, another user or anyone else that could be harmed by such activities.</p>
			<p className="p-privacy">In the event of a change in ownership or a merger with, acquisition by, or sale of assets to, another entity, we reserve the right to transfer all information collected in connection with the Platforms, including, but not limited to, email addresses and other personal information, to a separate entity. </p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Receipt of Communications; Opt-Out.</h3>
			<p className="p-privacy">If you would prefer not to receive marketing or promotional e-mails from us that may relate, for example, to new product or services or offerings, you may opt-out of receiving these communications by writing to us at <a href="mailto:info@Massinteract.com">info@Massinteract.com</a> or by using the opt-out mechanism that is contained in an email.</p>
			<p className="p-privacy">Following your opt-out, please be aware that we, or our affiliates or clients, may continue to contact you by email or postal mail or other means for administrative or informational purposes, including, but not limited to, follow-up messages regarding the administration of your account, any products, services, features or functions you have affirmatively enrolled in or registered to use, goods, services or products you have ordered or other transactions you have undertaken across the Platforms.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Blogs, Discussion Groups and Other Community Tools.</h3>
			<p className="p-privacy">We may, from time to time, make blogs, discussion groups and other community tools available to you on certain sections of the Platforms. Any information that is disclosed in these areas becomes public information for other users to view and for us to use as we deem appropriate. You should carefully consider whether to disclose your personal information in these areas, since anyone may access your publicly posted information.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Links to Other Sites.</h3>
			<p className="p-privacy">The Platforms may contain links to other Internet sites, resources and sources of Massinteract. By clicking on any banner advertisement or other link, you will be redirected off the Platforms and to third party websites. Massinteract is not responsible for the privacy policies or content of such websites. You should make sure that you read and understand the privacy policies of these sites and direct any concerns regarding external links to the site administrator or webmaster of that third party website.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Security of Information.</h3>
			<p className="p-privacy">The security of your personal information is important to us. We follow generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet, or method of electronic storage, is entirely secure, however. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Information Regarding Children.</h3>
			<p className="p-privacy">We do not knowingly collect personal information from children under 13. If we learn that we have collected the personal information of a child under 13 we will take steps to delete the information as soon as possible.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">International Users.</h3>
			<p className="p-privacy">If you are visiting one of our Platforms from a location outside of the United States, your connection will be through and to servers located in the United States and all information you provide will be processed and maintained on our servers and internal systems located within the United States. IN ADDITION, IF YOU ARE LOCATED OUTSIDE THE UNITED STATES, YOU SHOULD NOTE THAT YOUR INFORMATION WILL BE TRANSFERRED TO THE UNITED STATES, THE LAWS OF WHICH MAY BE DEEMED BY OTHER COUNTRIES TO HAVE INADEQUATE DATA PROTECTION (see, for example, European Union Directive 95/46/EC of 24 October 1995, a copy of which can be found <a href="#"> here </a>). Users located in countries outside of the United States who submit personal information do thereby consent to the general use of such information as provided in this Privacy Policy and to the transfer of that information to and/or storage of the information in the United States.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">Changes to this Privacy Policy.</h3>
			<p className="p-privacy">We reserve the right, at our discretion, to modify this Privacy Policy at any time so please review it frequently.</p>
		</div>

		<div className="new-heading-priv">
			<h3 className="h-privacy">How to Contact Us.</h3>
			<p className="p-privacy">If you have any questions or concerns about this Privacy Policy you may contact us at<a href="mailto:info@Massinteract.com"> info@Massinteract.com</a></p>
		</div>

		<div className="new-heading-priv">
			<span>Last modified: July 2017</span>
		</div>

	</div>
</section>
  );
}

export default PrivacyPolicySection;


