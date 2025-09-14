"use client";

import Link from "next/link";
import { useState } from "react";

export default function CustomerSupportPage() {
    const [activeTab, setActiveTab] = useState("contact");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [complaintSubmitted, setComplaintSubmitted] = useState(false);

    const contactMethods = [
        {
            icon: "📞",
            title: "WhatsApp Support",
            description: "Speak directly with our team",
            details: "+6281382184796",
            hours: "Mon-Sun: 9 AM - 10 PM"
        },
        {
            icon: "✉️",
            title: "Email Support",
            description: "Send us your questions",
            details: "support@rizkymaulana.web.id",
            response: "Response within 2 hours"
        },
        {
            icon: "💬",
            title: "Live Chat",
            description: "Instant messaging support",
            details: "Coming Soon: Available 24/7",
            action: "Coming Soon: Chat Support"
        },
        // {
        //     icon: "🏪",
        //     title: "Store Visit",
        //     description: "Visit our physical store",
        //     details: "123 Sweet Street, Pastry City",
        //     hours: "Mon-Sun: 6 AM - 9 PM"
        // }
    ];

    const faqCategories = [
        {
            category: "Order & Delivery",
            questions: [
                {
                    q: "How long does delivery take?",
                    a: "Within the city, delivery usually takes around 30 mins (up to 45 mins if it\'s super busy). For outside the city, please allow 1–2 hours"
                },
                {
                    q: "What is the minimum order for delivery?",
                    a: "Minimum order is Rp50,000. Free delivery for orders above Rp100,000."
                },
                {
                    q: "Can I modify my order after placing it?",
                    a: "You can modify your order within 10 minutes of placing it by calling our support line."
                }
            ]
        },
        {
            category: "Products & Ingredients",
            questions: [
                {
                    q: "Do you offer gluten-free options?",
                    a: "Yes! We have a dedicated gluten-free menu with various pastries and cakes."
                },
                {
                    q: "Are your ingredients organic?",
                    a: "We use 100% organic flour, butter, and eggs in all our products."
                },
                {
                    q: "Do you have vegan pastries?",
                    a: "We offer a selection of vegan pastries made with plant-based ingredients."
                }
            ]
        },
        {
            category: "Events & Catering",
            questions: [
                {
                    q: "Do you cater for events?",
                    a: "Yes! We provide catering for weddings, corporate events, and parties."
                },
                {
                    q: "How far in advance should I order for events?",
                    a: "We recommend ordering at least 48 hours in advance for events."
                },
                {
                    q: "Can I customize orders for special events?",
                    a: "Absolutely! We offer custom designs and flavors for special occasions."
                }
            ]
        }
    ];

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const handleComplaintSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComplaintSubmitted(true);
        setTimeout(() => setComplaintSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-[#FFF8F0]">
            {/* Header */}
            <header className="bg-[#FFF8F0] pt-[30px] pb-[50px]">
                <div className="container max-w-[1130px] mx-auto text-center mt-[50px]">
                    <div className="flex items-center justify-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit mx-auto shadow-sm mb-6">
                        <div className="w-[22px] h-[22px] flex shrink-0">
                            <span className="text-red-500">❤️</span>
                        </div>
                        <p className="font-semibold text-sm text-[#5C2C0C]">
                            24/7 Customer Support
                        </p>
                    </div>
                    <h1 className="font-bold text-[55px] leading-[55px] text-[#5C2C0C] mb-6">
                        We are Here to Help!
                    </h1>
                    <p className="text-lg leading-[34px] text-[#8D6E63] max-w-2xl mx-auto">
                        Your satisfaction is our priority. Get in touch with our
                        friendly support team for any questions or concerns.
                    </p>
                </div>
            </header>

            {/* Tabs */}
            <div className="container max-w-[1130px] mx-auto mb-12">
                <div className="flex justify-center gap-6 border-b border-[#E0C097]">
                    <button
                        onClick={() => setActiveTab("contact")}
                        className={`py-4 px-6 font-semibold text-lg transition-colors ${
                            activeTab === "contact"
                                ? "text-[#5C2C0C] border-b-2 border-[#D35400]"
                                : "text-[#8D6E63]"
                        }`}
                    >
                        Contact Us
                    </button>
                    <button
                        onClick={() => setActiveTab("faq")}
                        className={`py-4 px-6 font-semibold text-lg transition-colors ${
                            activeTab === "faq"
                                ? "text-[#5C2C0C] border-b-2 border-[#D35400]"
                                : "text-[#8D6E63]"
                        }`}
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => setActiveTab("complaint")}
                        className={`py-4 px-6 font-semibold text-lg transition-colors ${
                            activeTab === "complaint"
                                ? "text-[#5C2C0C] border-b-2 border-[#D35400]"
                                : "text-[#8D6E63]"
                        }`}
                    >
                        File a Complaint
                    </button>
                </div>
            </div>

            {/* Contact Us Tab */}
            {activeTab === "contact" && (
                <section className="container max-w-[1130px] mx-auto mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="text-4xl mb-4">{method.icon}</div>
                                <h3 className="font-bold text-xl text-[#5C2C0C] mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-[#8D6E63] mb-2">
                                    {method.description}
                                </p>
                                <p className="font-semibold text-[#5C2C0C] mb-1">
                                    {method.details}
                                </p>
                                {method.hours && (
                                    <p className="text-sm text-[#8D6E63]">
                                        Hours: {method.hours}
                                    </p>
                                )}
                                {method.response && (
                                    <p className="text-sm text-[#8D6E63]">
                                        {method.response}
                                    </p>
                                )}
                                {method.action && (
                                    <button className="mt-4 bg-[#D35400] text-white px-4 py-2 rounded-lg hover:bg-[#B84300] transition-colors">
                                        {method.action}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
                        <h3 className="font-bold text-2xl text-[#5C2C0C] mb-6">
                            Send Us a Message
                        </h3>
                        <form
    action="https://getform.io/f/bdrdkjzb"
    method="POST"
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
    <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border border-[#E0C097] rounded-lg p-3"
        required
    />
    <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="border border-[#E0C097] rounded-lg p-3"
        required
    />
    <textarea
        name="message"
        placeholder="Your Message"
        className="md:col-span-2 border border-[#E0C097] rounded-lg p-3"
        rows={4}
        required
    />
    <button
        type="submit"
        className="md:col-span-2 bg-[#D35400] text-white px-6 py-3 rounded-lg hover:bg-[#B84300] transition-colors"
    >
        Send Message
    </button>
</form>
                    </div>
                </section>
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
                <section className="container max-w-[1130px] mx-auto mb-20">
                    {faqCategories.map((category, index) => (
                        <div key={index} className="mb-8">
                            <h3 className="font-bold text-2xl text-[#5C2C0C] mb-4">
                                {category.category}
                            </h3>
                            <div className="space-y-4">
                                {category.questions.map((item, qIndex) => (
                                    <details
                                        key={qIndex}
                                        className="bg-white rounded-lg p-4 shadow-md"
                                    >
                                        <summary className="font-semibold text-[#5C2C0C] cursor-pointer">
                                            {item.q}
                                        </summary>
                                        <p className="mt-2 text-[#8D6E63]">
                                            {item.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* Complaint Tab */}
            {activeTab === "complaint" && (
                <section className="container max-w-[1130px] mx-auto mb-20">
                    <div className="bg-white rounded-2xl p-8 shadow-md">
                        <h3 className="font-bold text-2xl text-[#5C2C0C] mb-6">
                            File a Complaint
                        </h3>
                        <form
    action="https://getform.io/f/bdrdkjzb"
    method="POST"
    className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
    <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="border border-[#E0C097] rounded-lg p-3"
        required
    />
    <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="border border-[#E0C097] rounded-lg p-3"
        required
    />
    <input
        type="text"
        name="orderNumber"
        placeholder="Order Number"
        className="border border-[#E0C097] rounded-lg p-3"
        required
    />
    <select
        name="complaintType"
        className="border border-[#E0C097] rounded-lg p-3"
        required
    >
        <option value="">Select Complaint Type</option>
        <option value="delivery">Delivery Issue</option>
        <option value="product">Product Quality</option>
        <option value="service">Customer Service</option>
        <option value="other">Other</option>
    </select>
    <input
        type="file"
        name="evidence"
        accept="image/*"
        className="p-2 border rounded-lg w-full"
    />
    <textarea
        name="complaintDetails"
        placeholder="Complaint Details"
        className="md:col-span-2 border border-[#E0C097] rounded-lg p-3"
        rows={4}
        required
    />
    <button
        type="submit"
        className="md:col-span-2 bg-[#D35400] text-white px-6 py-3 rounded-lg hover:bg-[#B84300] transition-colors"
    >
        Submit Complaint
    </button>
</form>
                    </div>
                </section>
            )}
        </div>
    );
}