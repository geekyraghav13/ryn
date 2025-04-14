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
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
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
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
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
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white shadow-md border-b border-purple-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            {/* VPN Logo */}
                            <div className="h-10 w-10 overflow-hidden">
                                <img
                                    src="/ryn-vpn-logo.png"
                                    alt="Ryn VPN Logo"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold text-purple-800">Ryn VPN</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a
                                href="#home"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => setActiveSection('home')}
                            >
                                Home
                            </a>
                            <a
                                href="/features"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => setActiveSection('how-it-works')}
                            >
                                How It Works
                            </a>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                Pricing
                            </a>
                            <a
                                href="/blog"
                                className="text-gray-700 hover:text-purple-700 transition-colors font-bold"
                            >
                                Blog
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-purple-800" onClick={toggleMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
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
                                />
                            </svg>
                        </button>

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

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="md:hidden mt-4 space-y-3 pb-3">
                            <a
                                href="#home"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => {
                                    setActiveSection('home');
                                    toggleMenu();
                                }}
                            >
                                Home
                            </a>
                            <a
                                href="/features"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => {
                                    toggleMenu();
                                }}
                            >
                                Features
                            </a>
                            <a
                                href="#how-it-works"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => {
                                    setActiveSection('how-it-works');
                                    toggleMenu();
                                }}
                            >
                                How It Works
                            </a>
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => {
                                    toggleMenu();
                                }}
                            >
                                Pricing
                            </a>
                            <a
                                href="/blog"
                                className="block text-gray-700 hover:text-purple-700 transition-colors font-bold"
                                onClick={() => {
                                    toggleMenu();
                                }}
                            >
                                Blog
                            </a>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center mt-4"
                            >
                                Download Now
                            </a>
                        </nav>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="py-20 px-4">
                <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-md">
                            Secure Your Online Privacy with{' '}
                            <span className="text-purple-400">Ryn VPN</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Browse anonymously, secure your connection, and access content from
                            anywhere in the world with our fast and reliable VPN service.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                                aria-label="Get it on Google Play"
                            >
                                <img
                                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                    alt="Get it on Google Play"
                                    className="h-14 w-auto shadow-lg rounded"
                                />
                            </a>
                            <a
                                href="#features"
                                className="border border-purple-600 text-white hover:bg-purple-600 font-medium py-3 px-6 rounded-lg transition-colors text-center"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <div className="relative shadow-2xl rounded-3xl overflow-hidden max-w-[90%] border border-white border-opacity-20">
                            <div className="relative">
                                <img
                                    src="/vpn-app-mockup.png"
                                    alt="Ryn VPN App Mockup"
                                    className="w-full h-auto max-h-[550px] object-contain"
                                />

                                <div className="absolute bottom-0 left-0 right-0 text-center pb-4 text-purple-600 font-bold text-xl">
                                    Access Content Worldwide
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-gray-900">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-sm">
                            Why Choose Ryn VPN?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Ryn VPN provides a secure and fast online experience, safeguarding your
                            privacy with strong encryption and a no-logs policy. Enjoy unrestricted,
                            global internet access with ease, protecting all your devices through
                            its user-friendly interface. It's the simple solution for robust online
                            security and freedom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 hover:bg-gray-50 transition-colors border border-gray-200 shadow-md hover:shadow-lg"
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 px-4 bg-purple-900 bg-opacity-30">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Ryn VPN Works</h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Protecting your online privacy has never been easier. Just three simple
                            steps to secure your connection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 rounded-xl p-6 text-center border border-white border-opacity-5">
                            <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Download the App</h3>
                            <p className="text-gray-300">
                                Get Ryn VPN from the Google Play Store and install it on your
                                device.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 text-center border border-white border-opacity-5">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Connect to a Server</h3>
                            <p className="text-gray-300">
                                Choose from our global network of high-speed servers with just one
                                tap.
                            </p>
                        </div>
                        <div className="bg-gray-800 rounded-xl p-6 text-center border border-white border-opacity-5">
                            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enjoy Secure Browsing</h3>
                            <p className="text-gray-300">
                                Browse, stream, and download with complete privacy and security.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 bg-white text-gray-900 relative">
                <div className="container mx-auto max-w-6xl relative z-10 py-16">
                    <div className="text-center">
                        <p className="text-2xl md:text-3xl font-bold text-purple-900 mb-8">
                            Want to know more about pricing?{' '}
                            <a
                                href="https://rynvpn.superwall.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 hover:text-purple-800 underline transition-colors"
                            >
                                Click here
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Download CTA Section */}
            <section className="py-20 px-4 bg-purple-800 border-t border-b border-white border-opacity-10">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Secure Your Online Privacy?
                    </h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Download Ryn VPN now and take control of your online security and privacy
                        with just one tap. Experience anonymous browsing and protect your sensitive
                        data with our top-rated VPN. Enjoy unblock websites and stream content from
                        anywhere, ensuring your digital footprint remains private. Get premium VPN
                        protection and reclaim your internet freedom today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.secure.cryptovpn&hl=en_IN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                            aria-label="Get it on Google Play"
                        >
                            <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                className="h-16 w-auto shadow-lg rounded-lg"
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/in/app/ryn-vpn-secure-vpn-master/id1493328027"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transform hover:-translate-y-1 transition-transform duration-300"
                            aria-label="Download on the App Store"
                        >
                            <img
                                src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                className="h-16 w-auto shadow-lg rounded-lg"
                            />
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-20 px-4 bg-gray-900">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Get answers to the most common questions about Ryn VPN and online
                            security
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(0)}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    What is a VPN and why do I need one for online privacy?
                                </h3>
                                <div className="text-purple-400 text-2xl">
                                    {expandedFaqs.includes(0) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(0) && (
                                <div className="mt-3">
                                    <p className="text-gray-300">
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
                        <div className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(1)}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    Does Ryn VPN keep logs of my browsing history?
                                </h3>
                                <div className="text-purple-400 text-2xl">
                                    {expandedFaqs.includes(1) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(1) && (
                                <div className="mt-3">
                                    <p className="text-gray-300">
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
                        <div className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(2)}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    Can I use Ryn VPN to access geo-restricted content and streaming
                                    services?
                                </h3>
                                <div className="text-purple-400 text-2xl">
                                    {expandedFaqs.includes(2) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(2) && (
                                <div className="mt-3">
                                    <p className="text-gray-300">
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
                        <div className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(3)}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    How does Ryn VPN protect me on public Wi-Fi networks?
                                </h3>
                                <div className="text-purple-400 text-2xl">
                                    {expandedFaqs.includes(3) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(3) && (
                                <div className="mt-3">
                                    <p className="text-gray-300">
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
                        <div className="bg-gray-800 rounded-xl p-6 border border-white border-opacity-5 hover:border-purple-500 transition-colors">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(4)}
                            >
                                <h3 className="text-xl font-bold text-white">
                                    Will using a VPN slow down my internet connection?
                                </h3>
                                <div className="text-purple-400 text-2xl">
                                    {expandedFaqs.includes(4) ? '−' : '+'}
                                </div>
                            </div>
                            {expandedFaqs.includes(4) && (
                                <div className="mt-3">
                                    <p className="text-gray-300">
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
            <footer className="bg-white py-12 px-4 border-t border-purple-100 shadow-inner">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
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
                                        href="/blog"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/privacy-policy"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/terms"
                                        className="text-gray-600 hover:text-purple-700 transition-colors"
                                    >
                                        Terms of Service
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
                                        className="text-purple-400 hover:text-purple-700 transition-colors"
                                    >
                                        bugs@rynvpn.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-purple-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-600 mb-4 md:mb-0">
                            © 2024 Ryn VPN - All Rights Reserved. Secure your digital life.
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/rynvpn"
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
                                href="https://www.instagram.com/rynvpn"
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
