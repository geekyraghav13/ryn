'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

    // Toggle FAQ item
    const toggleFaq = (index: number) => {
        setExpandedFaqs((prev) =>
            prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
        );
    };

    // Features of Ryn VPN
    const features = [
        {
            title: 'Secure Connection',
            description:
                'Military-grade encryption to protect your online activities from hackers and surveillance.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="1z51xy2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        data-oid="jnnu95e"
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
                    className="h-10 w-10 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="2:jj126"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="bk99768"
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
                    className="h-10 w-10 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    data-oid="e8u10qj"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        data-oid="be1l90o"
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
                    data-oid="vqvfb.x"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        data-oid="85x.yzd"
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
            className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white"
            data-oid="tklr4my"
        >
            {/* Header */}
            <header
                className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-white border-opacity-10"
                data-oid="j2pnr23"
            >
                <div className="container mx-auto px-4 py-4" data-oid="0ywnk.0">
                    <div className="flex justify-between items-center" data-oid="k28ehav">
                        {/* Logo */}
                        <div className="flex items-center space-x-2" data-oid=".r4:5o4">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden" data-oid="7pbr6od">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                    data-oid="xwh3_jz"
                                />
                            </div>
                            <span className="text-xl font-bold text-white" data-oid="7vtr7jy">
                                Ryn VPN
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8" data-oid="dr_4yxd">
                            <a
                                href="#home"
                                className="hover:text-teal-400 transition-colors"
                                onClick={() => setActiveSection('home')}
                                data-oid="dgdh6tw"
                            >
                                Home
                            </a>
                            <a
                                href="#features"
                                className="hover:text-purple-400 transition-colors"
                                onClick={() => setActiveSection('features')}
                                data-oid="_-o_3po"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('how-it-works')}
                                data-oid="rvz9.pz"
                            >
                                How It Works
                            </a>
                            <a
                                href="#pricing"
                                className="hover:text-indigo-400 transition-colors"
                                onClick={() => setActiveSection('pricing')}
                                data-oid="kfn9458"
                            >
                                Pricing
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden" onClick={toggleMenu} data-oid="1lmsq5s">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                data-oid="i-9c6rt"
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
                                    data-oid="mfwoa9q"
                                />
                            </svg>
                        </button>

                        {/* Download Button */}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            data-oid="uj9.-tv"
                        >
                            Download Now
                        </a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3" data-oid="cxigow7">
                            <a
                                href="#home"
                                className="block hover:text-purple-400 transition-colors"
                                onClick={() => {
                                    setActiveSection('home');
                                    toggleMenu();
                                }}
                                data-oid="-wwh..4"
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
                                data-oid="ol8:gk:"
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
                                data-oid="-gp4-et"
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
                                data-oid="_i.85mb"
                            >
                                Pricing
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                                data-oid="cgv:gql"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="py-20 px-4" data-oid="-6x5b.s">
                <div
                    className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center"
                    data-oid="wgfjcy8"
                >
                    <div className="md:w-1/2 mb-10 md:mb-0" data-oid="aucwd0v">
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md"
                            data-oid="vxtovzz"
                        >
                            Secure Your Online Privacy with{' '}
                            <span className="text-purple-400" data-oid="nqsy2ts">
                                Ryn VPN
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8" data-oid="ih4hxio">
                            Browse anonymously, secure your connection, and access content from
                            anywhere in the world with our fast and reliable VPN service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4" data-oid="i.9asas">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                                aria-label="Get it on Google Play"
                                data-oid="x4ncxcd"
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-14 w-auto shadow-lg rounded"
                                    data-oid="6vvyeuw"
                                />
                            </a>
                            <a
                                href="#features"
                                className="border border-purple-600 text-white hover:bg-purple-600 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                                data-oid="bhl-f4n"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center" data-oid="vvt2xn6">
                        <div
                            className="relative shadow-2xl rounded-3xl overflow-hidden max-w-[90%] border border-white border-opacity-20"
                            data-oid="o1znbi2"
                        >
                            <div className="relative" data-oid="-cbhxer">
                                <img
                                    src="/vpn-app-mockup.png"
                                    alt="Ryn VPN App Mockup"
                                    className="w-full h-auto max-h-[550px] object-contain"
                                    data-oid="970o4dl"
                                />

                                <div
                                    className="absolute bottom-0 left-0 right-0 text-center pb-4 text-purple-600 font-bold text-xl"
                                    data-oid="d2upd6a"
                                >
                                    Access Content Worldwide
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-gray-900" data-oid=".2.cwb_">
                <div className="container mx-auto max-w-6xl" data-oid=":4zwrvx">
                    <div className="text-center mb-16" data-oid="fhpex-8">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-sm"
                            data-oid="k-mx9ox"
                        >
                            Why Choose Ryn VPN?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="fe4kotv">
                            Ryn VPN provides a secure and fast online experience, safeguarding your
                            privacy with strong encryption and a no-logs policy. Enjoy unrestricted,
                            global internet access with ease, protecting all your devices through
                            its user-friendly interface. It's the simple solution for robust online
                            security and freedom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="439uh36">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors border border-gray-200 shadow-md hover:shadow-lg"
                                data-oid="9lkep8d"
                            >
                                <div className="mb-4" data-oid="g7jn977">
                                    {feature.icon}
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="obo1jbt"
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600" data-oid="v5q8pm:">
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
                className="py-20 px-4 bg-purple-900 bg-opacity-30"
                data-oid="4z2qzzs"
            >
                <div className="container mx-auto max-w-6xl" data-oid="7y522.6">
                    <div className="text-center mb-16" data-oid="1lj4h_a">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-oid="7qsadxe">
                            How Ryn VPN Works
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="hg.w6yx">
                            Protecting your online privacy has never been easier. Just three simple
                            steps to secure your connection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="fc.h0p3">
                        <div
                            className="bg-gray-800 rounded-xl p-6 text-center border border-white border-opacity-5"
                            data-oid="k9q4a9c"
                        >
                            <div
                                className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="43mch2v"
                            >
                                <span className="text-2xl font-bold" data-oid="u1fj-gp">
                                    1
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="pgjw:mr">
                                Download the App
                            </h3>
                            <p className="text-gray-300" data-oid="k9d3y9j">
                                Get Ryn VPN from the Google Play Store and install it on your
                                device.
                            </p>
                        </div>
                        <div
                            className="bg-gray-800 rounded-xl p-6 text-center border border-white border-opacity-5"
                            data-oid=".ds-fyf"
                        >
                            <div
                                className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="3izddtr"
                            >
                                <span className="text-2xl font-bold" data-oid="_m3.:ac">
                                    2
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="7fft1e3">
                                Connect to a Server
                            </h3>
                            <p className="text-gray-300" data-oid="v8nag89">
                                Choose from our global network of high-speed servers with just one
                                tap.
                            </p>
                        </div>
                        <div
                            className="bg-gray-800 rounded-xl p-6 text-center border border-white border-opacity-5"
                            data-oid="p.:fn5-"
                        >
                            <div
                                className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                data-oid="o0mcbxw"
                            >
                                <span className="text-2xl font-bold" data-oid="1qefn_e">
                                    3
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2" data-oid="-8pv:bs">
                                Enjoy Secure Browsing
                            </h3>
                            <p className="text-gray-300" data-oid="o5:_1_p">
                                Browse, stream, and download with complete privacy and security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section
                id="pricing"
                className="py-20 px-4 bg-white text-gray-900 relative"
                data-oid="6euvrxl"
            >
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.1)_0%,_transparent_70%)]"
                    data-oid="9oyhsv."
                ></div>
                <div className="container mx-auto max-w-6xl relative z-10" data-oid="w21295o">
                    <div className="text-center mb-16" data-oid="7yn_c92">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-purple-900"
                            data-oid="bzz9rtn"
                        >
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="8awosse">
                            Choose the plan that works best for you. All plans include our core
                            features.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="iz8cnnm">
                        <div
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                            data-oid=":8zcdi4"
                        >
                            <div className="text-center mb-6" data-oid="2k0fc:d">
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid=".:dhx00"
                                >
                                    Free
                                </h3>
                                <div
                                    className="text-4xl font-bold mb-2 text-purple-900"
                                    data-oid="cfgykzn"
                                >
                                    $0
                                </div>
                                <p className="text-gray-500" data-oid="45yalk:">
                                    Limited features
                                </p>
                            </div>
                            <div
                                className="bg-gray-100 text-gray-800 rounded-lg p-4 mb-6"
                                data-oid="hn5sctj"
                            >
                                <h4
                                    className="font-bold text-lg mb-3 text-center"
                                    data-oid="5mi6ilm"
                                >
                                    Free Features:
                                </h4>
                                <ul className="space-y-3 list-disc pl-5" data-oid="3oq2siz">
                                    <li className="font-medium" data-oid="3btc4kf">
                                        Basic encryption protection
                                    </li>
                                    <li className="font-medium" data-oid="55sc7np">
                                        Limited server locations
                                    </li>
                                    <li className="font-medium" data-oid="m-tlngc">
                                        Standard connection speed
                                    </li>
                                    <li className="font-medium text-gray-500" data-oid="svnvqdn">
                                        Includes advertisements
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-purple-100 hover:bg-purple-200 text-purple-900 font-medium py-2 px-4 rounded-lg transition-colors border border-purple-200"
                                data-oid="ge0.e04"
                            >
                                Download Free
                            </a>
                        </div>

                        <div
                            className="bg-purple-900 rounded-xl p-6 border-2 border-purple-600 transform md:scale-105 z-10 shadow-2xl text-white ring-4 ring-purple-200"
                            data-oid="ea2vh5-"
                        >
                            <div className="text-center mb-6" data-oid="1q_sl1p">
                                <div
                                    className="bg-white text-purple-900 text-sm font-bold py-1 px-3 rounded-full inline-block mb-2 shadow-md"
                                    data-oid="6efavg6"
                                >
                                    MOST POPULAR
                                </div>
                                <h3
                                    className="text-xl font-bold mb-2 text-white"
                                    data-oid="6:9kqhb"
                                >
                                    Premium
                                </h3>
                                <div
                                    className="text-4xl font-bold mb-2 text-white"
                                    data-oid="wx99757"
                                >
                                    ₹999.00/mo
                                </div>
                                <p className="text-purple-200" data-oid="8lj0h.n">
                                    per month
                                </p>
                            </div>
                            <div
                                className="bg-white text-purple-900 rounded-lg p-4 mb-6 shadow-inner"
                                data-oid="22dta3f"
                            >
                                <h4
                                    className="font-bold text-lg mb-3 text-center"
                                    data-oid="d12--0t"
                                >
                                    Premium Features:
                                </h4>
                                <ul className="space-y-3 list-disc pl-5" data-oid="cmwrj38">
                                    <li className="font-medium" data-oid="l87bd2x">
                                        Military-grade encryption
                                    </li>
                                    <li className="font-medium" data-oid="buamp-x">
                                        1000+ server locations worldwide
                                    </li>
                                    <li className="font-medium" data-oid="m:qderx">
                                        High-speed servers for streaming
                                    </li>
                                    <li className="font-medium" data-oid="j03rb7k">
                                        Ad-free experience guaranteed
                                    </li>
                                </ul>
                            </div>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                data-oid="2qt-:ds"
                            >
                                Get Premium
                            </a>
                        </div>

                        <div
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
                            data-oid="4ac_g3l"
                        >
                            <div className="text-center mb-6" data-oid="ccgcm.0">
                                <h3
                                    className="text-xl font-bold mb-2 text-gray-800"
                                    data-oid="5fs1_6q"
                                >
                                    Yearly Plan
                                </h3>
                                <div
                                    className="text-4xl font-bold mb-2 text-purple-900"
                                    data-oid="0y26thq"
                                >
                                    ₹4450.00/mo
                                </div>
                                <p className="text-gray-500" data-oid="0y0-h8d">
                                    12 Months
                                </p>
                            </div>
                            <div
                                className="bg-gray-100 text-gray-800 rounded-lg p-4 mb-6"
                                data-oid="lkqzkf2"
                            >
                                <h4
                                    className="font-bold text-lg mb-3 text-center"
                                    data-oid="tre3vf1"
                                >
                                    Yearly Plan Features:
                                </h4>
                                <ul className="space-y-3 list-disc pl-5" data-oid="6fed1ne">
                                    <li className="font-medium" data-oid="-k8tbvw">
                                        All Premium features included
                                    </li>
                                    <li className="font-medium" data-oid="t3hej.1">
                                        Dedicated IP address option
                                    </li>
                                    <li className="font-medium" data-oid="o4uokuv">
                                        Priority customer support
                                    </li>
                                    <li className="font-medium" data-oid="ukvur1-">
                                        Connect up to 10 devices simultaneously
                                    </li>
                                    <li className="font-medium" data-oid="0k6xghj">
                                        Team management console access
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download CTA Section */}
            <section
                className="py-20 px-4 bg-purple-800 border-t border-b border-white border-opacity-10"
                data-oid="ggiyq41"
            >
                <div className="container mx-auto max-w-4xl text-center" data-oid="mkb.pvh">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6" data-oid="m_pw.dy">
                        Ready to Secure Your Online Privacy?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" data-oid="39vyii:">
                        Download Ryn VPN now and take control of your online security and privacy
                        with just one tap. Experience anonymous browsing and protect your sensitive
                        data with our top-rated VPN. Enjoy unblock websites and stream content from
                        anywhere, ensuring your digital footprint remains private. Get premium VPN
                        protection and reclaim your internet freedom today.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row justify-center gap-4"
                        data-oid="87u7pqx"
                    >
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                            aria-label="Get it on Google Play"
                            data-oid="gtbqao2"
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                className="h-16 w-auto shadow-lg rounded-lg"
                                data-oid="dz-s1m_"
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                            aria-label="Download on the App Store"
                            data-oid="aplwwha"
                        >
                            <img
                                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                className="h-16 w-auto shadow-lg rounded-lg"
                                data-oid="4m-c38z"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 px-4 bg-gray-900" data-oid=".o1uy27">
                <div className="container mx-auto max-w-4xl" data-oid="_ujs-2l">
                    <div className="text-center mb-16" data-oid="f.u4pg6">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4 text-white"
                            data-oid="kg4ii.6"
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-oid="wh2ujcm">
                            Get answers to the most common questions about Ryn VPN and online
                            security
                        </p>
                    </div>

                    <div className="space-y-6" data-oid="t:c3j07">
                        {/* FAQ Item 1 */}
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors"
                            data-oid=":lptu09"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(0)}
                                data-oid="42ds7x:"
                            >
                                <h3 className="text-xl font-bold text-white" data-oid="gyxg3fx">
                                    What is a VPN and why do I need one for online privacy?
                                </h3>
                                <div className="text-purple-400 text-2xl" data-oid="47a1ppx">
                                    {expandedFaqs.includes(0) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(0) && (
                                <div className="mt-3" data-oid=".-ktihz">
                                    <p className="text-gray-300" data-oid="y.vkqrg">
                                        A VPN (Virtual Private Network) creates an encrypted tunnel
                                        for your internet traffic, protecting your data from
                                        hackers, ISPs, and surveillance. Ryn VPN ensures your online
                                        privacy by masking your IP address and encrypting your
                                        connection with military-grade encryption, preventing anyone
                                        from monitoring your online activities or stealing sensitive
                                        information like passwords and credit card details.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 2 */}
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors"
                            data-oid="6etymwu"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(1)}
                                data-oid="wcc0mth"
                            >
                                <h3 className="text-xl font-bold text-white" data-oid="_wj.ixh">
                                    Does Ryn VPN keep logs of my browsing history?
                                </h3>
                                <div className="text-purple-400 text-2xl" data-oid="8x64.cb">
                                    {expandedFaqs.includes(1) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(1) && (
                                <div className="mt-3" data-oid="dy95j_v">
                                    <p className="text-gray-300" data-oid="h_zr7er">
                                        No, Ryn VPN follows a strict no-logs policy. We do not
                                        track, collect, or store any information about your online
                                        activities, browsing history, or data content. Our secure
                                        VPN service is designed with your privacy as the top
                                        priority, ensuring complete anonymity while you browse. This
                                        zero-logs approach means there's no record of your digital
                                        footprint that could be compromised or shared with third
                                        parties.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 3 */}
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors"
                            data-oid="wh68q:j"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(2)}
                                data-oid="9a3w9ys"
                            >
                                <h3 className="text-xl font-bold text-white" data-oid="w.watn-">
                                    Can I use Ryn VPN to access geo-restricted content and streaming
                                    services?
                                </h3>
                                <div className="text-purple-400 text-2xl" data-oid="cssz_i3">
                                    {expandedFaqs.includes(2) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(2) && (
                                <div className="mt-3" data-oid="bwvrqjt">
                                    <p className="text-gray-300" data-oid="y9ix_15">
                                        Yes, Ryn VPN allows you to bypass geo-restrictions and
                                        access content from anywhere in the world. With our global
                                        network of high-speed servers across multiple countries, you
                                        can unblock websites, streaming platforms like Netflix,
                                        Hulu, Disney+, and BBC iPlayer, and other region-locked
                                        content. Our optimized servers ensure smooth streaming
                                        without buffering, making it perfect for watching your
                                        favorite shows while traveling or accessing content not
                                        available in your region.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 4 */}
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors"
                            data-oid="mvi5gz_"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(3)}
                                data-oid="e:ewl34"
                            >
                                <h3 className="text-xl font-bold text-white" data-oid="5eqf8j_">
                                    How does Ryn VPN protect me on public Wi-Fi networks?
                                </h3>
                                <div className="text-purple-400 text-2xl" data-oid="s1c4qaq">
                                    {expandedFaqs.includes(3) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(3) && (
                                <div className="mt-3" data-oid="hykkyle">
                                    <p className="text-gray-300" data-oid="gvah2go">
                                        Public Wi-Fi networks are notorious hotspots for
                                        cybercriminals. Ryn VPN protects you by creating a secure
                                        encrypted tunnel for your data, preventing hackers from
                                        intercepting your information even on unsecured networks.
                                        Our VPN security features include protection against
                                        man-in-the-middle attacks, data sniffing, and packet
                                        analysis. With Ryn VPN active, you can safely use airport,
                                        hotel, café, or any public Wi-Fi without worrying about your
                                        sensitive data being compromised.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* FAQ Item 5 */}
                        <div
                            className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors"
                            data-oid="etq23.e"
                        >
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(4)}
                                data-oid="cgy5c2i"
                            >
                                <h3 className="text-xl font-bold text-white" data-oid="ytx9r73">
                                    Will using a VPN slow down my internet connection?
                                </h3>
                                <div className="text-purple-400 text-2xl" data-oid="rnskvxv">
                                    {expandedFaqs.includes(4) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(4) && (
                                <div className="mt-3" data-oid="mrhl7k7">
                                    <p className="text-gray-300" data-oid="rwylk.x">
                                        While all VPNs can affect speed due to encryption, Ryn VPN
                                        is designed to minimize this impact. Our high-speed VPN
                                        servers are optimized for performance with unlimited
                                        bandwidth and no throttling. Many users experience minimal
                                        to no noticeable difference in speed when using our service.
                                        For the best performance, we recommend connecting to servers
                                        closest to your physical location. Our Premium plan includes
                                        access to our fastest servers specifically optimized for
                                        streaming, gaming, and downloading large files.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer
                className="bg-gray-900 py-12 px-4 border-t border-white border-opacity-5"
                data-oid="h:j9vxo"
            >
                <div className="container mx-auto max-w-6xl" data-oid="y3kmh:e">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8" data-oid="h:._7g4">
                        <div data-oid="1qhpukl">
                            <div className="flex items-center space-x-2 mb-4" data-oid="iurppdk">
                                <div className="h-10 w-10 overflow-hidden" data-oid="-7judxf">
                                    <img
                                        src="/ryn-vpn-logo.png"
                                        alt="Ryn VPN Logo"
                                        className="h-full w-full object-contain"
                                        data-oid="jpzw977"
                                    />
                                </div>
                                <span className="text-xl font-bold text-white" data-oid="h7q09_0">
                                    Ryn VPN
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4" data-oid=":wvj_mh">
                                Secure, fast, and reliable VPN service for all your devices.
                            </p>
                            <div className="flex flex-col gap-3" data-oid="dmye835">
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Get it on Google Play"
                                    data-oid=":kk:cdd"
                                >
                                    <img
                                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                        alt="Get it on Google Play"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="mnsadux"
                                    />
                                </a>
                                <a
                                    href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block hover:opacity-90 transition-opacity"
                                    aria-label="Download on the App Store"
                                    data-oid="xpvyys3"
                                >
                                    <img
                                        src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                        alt="Download on the App Store"
                                        className="h-12 w-auto shadow-md rounded-lg"
                                        data-oid="fxyzafv"
                                    />
                                </a>
                            </div>
                        </div>
                        <div data-oid="u7aw0vb">
                            <h3 className="text-lg font-bold mb-4 text-white" data-oid="ztqxn47">
                                Company
                            </h3>
                            <ul className="space-y-2" data-oid="zu_r3xa">
                                <li data-oid="6x3xr3q">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="jwl3syr"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="nt0epcs">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="_ag4.bc"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li data-oid="x_nd2zd"></li>
                                <li data-oid="x8opfr0">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid=":qxtht2"
                                    >
                                        Press
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="7mh0xw2">
                            <h3 className="text-lg font-bold mb-4 text-white" data-oid="tawx14j">
                                Support
                            </h3>
                            <ul className="space-y-2" data-oid="69208k0">
                                <li data-oid="twxokf.">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="9f3m0:e"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="2sw0e8u">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="7q3lh:q"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="wmfzffq">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="surklo3"
                                    >
                                        FAQs
                                    </a>
                                </li>
                                <li data-oid="mxcn::2">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid=":-pd:8o"
                                    >
                                        Server Status
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="an.-.7w">
                            <h3 className="text-lg font-bold mb-4 text-white" data-oid="dwhpuhu">
                                Legal
                            </h3>
                            <ul className="space-y-2" data-oid="w.ws21a">
                                <li data-oid="b4t365w"></li>
                                <li data-oid="fb_cro9">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        data-oid="47hvcg:"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="f5zver5">
                            <h3 className="text-lg font-bold mb-4 text-white" data-oid="24d42bj">
                                Contact Us
                            </h3>
                            <div className="text-gray-400 space-y-2" data-oid="1o_dk-z">
                                <p data-oid="ar_pb5_">Human Data Systems Private Limited,</p>
                                <p data-oid="5l2ivup">H NO.-8/9, BASEMENT ROAD-8,</p>
                                <p data-oid="0pjbq7m">SARVPRIYA VIHAR NEW DELHI South Delhi DL</p>
                                <p data-oid="ugi-7p_">110017 IN</p>
                                <p className="pt-2" data-oid="rrhx0i8">
                                    <a
                                        href="mailto:bugs@rynvpn.com"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                        data-oid="d.:t.gr"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
                        data-oid="r-8rgkk"
                    >
                        <div className="text-gray-400 mb-4 md:mb-0" data-oid="tnpey07">
                            © 2025 Ryn VPN - All Rights Reserved.
                        </div>
                        <div className="flex space-x-4" data-oid="4hoh0ir">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="pvtlu0l"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="lz.77bd"
                                >
                                    <path
                                        d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"
                                        data-oid="111n.r6"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/VpnRyn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="p74adcg"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="r4ik-ew"
                                >
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                        data-oid="3m13ka-"
                                    />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="lhl42.k"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="2z851-g"
                                >
                                    <path
                                        d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                                        data-oid="x8n_s9b"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@RynVpn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                data-oid="qidad76"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    data-oid="sp30g5y"
                                >
                                    <path
                                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                        data-oid="dbasuqh"
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
