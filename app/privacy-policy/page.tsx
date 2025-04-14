'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="h-10 w-10 overflow-hidden">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800">Ryn VPN</span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/#pricing"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                Pricing
                            </Link>
                        </nav>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            Download Now
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4 bg-purple-900 bg-opacity-80">
                <div className="container mx-auto max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-md">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Last updated: January 1, 2023
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <div className="mb-8 text-center">
                            <h2 className="text-3xl font-bold text-purple-900 mb-2">
                                Privacy Policy
                            </h2>
                            <p className="text-xl text-purple-700 font-semibold">
                                Ryn VPN Is Committed To Safeguard Your Privacy
                            </p>
                        </div>

                        <p>
                            Ryn VPN is committed to protecting your privacy. We want you to
                            understand what information we collect, what we don't collect, and how
                            we collect, use, and store information. We do not collect logs of your
                            activity, including no logging of browsing history, traffic destination,
                            data content, or DNS queries. We also never store connection logs,
                            meaning no logs of your IP address, your outgoing VPN IP address,
                            connection timestamp, or session duration.
                        </p>

                        <p>
                            Our guiding principle toward data collection is to collect only the
                            minimal data required to operate a world-class VPN service at scale. We
                            designed our systems to not have sensitive data about our customers;
                            even when compelled, we cannot provide data that we do not possess.
                        </p>

                        <p>
                            This privacy policy will help you understand how Human Data Systems
                            Private Ltd. ("Ryn VPN," "we," "our," or "us") collects, uses, and
                            stores information.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            General Information
                        </h2>
                        <p>Ryn VPN collects four types of information:</p>
                        <ul className="list-disc pl-6 mb-6">
                            <li>
                                <strong>
                                    Information related to your account ("personal information")
                                </strong>
                                <br />
                                This information is collected for the purpose of administering your
                                Ryn VPN subscription and includes your name, email address, and
                                payment information, which you submit on our order page when you
                                subscribe for the Services.
                            </li>
                            <li>
                                <strong>
                                    Aggregate Apps and VPN connection summary statistics
                                </strong>
                                <br />
                                Ryn VPN collects minimal information about usage in order to
                                maintain excellent customer support and quality of service. The
                                section below specifies in detail what information we collect. These
                                statistics never include anything about what the user did with the
                                VPN: no data about the contents or destinations of VPN traffic, no
                                DNS queries, and no IP addresses.
                            </li>
                            <li>
                                <strong>
                                    (User-controlled option): Anonymous app diagnostics, including
                                    crash reports
                                </strong>
                                <br />
                                App diagnostic data, which include crash reports, usability
                                diagnostics, and VPN connection diagnostics, are anonymized and
                                cannot be tied back to individual Ryn VPN users. This feature is
                                similar to a "send bug report" option. Users can specify in the
                                settings menu of any Ryn VPN App whether to send these data to us.
                            </li>
                        </ul>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Personal Information
                        </h2>
                        <p>
                            Ryn VPN collects personal information that you provide to us directly
                            through the Site. We require that you provide personal information, such
                            as an email address and payment information, in order to establish a Ryn
                            VPN account, and so that we can email you, collect payments from you,
                            and respond to support queries that you initiate. The specific
                            information collected varies depending on the payment method you choose.
                            To minimise the amount of personal information you submit to us, we
                            recommend that you use Bitcoin payments when subscribing to our Service.
                        </p>

                        <p>
                            With some forms of payment, the Site may redirect you to the website of
                            a third-party payment processor (namely PayPal, BitPay, or Paymentwall)
                            to complete the transaction. To understand what personal information
                            these processors collect and store, please refer to the respective
                            processor's terms and privacy policy.
                        </p>

                        <p>Ryn VPN uses your email address for the following reasons:</p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>To send emails related to payment transactions.</li>
                            <li>To provide links to our Site, including password reset emails.</li>
                            <li>To send you updates and announcements.</li>
                            <li>
                                To communicate with you about your VPN services or respond to your
                                communications.
                            </li>
                            <li>
                                To send marketing information, such as Ryn VPN offers, surveys,
                                invitations, and content about other matters in connection with Ryn
                                VPN ("Marketing emails"). You may choose to not receive Marketing
                                emails by following the opt-out procedure described in these emails.
                            </li>
                        </ul>

                        <p>
                            Ryn VPN uses your personal information only for the purposes listed in
                            this Privacy Policy, and we do not sell your personal information to
                            third parties.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Aggregate Apps and VPN Connection Summary Statistics
                        </h2>
                        <p>
                            We ensure that we never log browsing history, traffic destination, data
                            content, IP addresses, or DNS queries. Therefore:
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>
                                We do not know which user ever accessed a particular website or
                                service.
                            </li>
                            <li>
                                We do not know which user was connected to the VPN at a specific
                                time or which VPN server IP addresses they used.
                            </li>
                            <li>
                                We do not know the set of original IP addresses of a user's
                                computer.
                            </li>
                        </ul>

                        <p>
                            Should anyone try to compel Ryn VPN to release user information based on
                            any of the above, we cannot supply this information because the data
                            don't exist.
                        </p>

                        <p>
                            In order to maintain excellent customer support and quality of service,
                            Ryn VPN collects the following information related to your VPN usage:
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Apps and Apps versions
                        </h3>
                        <p>
                            We collect information related to which Apps and Apps version(s) you
                            have activated. Knowing your current version of the Apps allows our
                            Support Team to troubleshoot technical issues with you.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Successful connection
                        </h3>
                        <p>
                            We collect information about whether you have successfully established a
                            VPN connection on a particular day (but not a specific time of the day),
                            to which VPN location (but not your assigned outgoing IP address), and
                            from which country/ISP (but not your source IP address). This minimal
                            information assists us in providing technical support, such as
                            identifying connection problems, providing country-specific advice about
                            how to best use our Service, and to enable Ryn VPN engineers to identify
                            and fix network issues.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Aggregate sum of data transferred (in MB)
                        </h3>
                        <p>
                            We collect information regarding the total sum of data transferred by a
                            given user. Although we provide unlimited data transfer, if we notice
                            that a single user pushes more traffic than thousands of others
                            combined, thereby affecting the quality of service for other Ryn VPN
                            users, we may contact that user for an explanation.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">Summary</h3>
                        <p>
                            We collect minimal usage statistics to maintain our quality of service.
                            We may know, for example, that our customer John had connected to our
                            New York VPN location on Tuesday and had transferred an aggregate of 823
                            MB of data across a 24-hour period. John can't be uniquely identified as
                            responsible for any specific behaviour because his usage pattern
                            overlaps with thousands of other Ryn VPN customers who also connected to
                            the same location on the same day.
                        </p>

                        <p>
                            We've engineered our systems to categorically eliminate storage of
                            sensitive data. We may know THAT a customer has used Ryn VPN, but we
                            never know HOW they have utilised our Service. We stand by our firm
                            commitment to our customers' privacy by not possessing any data related
                            to a user's online activities.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Anonymous App Diagnostics, including Crash Reports (can be turned off by
                            the user)
                        </h2>
                        <p>
                            With your permission, we collect anonymized app diagnostic data, which
                            include crash reports, usability diagnostics, and VPN connection
                            diagnostics. We use these data in our network operations tools to help
                            optimize network speeds and to let us identify problems and areas for
                            improvement related to specific apps, VPN servers, or ISPs. The
                            information we receive is fully anonymized and cannot be tied back to
                            individual Ryn VPN users (i.e., we do not store which user sent which
                            data, and we do not store user IP addresses).
                        </p>

                        <p>
                            If you opt in to share this information with Ryn VPN, we will collect
                            the following anonymized information:
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>
                                Diagnostic information about if and how a VPN connection attempt
                                failed.
                            </li>
                            <li>Speed test data.</li>
                            <li>
                                App diagnostics, including crash reports and usability diagnostics,
                                also without any personally identifiable information. These are
                                handled in an anonymized form by these third parties, dependent on
                                the platform you are using Ryn VPN on:
                                <ul className="list-disc pl-6 mt-2">
                                    <li>
                                        Windows: Hockeyapp, owned by Microsoft, and Sentry, owned by
                                        Functional Software, Inc. See Microsoft's Privacy Policy and
                                        Sentry's Privacy Policy.
                                    </li>
                                    <li>
                                        Mac: Crashlytics, owned by Google, and Sentry, owned by
                                        Functional Software, Inc. See Crashlytics's Privacy Policy
                                        and Sentry's Privacy Policy.
                                    </li>
                                    <li>
                                        Linux: Sentry, owned by Functional Software, Inc. See
                                        Sentry's Privacy Policy.
                                    </li>
                                    <li>
                                        iOS: Firebase Crashlytics, owned by Google, and Apple. See
                                        Apple's Privacy Policy and Firebase's Privacy and Security
                                        documentation. You can disable Apple's crash reporting in
                                        iOS settings as described here.
                                    </li>
                                    <li>
                                        Android: Firebase Crashlytics, owned by Google. See
                                        Firebase's Privacy and Security documentation.
                                    </li>
                                    <li>
                                        Browser extensions: Firebase Analytics, owned by Google. See
                                        Firebase's Privacy and Security documentation.
                                    </li>
                                </ul>
                            </li>
                        </ul>

                        <p>
                            Upon activation of any Ryn VPN App, you will be asked if you would like
                            to share these data. You can start or stop sharing these diagnostic data
                            at any time in the App's settings menu. On iOS, Apple's crash reporting
                            can be turned off in iOS settings.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            MediaStreamer
                        </h2>
                        <p>
                            MediaStreamer is our service for consoles like Apple TV and other
                            devices that don't support running a VPN. Because the service doesn't
                            run on an app and doesn't have an option for username/password
                            authorization, we rely on a system that authorizes specific IP addresses
                            that you have chosen to register with us. You can register IP addresses
                            by logging in to our website and using the "DNS Settings" page. Those IP
                            addresses are then stored in our system in order to identify authorized
                            devices for MediaStreamer, and are not used for any other purpose.
                        </p>

                        <p>
                            If you do not wish to use this service but have devices like an Apple TV
                            that cannot run a VPN, we suggest using the Ryn VPN App for routers.
                            Like all of our Apps and VPN Service, the App for routers does not
                            require IP address registration. Please contact us, and we'll guide you
                            through the steps.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Jurisdiction and Applicable Law
                        </h2>
                        <p>
                            Ryn VPN's core mission is to keep your information private. In service
                            of this mission, Ryn VPN's headquarters and registered place of business
                            is in the British Virgin Islands (BVI), which has stricter laws
                            concerning information disclosure than most countries.
                        </p>

                        <p>
                            The BVI has no data retention laws, and any legal order requiring a BVI
                            company to disclose customer records must come from the BVI Supreme
                            Court. Under BVI law, information requests from foreign courts or law
                            enforcement are subject to a "dual criminality" provision, meaning that
                            the request is upheld by the BVI Supreme Court only if the same crime is
                            punishable by at least a one-year prison sentence under BVI law, had it
                            taken place in the BVI. Should we receive a valid legal order from the
                            BVI Supreme Court, it is important to note that Ryn VPN does not collect
                            any IP addresses, browsing history, traffic data, or DNS queries that
                            could be used to identify any specific user.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Storing of Information Related to Email, Live Chat, and Feedback Forms
                        </h2>
                        <p>
                            Ryn VPN keeps records of any correspondence, questions, complaints, or
                            compliments you submit to us through our Site or Services, along with
                            our response. Depending on how you contact Ryn VPN, we may collect your
                            email address and any additional information you provide to us. Having
                            full correspondence records enables our staff to provide the best
                            possible customer support experience.
                        </p>

                        <p>
                            We use two different third-party platforms for support correspondence:
                            Zoho CRM for emails and support tickets, and Zoho Desk for live chat.
                            When you correspond with us using these platforms, they will store your
                            correspondence records—including your email address, as well as user and
                            device attributes that help with troubleshooting, such as the country
                            you are contacting us from and your device's operating system. Both
                            platforms utilize modern security practices and HTTPS encryption.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Security Measures to Protect Your Information
                        </h2>
                        <p>
                            Ryn VPN uses best-in-class physical, procedural, and technical security
                            with respect to our offices and information storage facilities so as to
                            prevent any loss, misuse, unauthorized access, disclosure, or
                            modification of information. Access to user information is restricted to
                            staff who require such access to perform their job functions.
                        </p>

                        <p>
                            While we believe these systems are robust, it is important to understand
                            that no data security measures in the world can offer 100% protection.
                        </p>

                        <p>
                            Servers are housed in data centers with strong security practices. None
                            of these data centers require us to collect or store any traffic data or
                            personal information related to your use of VPN Services. If any data
                            center were to ask us to log such data, we would immediately cease
                            operations with said data center and find alternative options.
                        </p>

                        <p>
                            Even if a government were to physically seize one of our VPN servers and
                            manage to break its disk encryption, there would be no logs or
                            information that would tie any individual user to a particular event,
                            website, or behavior.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Cookies and Mobile Identifiers
                        </h2>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            What is a cookie?
                        </h3>
                        <p>
                            A cookie is a small text file used to store information about your visit
                            to the Site. Cookies let Ryn VPN optimize and improve the user
                            experience of the Site by helping us deliver certain functionalities,
                            such as website login and language settings. The cookies we use may vary
                            over time as we continuously update and improve our Site.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Disabling cookies
                        </h3>
                        <p>
                            You are free to change your cookie preferences at any time. You can do
                            this in the settings panel for your browser. Depending on which browser
                            and device you use, you may be able to control which cookies you allow,
                            which cookies you want to block in the future, and delete cookies. For
                            more information about these settings, please refer to the "help"
                            section of your browser. Note that Ryn VPN's Site may not work as
                            intended if you choose to disable cookies.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Ryn VPN's cookies
                        </h3>
                        <p>
                            The cookies set by Ryn VPN enable us to set your language preference,
                            attribute visitors to a marketing channel, and, once you log in,
                            securely show you information that is specific to your account. The
                            cookies contain a user identifier, but no directly personally
                            identifying information such as your name or email address, and do not
                            track any activity outside of Ryn VPN's domains.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Third-party cookies
                        </h3>
                        <p>
                            Ryn VPN uses third-party services such as Google Analytics and Adwords.
                            Cookies from such services are used to collect data for statistical
                            reports. For example, we may generate reports regarding the amount of
                            time users spend on the Site and the number of users who visit a
                            particular page.
                        </p>

                        <p>
                            Ryn VPN uses Google AdWords remarketing to show advertisements on
                            third-party websites (including Google) to users who have visited our
                            Site. We may show such users advertisements on a Google search results
                            page, or on a site in the Google Display Network.
                        </p>

                        <p>
                            Third-party vendors, including Google, use cookies to serve ads based on
                            someone's past visits to the Site. Any data collected will be used in
                            accordance with our Privacy Policy and Google's privacy policy. Users
                            may opt out of Google's use of cookies by visiting the Google
                            Advertising Opt-out Page. Users may opt out of Google Analytics by
                            visiting the Google Analytics Opt-out Page. Users may opt out of
                            third-party vendor use of cookies by visiting the Network Advertising
                            Initiative Opt-out Page.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Mobile identifiers
                        </h3>
                        <p>
                            A mobile identifier is an identifier provided by an Android or iOS
                            device. It does not contain your name or email address. Ryn VPN uses
                            mobile identifiers to generate statistics related to the marketing
                            channels and advertising partners through which users learned about and
                            signed up for Ryn VPN mobile apps.
                        </p>

                        <h3 className="text-xl font-bold text-purple-800 mt-6 mb-2">
                            Disabling or resetting mobile identifiers
                        </h3>
                        <p>
                            Users may disable or reset the mobile identifiers associated with their
                            devices at any time. For instructions, see Apple's page on Advertising &
                            Privacy on iOS devices and Google's page on Managing your Google
                            Settings on your Android device.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Third-Party Websites
                        </h2>
                        <p>
                            The Site may contain links to external websites that do not fall under
                            Ryn VPN's domain. Ryn VPN is not responsible for the privacy practices
                            or content of such external websites.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Consent and Age Restrictions
                        </h2>
                        <p>
                            By using the Site, Content, Apps, Software, or Services, you agree to
                            have your information handled as described in our Terms of Service and
                            Privacy Policy.
                        </p>

                        <p>
                            The Services are intended for adults aged 18 and above. If you believe
                            your child has provided information to us, please let us know
                            immediately.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Users in the European Union
                        </h2>
                        <p>
                            Ryn VPN is committed to user privacy globally, and our existing
                            practices reflect that through minimal collection of data and ensuring
                            users have control over their personal information. The General Data
                            Protection Regulation (GDPR) of the European Union (EU) requires us to
                            outline those practices in a specific manner for users in the EU.
                        </p>

                        <p>
                            In line with the GDPR, we collect and process the data outlined in this
                            Privacy Policy on one of the following bases, depending on the
                            circumstances:
                        </p>

                        <ul className="list-disc pl-6 mb-6">
                            <li>
                                For the purposes of fulfilling our contractual obligations to users,
                                including:
                                <ul className="list-disc pl-6 mt-2">
                                    <li>
                                        Providing users with the Services and Apps they have
                                        requested.
                                    </li>
                                    <li>Managing user subscriptions and processing payments.</li>
                                    <li>Providing customer support.</li>
                                </ul>
                            </li>
                            <li>
                                For a legitimate interest associated with the operation of our
                                business, including:
                                <ul className="list-disc pl-6 mt-2">
                                    <li>
                                        Enhancing the quality, reliability, and effectiveness of our
                                        Site, Services, and Apps.
                                    </li>
                                    <li>
                                        Communicating with customers to provide information and seek
                                        feedback related to our Services and Apps.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                With the consent of users, which users can withdraw at any time.
                            </li>
                        </ul>

                        <p>
                            You can exercise your rights under the GDPR to access, transfer,
                            correct, delete, or object to the processing of your personal
                            information by contacting us at at bugs@rynvpn.com.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">
                            Changes to the Privacy Policy
                        </h2>
                        <p>
                            We may change our Privacy Policy from time to time, without prior notice
                            to you, consistent with applicable privacy laws and principles. Your
                            continued use of the Site or Services constitutes your acceptance of our
                            Privacy Policy.
                        </p>

                        <h2 className="text-2xl font-bold text-purple-900 mb-4 mt-8">Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us
                            at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mt-4">
                            <p>
                                <strong>Human Data Systems Private Limited</strong>
                            </p>
                            <p>H NO.-8/9, BASEMENT ROAD-8,</p>
                            <p>SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                            <p>110017 IN</p>
                            <p className="mt-2">
                                <a
                                    href="mailto:bugs@rynvpn.com"
                                    className="text-purple-600 hover:text-purple-800"
                                >
                                    bugs@rynvpn.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="h-10 w-10 overflow-hidden">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <span className="text-xl font-bold text-purple-800">Ryn VPN</span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-purple-800">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/privacy-policy"
                                        className="text-purple-700 font-bold transition-colors"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-purple-800">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4 text-purple-800">Contact Us</h3>
                            <div className="text-gray-600 space-y-2">
                                <p>Human Data Systems Private Limited,</p>
                                <p>H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p>SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p>110017 IN</p>
                                <p className="pt-2">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-600 mb-4 md:mb-0">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
