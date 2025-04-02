'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Features of Ryn VPN
    const features = [
        {
            title: 'Secure Connection',
            description:
                'Military-grade encryption to protect your online activities from hackers and surveillance.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="x_ufxxv"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        data-oid=".wpaf2p"
                    />
                </svg>
            ),
        },
        {
            title: 'Global Access',
            description:
                'Connect to servers worldwide to bypass geo-restrictions and access content from anywhere.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="pg5z6k2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="q74k_4f"
                    />
                </svg>
            ),
        },
        {
            title: 'No Logs Policy',
            description:
                "We don't track or store your online activities, ensuring complete privacy.",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="v.ee0b."
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        data-oid="qy:ozlx"
                    />
                </svg>
            ),
        },
        {
            title: 'Fast Speeds',
            description: 'Optimized servers for streaming, gaming, and browsing without lag.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="y-bx.69"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="2g5hqe9"
                    />
                </svg>
            ),
        },
    ];

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className="min-h-screen bg-gradient-to-b from-gray-900 to-teal-900 text-white"
            data-oid="gk5nwir"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-teal-800"
                data-oid="uc2o63h"
            >
                <div className="container mx-auto px-4 py-4" data-oid="jcushpy">
                    <div className="flex justify-between items-center" data-oid="ls.ixbo">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid="ot_d.mh">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden" data-oid="4ggvl6b">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="q7o:h4a"
                                />
                            </div>
                            <span className="text-xl font-bold" data-oid="ukg8w9e">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="d.3zqxm">
                            <a
                                href="#home"
                                className="hover:text-teal-400 transition-colors"
                                onClick={() => setActiveSection('home')}
                                data-oid="cjri.7n"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('features')}
                                data-oid="pr:zi-8"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('how-it-works')}
                                data-oid="mj-lgzm"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('pricing')}
                                data-oid=":yhg3qw"
                            >
                                Pricing
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={toggleMenu} data-oid="vj3on:7">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="pcsyx08"
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
                                    data-oid="7qqful0"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="-3yr4ij"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="7-cornf">
                            <a
                                href="#home"
                                className="block hover:text-teal-400 transition-colors"
                                onClick={() => {
                                    setActiveSection('home');
                                    toggleMenu();
                                }}
                                data-oid="b4xhpak"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="block hover:text-indigo-400 transition-colors"
                                onClick={() => {
                                    setActiveSection('features');
                                    toggleMenu();
                                }}
                                data-oid="_fgx23f"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="block hover:text-indigo-400 transition-colors"
                                onClick={() => {
                                    setActiveSection('how-it-works');
                                    toggleMenu();
                                }}
                                data-oid="tuugi_f"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="block hover:text-indigo-400 transition-colors"
                                onClick={() => {
                                    setActiveSection('pricing');
                                    toggleMenu();
                                }}
                                data-oid="wfu:_lb"
                            >
                                Pricing
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="ll4p2sh"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="py-20 px-4" data-oid="tgmddb0">
                <div
                    className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center"
                    data-oid="ha0w-.g"
                >
                    <div className="md:w-1/2 mb-10 md:mb-0" data-oid="_6a8zj6">
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            data-oid="jecz-8w"
                        >
                            Secure Your Online Privacy with{' '}
                            <span className="text-teal-400" data-oid="mi2r8l5">
                                Ryn VPN
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8" data-oid="skyt7a3">
                            Browse anonymously, secure your connection, and access content from
                            anywhere in the world with our fast and reliable VPN service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4" data-oid="q607.am">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                data-oid="552ue-e"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="d1q.fty"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="q3tb3hb"
                                    />
                                </svg>
                                Get it on Google Play
                            </a>
                            <a
                                href="#features"
                                className="border border-teal-600 text-white hover:bg-teal-600 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                                data-oid="te_qkuf"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center" data-oid="iuzmlu1">
                        <div
                            className="relative shadow-2xl rounded-3xl overflow-hidden max-w-[90%]"
                            data-oid="yidf:aa"
                        >
                            <div className="relative" data-oid="ah6yp.c">
                                <img
                                    src="/vpn-app-mockup.png"
                                    alt="Ryn VPN App Mockup"
                                    className="w-full h-auto max-h-[550px] object-contain"
                                    data-oid="6c80hwd"
                                />

                                <div
                                    className="absolute bottom-0 left-0 right-0 text-center pb-4 text-purple-600 font-bold text-xl"
                                    data-oid="d3-6eds"
                                >
                                    Access Content Worldwide
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-gray-900" data-oid="woifl1c">
                <div className="container mx-auto max-w-6xl" data-oid="0_4:w64">
                    <div className="text-center mb-16" data-oid="pyw6ho7">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ydh0ogb">
                            Why Choose Ryn VPN?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="ru_10bz">
                            Our VPN service offers the perfect balance of security, speed, and
                            simplicity to keep you protected online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="605rlr9">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
                                data-oid="izaxeao"
                            >
                                <div className="mb-4" data-oid="91g0nr0">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-oid="i8aplk5">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300" data-oid="1._dkcg">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section
                id="how-it-works"
                className="py-20 px-4 bg-teal-900 bg-opacity-30"
                data-oid="erbo4cq"
            >
                <div className="container mx-auto max-w-6xl" data-oid="w-nqoar">
                    <div className="text-center mb-16" data-oid="0n39r6:">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="4lrt838">
                            How Ryn VPN Works
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="p1.ia-g">
                            Protecting your online privacy has never been easier. Just three simple
                            steps to secure your connection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="qi8fvqt">
                        <div className="bg-gray-800 rounded-xl p-6 text-center" data-oid="uznup8v">
                            <div
                                className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="ijjw2n1"
                            >
                                <span className="text-2xl font-bold" data-oid="-7zfzqz">
                                    1
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="jafqt2p">
                                Download the App
                            </h3>
                            <p className="text-gray-300" data-oid="dsa3zgk">
                                Get Ryn VPN from the Google Play Store and install it on your
                                device.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 text-center" data-oid="9c:-q-8">
                            <div
                                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="fpgk-xm"
                            >
                                <span className="text-2xl font-bold" data-oid="-olv25o">
                                    2
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="mtn9l6i">
                                Connect to a Server
                            </h3>
                            <p className="text-gray-300" data-oid="-mv8r.6">
                                Choose from our global network of high-speed servers with just one
                                tap.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 text-center" data-oid="z6:mn0j">
                            <div
                                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="s_7zs.l"
                            >
                                <span className="text-2xl font-bold" data-oid="t0..:eo">
                                    3
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="8ty-45m">
                                Enjoy Secure Browsing
                            </h3>
                            <p className="text-gray-300" data-oid="r.aiuop">
                                Browse, stream, and download with complete privacy and security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 bg-gray-900" data-oid="215q35i">
                <div className="container mx-auto max-w-6xl" data-oid="r_opb8z">
                    <div className="text-center mb-16" data-oid="prcxjc3">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="zssujj6">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="a:pvlk9">
                            Choose the plan that works best for you. All plans include our core
                            features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="437qkp5">
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            data-oid="-2-obqf"
                        >
                            <div className="text-center mb-6" data-oid="50mm654">
                                <h3 className="text-xl font-bold mb-2" data-oid="tfd-c0w">
                                    Free
                                </h3>
                                <div className="text-4xl font-bold mb-2" data-oid="zkbht5:">
                                    $0
                                </div>
                                <p className="text-gray-400" data-oid="r4edc9w">
                                    Limited features
                                </p>
                            </div>
                            <ul className="space-y-3 mb-6" data-oid="e9-kjud">
                                <li className="flex items-center" data-oid="occ3jxn">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="s3:312_"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="dqimwun"
                                        />
                                    </svg>
                                    Basic encryption
                                </li>
                                <li className="flex items-center" data-oid="y-bx5g2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="4:tqhjy"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="mhgqrfx"
                                        />
                                    </svg>
                                    Limited server locations
                                </li>
                                <li className="flex items-center" data-oid="wqrss8o">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="y07fguw"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="9glm7db"
                                        />
                                    </svg>
                                    Standard speed
                                </li>
                                <li className="flex items-center text-gray-500" data-oid="-c9yqwj">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="772zt2z"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="tskj72x"
                                        />
                                    </svg>
                                    Ad-supported
                                </li>
                            </ul>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid="vcj:-mm"
                            >
                                Download Free
                            </a>
                        </div>

                        <div
                            className="bg-teal-900 rounded-xl p-6 border-2 border-teal-600 transform md:scale-105 z-10 shadow-xl"
                            data-oid="ubww:58"
                        >
                            <div className="text-center mb-6" data-oid="xa21-5a">
                                <div
                                    className="bg-teal-600 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2"
                                    data-oid="q01pcql"
                                >
                                    MOST POPULAR
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-oid="ww0fyxb">
                                    Premium
                                </h3>
                                <div className="text-4xl font-bold mb-2" data-oid="8l0dw_x">
                                    $7.99
                                </div>
                                <p className="text-gray-300" data-oid="1vq.zwt">
                                    per month
                                </p>
                            </div>
                            <ul className="space-y-3 mb-6" data-oid="k0.d8l1">
                                <li className="flex items-center" data-oid="phj-73h">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="slng7za"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="_7wm7ci"
                                        />
                                    </svg>
                                    Military-grade encryption
                                </li>
                                <li className="flex items-center" data-oid="akx.h_j">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="4zhzl:7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="zmbp-38"
                                        />
                                    </svg>
                                    100+ server locations
                                </li>
                                <li className="flex items-center" data-oid="-1-5wno">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="kasouo5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="e5747-z"
                                        />
                                    </svg>
                                    High-speed servers
                                </li>
                                <li className="flex items-center" data-oid="su-xu-7">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="ve_x10f"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="1t8vhlr"
                                        />
                                    </svg>
                                    Ad-free experience
                                </li>
                                <li className="flex items-center" data-oid="qb0uxhr">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="a7ndof."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="road61l"
                                        />
                                    </svg>
                                    5 devices simultaneously
                                </li>
                            </ul>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid="e.vtqww"
                            >
                                Get Premium
                            </a>
                        </div>

                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            data-oid="i4whev1"
                        >
                            <div className="text-center mb-6" data-oid="26dh_x4">
                                <h3 className="text-xl font-bold mb-2" data-oid="qhrn475">
                                    Business
                                </h3>
                                <div className="text-4xl font-bold mb-2" data-oid="g3_op1m">
                                    $12.99
                                </div>
                                <p className="text-gray-400" data-oid="2xc-q72">
                                    per month
                                </p>
                            </div>
                            <ul className="space-y-3 mb-6" data-oid="hzjm8pg">
                                <li className="flex items-center" data-oid="wp4ihqr">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="lrqc39q"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="lxo1.y5"
                                        />
                                    </svg>
                                    Everything in Premium
                                </li>
                                <li className="flex items-center" data-oid="dk7w4vw">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="mk--4eo"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="qhukww8"
                                        />
                                    </svg>
                                    Dedicated IP option
                                </li>
                                <li className="flex items-center" data-oid="a9w_9m3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="q83uwd5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid=".pijbtx"
                                        />
                                    </svg>
                                    Priority support
                                </li>
                                <li className="flex items-center" data-oid="xzloepl">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="mj1b68o"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="z_6ry4."
                                        />
                                    </svg>
                                    10 devices simultaneously
                                </li>
                                <li className="flex items-center" data-oid="71nn6ji">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="9h4.hh3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="e2anr53"
                                        />
                                    </svg>
                                    Team management console
                                </li>
                            </ul>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid="o_iuxut"
                            >
                                Get Business Plan
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA Section */}
            <section className="py-20 px-4 bg-teal-800" data-oid="9zuaq2.">
                <div className="container mx-auto max-w-4xl text-center" data-oid="1l:..k0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid=":5_o18u">
                        Ready to Secure Your Online Privacy?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" data-oid="uy:1lwb">
                        Download Ryn VPN now and take control of your online security and privacy
                        with just one tap.
                    </p>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                        data-oid="uhy8-:3"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-oid=".hwq4ar"
                        >
                            <path
                                d="M5.26 3.795L15.59 12 5.26 20.205c-.32.25-.76.03-.76-.38V4.175c0-.41.44-.63.76-.38zM17.5 12l2.92 2.92c.39.39.39 1.02 0 1.41l-3.37 3.38L12.41 12 17.05 4.29l3.37 3.38c.39.39.39 1.02 0 1.41L17.5 12z"
                                data-oid=".fxpeds"
                            />
                        </svg>
                        Get it on Google Play
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 px-4" data-oid="_kr694v">
                <div className="container mx-auto max-w-6xl" data-oid="zxuh949">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-oid="st_4ddn">
                        <div data-oid="jxtvi7s">
                            <div className="flex items-center space-x-2 mb-4" data-oid="pd0jd0r">
                                <div className="h-10 w-10 overflow-hidden" data-oid="na14gg:">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="gyvfm0h"
                                    />
                                </div>
                                <span className="text-xl font-bold" data-oid="-56.w0a">
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="66jv:dn">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid="0c:4agj"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="h-3zfmg"
                                >
                                    <path
                                        d="M5.26 3.795L15.59 12 5.26 20.205c-.32.25-.76.03-.76-.38V4.175c0-.41.44-.63.76-.38zM17.5 12l2.92 2.92c.39.39.39 1.02 0 1.41l-3.37 3.38L12.41 12 17.05 4.29l3.37 3.38c.39.39.39 1.02 0 1.41L17.5 12z"
                                        data-oid=".zzupo."
                                    />
                                </svg>
                                Get it on Google Play
                            </a>
                        </div>
                        <div data-oid="wywynn8">
                            <h3 className="text-lg font-bold mb-4" data-oid=".14u4nu">
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="nld0ksb">
                                <li data-oid="7nhwr6m">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="1vgl01l"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="dzdly8t">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="imbb0p:"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li data-oid=".hap-zf">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="pa5p4q2"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li data-oid="flk0:ox">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="39.q:u0"
                                    >
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="8wq2o-x">
                            <h3 className="text-lg font-bold mb-4" data-oid="ep5j9:9">
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="1idc8nf">
                                <li data-oid="c:v2563">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="_:4yt8t"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="lbxk:r4">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="9f5-hm_"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="ky:ozq3">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="2fes_sw"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid=":k9i4sn">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="hd7k8bh"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="k0ejvoq">
                            <h3 className="text-lg font-bold mb-4" data-oid="un.icj5">
                                Legal
                            </h3>
                            <ul className="space-y-2" data-oid="zr3hl8e">
                                <li data-oid="1mr:q3k">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="5vjd5sn"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="s10-ssj">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="h4l4tc4"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li data-oid="fbc8nwe">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="0n1oe0i"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li data-oid="xv9_0hi">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="y7k:mz2"
                                    >
                                        GDPR Compliance
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="lcanw6_"
                    >
                        <div className="text-gray-400 mb-4 md:mb-0" data-oid="_b3psj:">
                            © 2023 Ryn VPN. All rights reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="793e8fm">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="05nnhcf"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="5igfp_:"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="qkn-_fz"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="60kb_07"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="wsimlhj"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="zr.gmrw"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="2l-0c-5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="2n.9e7w"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="6qo2sdn"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="k5.ai28"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="mq_neu."
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="6kkezs9"
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
