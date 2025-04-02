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
                    className="h-10 w-10 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="hxm5yyj"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        data-oid="0wrnzbt"
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
                    data-oid="vfjatgb"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="k603shc"
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
                    data-oid="b14p7lo"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        data-oid="nf2oana"
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
                    data-oid="j84:.oe"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="_:431n-"
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
            className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white"
            data-oid="krzeout"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
                data-oid="mhf6:dv"
            >
                <div className="container mx-auto px-4 py-4" data-oid="c00e-:g">
                    <div className="flex justify-between items-center" data-oid="5k31x4j">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid="yj6tq1:">
                            {/* Replace with actual logo */}
                            <div
                                className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center"
                                data-oid="w7qb0sw"
                            >
                                <span className="font-bold text-xl" data-oid="gkieskb">
                                    R
                                </span>
                            </div>
                            <span className="text-xl font-bold" data-oid="p.h7_t5">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="3lr-gzb">
                            <a
                                href="#home"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('home')}
                                data-oid="iynl067"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('features')}
                                data-oid="x8j_h65"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('how-it-works')}
                                data-oid="bcd6nia"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('pricing')}
                                data-oid="dk_43o8"
                            >
                                Pricing
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={toggleMenu} data-oid="fro5mlg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="spfdbkf"
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
                                    data-oid="99dbhhn"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="t.ihxhe"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="zf6rxc8">
                            <a
                                href="#home"
                                className="block hover:text-indigo-400 transition-colors"
                                onClick={() => {
                                    setActiveSection('home');
                                    toggleMenu();
                                }}
                                data-oid="-jf90pc"
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
                                data-oid="2n.ehe."
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
                                data-oid="dyvrfmb"
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
                                data-oid=":dcg-k7"
                            >
                                Pricing
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="1-yrgzr"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="py-20 px-4" data-oid="63tn0gx">
                <div
                    className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center"
                    data-oid="c_85aih"
                >
                    <div className="md:w-1/2 mb-10 md:mb-0" data-oid="clotjn3">
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            data-oid="my-pmtl"
                        >
                            Secure Your Online Privacy with{' '}
                            <span className="text-indigo-400" data-oid="e30thx3">
                                Ryn VPN
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8" data-oid="udv1h:9">
                            Browse anonymously, secure your connection, and access content from
                            anywhere in the world with our fast and reliable VPN service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4" data-oid="99onbtq">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                data-oid="k0pgb6k"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="w7nuf:."
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        data-oid="0fyj8ik"
                                    />
                                </svg>
                                Get it on Google Play
                            </a>
                            <a
                                href="#features"
                                className="border border-indigo-600 text-white hover:bg-indigo-600 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                                data-oid="u_35ku4"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center" data-oid="znuz4fg">
                        <div
                            className="relative w-64 h-[500px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-700"
                            data-oid="frc_d63"
                        >
                            {/* Mock Phone Screen */}
                            <div
                                className="absolute top-0 left-0 right-0 h-10 bg-black flex justify-center items-end pb-1"
                                data-oid="rk4v:jk"
                            >
                                <div
                                    className="w-20 h-1 bg-gray-600 rounded-full"
                                    data-oid="5e9541."
                                ></div>
                            </div>
                            <div
                                className="pt-10 px-3 h-full bg-gradient-to-b from-indigo-900 to-gray-900"
                                data-oid="ahzno.f"
                            >
                                {/* App UI Mockup */}
                                <div className="bg-gray-800 rounded-t-xl p-3" data-oid="b4z.xo7">
                                    <div
                                        className="flex justify-between items-center mb-4"
                                        data-oid="busgjsm"
                                    >
                                        <div
                                            className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center"
                                            data-oid=":rhqcph"
                                        >
                                            <span className="font-bold text-sm" data-oid="jk-ekgc">
                                                R
                                            </span>
                                        </div>
                                        <div className="text-sm font-medium" data-oid="nx3.wuv">
                                            Ryn VPN
                                        </div>
                                        <div
                                            className="h-6 w-6 rounded-full bg-gray-700"
                                            data-oid="wf12j-9"
                                        ></div>
                                    </div>
                                    <div
                                        className="bg-gray-900 rounded-xl p-4 mb-4"
                                        data-oid="jw7yig5"
                                    >
                                        <div className="text-center mb-2" data-oid="4y8dl8n">
                                            Status:{' '}
                                            <span className="text-green-500" data-oid="12ype7l">
                                                Connected
                                            </span>
                                        </div>
                                        <div
                                            className="w-20 h-20 mx-auto bg-indigo-600 rounded-full flex items-center justify-center mb-3"
                                            data-oid="foun_tc"
                                        >
                                            <div
                                                className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center"
                                                data-oid="a2d.k7d"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-8 w-8 text-green-500"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="ggzgz3n"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                        data-oid="tnat55x"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="text-xs text-gray-400 text-center"
                                            data-oid="_ouircp"
                                        >
                                            IP: 192.168.xx.xx
                                            <br data-oid=".h6kkmr" />
                                            Location: United States
                                            <br data-oid="ce_3h8." />
                                            Server: US-Fast-01
                                        </div>
                                    </div>
                                    <div className="space-y-2" data-oid="osblssz">
                                        <div
                                            className="bg-gray-700 p-2 rounded-lg flex items-center"
                                            data-oid="rfe282:"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full bg-indigo-600 mr-2 flex items-center justify-center"
                                                data-oid="81vq2r9"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="8a4q_ds"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="ah70bxt"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-xs" data-oid="73c:rjd">
                                                Select Location
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-700 p-2 rounded-lg flex items-center"
                                            data-oid="zjcc3s-"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full bg-indigo-600 mr-2 flex items-center justify-center"
                                                data-oid="lv443cc"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="0epu1v3"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                        data-oid="-en74ic"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        data-oid="z6j2b.:"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-xs" data-oid="_vkcfhq">
                                                Settings
                                            </div>
                                        </div>
                                        <div
                                            className="bg-gray-700 p-2 rounded-lg flex items-center"
                                            data-oid="ax-js0k"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full bg-indigo-600 mr-2 flex items-center justify-center"
                                                data-oid="rsu5o7p"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    data-oid="zm95rxz"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        data-oid="s75vutg"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="text-xs" data-oid="ey395im">
                                                Help & Support
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-gray-900" data-oid="6.quky1">
                <div className="container mx-auto max-w-6xl" data-oid="0icmse3">
                    <div className="text-center mb-16" data-oid="n7baxv5">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ee2cmry">
                            Why Choose Ryn VPN?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="pt--kki">
                            Our VPN service offers the perfect balance of security, speed, and
                            simplicity to keep you protected online.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="ft8h1x9">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors"
                                data-oid="zgj_eyp"
                            >
                                <div className="mb-4" data-oid="2haaowi">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-oid="rsi6bde">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300" data-oid="bs7pfs-">
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
                className="py-20 px-4 bg-indigo-900 bg-opacity-30"
                data-oid="s.hbp.x"
            >
                <div className="container mx-auto max-w-6xl" data-oid="hpbhb-1">
                    <div className="text-center mb-16" data-oid="g6z3lgn">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="ipgysf6">
                            How Ryn VPN Works
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="-3w4y_k">
                            Protecting your online privacy has never been easier. Just three simple
                            steps to secure your connection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="tfvqt.e">
                        <div className="bg-gray-800 rounded-xl p-6 text-center" data-oid="xhzygyd">
                            <div
                                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="yiu5mv6"
                            >
                                <span className="text-2xl font-bold" data-oid="2y_3sob">
                                    1
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid=".cwh9i1">
                                Download the App
                            </h3>
                            <p className="text-gray-300" data-oid="n1kdrwn">
                                Get Ryn VPN from the Google Play Store and install it on your
                                device.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 text-center" data-oid="jgxqp7h">
                            <div
                                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="jo.lwqg"
                            >
                                <span className="text-2xl font-bold" data-oid="1s710t.">
                                    2
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid=":0-cj06">
                                Connect to a Server
                            </h3>
                            <p className="text-gray-300" data-oid="wehkxne">
                                Choose from our global network of high-speed servers with just one
                                tap.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 text-center" data-oid="i52den8">
                            <div
                                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="kfp6wz5"
                            >
                                <span className="text-2xl font-bold" data-oid="w24lh64">
                                    3
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="bx7tyg5">
                                Enjoy Secure Browsing
                            </h3>
                            <p className="text-gray-300" data-oid="eube8w1">
                                Browse, stream, and download with complete privacy and security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 bg-gray-900" data-oid="f3quchc">
                <div className="container mx-auto max-w-6xl" data-oid="s-kr-km">
                    <div className="text-center mb-16" data-oid="kkxuq6c">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="r59:p4:">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="pcw7i7.">
                            Choose the plan that works best for you. All plans include our core
                            features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid=":pqzks:">
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            data-oid="mt7macv"
                        >
                            <div className="text-center mb-6" data-oid="paxbqez">
                                <h3 className="text-xl font-bold mb-2" data-oid="gdbte6w">
                                    Free
                                </h3>
                                <div className="text-4xl font-bold mb-2" data-oid="q-j11vw">
                                    $0
                                </div>
                                <p className="text-gray-400" data-oid="67.0ph7">
                                    Limited features
                                </p>
                            </div>
                            <ul className="space-y-3 mb-6" data-oid="8xwk..4">
                                <li className="flex items-center" data-oid="pa4c2_d">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="419ayd1"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="yhla9_l"
                                        />
                                    </svg>
                                    Basic encryption
                                </li>
                                <li className="flex items-center" data-oid="hj27-o3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="j7cqh7c"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="nfowy8e"
                                        />
                                    </svg>
                                    Limited server locations
                                </li>
                                <li className="flex items-center" data-oid="r28:d04">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="44w31be"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="xmz32yb"
                                        />
                                    </svg>
                                    Standard speed
                                </li>
                                <li className="flex items-center text-gray-500" data-oid="a:5i-ef">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-red-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="j5x4fte"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                            data-oid="x6:7uqy"
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
                                data-oid="qjf0tpp"
                            >
                                Download Free
                            </a>
                        </div>

                        <div
                            className="bg-indigo-900 rounded-xl p-6 border-2 border-indigo-600 transform md:scale-105 z-10 shadow-xl"
                            data-oid="z0kesb3"
                        >
                            <div className="text-center mb-6" data-oid="8d4g0c3">
                                <div
                                    className="bg-indigo-600 text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-2"
                                    data-oid="e8-a2pi"
                                >
                                    MOST POPULAR
                                </div>
                                <h3 className="text-xl font-bold mb-2" data-oid="3:x--73">
                                    Premium
                                </h3>
                                <div className="text-4xl font-bold mb-2" data-oid="wdoxpfj">
                                    $7.99
                                </div>
                                <p className="text-gray-300" data-oid="vt9c0r.">
                                    per month
                                </p>
                            </div>
                            <ul className="space-y-3 mb-6" data-oid="dtmhnyu">
                                <li className="flex items-center" data-oid="e-okjgj">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="al6poqj"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="0h46_ld"
                                        />
                                    </svg>
                                    Military-grade encryption
                                </li>
                                <li className="flex items-center" data-oid="zsbjgxj">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid=".:dw63u"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ap1nava"
                                        />
                                    </svg>
                                    100+ server locations
                                </li>
                                <li className="flex items-center" data-oid="q5exu-f">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="rk5.ncw"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="s8arpoy"
                                        />
                                    </svg>
                                    High-speed servers
                                </li>
                                <li className="flex items-center" data-oid="o90tpkr">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="pur_kd8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="64x6ov_"
                                        />
                                    </svg>
                                    Ad-free experience
                                </li>
                                <li className="flex items-center" data-oid="886_ven">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="pqe91pl"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid=":8nl1bj"
                                        />
                                    </svg>
                                    5 devices simultaneously
                                </li>
                            </ul>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid="5shxol4"
                            >
                                Get Premium
                            </a>
                        </div>

                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                            data-oid="9hik:kw"
                        >
                            <div className="text-center mb-6" data-oid="8-qlqfj">
                                <h3 className="text-xl font-bold mb-2" data-oid="rk:tot4">
                                    Business
                                </h3>
                                <div className="text-4xl font-bold mb-2" data-oid="48r2.u1">
                                    $12.99
                                </div>
                                <p className="text-gray-400" data-oid="qiq4.zw">
                                    per month
                                </p>
                            </div>
                            <ul className="space-y-3 mb-6" data-oid="ljy9j3s">
                                <li className="flex items-center" data-oid=".n3gy.w">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="pdukset"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="ydeu.my"
                                        />
                                    </svg>
                                    Everything in Premium
                                </li>
                                <li className="flex items-center" data-oid="jip:czr">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid=".qx-rx7"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="--t4nu:"
                                        />
                                    </svg>
                                    Dedicated IP option
                                </li>
                                <li className="flex items-center" data-oid="ztglb7a">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="as8hgq8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="6g2ysn_"
                                        />
                                    </svg>
                                    Priority support
                                </li>
                                <li className="flex items-center" data-oid="njd_2k4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="73iw_1z"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="c4b0oqc"
                                        />
                                    </svg>
                                    10 devices simultaneously
                                </li>
                                <li className="flex items-center" data-oid="k.04xnw">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-green-500 mr-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="xnw-fai"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                            data-oid="aa40xm9"
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
                                data-oid="m-awcg_"
                            >
                                Get Business Plan
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA Section */}
            <section className="py-20 px-4 bg-indigo-800" data-oid="65k2xb1">
                <div className="container mx-auto max-w-4xl text-center" data-oid="92.:s7.">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="g7y2n8w">
                        Ready to Secure Your Online Privacy?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" data-oid="0uj-v6.">
                        Download Ryn VPN now and take control of your online security and privacy
                        with just one tap.
                    </p>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                        data-oid="iz8-bl_"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            data-oid="9pqgabg"
                        >
                            <path
                                d="M5.26 3.795L15.59 12 5.26 20.205c-.32.25-.76.03-.76-.38V4.175c0-.41.44-.63.76-.38zM17.5 12l2.92 2.92c.39.39.39 1.02 0 1.41l-3.37 3.38L12.41 12 17.05 4.29l3.37 3.38c.39.39.39 1.02 0 1.41L17.5 12z"
                                data-oid="aswgn16"
                            />
                        </svg>
                        Get it on Google Play
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 py-12 px-4" data-oid=":z27gpk">
                <div className="container mx-auto max-w-6xl" data-oid="fh9.tlx">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-oid="_do4qev">
                        <div data-oid="l9xyyjx">
                            <div className="flex items-center space-x-2 mb-4" data-oid="0.w0n3j">
                                {/* Replace with actual logo */}
                                <div
                                    className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center"
                                    data-oid="48ls8-t"
                                >
                                    <span className="font-bold text-xl" data-oid="osikhp-">
                                        R
                                    </span>
                                </div>
                                <span className="text-xl font-bold" data-oid="cv4t9q.">
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="5qx7wmr">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-black hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid=".z4c4xw"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="3ccv.7-"
                                >
                                    <path
                                        d="M5.26 3.795L15.59 12 5.26 20.205c-.32.25-.76.03-.76-.38V4.175c0-.41.44-.63.76-.38zM17.5 12l2.92 2.92c.39.39.39 1.02 0 1.41l-3.37 3.38L12.41 12 17.05 4.29l3.37 3.38c.39.39.39 1.02 0 1.41L17.5 12z"
                                        data-oid="95-30b4"
                                    />
                                </svg>
                                Get it on Google Play
                            </a>
                        </div>
                        <div data-oid="k0uuohs">
                            <h3 className="text-lg font-bold mb-4" data-oid="f849e1o">
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="i-ca7g0">
                                <li data-oid="v15z44s">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="qrrafs0"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="foo315l">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="zjtuvp5"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li data-oid="bzj6tqz">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="j22zih5"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li data-oid="whg8le4">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="-bwo2xu"
                                    >
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="8q3ka38">
                            <h3 className="text-lg font-bold mb-4" data-oid="sv6hjoj">
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="dr39u_q">
                                <li data-oid="sk4f-x8">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="04f5n3i"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="6e65_bm">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="gphx3-h"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="zde951a">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="yvm15bz"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid="cgp69l9">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="1qm.ztc"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="qy3fuie">
                            <h3 className="text-lg font-bold mb-4" data-oid="kdo2:2y">
                                Legal
                            </h3>
                            <ul className="space-y-2" data-oid="d__plco">
                                <li data-oid="xt5kbz2">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="cx.aom:"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="g53zscc">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="snf:wwc"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li data-oid="ksf6o1w">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="9stsrnp"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li data-oid="ilgr0bq">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="14yqfw_"
                                    >
                                        GDPR Compliance
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="2:h4mu5"
                    >
                        <div className="text-gray-400 mb-4 md:mb-0" data-oid="hd5-7ig">
                            © 2023 Ryn VPN. All rights reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="9o-35bn">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="h:9q0l8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="cq-zzdu"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="nxkm7uf"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="02eyjxv"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="xqdi74k"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="zhk_-3x"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="y4n-a8z"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="4dlmuqc"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="kdozz_-"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="cm2668f"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="ww3:b-."
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="5dg9teg"
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
