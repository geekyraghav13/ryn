'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50" data-oid=":h2.3zb">
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100"
                data-oid="m::m5-_"
            >
                <div className="container mx-auto px-4 py-4" data-oid="3ki6d.p">
                    <div className="flex justify-between items-center" data-oid=":fnzvo1">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid="9.non4t">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden" data-oid="xnnyq2z">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="rx3yu84"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800" data-oid="2gbu8it">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="8fcqz5:">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="f39bkd4"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="j:o02br"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="e1ky16e"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="brs7oba"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="text-purple-700 font-bold border-b-2 border-purple-700"
                                data-oid="uofghca"
                            >
                                Blog
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-purple-800"
                            onClick={toggleMenu}
                            data-oid="w89._jr"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="sjlsl1y"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isMenuOpen
                                            ? 'M6 18L18 6M6 6l12 12'
                                            : 'M4 6h16M4 12h16M4 18h16'
                                    }
                                    data-oid="jef.mbh"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="p1dc6ba"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="wnxp32d">
                            <Link
                                href="/"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="1_d8bnj"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="ds0e3en"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="p7b:ch0"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="1uq9:jf"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="block text-purple-700 font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="s1myei6"
                            >
                                Blog
                            </Link>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="6g1sh79"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Blog Header */}
            <div className="bg-purple-900 text-white py-16" data-oid="ue_oynv">
                <div className="container mx-auto px-4 text-center" data-oid="xgrsk9q">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4" data-oid="9fh6se-">
                        Ryn VPN Blog
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto" data-oid="h0nt2qo">
                        Stay informed with the latest online privacy news, cybersecurity tips, and
                        comprehensive VPN guides right here on the Ryn VPN Blog. We're dedicated to
                        making complex security topics easy to understand for users in India and
                        across the globe in 2025. Keep checking back for timely updates on data
                        breach news, evolving data protection laws like the DPDPA, and practical
                        advice on how to secure your digital life. Learn how to navigate the
                        increasing cyber threats in India, including brand impersonation and digital
                        payment scams, all while understanding how Ryn VPN can be your trusted
                        partner in maintaining a safe and private online experience. Don't miss out
                        – make Ryn VPN Blog your regular source for staying secure online.
                    </p>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto px-4 py-12" data-oid="kmjk6eu">
                <div className="max-w-4xl mx-auto" data-oid="ye3tff_">
                    {/* Featured Article */}
                    <div
                        className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
                        data-oid="9p7n_dt"
                    >
                        <img
                            src="/set%20up.png"
                            alt="How to Set Up and Use Ryn VPN"
                            className="w-full h-80 object-contain bg-gradient-to-r from-purple-50 to-white"
                            data-oid="9zl1fg4"
                        />

                        <div className="p-8" data-oid="kv92r90">
                            <div
                                className="flex items-center text-sm text-gray-500 mb-4"
                                data-oid="zectutp"
                            >
                                <span
                                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full"
                                    data-oid="9prmn:r"
                                >
                                    Tutorial
                                </span>
                                <span className="mx-3" data-oid="19dz0kr">
                                    •
                                </span>
                                <span data-oid="z3wawfs">May 15, 2023</span>
                                <span className="mx-3" data-oid="2jkxco7">
                                    •
                                </span>
                                <span data-oid="kbe5of8">5 min read</span>
                            </div>
                            <h2
                                className="text-3xl font-bold text-gray-900 mb-4"
                                data-oid="cmlpqj3"
                            >
                                <Link
                                    href="/blog/how-to-setup-ryn-vpn"
                                    className="hover:text-purple-700 transition-colors"
                                    data-oid=":5kq19q"
                                >
                                    How to Set Up and Use Ryn VPN for Maximum Privacy
                                </Link>
                            </h2>
                            <p className="text-gray-600 mb-6" data-oid="i9sp.qr">
                                Learn how to install, configure, and use Ryn VPN to protect your
                                online privacy, secure your connection on public Wi-Fi, and access
                                geo-restricted content from anywhere in the world.
                            </p>
                            <Link
                                href="/blog/how-to-setup-ryn-vpn"
                                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                                data-oid="te2qk9a"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Space for future articles */}
                    <div className="mb-12" data-oid="vw3ch13"></div>

                    {/* Newsletter Signup */}
                    <div className="bg-purple-100 rounded-xl p-8 text-center" data-oid=".-sb-f1">
                        <h3 className="text-2xl font-bold text-purple-900 mb-4" data-oid="_lek0cp">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-purple-800 mb-6 max-w-2xl mx-auto" data-oid="1a-i.m0">
                            Get the latest privacy tips, security updates, and exclusive offers
                            delivered straight to your inbox.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
                            data-oid="1sntkgy"
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-2 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                data-oid="nf6xgjv"
                            />

                            <button
                                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                                data-oid="kjxk-3d"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner"
                data-oid=".z3-:ca"
            >
                <div className="container mx-auto max-w-6xl" data-oid="ip0zr3s">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-oid="t6j604u">
                        <div data-oid="dadrcgv">
                            <div className="flex items-center space-x-2 mb-4" data-oid="3c09n2b">
                                <div className="h-10 w-10 overflow-hidden" data-oid="qq0.nbs">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="8s7wjo2"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold text-purple-800"
                                    data-oid="wk12bqy"
                                >
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4" data-oid="ajmz9xa">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="prxtjif">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid="c65.0nw"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="pvnktam"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="p_4nc_f"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="6uf4csw"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="09ssab1">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="y87f4h5"
                            >
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="rqlt0_m">
                                <li data-oid="dyj8zoy">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="bdhcoy8"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="dt.rv6w">
                                    <Link
                                        href="/blog"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="j60mvmf"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li data-oid="01qrd2o">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="2t8_mig"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="6ftadoh">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="u.4wp.t"
                            >
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="cfekvku">
                                <li data-oid="8r:oe7g">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="1bb0g3o"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="az-ru9g">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="c_cvit-"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="a0-rng8">
                                    <a
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="6:hjr.y"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid="gd3gjdn">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="_x8dlrd"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="m2ip2:0">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="swy8pe3"
                            >
                                Contact Us
                            </h3>
                            <div className="text-gray-600 space-y-2" data-oid="su:wx4q">
                                <p data-oid="s27ges5">Human Data Systems Private Limited,</p>
                                <p data-oid="ybmrk-l">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid="y0uc5cs">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="-mpya35">110017 IN</p>
                                <p className="pt-2" data-oid="ct2to3p">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid="_ftor3s"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="tswdr8v"
                    >
                        <div className="text-gray-600 mb-4 md:mb-0" data-oid="gt7yyf.">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="d1.3358">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="b97rts7"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="m39c37o"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="3t_w5lw"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="adg0u98"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="gj46k:l"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="c8ja8-j"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="gr6p_12"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ed9pwq:"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="qmuxeq8"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="4q31iv3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ajjo94k"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="gvv4.vi"
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
