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
        <div className="min-h-screen bg-gray-50" data-oid="tatofrc">
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100"
                data-oid="lwqha58"
            >
                <div className="container mx-auto px-4 py-4" data-oid=".8e:srk">
                    <div className="flex justify-between items-center" data-oid="4:6di9f">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid="k8ty9xx">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden" data-oid="zu7k2al">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="qz.oay3"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800" data-oid="m.qpv4n">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="3jsxbx1">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="v3s.t5t"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="7b3v816"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="5sls100"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="y6owhyu"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="text-purple-700 font-bold"
                                data-oid="vkaack5"
                            >
                                Blog
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-purple-800"
                            onClick={toggleMenu}
                            data-oid="z2pb30r"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="42t49sk"
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
                                    data-oid="6scb1oe"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="01_htg6"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="_e12333">
                            <Link
                                href="/"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="18g40pe"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid=".dog9va"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid=":o_m:aw"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="w:goju:"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="block text-purple-700 font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="pbcfwlx"
                            >
                                Blog
                            </Link>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="w98gx4o"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Blog Post Content - Timestream Inspired */}
            <div className="container mx-auto px-4 py-16" data-oid="m5d16mg">
                <div className="max-w-4xl mx-auto" data-oid="vkdt:ug">
                    <div className="mb-8 flex justify-between items-center" data-oid="n.jz0v5">
                        <Link
                            href="/blog"
                            className="text-purple-600 hover:text-purple-800 flex items-center gap-2 font-medium"
                            data-oid=".0b19y6"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                data-oid="8-.5r6t"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                    data-oid="__g.jel"
                                />
                            </svg>
                            Back to Blog
                        </Link>
                        <div className="flex items-center space-x-3" data-oid="moslpsg">
                            <span className="text-gray-500 text-sm" data-oid="yptp.au">
                                Share:
                            </span>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800"
                                data-oid="m5bg2o-"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="ng6im6z"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                        data-oid="-zrsypz"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800"
                                data-oid="15lk6d6"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="5.o.t99"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="k5toj7x"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <article data-oid="3_zpcv3">
                        <header className="mb-10" data-oid="iy3kb6d">
                            <div
                                className="flex items-center text-sm text-gray-500 mb-4 space-x-4"
                                data-oid="gpfhdq9"
                            >
                                <span className="text-purple-600 font-medium" data-oid="e93odvs">
                                    Tutorial
                                </span>
                                <span data-oid="c0cglxr">May 15, 2025</span>
                                <span data-oid="dnem2l2">5 min read</span>
                            </div>

                            <h1
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                                data-oid="x5mgftd"
                            >
                                How to Set Up and Use Ryn VPN for Maximum Privacy
                            </h1>

                            <p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                data-oid="65prhdr"
                            >
                                In today's digital world, protecting your online privacy has never
                                been more important. Ryn VPN provides a simple yet powerful solution
                                to secure your internet connection, protect your personal data, and
                                access content from anywhere in the world.
                            </p>
                        </header>

                        <div
                            className="relative mb-12 overflow-hidden rounded-xl"
                            data-oid="idp9c-:"
                        >
                            <img
                                src="/set%20up.png"
                                alt="How to Set Up and Use Ryn VPN"
                                className="w-full h-[500px] object-contain bg-gradient-to-r from-purple-50 to-white"
                                data-oid="4wnx5a1"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none" data-oid="_y987u9">
                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="v.l_ba_"
                            >
                                Why You Need Ryn VPN
                            </h2>
                            <p data-oid="_jb8366">
                                Before diving into the setup process, let's quickly review why using
                                a VPN like Ryn VPN is essential:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="0w54-t.">
                                <li data-oid="9zi1sp5">
                                    <strong data-oid="93jzp0l">Privacy Protection:</strong> Prevents
                                    ISPs, websites, and hackers from tracking your online activities
                                </li>
                                <li data-oid="4bkgvmd">
                                    <strong data-oid="05vyjj9">Security on Public Wi-Fi:</strong>{' '}
                                    Encrypts your connection on unsecured networks
                                </li>
                                <li data-oid="74gd3f3">
                                    <strong data-oid="b1ng82m">
                                        Access to Geo-restricted Content:
                                    </strong>{' '}
                                    Bypasses regional restrictions on streaming services and
                                    websites
                                </li>
                                <li data-oid="zpih5.3">
                                    <strong data-oid="gmph7-x">
                                        Protection from Data Throttling:
                                    </strong>{' '}
                                    Prevents your ISP from slowing down your connection based on
                                    your activities
                                </li>
                                <li data-oid="cb9y59v">
                                    <strong data-oid="j8ab:h_">Anonymous Browsing:</strong> Masks
                                    your IP address to keep your identity private
                                </li>
                            </ul>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="3zptv2u"
                            >
                                Step 1: Download and Install Ryn VPN
                            </h2>
                            <p data-oid="lbssfi2">
                                Getting started with Ryn VPN is straightforward. Follow these steps
                                to download and install the app:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="tm8yeun">
                                <li data-oid="zxk8:qu">
                                    Visit the{' '}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="n1_:2-2"
                                    >
                                        Google Play Store
                                    </a>{' '}
                                    (for Android) or the{' '}
                                    <a
                                        href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="n21vd6g"
                                    >
                                        App Store
                                    </a>{' '}
                                    (for iOS)
                                </li>
                                <li data-oid=".oapkqy">
                                    Search for "Ryn VPN" or click on the direct links above
                                </li>
                                <li data-oid="6ozs4l_">
                                    Tap "Install" or "Get" to download the app
                                </li>
                                <li data-oid="xla03ud">
                                    Once installed, open the app from your device's home screen
                                </li>
                            </ol>

                            <div className="bg-purple-50 p-6 rounded-lg mb-8" data-oid="ex18sj2">
                                <h3
                                    className="text-lg font-bold text-purple-800 mb-2"
                                    data-oid="mhkzoy7"
                                >
                                    Pro Tip
                                </h3>
                                <p className="text-purple-900" data-oid="3ih4cyz">
                                    Make sure you're downloading the official Ryn VPN app. Look for
                                    "Human Data Systems Private Limited" as the developer to ensure
                                    you're getting the genuine application.
                                </p>
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="-skfuhj"
                            >
                                Step 2: Create an Account or Sign In
                            </h2>
                            <p data-oid="b8mo.ji">
                                After installing the app, you'll need to create an account or sign
                                in:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="o9e.9_f">
                                <li data-oid="uxi9eiy">Open the Ryn VPN app</li>
                                <li data-oid="5fdk.k1">Tap "Sign Up" if you're a new user</li>
                                <li data-oid="y51-6:2">
                                    Enter your email address and create a strong password
                                </li>
                                <li data-oid="z-m4uo2">
                                    Alternatively, you can sign up using your Google or Apple
                                    account for faster access
                                </li>
                                <li data-oid="_vprq35">Verify your email address if prompted</li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="mr2:6jw"
                            >
                                Step 3: Connect to a VPN Server
                            </h2>
                            <p data-oid="y_tfe6v">
                                Now that you're signed in, you can connect to a VPN server:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="i_9l92:">
                                <li data-oid="3x07wyc">
                                    On the main screen, you'll see a large "Connect" button
                                </li>
                                <li data-oid="xiwm0yg">
                                    For the fastest connection, tap "Connect" to automatically
                                    connect to the optimal server
                                </li>
                                <li data-oid="p3r:_46">
                                    To select a specific location, tap on the server location
                                    indicator (usually shows a country name or "Best Location")
                                </li>
                                <li data-oid="ut7cwlj">
                                    Browse the list of available servers and select your preferred
                                    location
                                </li>
                                <li data-oid="r0eeq1i">
                                    Tap "Connect" to establish a secure VPN connection
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-6 rounded-lg mb-8" data-oid="lh0wbbx">
                                <h3
                                    className="text-lg font-bold text-blue-800 mb-2"
                                    data-oid="4ghaglq"
                                >
                                    Server Selection Tips
                                </h3>
                                <ul
                                    className="list-disc pl-6 space-y-1 text-blue-900"
                                    data-oid="i4xvl8j"
                                >
                                    <li data-oid="ptvtm2m">
                                        For general browsing and privacy, use the "Best Location"
                                        option
                                    </li>
                                    <li data-oid="2n2vsfl">
                                        For streaming, select a server in the country where the
                                        content is available
                                    </li>
                                    <li data-oid="ustkyv6">
                                        For gaming, choose a server closest to the game's servers to
                                        reduce latency
                                    </li>
                                    <li data-oid="7wr1l2.">
                                        Premium users have access to specialized streaming and
                                        gaming servers
                                    </li>
                                </ul>
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="1u.ouqa"
                            >
                                Step 4: Customize Your VPN Settings
                            </h2>
                            <p data-oid="7chiz5s">
                                Ryn VPN offers several customization options to enhance your
                                experience:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="8lwhknf">
                                <li data-oid="2r76q9k">
                                    <strong data-oid="_9_8ngm">Auto-Connect:</strong> Configure Ryn
                                    VPN to automatically connect when you join untrusted Wi-Fi
                                    networks
                                </li>
                                <li data-oid="zq:2vpm">
                                    <strong data-oid="yrda_r0">Split Tunneling:</strong> Choose
                                    which apps use the VPN connection and which ones use your
                                    regular connection
                                </li>
                                <li data-oid="0zcy-st">
                                    <strong data-oid="ix-svlb">Kill Switch:</strong> Enable this
                                    feature to automatically disconnect your internet if the VPN
                                    connection drops, preventing data leaks
                                </li>
                                <li data-oid="eenaqkf">
                                    <strong data-oid="qi0lw_.">Protocol Selection:</strong> Advanced
                                    users can select different VPN protocols based on their needs
                                </li>
                            </ul>

                            <p data-oid="pvn5dju">To access these settings:</p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="dibji.r">
                                <li data-oid="yq-zm85">
                                    Tap the settings icon (usually in the top-right or bottom-right
                                    corner)
                                </li>
                                <li data-oid="qfgkzw6">Browse through the available options</li>
                                <li data-oid="jinsxjf">
                                    Adjust settings according to your preferences
                                </li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="zt0jysm"
                            >
                                Step 5: Verify Your VPN Connection
                            </h2>
                            <p data-oid=":1kn7n5">
                                After connecting to a Ryn VPN server, it's a good idea to verify
                                that your connection is secure:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="fc9.yko">
                                <li data-oid="-qcs20j">
                                    Check the app's main screen for a "Connected" status
                                </li>
                                <li data-oid="up4efc:">
                                    Visit{' '}
                                    <a
                                        href="https://whatismyipaddress.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="mves9fu"
                                    >
                                        whatismyipaddress.com
                                    </a>{' '}
                                    to confirm your IP address has changed
                                </li>
                                <li data-oid="murd.xn">
                                    The website should show your location as the country you
                                    selected in the VPN
                                </li>
                                <li data-oid="ltc9kod">
                                    You can also perform a DNS leak test to ensure your DNS requests
                                    are properly protected
                                </li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="wo2doei"
                            >
                                Troubleshooting Common Issues
                            </h2>
                            <p data-oid="rvgamz_">
                                If you encounter any problems with Ryn VPN, try these solutions:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="l7hpr2u">
                                <li data-oid="nt:34dv">
                                    <strong data-oid="x2j___j">Connection Issues:</strong> Try
                                    switching to a different server or VPN protocol
                                </li>
                                <li data-oid="m0supe9">
                                    <strong data-oid="-8mbaw8">Slow Speeds:</strong> Connect to a
                                    server closer to your actual location
                                </li>
                                <li data-oid="pfjonkm">
                                    <strong data-oid="7bpm3fa">App Crashes:</strong> Ensure your app
                                    is updated to the latest version
                                </li>
                                <li data-oid="9k1se9i">
                                    <strong data-oid="0vk3ett">
                                        Streaming Services Not Working:
                                    </strong>{' '}
                                    Try specialized streaming servers (Premium feature)
                                </li>
                            </ul>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="fvie9z_"
                            >
                                Conclusion
                            </h2>
                            <p data-oid="9j2jxy9">
                                Ryn VPN provides a user-friendly yet powerful solution for
                                protecting your online privacy and security. By following these
                                simple steps, you can enjoy secure, private browsing on any network
                                and access content from around the world.
                            </p>
                            <p data-oid="lo9ajjh">
                                Remember that while the free version offers basic protection,
                                upgrading to Premium unlocks additional features like specialized
                                servers, faster speeds, and the ability to connect multiple devices
                                simultaneously.
                            </p>
                            <p className="mt-4" data-oid="p3r9::9">
                                Start protecting your online privacy today with Ryn VPN!
                            </p>

                            <div
                                className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg mt-10 text-white shadow-lg"
                                data-oid="cb4i:m6"
                            >
                                <h3 className="text-2xl font-bold mb-4" data-oid="s57oxco">
                                    Ready to Get Started?
                                </h3>
                                <p className="mb-6 text-purple-100" data-oid="r80-sc2">
                                    Download Ryn VPN now and take control of your online privacy
                                    with just a few taps.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="c4hn4rq">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-purple-800 hover:bg-purple-100 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 flex items-center justify-center gap-2"
                                        data-oid="k1k5kvp"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="04yvbqq"
                                        >
                                            <path
                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                data-oid="es_h344"
                                            />
                                        </svg>
                                        Download for Android
                                    </a>
                                    <a
                                        href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-purple-800 hover:bg-purple-100 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 flex items-center justify-center gap-2"
                                        data-oid="cpom2tn"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="48vh6fc"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                                data-oid="mruf.he"
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
                        data-oid="n1x8m6i"
                    >
                        <div
                            className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0"
                            data-oid="8512v0_"
                        >
                            <span className="text-2xl font-bold text-white" data-oid="5kcvmev">
                                RV
                            </span>
                        </div>
                        <div data-oid="93_cqle">
                            <h3
                                className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left"
                                data-oid="fi67ur2"
                            >
                                Ryn VPN Team
                            </h3>
                            <p
                                className="text-gray-600 mb-4 text-center md:text-left"
                                data-oid="x_.vopk"
                            >
                                Privacy experts dedicated to helping you stay secure online. Follow
                                us for the latest tips and updates on cybersecurity.
                            </p>
                            <div
                                className="flex justify-center md:justify-start space-x-4"
                                data-oid="2m7dh-_"
                            >
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="wjmtjqo"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="ly-m6tk"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="6ipnqs8"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="i_fy1n8"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="nig63.r"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            data-oid="gmbyw_z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts - Replaced Coming Soon with Actual Articles */}
                    <div className="mt-16" data-oid="g60i3kg">
                        <h3
                            className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200"
                            data-oid="9zzhcrm"
                        >
                            Related Articles
                        </h3>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner mt-12"
                data-oid="q4.auhx"
            >
                <div className="container mx-auto max-w-6xl" data-oid="8dznhmy">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-oid="cgpzgq2">
                        <div data-oid="08t7gmo">
                            <div className="flex items-center space-x-2 mb-4" data-oid="rz8._dg">
                                <div className="h-10 w-10 overflow-hidden" data-oid="4smfm-t">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="q:f5psl"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold text-purple-800"
                                    data-oid="8nbnbmk"
                                >
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4" data-oid="euzyzdz">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="238mywf">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid="xg882uu"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="u56p4me"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="phv0hnw"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="012s76u"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="h-618la">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="eprk2sv"
                            >
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="l1ba.79">
                                <li data-oid="cz45__a">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="-jpqn6-"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="a5:.a3y">
                                    <Link
                                        href="/blog"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="l:77av."
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li data-oid=":wv:_5u">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="5kvk-q:"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="rcil_3z">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="05-akbx"
                            >
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="9mmlk2g">
                                <li data-oid="b92-eyz">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="w50b.w1"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="q-bgvpi">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="2g0w3qm"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="dvq0.-l">
                                    <a
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="x35edcv"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid="4og:he4">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="5_6.-4i"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="h:ni.qi">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid=".b0yw:c"
                            >
                                Contact Us
                            </h3>
                            <div className="text-gray-600 space-y-2" data-oid="_4z1z87">
                                <p data-oid="fc4u25w">Human Data Systems Private Limited,</p>
                                <p data-oid="3_e1xup">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid="y.qop_d">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="6ij-kd1">110017 IN</p>
                                <p className="pt-2" data-oid="z:7fl2i">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid="o-x15xl"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="pktogdu"
                    >
                        <div className="text-gray-600 mb-4 md:mb-0" data-oid="bm40h:0">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="n7t0g5-">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="9md7qln"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="nab9l5c"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="2j7.oe1"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="sf8fbpw"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="3jq:n89"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="s5sy._w"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="vc.nr2b"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="3_u82qt"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="dmum8_r"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="nzj_2xc"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="v2-3.-p"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="u7du5_r"
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
