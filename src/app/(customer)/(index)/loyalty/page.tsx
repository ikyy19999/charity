import Link from "next/link";
import Navbar from "../_components/navbar";

export default function LoyaltyProgram404() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] to-[#FFE6CC] flex items-center justify-center px-4 py-8">
                <div className="max-w-2xl w-full bg-white rounded-3xl border-2 border-[#FFD699] p-10 text-center shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                    {/* Animated Icon */}
                    <div className="relative mb-8">
                        <div className="w-32 h-32 mx-auto relative">
                            {/* Main Crown */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg className="w-20 h-20 text-[#FFC736] animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L8 7 3 8 6 13 5 21 12 18 19 21 18 13 21 8 16 7 12 2z"/>
                                </svg>
                            </div>
                            
                            {/* Floating Stars */}
                            <div className="absolute -top-2 -left-2 animate-pulse">
                                <svg className="w-6 h-6 text-[#D27D2D]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            
                            <div className="absolute -top-2 -right-2 animate-pulse delay-300">
                                <svg className="w-5 h-5 text-[#D27D2D]" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Title with Gradient */}
                    <div className="mb-6">
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#D27D2D] to-[#FFC736] bg-clip-text text-transparent mb-4">
                            404
                        </h1>
                        <h2 className="text-3xl font-bold text-[#5C2C0C] mb-2">
                            Shop More, Earn More
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-[#D27D2D] to-[#FFC736] mx-auto rounded-full"></div>
                    </div>

                    {/* Message */}
                    <p className="text-lg text-[#8D6E63] mb-8 leading-relaxed">
                        Yep, soon your pastry cravings will pay off. Collect points every time you shop and trade them for tasty treats.
                    </p>

                    {/* Features Preview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#FFF3E0] p-4 rounded-xl border border-[#FFE6CC]">
                            <div className="w-8 h-8 mx-auto mb-2 text-[#D27D2D]">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21 12 17.77 5.82 21 7 14.14 2 9.27 8.91 8.26 12 2z"/>
                                </svg>
                            </div>
                            <p className="text-sm font-semibold text-[#5C2C0C]">Earn Points</p>
                            <p className="text-xs text-[#8D6E63]">With every purchase</p>
                        </div>
                        
                        <div className="bg-[#FFF3E0] p-4 rounded-xl border border-[#FFE6CC]">
                            <div className="w-8 h-8 mx-auto mb-2 text-[#D27D2D]">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33L6 19h1l.67-2h8.67l.67 2h1l.67-2H20v-5zm-4-2h-3V7h3v3zM8 7h3v3H8V7zm-2 5h12v3H6v-3z"/>
                                </svg>
                            </div>
                            <p className="text-sm font-semibold text-[#5C2C0C]">Exclusive Rewards</p>
                            <p className="text-xs text-[#8D6E63]">Special treats & discounts</p>
                        </div>
                        
                        <div className="bg-[#FFF3E0] p-4 rounded-xl border border-[#FFE6CC]">
                            <div className="w-8 h-8 mx-auto mb-2 text-[#D27D2D]">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                </svg>
                            </div>
                            <p className="text-sm font-semibold text-[#5C2C0C]">Early Access</p>
                            <p className="text-xs text-[#8D6E63]">To new flavors</p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <Link 
                            href="/catalogs" 
                            className="flex-1 p-4 bg-gradient-to-r from-[#D27D2D] to-[#FFC736] rounded-full text-center font-semibold text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>🎂</span>
                            <span>Explore Pastries</span>
                        </Link>
                        <Link 
                            href="/" 
                            className="flex-1 p-4 bg-white rounded-full text-center font-semibold border-2 border-[#FFC736] text-[#D27D2D] hover:bg-[#FFF3E0] transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <span>🏠</span>
                            <span>Back to Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}