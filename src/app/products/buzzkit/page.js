"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState, useEffect, useRef } from 'react';
import ContactForm from '@/components/ContactForm';

export default function BuzzKitPage() {
    const menuItems = [
        { label: 'Sales', id: 'sales' },
        { label: 'Marketing', id: 'marketing' },
        { label: 'Lead & Customer Engagement', id: 'lead-engagement' },
        { label: 'Customer Service', id: 'customer-service' },
        { label: 'Team Productivity', id: 'team-productivity' },
        { label: 'Tools', id: 'tools' },
    ];
    const [activeTab, setActiveTab] = useState('sales');
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let currentSection = menuItems[0].id;
            for (const item of menuItems) {
                const section = document.getElementById(item.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    // 120px offset from top (adjust as needed for sticky menu)
                    if (rect.top <= 120) {
                        currentSection = item.id;
                    }
                }
            }
            setActiveTab(currentSection);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuItems]);

    // Scroll to section and set active tab
    const handleTabClick = (id) => {
        setActiveTab(id);
        const section = document.getElementById(id);
        if (section) {
            const yOffset = -100;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <main className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                            BuzzKit
                        </h1>
                        <p className="max-w-[700px] text-white text-lg md:text-xl">
                            Empower Your Sales, Marketing, Social Media, Communication and Productivity on One Seamless Platform!
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky menu-bar */}
            <div className="sticky top-[75px] z-40 bg-white w-full text-center px-2 py-1 block overflow-x-auto whitespace-nowrap mt-4">
                <nav className="border border-gray-200 rounded-full mx-auto inline-block">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleTabClick(item.id)}
                            className={`cursor-pointer px-6 py-3 font-semibold text-lg focus:outline-none transition-all duration-200 ${activeTab === item.id
                                ? 'text-blue-600 underline underline-offset-8'
                                : 'text-black hover:text-blue-600'
                                }`}
                            aria-current={activeTab === item.id ? 'page' : undefined}
                            id={`tab-${item.id}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Placeholder sections for demonstration */}
            <div className="flex-1">
                {menuItems.map((item) => (
                    <section
                        key={item.id}
                        id={item.id}
                        className="min-h-[60vh] flex flex-col justify-center items-center border-b border-gray-100 py-16">
                        {item.id === 'sales' ? (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Sales</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-3">
                                    {/* 1. AutoLead Capturing */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">1. AutoLead Capturing</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'B2B Integration',
                                                'Mail to Lead',
                                                'Social Media Integration',
                                                'API\'s',
                                                'Webform to Lead',
                                                'Call to Lead',
                                                'Google Integration'
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 2. Enquiry / Lead Management */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">2. Enquiry / Lead Management</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Create customized fields',
                                                'Auto assign lead',
                                                'Lead enrichment',
                                                'Lead activity tracking',
                                                'Lead scoring',
                                                'Click to call / SMS / Mail / WhatsApp',
                                                'Hidden fields / masking to protect lead\'s confidential information'
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 3. Pipeline Management */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">3. Pipeline Management</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Create customized pipelines and stages',
                                                'Visual pipeline to drag and drop leads across stages',
                                                'View estimated revenue each month',
                                                'Track lead\'s progress through stages',
                                                'Filter leads based on expiry dates, closure dates, sales executive, etc.'
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 4. Sales Goals */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">4. Sales Goals</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Define sales goals based on conversions / invoices / pipeline',
                                                'Assign sales targets to user / team',
                                                'Track users\' / teams\' progress on targets',
                                                'Define multiple targets based on revenue / number of closures, etc.',
                                                'Filter goals based on currency, pipeline stages, or products'
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 5. Quotations, Invoices, Payments & Ledger */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 md:col-span-2 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">5. Quotations, Invoices, Payments & Ledger</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Create/Clone/Print/Download quotations, invoices & payment receipts in seconds',
                                                'Set reminders/notifications for due quotations/invoices',
                                                'Customize themes, labels, notes — everything',
                                                'Convert quotations to invoices in one click',
                                                'Share via SMS, Mail, WhatsApp',
                                                'Accept online payments',
                                                'Supports multiple branches',
                                                'GST compliant',
                                                'Track all history including customer actions (viewing / accepting / requesting revision)',
                                                'View / Print customer ledger'
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : item.id === 'marketing' ? (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Marketing</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-3">
                                    {/* 1. Campaigns */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">1. Campaigns</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Event Triggered Campaigns',
                                                'Run a sequence of activities when an event is triggered',
                                                'Scheduled Campaign',
                                                'SMS / Mail / Voice Campaigns',
                                                'Advance Campaigns',
                                                'Webform to Ticket',
                                                'Group Based Campaigns',
                                                'Google Adwords Campaign',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 2. Landing Pages */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">2. Landing Pages</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Drag & Drop landing pages',
                                                'Predefined Templates',
                                                'SMS / Mail / Voice Integration',
                                                'Multi Currency Support',
                                                'Personalized Landing Pages',
                                                'Landing Page Tracking',
                                                'Host on Self Domain',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 3. Webform */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">3. Webform</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Embed Web Form',
                                                'Use as Pop-up',
                                                'Drag & Drop Web Forms',
                                                'Predefined Templates',
                                                'Web Form to Ticket & Order',
                                                'Web Form to Order',
                                                'Personalized Web Form',
                                                'Web Form Tracking',
                                                'SMS / Mail / Voice Integration',
                                                'Host on Self Domain',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 4. Digital Campaign */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">4. Digital Campaign</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Simple tools to run performing ads on Google/Facebook',
                                                'Designed to suit users with minimal marketing experience',
                                                'Uses AI to determine audience, platform, and messaging',
                                                'Pre-created audience and automated content for faster publishing',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 5. Email Integration */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">5. Email Integration</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Integrate your mails with BuzzKit',
                                                'Send and receive mails from your kit id to your enquiries/leads',
                                                'Automated lead/enquiry mapping',
                                                'Automated lead creation and assignment',
                                                'Track each mail open',
                                                'Track each link open in mail',
                                                'Unlimited rich text templates',
                                                'Personalize mails with leads\' details',
                                                'Perform actions like creating tasks/appointments/tickets or sending mail for parsing',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 6. Social Media Integration */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">6. Social Media Integration</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Integrate Facebook pages and Facebook forms with BuzzKit',
                                                'Capture all digital and social media leads through web forms',
                                                'Auto lead capturing',
                                                'Auto lead creation and assignment',
                                                'Triggered SMS / Mail / Connect to Agent',
                                                'Campaigns on lead creation',
                                                'Integration link with YouTube, Twitter & Instagram',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 7. Private Short URL */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">7. Private Short URL</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Unlimited Visit',
                                                'Used in SMS Tracking',
                                                'API\'s',
                                                'Dynamic Destination URL',
                                                'Customer Domains',
                                                'SSL Certification',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : item.id === 'lead-engagement' ? (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Lead & Customer Engagement</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-3">
                                    {/* 1. Cloud Telephony */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">1. Cloud Telephony</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Unlimited Customized IVR Flows',
                                                'Real Time Personalization in Voice',
                                                'Multilingual Voice Support',
                                                'Call to Ticket & Lead',
                                                'Virtual Call Center',
                                                'SMS / Mail Integration',
                                                'API\'s',
                                                'Voice Broadcast',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 2. Online Meeting */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">2. Online Meeting</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Seamlessly organize one-on-one meetings with your prospects.',
                                                'Host engaging webinars to showcase your expertise.',
                                                'Collaborate with your clients effortlessly.',
                                                'Record meetings for future reference.',
                                                'Chat, take notes, and share screens/documents during the meetings.',
                                                'Set up recurring meetings, making scheduling a breeze.',
                                                'Create public webinars to boost your brand visibility.',
                                                'Customize registration forms for a personalized experience.',
                                                'Restrict participants based on your criteria.',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 3. Chatbot */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">3. Chatbot</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Engage customers instantly with AI-driven chatbots across web and WhatsApp.',
                                                'Automate follow-ups, tasks, appointments, and pipeline movements.',
                                                'Send real-time SMS, emails, voice messages, and webhook notifications.',
                                                'Use smart triggers to launch different bots based on user behavior or inputs.',
                                                'Boost brand presence and customer loyalty with personalized chatbot experiences.',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 4. Task & Appointment Management */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">4. Task & Appointment Management</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Customized Follow ups',
                                                'Assign a Task to Individual',
                                                'Assign Meeting to Individual',
                                                'Assign a Meeting to Group',
                                                'Collaborate by adding comments / files to tasks',
                                                'Track Result of Each Task',
                                                'Track Result of Each Appointment',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* 5. Docs Library */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">5. Docs Library</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Store files, documents, and resources right within BuzzKit.',
                                                'Seamlessly integrate these files into your BuzzKit CRM workflow.',
                                                'Stay productive, even when you\'re on the go.',
                                                'Access your catalogs, presentations, price lists, logos, and more from anywhere, anytime.',
                                                'Eliminate the need for constant back-and-forth between your desktop and CRM.',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : item.id === 'customer-service' ? (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Customer Service</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-3">
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">1. Ticket Management</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Multilingual Support',
                                                'Mail to Ticket',
                                                'Call to Ticket',
                                                'Webform to Ticket',
                                                'Customized Feedbacks',
                                                'Ticket Dispatch Automation',
                                                'Event Based Notification',
                                                'Custom SLA',
                                                'Custom Roles',
                                                'Detailed Report',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : item.id === 'team-productivity' ? (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Team Productivity</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-3">
                                    {/* Field Force Management */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">1. Field Force Management</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Real Time Location tracking',
                                                'Shifts / Roaster / Attendance / Leave management',
                                                'Rules to manage any kind of field agents',
                                                'Appointment management',
                                                'Expense Claim Management',
                                                'Custom forms for check-in/sign in',
                                                'Geo verified sign in / meetings',
                                                'Team Collaboration / Comments for meetings',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Elevate Collaboration with Team Chat */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">2. Elevate Collaboration with Team Chat</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Chat, voice call, and video call with your colleagues effortlessly.',
                                                'Create dynamic groups for Branches, Territories, and Teams.',
                                                'Conduct group chats, calls, and video meetings.',
                                                'Reach your entire team with one-to-many broadcasts.',
                                                'Have full control over user permissions.',
                                                'Share documents, contacts, location, audio, videos, and more.',
                                                'Seamlessly exchange leads, inquiries, tasks, appointments, and events.',
                                                'Access call and video recordings for a comprehensive overview.',
                                                'Automate repetitive tasks and event reminders with bots.',
                                                'Create public groups to broadcast company announcements.',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Workflows */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">3. Workflows</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Workflows are a series of operations you follow to achieve a specific objective.',
                                                'They are often time-critical and must be executed in a defined order.',
                                                'Manual execution across teams or departments can lead to chaos and delays.',
                                                'Workflow failures cause productivity loss and poor business decisions.',
                                                'BuzzKit\'s visual drag-and-drop interface simplifies workflow creation.',
                                                'Multi-step workflows can be built, automated, and reused effortlessly.',
                                                'Results from earlier steps can be used to drive actions in later steps.',
                                                'Over 100 CRM events can trigger workflows automatically.',
                                                'Custom schedules and webhooks allow tailored workflow actions.',
                                                'Logging and condition-based execution reduce manual intervention.',
                                                'Say goodbye to chaos—let automated workflows handle the process for you.',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Mobile Application */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">4. Mobile Application</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Track Field Staff',
                                                'Lead Management',
                                                'All Call Tracking',
                                                'Notification',
                                                'Track field staff\'s location',
                                                'Set on field/off field to enable/disable tracking',
                                                'Get real time location reports',
                                                'Get historic location reports',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Staff Time Tracker */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">5. Staff Time Tracker</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Monitor your employees from anywhere',
                                                'Automated tracking for remote/distributed teams',
                                                'Track Apps, URLs & Offline Time',
                                                'Capture auto screenshots of employees screens',
                                                'Offline tracking',
                                                'Shift scheduling',
                                                'Get employee attendance',
                                                'Be notified if a user goes on a long break',
                                                'Be notified if a user logs in late',
                                                'Be notified if a user works less than required',
                                                'No more time wastage by employees',
                                                'Customize unproductive apps & know how long employees spent on these apps',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : item.id === 'tools' ? (
                            <>
                                <h2 className="text-3xl font-bold mb-8">Tools</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-3">
                                    {/* Control Access & Activities with Roles */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">1. Control Access & Activities with Roles</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Use predefined roles or create custom roles for your staff',
                                                'Hierarchy allows to control access of records',
                                                'Permissions to allow / disallow almost all activities',
                                                'Granular control over each entity and activity',
                                                'Visual drag and drop hierarchy',
                                                'Audit user\'s activity (coming soon)',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* WhatsApp Messenger */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">2. WhatsApp Messenger</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Connect with over 2 billion users worldwide on their favourite platform',
                                                'Integrate WhatsApp Business API',
                                                'Import contacts',
                                                'Send and receive free chat messages during Customer Care window',
                                                'Create multilingual templates',
                                                'Send notifications outside customer care window',
                                                'Multi-user support',
                                                'Automated replies',
                                                'Automated lead/enquiry mapping',
                                                'Automated lead creation and assignment',
                                                'Send auto prompts to users to extend customer care window',
                                                'Create auto chat at various lead activities (e.g., conversions, task completion, ticket resolution)',
                                                'Bulk messaging broadcast',
                                                'Chatbot integration',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* WhatsApp Automation */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">3. WhatsApp Automation</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Create automation rules based on user details / message',
                                                'Reply via text, image, doc, video, snippet or template on WhatsApp',
                                                'Create and run a sequence of activities when a user initiates chat',
                                                'Send SMS / Mail / Voice / Run webhook',
                                                'Capture user\'s input in lead details',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* WhatsApp Commerce */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500 lg:col-span-2">
                                        <h3 className="text-xl font-semibold mb-4">4. WhatsApp Commerce</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Sell products/services directly via WhatsApp without requiring a separate website',
                                                'Let users browse and order directly within WhatsApp',
                                                'No login required for customers to complete purchases',
                                                'Upload BuzzKit products and services to WhatsApp (coming soon)',
                                                'View customer orders from WhatsApp interface',
                                                'Set up payment methods for WhatsApp orders',
                                                'Automate flows for cart submission, abandonment, and order processing (coming soon)',
                                                'Deliver smooth and fast checkouts within WhatsApp',
                                                'Capitalize on WhatsApp\'s growing popularity for eCommerce',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* SMS / Mail / Google Business Messaging */}
                                    <div className="bg-white rounded-xl shadow p-6 flex flex-col border border-blue-500">
                                        <h3 className="text-xl font-semibold mb-4">5. SMS / Mail / Google Business Messaging</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Personalisation',
                                                'Scheduling',
                                                'Pre-defined Templates',
                                                'Tracking',
                                                'API\'s',
                                                'Flash / Unicode',
                                                'SMS to WhatsApp, Mail, and call',
                                                'SMS with Insta Connect',
                                            ].map((text, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm">
                                                    <span className="mt-1 text-blue-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </span>
                                                    <span>{text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-3xl font-bold mb-4">{item.label}</h2>
                                <p className="text-gray-500 text-lg">Content for {item.label} section goes here.</p>
                            </>
                        )}
                    </section>
                ))}
            </div>

            {/* Contact Card Section */}
            <section className="w-full py-12 md:py-24 bg-blue-600">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information Card */}
                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-8 text-white">To know more about the BuzzKit CRM contact:</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4 text-white">
                                    <div className="mt-1">
                                        <Icon icon="fluent:person-20-filled" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Name</h3>
                                        <h4 className="text-xl">Devanshu Kumar</h4>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 text-white">
                                    <div className="mt-1">
                                        <Icon icon="fluent:call-24-filled" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Phone</h3>
                                        <a href="tel:+918235379002" className="hover:underline">+91 82353 78002</a><br />
                                        <a href="tel:+919828051996" className="hover:underline">+91 98280 51996</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4 text-white">
                                    <div className="mt-1">
                                        <Icon icon="fluent:mail-24-filled" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <a href="mailto:devanshu@nobeltechinnovations.com" className="hover:underline">
                                            devanshu@nobeltechinnovations.com
                                        </a>
                                        <a href="mailto:info@nobeltechinnovations.com" className="hover:underline">
                                            info@nobeltechinnovations.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-8">
                            <h2 className="text-3xl text-white font-bold mb-8">Send us a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
} 