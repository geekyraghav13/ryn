'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogPostPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50" data-oid="d.wqbn9">
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100"
                data-oid="8r0oo4o"
            >
                <div className="container mx-auto px-4 py-4" data-oid="uxwafg7">
                    <div className="flex justify-between items-center" data-oid=".0ljeg5">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid="ys8nl28">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden" data-oid="fc55nim">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="p2q454l"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800" data-oid="rk-ovh8">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="qrhka3c">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="bfa0a4f"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="z4re5xl"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="buof9h7"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="k1le3s4"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="text-purple-700 font-bold"
                                data-oid="87enrzf"
                            >
                                Blog
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-purple-800"
                            onClick={toggleMenu}
                            data-oid="wx9uhxu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="36hsupm"
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
                                    data-oid="wywnesj"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="3ly:piv"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="t4bky84">
                            <Link
                                href="/"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="nzl-2b1"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="z50ry_o"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="-l9mz3:"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="vlyl.j8"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="block text-purple-700 font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="stc_7wo"
                            >
                                Blog
                            </Link>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="pqj_0yn"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Blog Post Content - Timestream Inspired */}
            <div className="container mx-auto px-4 py-16" data-oid="gena2ep">
                <div className="max-w-4xl mx-auto" data-oid="byh.gd.">
                    <div className="mb-8 flex justify-between items-center" data-oid="l7svekt">
                        <Link
                            href="/blog"
                            className="text-purple-600 hover:text-purple-800 flex items-center gap-2 font-medium"
                            data-oid="pg_jm3i"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                data-oid="63ll3.5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                    data-oid="gsze7_b"
                                />
                            </svg>
                            Back to Blog
                        </Link>
                        <div className="flex items-center space-x-3" data-oid="xl-i6oj">
                            <span className="text-gray-500 text-sm" data-oid="pljkwnm">
                                Share:
                            </span>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800"
                                data-oid="k86w_.8"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="b7do1oi"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                        data-oid="jcx-hf:"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800"
                                data-oid=".a322g9"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="sjixfnb"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="9nujdb6"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <article data-oid="qfjg06y">
                        <header className="mb-10" data-oid="gqdzaag">
                            <div
                                className="flex items-center text-sm text-gray-500 mb-4 space-x-4"
                                data-oid="g8oqbm1"
                            >
                                <span className="text-purple-600 font-medium" data-oid="nze454q">
                                    Tutorial
                                </span>
                                <span data-oid="vi3:bdc">May 15, 2023</span>
                                <span data-oid="35pt2ji">5 min read</span>
                            </div>

                            <h1
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                                data-oid="_kf-kqu"
                            >
                                How to Set Up and Use Ryn VPN for Maximum Privacy
                            </h1>

                            <p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                data-oid="nmrif0s"
                            >
                                In today's digital world, protecting your online privacy has never
                                been more important. Ryn VPN provides a simple yet powerful solution
                                to secure your internet connection, protect your personal data, and
                                access content from anywhere in the world.
                            </p>
                        </header>

                        <div
                            className="relative mb-12 overflow-hidden rounded-xl"
                            data-oid="2if:x3n"
                        >
                            <img
                                src="/blog-vpn-setup.jpg"
                                alt="How to Set Up and Use Ryn VPN"
                                className="w-full h-[500px] object-cover"
                                data-oid="zqs:efv"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none" data-oid="a9oyaad">
                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="897iaea"
                            >
                                Why You Need Ryn VPN
                            </h2>
                            <p data-oid="o7:2997">
                                Before diving into the setup process, let's quickly review why using
                                a VPN like Ryn VPN is essential:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="jdaijk.">
                                <li data-oid="s.mgbai">
                                    <strong data-oid="x3klau7">Privacy Protection:</strong> Prevents
                                    ISPs, websites, and hackers from tracking your online activities
                                </li>
                                <li data-oid="gnbsf60">
                                    <strong data-oid="ue:hctb">Security on Public Wi-Fi:</strong>{' '}
                                    Encrypts your connection on unsecured networks
                                </li>
                                <li data-oid="9yvdj:3">
                                    <strong data-oid="4rfoqdc">
                                        Access to Geo-restricted Content:
                                    </strong>{' '}
                                    Bypasses regional restrictions on streaming services and
                                    websites
                                </li>
                                <li data-oid="7kmpoa2">
                                    <strong data-oid="6eu65pr">
                                        Protection from Data Throttling:
                                    </strong>{' '}
                                    Prevents your ISP from slowing down your connection based on
                                    your activities
                                </li>
                                <li data-oid=".wl4s9o">
                                    <strong data-oid="t:cles5">Anonymous Browsing:</strong> Masks
                                    your IP address to keep your identity private
                                </li>
                            </ul>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="w.vk:q9"
                            >
                                Step 1: Download and Install Ryn VPN
                            </h2>
                            <p data-oid="u4:t4uu">
                                Getting started with Ryn VPN is straightforward. Follow these steps
                                to download and install the app:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="4_a38em">
                                <li data-oid="cuii1q8">
                                    Visit the{' '}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="3fv:-:d"
                                    >
                                        Google Play Store
                                    </a>{' '}
                                    (for Android) or the{' '}
                                    <a
                                        href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="v2ekdco"
                                    >
                                        App Store
                                    </a>{' '}
                                    (for iOS)
                                </li>
                                <li data-oid="6uo08k7">
                                    Search for "Ryn VPN" or click on the direct links above
                                </li>
                                <li data-oid="ob67zjp">
                                    Tap "Install" or "Get" to download the app
                                </li>
                                <li data-oid="k5dhh0i">
                                    Once installed, open the app from your device's home screen
                                </li>
                            </ol>

                            <div className="bg-purple-50 p-6 rounded-lg mb-8" data-oid="le168by">
                                <h3
                                    className="text-lg font-bold text-purple-800 mb-2"
                                    data-oid="j130m_n"
                                >
                                    Pro Tip
                                </h3>
                                <p className="text-purple-900" data-oid="_y:eavp">
                                    Make sure you're downloading the official Ryn VPN app. Look for
                                    "Human Data Systems Private Limited" as the developer to ensure
                                    you're getting the genuine application.
                                </p>
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="baut80t"
                            >
                                Step 2: Create an Account or Sign In
                            </h2>
                            <p data-oid="57g3.mg">
                                After installing the app, you'll need to create an account or sign
                                in:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="wc8f93a">
                                <li data-oid="5y5as--">Open the Ryn VPN app</li>
                                <li data-oid="hgudaxx">Tap "Sign Up" if you're a new user</li>
                                <li data-oid="oyqxq-c">
                                    Enter your email address and create a strong password
                                </li>
                                <li data-oid="88_dqh1">
                                    Alternatively, you can sign up using your Google or Apple
                                    account for faster access
                                </li>
                                <li data-oid="l_96nku">Verify your email address if prompted</li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="e-2k_k8"
                            >
                                Step 3: Connect to a VPN Server
                            </h2>
                            <p data-oid="32v4:ss">
                                Now that you're signed in, you can connect to a VPN server:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="wwy7rj.">
                                <li data-oid="w:0:n18">
                                    On the main screen, you'll see a large "Connect" button
                                </li>
                                <li data-oid="fw.xr1j">
                                    For the fastest connection, tap "Connect" to automatically
                                    connect to the optimal server
                                </li>
                                <li data-oid="10ahqgq">
                                    To select a specific location, tap on the server location
                                    indicator (usually shows a country name or "Best Location")
                                </li>
                                <li data-oid="9wl1soi">
                                    Browse the list of available servers and select your preferred
                                    location
                                </li>
                                <li data-oid="ix-d27d">
                                    Tap "Connect" to establish a secure VPN connection
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-6 rounded-lg mb-8" data-oid=".8a:7ov">
                                <h3
                                    className="text-lg font-bold text-blue-800 mb-2"
                                    data-oid="szzhsn3"
                                >
                                    Server Selection Tips
                                </h3>
                                <ul
                                    className="list-disc pl-6 space-y-1 text-blue-900"
                                    data-oid="3o1xi74"
                                >
                                    <li data-oid=".p-b1:c">
                                        For general browsing and privacy, use the "Best Location"
                                        option
                                    </li>
                                    <li data-oid="4q9pe:f">
                                        For streaming, select a server in the country where the
                                        content is available
                                    </li>
                                    <li data-oid="..ucbh7">
                                        For gaming, choose a server closest to the game's servers to
                                        reduce latency
                                    </li>
                                    <li data-oid=":_xtz.k">
                                        Premium users have access to specialized streaming and
                                        gaming servers
                                    </li>
                                </ul>
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="2346.8j"
                            >
                                Step 4: Customize Your VPN Settings
                            </h2>
                            <p data-oid="299buaz">
                                Ryn VPN offers several customization options to enhance your
                                experience:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="wy0fizw">
                                <li data-oid="g0-u0qc">
                                    <strong data-oid="qw4amux">Auto-Connect:</strong> Configure Ryn
                                    VPN to automatically connect when you join untrusted Wi-Fi
                                    networks
                                </li>
                                <li data-oid="_tak.-b">
                                    <strong data-oid="5lyyrpl">Split Tunneling:</strong> Choose
                                    which apps use the VPN connection and which ones use your
                                    regular connection
                                </li>
                                <li data-oid="4qbtv4-">
                                    <strong data-oid="i5lbp3z">Kill Switch:</strong> Enable this
                                    feature to automatically disconnect your internet if the VPN
                                    connection drops, preventing data leaks
                                </li>
                                <li data-oid="rxdcmk3">
                                    <strong data-oid="r6a0-04">Protocol Selection:</strong> Advanced
                                    users can select different VPN protocols based on their needs
                                </li>
                            </ul>

                            <p data-oid="_rovt_x">To access these settings:</p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="i_iq71-">
                                <li data-oid="duj63i6">
                                    Tap the settings icon (usually in the top-right or bottom-right
                                    corner)
                                </li>
                                <li data-oid="9inm6um">Browse through the available options</li>
                                <li data-oid="6x:hy:c">
                                    Adjust settings according to your preferences
                                </li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="akk5sxo"
                            >
                                Step 5: Verify Your VPN Connection
                            </h2>
                            <p data-oid="y9:oz7s">
                                After connecting to a Ryn VPN server, it's a good idea to verify
                                that your connection is secure:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="ed1usez">
                                <li data-oid="hq4wycl">
                                    Check the app's main screen for a "Connected" status
                                </li>
                                <li data-oid="ofsla1w">
                                    Visit{' '}
                                    <a
                                        href="https://whatismyipaddress.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="6f5pmyz"
                                    >
                                        whatismyipaddress.com
                                    </a>{' '}
                                    to confirm your IP address has changed
                                </li>
                                <li data-oid="c9c6:jx">
                                    The website should show your location as the country you
                                    selected in the VPN
                                </li>
                                <li data-oid=".hhe3pd">
                                    You can also perform a DNS leak test to ensure your DNS requests
                                    are properly protected
                                </li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="_se3tc3"
                            >
                                Troubleshooting Common Issues
                            </h2>
                            <p data-oid="ydpmivp">
                                If you encounter any problems with Ryn VPN, try these solutions:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="r5l_01v">
                                <li data-oid="-wzncrl">
                                    <strong data-oid="f-d7i_g">Connection Issues:</strong> Try
                                    switching to a different server or VPN protocol
                                </li>
                                <li data-oid="9.hrlbd">
                                    <strong data-oid="vb4jthp">Slow Speeds:</strong> Connect to a
                                    server closer to your actual location
                                </li>
                                <li data-oid="0vx7csp">
                                    <strong data-oid="k-l6nnn">App Crashes:</strong> Ensure your app
                                    is updated to the latest version
                                </li>
                                <li data-oid="ya5n81h">
                                    <strong data-oid="gfmdkn-">
                                        Streaming Services Not Working:
                                    </strong>{' '}
                                    Try specialized streaming servers (Premium feature)
                                </li>
                            </ul>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid=".ye.2xc"
                            >
                                Conclusion
                            </h2>
                            <p data-oid="2:bji7a">
                                Ryn VPN provides a user-friendly yet powerful solution for
                                protecting your online privacy and security. By following these
                                simple steps, you can enjoy secure, private browsing on any network
                                and access content from around the world.
                            </p>
                            <p data-oid="2-z2pyt">
                                Remember that while the free version offers basic protection,
                                upgrading to Premium unlocks additional features like specialized
                                servers, faster speeds, and the ability to connect multiple devices
                                simultaneously.
                            </p>
                            <p className="mt-4" data-oid="_dlr1z.">
                                Start protecting your online privacy today with Ryn VPN!
                            </p>

                            <div
                                className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg mt-10 text-white shadow-lg"
                                data-oid="_6p8ou9"
                            >
                                <h3 className="text-2xl font-bold mb-4" data-oid="83sl3ve">
                                    Ready to Get Started?
                                </h3>
                                <p className="mb-6 text-purple-100" data-oid="b_bgkuv">
                                    Download Ryn VPN now and take control of your online privacy
                                    with just a few taps.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="uqqbhgg">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-purple-800 hover:bg-purple-100 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 flex items-center justify-center gap-2"
                                        data-oid="wb-pxn7"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="j:p5xm9"
                                        >
                                            <path
                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                data-oid="tc7.9iw"
                                            />
                                        </svg>
                                        Download for Android
                                    </a>
                                    <a
                                        href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-purple-800 hover:bg-purple-100 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 flex items-center justify-center gap-2"
                                        data-oid=".kfvy69"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="a6oo0o4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                                data-oid="t_6ta5x"
                                            />
                                        </svg>
                                        Download for iOS
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Author Bio */}
                    <div
                        className="bg-white border border-gray-100 rounded-xl p-8 mt-12 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm"
                        data-oid="0.hwhr0"
                    >
                        <div
                            className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0"
                            data-oid=":_doha8"
                        >
                            <span className="text-2xl font-bold text-white" data-oid="7cu.r9d">
                                RV
                            </span>
                        </div>
                        <div data-oid="ntpsbc6">
                            <h3
                                className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left"
                                data-oid="2aknyj6"
                            >
                                Ryn VPN Team
                            </h3>
                            <p
                                className="text-gray-600 mb-4 text-center md:text-left"
                                data-oid="55z5j4r"
                            >
                                Privacy experts dedicated to helping you stay secure online. Follow
                                us for the latest tips and updates on cybersecurity.
                            </p>
                            <div
                                className="flex justify-center md:justify-start space-x-4"
                                data-oid="tieh_sg"
                            >
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="tl2v5pi"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="ndhl2vf"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="7.t:sde"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="9lf.svs"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="u-g8nag"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            data-oid="71ujxil"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts - Replaced Coming Soon with Actual Articles */}
                    <div className="mt-16" data-oid="w6xqpag">
                        <h3
                            className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200"
                            data-oid="_--ilsw"
                        >
                            Related Articles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid=":fp3n8z">
                            <div className="group" data-oid="siw0lyy">
                                <div
                                    className="relative h-48 mb-4 overflow-hidden rounded-lg"
                                    data-oid=":y-4-qw"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="VPN Security"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        data-oid="8jztxtx"
                                    />

                                    <div className="absolute top-3 left-3" data-oid="spii-qw">
                                        <span
                                            className="bg-purple-600 text-white px-2 py-1 text-xs font-medium rounded"
                                            data-oid="w5i4dr."
                                        >
                                            Security
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center text-sm text-gray-500 mb-2 space-x-3"
                                    data-oid="1:yyf1:"
                                >
                                    <span data-oid="8t5ayz8">June 12, 2023</span>
                                    <span data-oid="ev2qhi8">•</span>
                                    <span data-oid="n07pbbc">4 min read</span>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors"
                                    data-oid="-49i83h"
                                >
                                    <Link href="#" data-oid="1i.-m-s">
                                        5 Ways to Enhance Your Online Privacy
                                    </Link>
                                </h3>
                                <p className="text-gray-600" data-oid="185p0w7">
                                    Discover essential strategies beyond VPNs to protect your
                                    digital footprint and maintain privacy in an increasingly
                                    connected world.
                                </p>
                            </div>
                            <div className="group" data-oid="c5yj2ti">
                                <div
                                    className="relative h-48 mb-4 overflow-hidden rounded-lg"
                                    data-oid="5ye4cou"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80"
                                        alt="VPN Protocols"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        data-oid="wr5j2c-"
                                    />

                                    <div className="absolute top-3 left-3" data-oid="euu0g84">
                                        <span
                                            className="bg-purple-600 text-white px-2 py-1 text-xs font-medium rounded"
                                            data-oid="zgu6hm."
                                        >
                                            Technology
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center text-sm text-gray-500 mb-2 space-x-3"
                                    data-oid="-co8-ms"
                                >
                                    <span data-oid="g_fblqi">July 23, 2023</span>
                                    <span data-oid="pycfx2a">•</span>
                                    <span data-oid="_sagqw0">6 min read</span>
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors"
                                    data-oid="fducbvy"
                                >
                                    <Link href="#" data-oid="aehr_:3">
                                        Understanding VPN Protocols
                                    </Link>
                                </h3>
                                <p className="text-gray-600" data-oid="8c-l3lu">
                                    A comprehensive guide to different VPN protocols, their
                                    strengths, weaknesses, and which ones are best for your specific
                                    needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner mt-12"
                data-oid="ere1ou2"
            >
                <div className="container mx-auto max-w-6xl" data-oid="z9gs_n:">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-oid="2wka5m:">
                        <div data-oid="k9m1vu1">
                            <div className="flex items-center space-x-2 mb-4" data-oid="gy83:25">
                                <div className="h-10 w-10 overflow-hidden" data-oid="ijyq.5c">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="6o8ehb8"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold text-purple-800"
                                    data-oid="zpyo7lv"
                                >
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4" data-oid="0v-hb72">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="-f0.oml">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid="mfrhf4_"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="1_gg7v8"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="i5_xew-"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="yr:-fi0"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="vyvgq:k">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid=":92v_b0"
                            >
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="uiubrej">
                                <li data-oid="4ct1h6a">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="z0ma:.c"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="oq7m1r1">
                                    <Link
                                        href="/blog"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="bd6ug1x"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li data-oid="t1p69rb">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="wmgumpm"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="o3k-7bh">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="j:99e7n"
                            >
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="ro5dnf-">
                                <li data-oid="1-bhxoa">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid=":9sfyk3"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="nhyej75">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="1.gkk9e"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="rl5tj_.">
                                    <a
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="i1bkvq."
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid="x:ceu2x">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="qv54411"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="jqsv70s">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="e1g6uf6"
                            >
                                Contact Us
                            </h3>
                            <div className="text-gray-600 space-y-2" data-oid="8dn0iv.">
                                <p data-oid=".oox0vd">Human Data Systems Private Limited,</p>
                                <p data-oid="ka8pl:c">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid="gs375d0">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="w7ucj.4">110017 IN</p>
                                <p className="pt-2" data-oid="bf-yte4">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid=":mq-tc9"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="-g6fr09"
                    >
                        <div className="text-gray-600 mb-4 md:mb-0" data-oid="p35rgnl">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid=":u.42zc">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="i-9fwrm"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="n7e0i:l"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid=".spvhym"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="8ui1wiv"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="-by57sa"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="l3-a5ev"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="npcj_2p"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="h3d0441"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="4l7h.o5"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="rpzvsj8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="9l2s02o"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="022b96u"
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
