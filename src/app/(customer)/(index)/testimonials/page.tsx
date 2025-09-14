import Link from "next/link";
import Navbar from "../_components/navbar";

export const metadata = {
  title: "Sweet Reviews 🍪",
}

export default function TestimonialsPage() {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Food Blogger",
            image: "/assets/photos/p1.png",
            rating: 5,
            comment: "These croissants are on another level. Flaky, buttery, baked to perfection. Easily the best I have tasted outside Paris.",
            date: "March 15, 2024"
        },
        {
            id: 2,
            name: "Mike Chen",
            role: "Regular Customer",
            image: "/assets/photos/p2.png",
            rating: 5,
            comment: "Ordered pastries for a wedding and it was a total win. Guests could not stop talking about the dessert table. Professional and delicious.",
            date: "March 12, 2024"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Wedding Planner",
            image: "/assets/photos/p3.png",
            rating: 5,
            comment: "Every bite feels like a mood booster. You can taste the love and skill in every pastry.",
            date: "March 10, 2024"
        },
        {
            id: 4,
            name: "David Kim",
            role: "Coffee Shop Owner",
            image: "/assets/photos/p4.png",
            rating: 4,
            comment: "If you want something that feels fancy yet comforting, this is the place. Zero regrets.",
            date: "March 8, 2024"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "Food Critic",
            image: "/assets/photos/p1.png",
            rating: 5,
            comment: "The cakes are stunning and taste even better than they look. My family keeps asking for more.",
            date: "March 5, 2024"
        },
        {
            id: 6,
            name: "James Wilson",
            role: "Event Coordinator",
            image: "/assets/photos/p2.png",
            rating: 5,
            comment: "From morning coffee to late night cravings, their pastries always hit the spot. Pure happiness in every bite.",
            date: "March 3, 2024"
        }
    ];

    const stats = [
        { number: "10K+", label: "Happy Customers" },
        { number: "4.9", label: "Average Rating" },
        { number: "98%", label: "Would Recommend" },
        { number: "24/7", label: "Customer Support" }
    ];

    return (
        <div className="min-h-screen bg-[#FFF8F0]">
            {/* Header */}
            <header className="bg-[#FFF8F0] pt-[30px] pb-[50px]">
                <Navbar />
                <div className="container max-w-[1130px] mx-auto text-center mt-[50px]">
                    <div className="flex items-center justify-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit mx-auto shadow-sm mb-6">
                        <div className="w-[22px] h-[22px] flex shrink-0">
                            <img src="assets/icons/crown.svg" alt="icon" />
                        </div>
                        <p className="font-semibold text-sm text-[#5C2C0C]">
                            Loved by Thousands of Customers
                        </p>
                    </div>
                    <h1 className="font-bold text-[55px] leading-[55px] text-[#5C2C0C] mb-6">
                        What Our Customers Say
                    </h1>
                    <p className="text-lg leading-[34px] text-[#8D6E63] max-w-2xl mx-auto">
                        Real talk from our pastry fam, check out what they are saying about us!
                    </p>
                </div>
            </header>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="container max-w-[1130px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-[#D27D2D] mb-2">{stat.number}</div>
                                <div className="text-[#5C2C0C] font-semibold">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Grid */}
            <section className="container max-w-[1130px] mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white rounded-3xl border border-[#F5E6D8] p-8 hover:shadow-lg transition-shadow duration-300">
                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="flex shrink-0">
                                        <img 
                                            src={i < testimonial.rating ? "/assets/icons/Star.svg" : "/assets/icons/Star-gray.svg"} 
                                            alt="star" 
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-[#5C2C0C] leading-relaxed mb-6 italic">
                                {testimonial.comment}
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 flex shrink-0 rounded-full border-2 border-[#F5E6D8] overflow-hidden">
                                    <img 
                                        src={testimonial.image} 
                                        className="w-full h-full object-cover" 
                                        alt={testimonial.name}
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-[#5C2C0C]">{testimonial.name}</div>
                                    <div className="text-sm text-[#8D6E63]">{testimonial.role}</div>
                                    <div className="text-xs text-[#8D6E63]">{testimonial.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#FFC736] to-[#D27D2D] py-16">
                <div className="container max-w-[1130px] mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Taste the Difference?
                    </h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied customers and experience the quality that everyone is talking about.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            href="/catalogs" 
                            className="px-8 py-4 bg-white text-[#D27D2D] rounded-full font-semibold hover:bg-[#FFF3E0] transition-colors"
                        >
                            View Menu
                        </Link>
                        <Link 
                            href="/" 
                            className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="container max-w-[1130px] mx-auto py-16">
                <h2 className="text-3xl font-bold text-[#5C2C0C] text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-6 border border-[#F5E6D8]">
                        <h3 className="font-semibold text-[#5C2C0C] mb-3">Do you offer custom orders?</h3>
                        <p className="text-[#8D6E63]">Yes! We specialize in custom pastries for events, weddings, and special occasions.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-[#F5E6D8]">
                        <h3 className="font-semibold text-[#5C2C0C] mb-3">How fresh are your pastries?</h3>
                        <p className="text-[#8D6E63]">All our pastries are baked fresh daily using the finest ingredients.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-[#F5E6D8]">
                        <h3 className="font-semibold text-[#5C2C0C] mb-3">Do you deliver?</h3>
                        <p className="text-[#8D6E63]">We offer delivery within the city area with a minimum order amount.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 border border-[#F5E6D8]">
                        <h3 className="font-semibold text-[#5C2C0C] mb-3">Are there vegan options?</h3>
                        <p className="text-[#8D6E63]">Yes, we have a selection of vegan pastries made with plant-based ingredients.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}