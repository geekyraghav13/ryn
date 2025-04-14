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
        <div className="min-h-screen bg-gray-50" data-oid="iv341zu">
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100"
                data-oid="ui6wqha"
            >
                <div className="container mx-auto px-4 py-4" data-oid="f88uo8z">
                    <div className="flex justify-between items-center" data-oid="cbnt9mz">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid="0_:.62w">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden" data-oid="sx4mfl7">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="gsyetar"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800" data-oid="dmuezu_">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="-4bucc7">
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="7qt9tl."
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="6dqwkmb"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="42igur-"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                data-oid="tf.1xvw"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="text-purple-700 font-bold"
                                data-oid="txa7252"
                            >
                                Blog
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-purple-800"
                            onClick={toggleMenu}
                            data-oid="i:9g5go"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="i.faa.5"
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
                                    data-oid="n4gc9ch"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="beydl6e"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="hsw4g2n">
                            <Link
                                href="/"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="ds:6oxu"
                            >
                                Home
                            </Link>
                            <Link
                                href="/features"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="1x8kgdo"
                            >
                                Features
                            </Link>
                            <Link
                                href="/#how-it-works"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="64agfvn"
                            >
                                How It Works
                            </Link>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="q3rl95t"
                            >
                                Pricing
                            </a>
                            <Link
                                href="/blog"
                                className="block text-purple-700 font-bold"
                                onClick={() => toggleMenu()}
                                data-oid="99e9zyl"
                            >
                                Blog
                            </Link>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="4sn1hqu"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Blog Post Content - Timestream Inspired */}
            <div className="container mx-auto px-4 py-16" data-oid="q28mt8n">
                <div className="max-w-4xl mx-auto" data-oid="lv_._z0">
                    <div className="mb-8 flex justify-between items-center" data-oid="x4:1_hd">
                        <Link
                            href="/blog"
                            className="text-purple-600 hover:text-purple-800 flex items-center gap-2 font-medium"
                            data-oid="w4t7u1s"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                data-oid="-mdmk46"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                    clipRule="evenodd"
                                    data-oid=".8gt2c7"
                                />
                            </svg>
                            Back to Blog
                        </Link>
                        <div className="flex items-center space-x-3" data-oid="h-ihlta">
                            <span className="text-gray-500 text-sm" data-oid="0492q.4">
                                Share:
                            </span>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800"
                                data-oid="iycfyne"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="guc4_v9"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                        data-oid="ogq09s9"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800"
                                data-oid="d6g6-zg"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    data-oid="8_bm5ap"
                                >
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                        data-oid="781gxw8"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <article data-oid="20b3z4p">
                        <header className="mb-10" data-oid="tk5e5xq">
                            <div
                                className="flex items-center text-sm text-gray-500 mb-4 space-x-4"
                                data-oid="z2vtqeh"
                            >
                                <span className="text-purple-600 font-medium" data-oid="2bzy4kw">
                                    Tutorial
                                </span>
                                <span data-oid="1pqrtq3">May 15, 2025</span>
                                <span data-oid="t545dq:">5 min read</span>
                            </div>

                            <h1
                                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                                data-oid="m-kv-_4"
                            >
                                How to Set Up and Use Ryn VPN for Maximum Privacy
                            </h1>

                            <p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                data-oid="ncam:3o"
                            >
                                In today's digital world, protecting your online privacy has never
                                been more important. Ryn VPN provides a simple yet powerful solution
                                to secure your internet connection, protect your personal data, and
                                access content from anywhere in the world.
                            </p>
                        </header>

                        <div
                            className="relative mb-12 overflow-hidden rounded-xl"
                            data-oid="5slu-nb"
                        >
                            <img
                                src="/set%20up.png"
                                alt="How to Set Up and Use Ryn VPN"
                                className="w-full h-[500px] object-contain bg-gradient-to-r from-purple-50 to-white"
                                data-oid="_ehu_65"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none" data-oid="4eeb8sr">
                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="e:m.a4h"
                            >
                                Why You Need Ryn VPN
                            </h2>
                            <p data-oid="um73wnz">
                                Before diving into the setup process, let's quickly review why using
                                a VPN like Ryn VPN is essential:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="qb6faam">
                                <li data-oid="vq6zy38">
                                    <strong data-oid="bplr07b">Privacy Protection:</strong> Prevents
                                    ISPs, websites, and hackers from tracking your online activities
                                </li>
                                <li data-oid="qls9pm4">
                                    <strong data-oid="n5xhfg-">Security on Public Wi-Fi:</strong>{' '}
                                    Encrypts your connection on unsecured networks
                                </li>
                                <li data-oid="sg36.3x">
                                    <strong data-oid="y5ovrot">
                                        Access to Geo-restricted Content:
                                    </strong>{' '}
                                    Bypasses regional restrictions on streaming services and
                                    websites
                                </li>
                                <li data-oid="kay54zl">
                                    <strong data-oid="uw2gi66">
                                        Protection from Data Throttling:
                                    </strong>{' '}
                                    Prevents your ISP from slowing down your connection based on
                                    your activities
                                </li>
                                <li data-oid="tgcvz2y">
                                    <strong data-oid="klpwd5_">Anonymous Browsing:</strong> Masks
                                    your IP address to keep your identity private
                                </li>
                            </ul>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="abd1glb"
                            >
                                Step 1: Download and Install Ryn VPN
                            </h2>
                            <p data-oid="iij2_8n">
                                Getting started with Ryn VPN is straightforward. Follow these steps
                                to download and install the app:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="d6:1fkr">
                                <li data-oid="jqbv:od">
                                    Visit the{' '}
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="g6mwyk."
                                    >
                                        Google Play Store
                                    </a>{' '}
                                    (for Android) or the{' '}
                                    <a
                                        href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="irirmky"
                                    >
                                        App Store
                                    </a>{' '}
                                    (for iOS)
                                </li>
                                <li data-oid="ug4dnjr">
                                    Search for "Ryn VPN" or click on the direct links above
                                </li>
                                <li data-oid="5ph78i8">
                                    Tap "Install" or "Get" to download the app
                                </li>
                                <li data-oid="89uh1ki">
                                    Once installed, open the app from your device's home screen
                                </li>
                            </ol>

                            <div className="bg-purple-50 p-6 rounded-lg mb-8" data-oid="en1p11q">
                                <h3
                                    className="text-lg font-bold text-purple-800 mb-2"
                                    data-oid="b-of4uw"
                                >
                                    Pro Tip
                                </h3>
                                <p className="text-purple-900" data-oid="61izy3q">
                                    Make sure you're downloading the official Ryn VPN app. Look for
                                    "Human Data Systems Private Limited" as the developer to ensure
                                    you're getting the genuine application.
                                </p>
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="bp7kuds"
                            >
                                Step 2: Create an Account or Sign In
                            </h2>
                            <p data-oid="7tt63hl">
                                After installing the app, you'll need to create an account or sign
                                in:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="w0e5n7f">
                                <li data-oid="-1ey76e">Open the Ryn VPN app</li>
                                <li data-oid="fmwu7p8">Tap "Sign Up" if you're a new user</li>
                                <li data-oid="pmn0ls5">
                                    Enter your email address and create a strong password
                                </li>
                                <li data-oid="w4td4ks">
                                    Alternatively, you can sign up using your Google or Apple
                                    account for faster access
                                </li>
                                <li data-oid="qhk1097">Verify your email address if prompted</li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="9wytz88"
                            >
                                Step 3: Connect to a VPN Server
                            </h2>
                            <p data-oid="x1uk1l:">
                                Now that you're signed in, you can connect to a VPN server:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="r71cmn_">
                                <li data-oid="bcb1qyw">
                                    On the main screen, you'll see a large "Connect" button
                                </li>
                                <li data-oid="zdrou7c">
                                    For the fastest connection, tap "Connect" to automatically
                                    connect to the optimal server
                                </li>
                                <li data-oid="y.9r290">
                                    To select a specific location, tap on the server location
                                    indicator (usually shows a country name or "Best Location")
                                </li>
                                <li data-oid="rx6yz2f">
                                    Browse the list of available servers and select your preferred
                                    location
                                </li>
                                <li data-oid="a9yxap0">
                                    Tap "Connect" to establish a secure VPN connection
                                </li>
                            </ol>

                            <div className="bg-blue-50 p-6 rounded-lg mb-8" data-oid="nmt.80z">
                                <h3
                                    className="text-lg font-bold text-blue-800 mb-2"
                                    data-oid="y4u3a-9"
                                >
                                    Server Selection Tips
                                </h3>
                                <ul
                                    className="list-disc pl-6 space-y-1 text-blue-900"
                                    data-oid="k_n73wv"
                                >
                                    <li data-oid="qau7d-4">
                                        For general browsing and privacy, use the "Best Location"
                                        option
                                    </li>
                                    <li data-oid="-t.qb6s">
                                        For streaming, select a server in the country where the
                                        content is available
                                    </li>
                                    <li data-oid="btni.98">
                                        For gaming, choose a server closest to the game's servers to
                                        reduce latency
                                    </li>
                                    <li data-oid="qcm9mao">
                                        Premium users have access to specialized streaming and
                                        gaming servers
                                    </li>
                                </ul>
                            </div>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="apra1k7"
                            >
                                Step 4: Customize Your VPN Settings
                            </h2>
                            <p data-oid="uyumewn">
                                Ryn VPN offers several customization options to enhance your
                                experience:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="o4lk3gr">
                                <li data-oid="k4.64rb">
                                    <strong data-oid="93yk7of">Auto-Connect:</strong> Configure Ryn
                                    VPN to automatically connect when you join untrusted Wi-Fi
                                    networks
                                </li>
                                <li data-oid="llac6tp">
                                    <strong data-oid="vn6cjyn">Split Tunneling:</strong> Choose
                                    which apps use the VPN connection and which ones use your
                                    regular connection
                                </li>
                                <li data-oid="er0viz4">
                                    <strong data-oid="dzm9:tb">Kill Switch:</strong> Enable this
                                    feature to automatically disconnect your internet if the VPN
                                    connection drops, preventing data leaks
                                </li>
                                <li data-oid="i95k-e0">
                                    <strong data-oid="bp2aggn">Protocol Selection:</strong> Advanced
                                    users can select different VPN protocols based on their needs
                                </li>
                            </ul>

                            <p data-oid="840ts-g">To access these settings:</p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="-ps2lgn">
                                <li data-oid="3kpcvxw">
                                    Tap the settings icon (usually in the top-right or bottom-right
                                    corner)
                                </li>
                                <li data-oid="sstfl.j">Browse through the available options</li>
                                <li data-oid="z_a7yj8">
                                    Adjust settings according to your preferences
                                </li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="jh5w442"
                            >
                                Step 5: Verify Your VPN Connection
                            </h2>
                            <p data-oid="4p3dk8g">
                                After connecting to a Ryn VPN server, it's a good idea to verify
                                that your connection is secure:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-2" data-oid="xo350cx">
                                <li data-oid="m9h1f_h">
                                    Check the app's main screen for a "Connected" status
                                </li>
                                <li data-oid="7ckxv6_">
                                    Visit{' '}
                                    <a
                                        href="https://whatismyipaddress.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800"
                                        data-oid="37p272r"
                                    >
                                        whatismyipaddress.com
                                    </a>{' '}
                                    to confirm your IP address has changed
                                </li>
                                <li data-oid="h.1a0lz">
                                    The website should show your location as the country you
                                    selected in the VPN
                                </li>
                                <li data-oid=":ij4wpw">
                                    You can also perform a DNS leak test to ensure your DNS requests
                                    are properly protected
                                </li>
                            </ol>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="4li2gv9"
                            >
                                Troubleshooting Common Issues
                            </h2>
                            <p data-oid="rcmfqh8">
                                If you encounter any problems with Ryn VPN, try these solutions:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-2" data-oid="ua203oa">
                                <li data-oid="6-63pln">
                                    <strong data-oid=":tb6x9l">Connection Issues:</strong> Try
                                    switching to a different server or VPN protocol
                                </li>
                                <li data-oid=".wmhyu9">
                                    <strong data-oid="um:p6.s">Slow Speeds:</strong> Connect to a
                                    server closer to your actual location
                                </li>
                                <li data-oid="i2gw:63">
                                    <strong data-oid="xy.re56">App Crashes:</strong> Ensure your app
                                    is updated to the latest version
                                </li>
                                <li data-oid=".f10r93">
                                    <strong data-oid="bx5dyg3">
                                        Streaming Services Not Working:
                                    </strong>{' '}
                                    Try specialized streaming servers (Premium feature)
                                </li>
                            </ul>

                            <h2
                                className="text-2xl font-bold text-gray-800 mt-10 mb-4"
                                data-oid="ag85wh6"
                            >
                                Conclusion
                            </h2>
                            <p data-oid="p0n7thv">
                                Ryn VPN provides a user-friendly yet powerful solution for
                                protecting your online privacy and security. By following these
                                simple steps, you can enjoy secure, private browsing on any network
                                and access content from around the world.
                            </p>
                            <p data-oid="o04knz9">
                                Remember that while the free version offers basic protection,
                                upgrading to Premium unlocks additional features like specialized
                                servers, faster speeds, and the ability to connect multiple devices
                                simultaneously.
                            </p>
                            <p className="mt-4" data-oid="c5i:6tl">
                                Start protecting your online privacy today with Ryn VPN!
                            </p>

                            <div
                                className="bg-gradient-to-r from-purple-700 to-purple-900 p-8 rounded-lg mt-10 text-white shadow-lg"
                                data-oid="35g89nu"
                            >
                                <h3 className="text-2xl font-bold mb-4" data-oid="7wzzr02">
                                    Ready to Get Started?
                                </h3>
                                <p className="mb-6 text-purple-100" data-oid="pkr1vv_">
                                    Download Ryn VPN now and take control of your online privacy
                                    with just a few taps.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4" data-oid="xcs124n">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-purple-800 hover:bg-purple-100 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 flex items-center justify-center gap-2"
                                        data-oid="j3rpr6a"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="b7c3_u9"
                                        >
                                            <path
                                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                                                data-oid="8gdeeqv"
                                            />
                                        </svg>
                                        Download for Android
                                    </a>
                                    <a
                                        href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-purple-800 hover:bg-purple-100 font-medium py-3 px-6 rounded-lg transition-colors text-center flex-1 flex items-center justify-center gap-2"
                                        data-oid="bqe65ej"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            data-oid="c2f.:d4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                                data-oid="sl.-cy-"
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
                        data-oid="6hhw:pd"
                    >
                        <div
                            className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0"
                            data-oid="1_l-ws."
                        >
                            <span className="text-2xl font-bold text-white" data-oid="c6-fce3">
                                RV
                            </span>
                        </div>
                        <div data-oid="::a7odr">
                            <h3
                                className="text-xl font-bold text-gray-900 mb-2 text-center md:text-left"
                                data-oid="5_hmyaq"
                            >
                                Ryn VPN Team
                            </h3>
                            <p
                                className="text-gray-600 mb-4 text-center md:text-left"
                                data-oid="g1f9v0a"
                            >
                                Privacy experts dedicated to helping you stay secure online. Follow
                                us for the latest tips and updates on cybersecurity.
                            </p>
                            <div
                                className="flex justify-center md:justify-start space-x-4"
                                data-oid="sgz6__j"
                            >
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="fcs6g.f"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="zu.nw4p"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                            data-oid="r.z4csz"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-purple-600 hover:text-purple-800"
                                    data-oid="e1k8xrg"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        data-oid="ddaowq4"
                                    >
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            data-oid="2h03aw8"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts - Replaced Coming Soon with Actual Articles */}
                    <div className="mt-16" data-oid="1vi--61">
                        <h3
                            className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200"
                            data-oid="9x9lv12"
                        >
                            Related Articles
                        </h3>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner mt-12"
                data-oid="c.ab9pn"
            >
                <div className="container mx-auto max-w-6xl" data-oid="q8o.8z0">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-oid="btd0nae">
                        <div data-oid="r5:_zww">
                            <div className="flex items-center space-x-2 mb-4" data-oid="pwdd6ry">
                                <div className="h-10 w-10 overflow-hidden" data-oid="vhn9qih">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="i:3ofvq"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold text-purple-800"
                                    data-oid="1he4ecl"
                                >
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-600 mb-4" data-oid="va_km2t">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="ud99d1r">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid="dtk:t2p"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="vn-5lys"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="jieuf-7"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="e9ycejj"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="rp_fxg1">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="73izqz6"
                            >
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="9rca.9u">
                                <li data-oid="vib2jih">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid=":0llkai"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="cd.ud8x">
                                    <Link
                                        href="/blog"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="hl80td_"
                                    >
                                        Blog
                                    </Link>
                                </li>
                                <li data-oid="2ps4sdc">
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="lalb1:5"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="zih-:wv">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="a_ujtw:"
                            >
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="a6pwdtk">
                                <li data-oid="u38uif8">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="7.nb7j:"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="p14puv1">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="bijt6yb"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="yq9l-e1">
                                    <a
                                        href="/#faq"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="x_khyuk"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid="gpvw7e_">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                        data-oid="gwudetc"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="r3vs3u7">
                            <h3
                                className="text-lg font-bold mb-4 text-purple-800"
                                data-oid="rt:::8x"
                            >
                                Contact Us
                            </h3>
                            <div className="text-gray-600 space-y-2" data-oid=":00gyow">
                                <p data-oid="mzdcjns">Human Data Systems Private Limited,</p>
                                <p data-oid="6him5vx">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid="4sirs97">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="9yul5ln">110017 IN</p>
                                <p className="pt-2" data-oid="bsn3unl">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid="gr0l.ov"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="0qh-t.."
                    >
                        <div className="text-gray-600 mb-4 md:mb-0" data-oid="y6d.-14">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="0u-t:1d">
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="95-e6r6"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="w3n3ht5"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="ijgs:2w"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid=".a_vj94"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="x5yzfl9"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="dqmr969"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="ewxzb7r"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="4wp2z7-"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="lo5plb3"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 transition-colors"
                                data-oid="-p6kled"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="3vl.pd_"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="vkpu69y"
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
