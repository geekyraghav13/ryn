'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white">
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

                        {/* Back to Home */}
                        <Link
                            href="/"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-purple-900">
                    Privacy Policy
                </h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-6">Last Updated: June 15, 2023</p>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-4">
                        At Ryn VPN, we are committed to protecting your privacy and ensuring the
                        security of your personal information. This Privacy Policy explains how we
                        collect, use, disclose, and safeguard your information when you use our VPN
                        service, mobile application, and website.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Please read this Privacy Policy carefully. By accessing or using our
                        Service, you acknowledge that you have read, understood, and agree to be
                        bound by all the terms outlined in this Privacy Policy.
                    </p>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">
                        Information We Collect
                    </h2>

                    <h3 className="text-xl font-bold text-purple-700 mt-6 mb-3">
                        Personal Information
                    </h3>
                    <p className="text-gray-700 mb-4">
                        We may collect personal information that you voluntarily provide to us when
                        you:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>Register for our Service</li>
                        <li>Express interest in obtaining information about us or our products</li>
                        <li>Participate in activities on our platforms</li>
                        <li>Contact us</li>
                    </ul>
                    <p className="text-gray-700 mb-4">Personal information may include:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>Email address</li>
                        <li>Username</li>
                        <li>
                            Payment information (processed by our third-party payment processors)
                        </li>
                    </ul>

                    <h3 className="text-xl font-bold text-purple-700 mt-6 mb-3">
                        VPN Usage Information
                    </h3>
                    <p className="text-gray-700 mb-4">
                        <strong>We do NOT collect, store, or log:</strong>
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>
                            Your browsing history, traffic destination, data content, or DNS queries
                        </li>
                        <li>Your IP address when connected to our VPN service</li>
                        <li>Connection timestamps or session duration</li>
                        <li>Your bandwidth usage or network traffic</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        <strong>We DO collect:</strong>
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>Aggregate information about total bandwidth usage</li>
                        <li>Server load information for maintenance purposes</li>
                        <li>Information about app usage to identify and fix technical issues</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">
                        How We Use Your Information
                    </h2>
                    <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>Provide, maintain, and improve our Service</li>
                        <li>Process transactions and send related information</li>
                        <li>
                            Send administrative information, such as updates, security alerts, and
                            support messages
                        </li>
                        <li>Respond to customer service requests and support needs</li>
                        <li>Prevent fraudulent transactions and monitor against theft</li>
                        <li>Improve our marketing and promotional efforts</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">
                        Disclosure of Your Information
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We may disclose your information in the following situations:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>
                            <strong>Business Transfers:</strong> If we are involved in a merger,
                            acquisition, or sale of all or a portion of our assets.
                        </li>
                        <li>
                            <strong>To Affiliates:</strong> We may share your information with our
                            affiliates, in which case we will require those affiliates to honor this
                            Privacy Policy.
                        </li>
                        <li>
                            <strong>To Business Partners:</strong> We may share your information
                            with our business partners to offer you certain products, services, or
                            promotions.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> We may disclose your information
                            where required to do so by law or in response to valid requests by
                            public authorities.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">
                        Security of Your Information
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We use administrative, technical, and physical security measures to protect
                        your personal information. While we have taken reasonable steps to secure
                        the information you provide to us, please be aware that no security measures
                        are perfect or impenetrable, and no method of data transmission can be
                        guaranteed against interception or other types of misuse.
                    </p>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">
                        Your Privacy Rights
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Depending on your location, you may have certain rights regarding your
                        personal information, such as:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700">
                        <li>The right to access personal information we hold about you</li>
                        <li>The right to request correction of inaccurate personal information</li>
                        <li>The right to request deletion of your personal information</li>
                        <li>The right to object to processing of your personal information</li>
                        <li>The right to data portability</li>
                        <li>The right to withdraw consent</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        To exercise these rights, please contact us using the information provided
                        in the "Contact Us" section below.
                    </p>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">
                        Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of
                        any changes by posting the new Privacy Policy on this page and updating the
                        "Last Updated" date. You are advised to review this Privacy Policy
                        periodically for any changes.
                    </p>

                    <h2 className="text-2xl font-bold text-purple-800 mt-8 mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg mb-8">
                        <p className="text-gray-700">Human Data Systems Private Limited,</p>
                        <p className="text-gray-700">H NO.-8/9, BASEMENT ROAD-8,</p>
                        <p className="text-gray-700">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                        <p className="text-gray-700">110017 IN</p>
                        <p className="text-gray-700 mt-2">
                            <a
                                href="mailto:bugs@rynvpn.com"
                                className="text-purple-600 hover:text-purple-800"
                            >
                                bugs@rynvpn.com
                            </a>
                        </p>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white py-8 px-4 border-t border-purple-100 shadow-inner">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center">
                        <p className="text-gray-600">© 2025 Ryn VPN - All Rights Reserved.</p>
                        <p className="text-gray-600 mt-2">
                            <Link
                                href="/"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                            >
                                Back to Home
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
('use client');

