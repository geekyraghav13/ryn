'use client';

import Link from 'next/link';

export default function FeaturesPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white"
            data-oid="42vqh4j"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100"
                data-oid=".i-id9d"
            >
                <div className="container mx-auto px-4 py-4" data-oid="tfzupol">
                    <div className="flex justify-between items-center" data-oid="zyf3c_1">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2" data-oid="eo2l3bi">
                            <div className="h-10 w-10 overflow-hidden" data-oid="b26x-_7">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="4zg-.m0"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800" data-oid="0qaip7-">
                                Ryn VPN
                            </span>
                        </Link>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="de97637">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="do3kddi"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-purple-700 transition-colors font-bold"
                                data-oid="bd4gzu_"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="eok5q0m"
                            >
                                How It Works
                            </Link>
                            <Link
                                href="/#pricing"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="6-v13u1"
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
                            data-oid="69_pmv-"
                        >
                            Download Now
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 bg-purple-900 bg-opacity-80" data-oid="zfcmc9i">
                <div className="container mx-auto max-w-6xl text-center" data-oid="8dmkr_5">
                    <h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md"
                        data-oid="q3cphg:"
                    >
                        Ryn VPN Features
                    </h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8" data-oid="phl8g-6">
                        Discover the powerful features that make Ryn VPN the perfect choice for your
                        online privacy and security needs.
                    </p>
                </div>
            </section>

            {/* Main Features Section */}
            <section className="py-16 px-4 bg-white text-gray-900" data-oid="zq7_eo1">
                <div className="container mx-auto max-w-6xl" data-oid="lkoqqbz">
                    <div className="text-center mb-16" data-oid="m1pwvii">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-purple-900"
                            data-oid="0s--f2x"
                        >
                            Premium VPN Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="btm7m6f">
                            Ryn VPN offers a comprehensive suite of features designed to protect
                            your online privacy, secure your data, and provide unrestricted access
                            to content worldwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" data-oid="ack8:fn">
                        {/* Feature 1 */}
                        <div
                            className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                            data-oid="pbma3i3"
                        >
                            <div className="flex items-start mb-4" data-oid="xxl2af.">
                                <div
                                    className="bg-purple-100 p-3 rounded-lg mr-4"
                                    data-oid="mk5m6gw"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="mb:h6vj"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            data-oid="og4mrpd"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="rmnn6fr">
                                    <h3
                                        className="text-2xl font-bold mb-2 text-gray-800"
                                        data-oid="l-2:3f1"
                                    >
                                        Military-Grade Encryption
                                    </h3>
                                    <p className="text-gray-600" data-oid="6k-kqps">
                                        Ryn VPN uses AES-256 encryption, the same level of security
                                        used by governments and military organizations worldwide, to
                                        protect your data from hackers and surveillance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div
                            className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                            data-oid="5e37-fl"
                        >
                            <div className="flex items-start mb-4" data-oid="yfwkgld">
                                <div
                                    className="bg-purple-100 p-3 rounded-lg mr-4"
                                    data-oid="lq3yj92"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="tk.bpfg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            data-oid="ex1d109"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="exgps97">
                                    <h3
                                        className="text-2xl font-bold mb-2 text-gray-800"
                                        data-oid="0t__fvb"
                                    >
                                        Strict No-Logs Policy
                                    </h3>
                                    <p className="text-gray-600" data-oid="t_z4qo.">
                                        We never track, collect, or store any information about your
                                        online activities. Your browsing history remains completely
                                        private and is never recorded or shared with third parties.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div
                            className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                            data-oid="l7lcguy"
                        >
                            <div className="flex items-start mb-4" data-oid="ue.r90k">
                                <div
                                    className="bg-purple-100 p-3 rounded-lg mr-4"
                                    data-oid="6mmm0:y"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="vr2ouex"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            data-oid="v2etznk"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="rzbdbr9">
                                    <h3
                                        className="text-2xl font-bold mb-2 text-gray-800"
                                        data-oid="vudc6l:"
                                    >
                                        Global Server Network
                                    </h3>
                                    <p className="text-gray-600" data-oid="ns:8w58">
                                        Access our network of 1000+ high-speed servers across 50+
                                        countries to bypass geo-restrictions and enjoy content from
                                        anywhere in the world with minimal latency.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div
                            className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-md hover:shadow-lg transition-all"
                            data-oid="6z9lrep"
                        >
                            <div className="flex items-start mb-4" data-oid="fj1s-2_">
                                <div
                                    className="bg-purple-100 p-3 rounded-lg mr-4"
                                    data-oid="kvf9jf5"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-purple-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="j8_cgsa"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="m1zkye0"
                                        />
                                    </svg>
                                </div>
                                <div data-oid="1y4-dk0">
                                    <h3
                                        className="text-2xl font-bold mb-2 text-gray-800"
                                        data-oid="b-wfzx8"
                                    >
                                        Unlimited Bandwidth
                                    </h3>
                                    <p className="text-gray-600" data-oid="syz9ih9">
                                        Stream, download, and browse without restrictions. Our
                                        premium plan offers unlimited data transfer with no
                                        throttling, ensuring optimal performance at all times.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Features */}
                    <div
                        className="bg-purple-50 rounded-xl p-8 border border-purple-100 shadow-md mb-16"
                        data-oid="rzg5cjz"
                    >
                        <h3
                            className="text-2xl font-bold mb-6 text-purple-900 text-center"
                            data-oid="j98xl3i"
                        >
                            Additional Premium Features
                        </h3>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            data-oid="6pk:bcq"
                        >
                            <div className="bg-white p-6 rounded-lg shadow" data-oid="e_-6v0n">
                                <h4
                                    className="font-bold text-lg mb-2 text-gray-800"
                                    data-oid="-.sqnqw"
                                >
                                    Kill Switch
                                </h4>
                                <p className="text-gray-600" data-oid="9eygiiy">
                                    Automatically disconnects your internet if the VPN connection
                                    drops, preventing data leaks.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow" data-oid="mk:g2ao">
                                <h4
                                    className="font-bold text-lg mb-2 text-gray-800"
                                    data-oid="b.g-vp9"
                                >
                                    Split Tunneling
                                </h4>
                                <p className="text-gray-600" data-oid="m4o0dfz">
                                    Choose which apps use the VPN connection and which ones connect
                                    directly to the internet.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow" data-oid="_tzx1nn">
                                <h4
                                    className="font-bold text-lg mb-2 text-gray-800"
                                    data-oid="l4av8r7"
                                >
                                    Multi-Device Support
                                </h4>
                                <p className="text-gray-600" data-oid="-f26vh0">
                                    Connect up to 10 devices simultaneously with a single
                                    subscription.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow" data-oid="eu0zicn">
                                <h4
                                    className="font-bold text-lg mb-2 text-gray-800"
                                    data-oid="hr4avi7"
                                >
                                    DNS Leak Protection
                                </h4>
                                <p className="text-gray-600" data-oid="9:oiy3x">
                                    Ensures your DNS requests are always routed through our secure
                                    servers, preventing leaks.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow" data-oid="86fno42">
                                <h4
                                    className="font-bold text-lg mb-2 text-gray-800"
                                    data-oid="pw801s6"
                                >
                                    Dedicated IP Option
                                </h4>
                                <p className="text-gray-600" data-oid="f5jcqcs">
                                    Get your own private IP address for enhanced security and access
                                    to IP-restricted networks.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow" data-oid="e2r1itm">
                                <h4
                                    className="font-bold text-lg mb-2 text-gray-800"
                                    data-oid="qz:suba"
                                >
                                    24/7 Customer Support
                                </h4>
                                <p className="text-gray-600" data-oid="rvnx9re">
                                    Our support team is available around the clock to assist with
                                    any questions or issues.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-16" data-oid="8ir.xhb">
                        <h3
                            className="text-2xl font-bold mb-8 text-purple-900 text-center"
                            data-oid="0_ra196"
                        >
                            Perfect For All Your Needs
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="4lcjysl">
                            <div
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                                data-oid="yj5k8kh"
                            >
                                <h4
                                    className="font-bold text-xl mb-4 text-gray-800"
                                    data-oid="-m0-gzo"
                                >
                                    Streaming & Entertainment
                                </h4>
                                <ul
                                    className="space-y-3 list-disc pl-5 text-gray-600"
                                    data-oid="xmdnkq8"
                                >
                                    <li data-oid="uh88hik">
                                        Access geo-restricted streaming platforms like Netflix,
                                        Hulu, Disney+, and BBC iPlayer
                                    </li>
                                    <li data-oid="4.0v-_m">
                                        Enjoy buffer-free streaming with our optimized high-speed
                                        servers
                                    </li>
                                    <li data-oid="fj-m:wv">
                                        Watch sports events and shows not available in your region
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                                data-oid="3l3v1hz"
                            >
                                <h4
                                    className="font-bold text-xl mb-4 text-gray-800"
                                    data-oid="3wbosti"
                                >
                                    Public Wi-Fi Security
                                </h4>
                                <ul
                                    className="space-y-3 list-disc pl-5 text-gray-600"
                                    data-oid="358.usw"
                                >
                                    <li data-oid="7l0qbub">
                                        Protect your sensitive data when using public Wi-Fi networks
                                    </li>
                                    <li data-oid="ye81eut">
                                        Prevent hackers from intercepting your personal information
                                    </li>
                                    <li data-oid="8c.:bir">
                                        Secure your banking and shopping activities on unsecured
                                        networks
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                                data-oid="oiutnc4"
                            >
                                <h4
                                    className="font-bold text-xl mb-4 text-gray-800"
                                    data-oid="zj5p42b"
                                >
                                    Privacy Protection
                                </h4>
                                <ul
                                    className="space-y-3 list-disc pl-5 text-gray-600"
                                    data-oid="9-sqn0b"
                                >
                                    <li data-oid="q8skbb0">
                                        Hide your browsing activity from your ISP and government
                                        surveillance
                                    </li>
                                    <li data-oid="d182p1u">
                                        Prevent websites from tracking your location and online
                                        behavior
                                    </li>
                                    <li data-oid="fi.p-qz">
                                        Protect your identity with anonymous browsing
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                                data-oid="5y_492l"
                            >
                                <h4
                                    className="font-bold text-xl mb-4 text-gray-800"
                                    data-oid="xtg6.al"
                                >
                                    Remote Work & Travel
                                </h4>
                                <ul
                                    className="space-y-3 list-disc pl-5 text-gray-600"
                                    data-oid=":q1repk"
                                >
                                    <li data-oid="gopo016">
                                        Securely access company networks and resources from anywhere
                                    </li>
                                    <li data-oid="jq50:4o">
                                        Bypass internet censorship when traveling to countries with
                                        restrictions
                                    </li>
                                    <li data-oid="5kl4fmv">
                                        Maintain access to your favorite services while abroad
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-purple-800 text-white" data-oid="sv0iqwc">
                <div className="container mx-auto max-w-4xl text-center" data-oid="qro0a__">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="axrzs8j">
                        Ready to Experience Ryn VPN?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" data-oid="zju8x2t">
                        Download Ryn VPN now and enjoy complete online privacy, security, and
                        freedom with our premium features.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        data-oid="lqkmu8:"
                    >
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                            aria-label="Get it on Google Play"
                            data-oid="v_l.fpm"
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                className="h-16 w-auto shadow-lg rounded-lg"
                                data-oid="q98hsmk"
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                            aria-label="Download on the App Store"
                            data-oid="ixhtc2q"
                        >
                            <img
                                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                className="h-16 w-auto shadow-lg rounded-lg"
                                data-oid="1p4tpft"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner"
                data-oid="rmn.6.t"
            >
                <div className="container mx-auto max-w-6xl" data-oid="av6debk">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8" data-oid="gxv-nl0">
                        <div data-oid="i3remvw">
                            <div className="flex items-center space-x-2 mb-4" data-oid="18qcvuu">
                                <div className="h-10 w-10 overflow-hidden" data-oid="y4lnt9c">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="qdzmtrl"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold text-purple-800"
                                    data-oid="b-prk1y"
                                >
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4" data-oid="20xgm9x">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="c8ui9k8">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid="7:0gvpg"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="b7a46.0"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="lk-obq-"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="pqk6if0"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="5:9.jwn">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="mz4-pwl"
                            >
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="qocyu8y">
                                <li data-oid="jhu9i05">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="pg0aez5"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="h-.xt_i">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="pjtchb."
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li data-oid="xudc265"></li>
                                <li data-oid="r--a9oc">
                                    <Link
                                        href="/privacy-policy"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="67fom:0"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="6sqievy">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="id14rfd"
                            >
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="-6vi0qz">
                                <li data-oid="-ioutoi">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="6fh2p10"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="wb4912v">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="qxxyntg"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="oh4nr8o">
                                    <Link
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="vobe9ub"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li data-oid="dxzpie3">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="skw0qgh"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="voogyw4">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="76tzv:j"
                            >
                                Contact Us
                            </h3>
                            <div className="text-gray-600 space-y-2" data-oid=".adajhv">
                                <p data-oid="hjspvpm">Human Data Systems Private Limited,</p>
                                <p data-oid="p1:cmn_">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid=".t99a.h">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="lvjv2sd">110017 IN</p>
                                <p className="pt-2" data-oid=".xkaro2">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid="h_fj3h6"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="ut2gf::"
                    >
                        <div className="text-gray-600 mb-4 md:mb-0" data-oid="crd_56k">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="hf:gc7x">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="2:k1f9w"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="cc-na77"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="p85k9qx"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="m.e.h2x"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="5lc3x5y"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="rqm83x."
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="nj7_myz"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="5thsxeb"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="ms9i1:8"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="_8jtc.j"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="2rlz_xa"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="wlznut7"
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