import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white"
            data-oid="_sqdh1_"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100"
                data-oid="2ssdgz:"
            >
                <div className="container mx-auto px-4 py-4" data-oid="ffocs38">
                    <div className="flex justify-between items-center" data-oid="j1q15n_">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2" data-oid="1he_73u">
                            <div className="h-10 w-10 overflow-hidden" data-oid="9pr9cxf">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="hkatje1"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800" data-oid="w-u13vt">
                                Ryn VPN
                            </span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="hz6t3hf">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid=":l5q9_e"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="3:54kqr"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="ymbc5rq"
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/#pricing"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="p6waodp"
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
                            data-oid="ajx03_9"
                        >
                            Download Now
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 px-4 bg-purple-900 bg-opacity-80" data-oid="kdcj_.h">
                <div className="container mx-auto max-w-6xl text-center" data-oid="rwwp.n.">
                    <h1
                        className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-md"
                        data-oid="tepghd9"
                    >
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto" data-oid="tx:yiuy">
                        Last updated: January 1, 2023
                    </p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 px-4 bg-white" data-oid="8q1zlmv">
                <div className="container mx-auto max-w-4xl" data-oid="qka-e2e">
                    <div className="prose prose-lg max-w-none text-gray-700" data-oid="z54llp9">
                        <h2 className="text-2xl font-bold text-purple-900 mb-4" data-oid="dr6jgjd">
                            Introduction
                        </h2>
                        <p data-oid="710tgc.">
                            Human Data Systems Private Limited ("we", "our", "us", or "Ryn VPN") is
                            committed to protecting your privacy. This Privacy Policy explains how
                            we collect, use, disclose, and safeguard your information when you use
                            our Ryn VPN application and related services (collectively, the
                            "Service").
                        </p>
                        <p data-oid="k-xh0i2">
                            Please read this Privacy Policy carefully. By accessing or using our
                            Service, you acknowledge that you have read, understood, and agree to be
                            bound by all the terms outlined in this Privacy Policy. If you do not
                            agree with our policies and practices, please do not use our Service.
                        </p>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="9808rr."
                        >
                            Information We Collect
                        </h2>
                        <p data-oid="2d-f.a1">
                            We are committed to maintaining a strict no-logs policy. This means we
                            do not collect, store, or monitor any logs of your online activities,
                            including browsing history, traffic data, or DNS queries.
                        </p>
                        <p data-oid="f-r12q.">
                            However, we do collect minimal information necessary to provide and
                            improve our Service:
                        </p>
                        <ul className="list-disc pl-6 mb-6" data-oid="pmusgsh">
                            <li data-oid=":kkdt5c">
                                <strong data-oid="d_uzafg">Account Information:</strong> When you
                                create an account, we may collect your email address and payment
                                information.
                            </li>
                            <li data-oid="byp0pig">
                                <strong data-oid="kgs7h15">Aggregate Usage Statistics:</strong> We
                                collect anonymous, aggregate data about the performance of our
                                Service, such as server load and total bandwidth usage. This
                                information cannot be used to identify individual users.
                            </li>
                            <li data-oid="s-z0zv:">
                                <strong data-oid="7lov4_d">App Analytics:</strong> We collect
                                anonymous data about how the app functions to identify and fix
                                technical issues and improve user experience.
                            </li>
                        </ul>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="whakh_v"
                        >
                            How We Use Your Information
                        </h2>
                        <p data-oid="joak0td">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="list-disc pl-6 mb-6" data-oid=".xld5a2">
                            <li data-oid="fi2dq9:">
                                To provide, maintain, and improve our Service
                            </li>
                            <li data-oid="lg.vmbd">
                                To process your transactions and manage your account
                            </li>
                            <li data-oid="g_v.dvn">
                                To send you technical notices, updates, security alerts, and support
                                messages
                            </li>
                            <li data-oid="goze-ro">
                                To respond to your comments, questions, and requests
                            </li>
                            <li data-oid="jwzo662">
                                To monitor and analyze trends, usage, and activities in connection
                                with our Service
                            </li>
                            <li data-oid="hx8kauj">
                                To detect, prevent, and address technical issues
                            </li>
                        </ul>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid=".n3yobi"
                        >
                            Data Security
                        </h2>
                        <p data-oid="70wg:6k">
                            We implement appropriate technical and organizational measures to
                            protect the security of your personal information. However, please be
                            aware that no method of transmission over the Internet or method of
                            electronic storage is 100% secure. While we strive to use commercially
                            acceptable means to protect your personal information, we cannot
                            guarantee its absolute security.
                        </p>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="genao6y"
                        >
                            Disclosure of Your Information
                        </h2>
                        <p data-oid="rxqr99.">
                            We do not sell, trade, or otherwise transfer your personal information
                            to third parties. We may disclose your information in the following
                            circumstances:
                        </p>
                        <ul className="list-disc pl-6 mb-6" data-oid="j522pvs">
                            <li data-oid="q24cxs1">
                                <strong data-oid="..eirty">Business Transfers:</strong> If we are
                                involved in a merger, acquisition, or sale of all or a portion of
                                our assets, your information may be transferred as part of that
                                transaction.
                            </li>
                            <li data-oid="hwxjjuz">
                                <strong data-oid="og73k3f">Compliance with Laws:</strong> We may
                                disclose your information where required to do so by law or
                                subpoena. However, since we do not collect logs of your online
                                activities, we have minimal information that could be subject to
                                such requests.
                            </li>
                            <li data-oid="9fowe-s">
                                <strong data-oid=":zj:_yn">With Your Consent:</strong> We may
                                disclose your information with your consent.
                            </li>
                        </ul>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="9us.egv"
                        >
                            Your Rights
                        </h2>
                        <p data-oid="onwc0-4">
                            Depending on your location, you may have certain rights regarding your
                            personal information, including:
                        </p>
                        <ul className="list-disc pl-6 mb-6" data-oid="twp4e.j">
                            <li data-oid="-5:.v06">
                                The right to access the personal information we have about you
                            </li>
                            <li data-oid="s2ii7tm">
                                The right to request correction of inaccurate personal information
                            </li>
                            <li data-oid="4xr:e:e">
                                The right to request deletion of your personal information
                            </li>
                            <li data-oid="2myo02f">
                                The right to object to processing of your personal information
                            </li>
                            <li data-oid="d.hbmcd">The right to data portability</li>
                            <li data-oid="ojbr.cz">The right to withdraw consent</li>
                        </ul>
                        <p data-oid="1ge9d8k">
                            To exercise these rights, please contact us using the information
                            provided in the "Contact Us" section below.
                        </p>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="4p80te9"
                        >
                            Children's Privacy
                        </h2>
                        <p data-oid="bes7:m1">
                            Our Service is not directed to children under the age of 13. We do not
                            knowingly collect personal information from children under 13. If you
                            are a parent or guardian and you are aware that your child has provided
                            us with personal information, please contact us so that we can take
                            necessary actions.
                        </p>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="z0hnkyw"
                        >
                            Changes to This Privacy Policy
                        </h2>
                        <p data-oid="ycjfl56">
                            We may update our Privacy Policy from time to time. We will notify you
                            of any changes by posting the new Privacy Policy on this page and
                            updating the "Last updated" date at the top of this Privacy Policy. You
                            are advised to review this Privacy Policy periodically for any changes.
                        </p>

                        <h2
                            className="text-2xl font-bold text-purple-900 mb-4 mt-8"
                            data-oid="nz2lve9"
                        >
                            Contact Us
                        </h2>
                        <p data-oid="yi71t4t">
                            If you have any questions about this Privacy Policy, please contact us
                            at:
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg mt-4" data-oid="i0uodph">
                            <p data-oid="si5k:kt">
                                <strong data-oid="vv35s:d">
                                    Human Data Systems Private Limited
                                </strong>
                            </p>
                            <p data-oid="w-:qmvf">H NO.-8/9, BASEMENT ROAD-8,</p>
                            <p data-oid="uhud.3_">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                            <p data-oid="b1o-pm0">110017 IN</p>
                            <p className="mt-2" data-oid="awtlaot">
                                <a
                                    href="mailto:bugs@rynvpn.com"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="_xdyoba"
                                >
                                    bugs@rynvpn.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner"
                data-oid="9m.jdnh"
            >
                <div className="container mx-auto max-w-6xl" data-oid="vmmfvz3">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8" data-oid="vozbk3l">
                        <div data-oid="9z-2..e">
                            <div className="flex items-center space-x-2 mb-4" data-oid="_2x5ogu">
                                <div className="h-10 w-10 overflow-hidden" data-oid="076o.lq">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="-43e7so"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold text-purple-800"
                                    data-oid="1-267_c"
                                >
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4" data-oid="7pfima8">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="h5:uga5">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid="9n6k51f"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="k2qloer"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="12g.vd1"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid=".ks75eg"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="25xx:z0">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="v9cw1v8"
                            >
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="03fnsbl">
                                <li data-oid="s_p_.10">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="wdckgi6"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="3qlw4yu">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="1_8aoux"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li data-oid="ia_qntb">
                                    <Link
                                        href="/privacy-policy"
                                        className="text-purple-700 transition-colors"
                                        data-oid="i7bbluf"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="kqtdldo">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="ht2m4nd"
                            >
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="99386rt">
                                <li data-oid="y08s876">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="0fs7hvm"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="3f8cxxb">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="ho3gia7"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="-wzyxdp">
                                    <Link
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="slo26mx"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li data-oid="-c2gnek">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="d7xdz4a"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="-rr_cg-">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="fq16rde"
                            >
                                Legal
                            </h3>
                            <ul className="space-y-2" data-oid="5z1qiqv">
                                <li data-oid="avcwbn-">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="e7fp3p1"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="gjd6-7p">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="dsmi:oe"
                            >
                                Contact Us
                            </h3>
                            <div className="text-gray-600 space-y-2" data-oid="tobzsja">
                                <p data-oid="_f.ewki">Human Data Systems Private Limited,</p>
                                <p data-oid="mah9zmh">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid="g68tfvh">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="gx5uit:">110017 IN</p>
                                <p className="pt-2" data-oid="j-.33a5">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid="hd4vl9n"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="d5:-jyq"
                    >
                        <div className="text-gray-600 mb-4 md:mb-0" data-oid="dckxc.e">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="r17iluq">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="d-l1fmc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="sz950x2"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="csysh86"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid=".jt4lrb"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ftczjt1"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="9zoy-vc"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="5.:1jxi"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="66:x.r0"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="l1kssf9"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="px76c.e"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="r28v49e"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="cf_xi.6"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
