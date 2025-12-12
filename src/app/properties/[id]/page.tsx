"use client";

import { motion } from "framer-motion";
import {
    MapPin,
    Bed,
    Bath,
    Square,
    CheckCircle2,
    Calendar,
    Share2,
    Heart
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock Data (In a real app, this would come from an API or database)
const properties = [
    {
        id: 1,
        title: "The Royal Palm Residences",
        location: "Palm Jumeirah, Dubai",
        price: "$5,500/mo",
        beds: 3,
        baths: 2,
        sqft: 1850,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        tag: "Luxury",
        description: "Experience the epitome of luxury living in this stunning 3-bedroom residence located on the iconic Palm Jumeirah. Featuring panoramic views of the Arabian Gulf, this apartment offers a seamless blend of modern design and comfort. Residents enjoy exclusive access to a private beach, state-of-the-art gym, and infinity pool.",
        features: [
            "Private Beach Access",
            "Infinity Pool",
            "Smart Home System",
            "24/7 Concierge",
            "Valet Parking",
            "Fully Furnished"
        ]
    },
    {
        id: 2,
        title: "Marina Heights Penthouse",
        location: "Dubai Marina, Dubai",
        price: "$8,200/mo",
        beds: 4,
        baths: 3.5,
        sqft: 2400,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        tag: "Penthouse",
        description: "Perched atop the prestigious Marina Heights, this penthouse offers breathtaking views of the Dubai Marina skyline. With floor-to-ceiling windows, a spacious terrace, and bespoke interiors, this home is designed for those who appreciate the finer things in life.",
        features: [
            "Panoramic Marina Views",
            "Private Terrace",
            "Jacuzzi",
            "Home Theater",
            "Private Elevator",
            "Maid's Room"
        ]
    },
    {
        id: 3,
        title: "Downtown Views Apartment",
        location: "Downtown Dubai",
        price: "$3,800/mo",
        beds: 2,
        baths: 2,
        sqft: 1200,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        tag: "Featured",
        description: "Located in the heart of Downtown Dubai, this stylish 2-bedroom apartment puts you steps away from the Dubai Mall and Burj Khalifa. The unit features contemporary finishes, a fully equipped kitchen, and access to premium building amenities.",
        features: [
            "Burj Khalifa View",
            "Walking Distance to Mall",
            "Swimming Pool",
            "Gym & Sauna",
            "Covered Parking",
            "Security"
        ]
    },
    {
        id: 4,
        title: "Jumeirah Beach Villa",
        location: "Jumeirah, Dubai",
        price: "$12,000/mo",
        beds: 5,
        baths: 6,
        sqft: 4500,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        tag: "Villa",
        description: "A masterpiece of modern architecture, this 5-bedroom villa in Jumeirah offers unparalleled privacy and luxury. The property boasts a private garden, swimming pool, and direct access to the beach. Perfect for families seeking a serene yet central location.",
        features: [
            "Private Garden",
            "Private Pool",
            "Direct Beach Access",
            "Marble Flooring",
            "Staff Quarters",
            "Gated Community"
        ]
    },
    {
        id: 5,
        title: "Business Bay Loft",
        location: "Business Bay, Dubai",
        price: "$2,900/mo",
        beds: 1,
        baths: 1.5,
        sqft: 950,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
        tag: "Modern",
        description: "This chic loft in Business Bay is ideal for young professionals. With high ceilings, industrial-style finishes, and an open-plan layout, it offers a unique living space close to the city's business hub.",
        features: [
            "Canal View",
            "High Ceilings",
            "Open Plan Kitchen",
            "Rooftop Pool",
            "Co-working Space",
            "Pet Friendly"
        ]
    },
    {
        id: 6,
        title: "Emirates Hills Mansion",
        location: "Emirates Hills, Dubai",
        price: "$25,000/mo",
        beds: 7,
        baths: 8,
        sqft: 8500,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        tag: "Exclusive",
        description: "The ultimate status symbol. This sprawling mansion in Emirates Hills overlooks the golf course and features grand entertaining spaces, a private spa, cinema, and lush landscaped grounds.",
        features: [
            "Golf Course View",
            "Private Spa & Gym",
            "Home Cinema",
            "Wine Cellar",
            "Smart Home Automation",
            "Driver's Room"
        ]
    }
];

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function PropertyDetailsPage() {
    const params = useParams();
    const id = Number(params.id);
    const property = properties.find((p) => p.id === id);

    if (!property) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl font-serif font-bold mb-4">Property Not Found</h1>
                <p className="text-muted-foreground mb-8">The property you are looking for does not exist or has been removed.</p>
                <Link href="/properties" className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all">
                    Back to Properties
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero Image Section */}
            <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 text-white container mx-auto">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold uppercase tracking-wider border border-white/30">
                                {property.tag}
                            </span>
                            <span className="flex items-center gap-1 text-white/90">
                                <MapPin className="w-4 h-4" />
                                {property.location}
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">{property.title}</h1>
                        <p className="text-3xl font-bold text-primary-foreground">{property.price}</p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 lg:py-20">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        {/* Key Stats */}
                        <div className="grid grid-cols-3 gap-4 p-6 bg-card border border-border rounded-2xl shadow-sm">
                            <div className="flex flex-col items-center justify-center text-center p-4 border-r border-border last:border-0">
                                <Bed className="w-6 h-6 text-primary mb-2" />
                                <span className="text-2xl font-bold font-serif">{property.beds}</span>
                                <span className="text-sm text-muted-foreground">Bedrooms</span>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center p-4 border-r border-border last:border-0">
                                <Bath className="w-6 h-6 text-primary mb-2" />
                                <span className="text-2xl font-bold font-serif">{property.baths}</span>
                                <span className="text-sm text-muted-foreground">Bathrooms</span>
                            </div>
                            <div className="flex flex-col items-center justify-center text-center p-4">
                                <Square className="w-6 h-6 text-primary mb-2" />
                                <span className="text-2xl font-bold font-serif">{property.sqft}</span>
                                <span className="text-sm text-muted-foreground">Square Feet</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">About this Property</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {property.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-serif font-bold mb-6">Amenities & Features</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {property.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="bg-card p-8 rounded-3xl border border-border shadow-lg sticky top-24">
                            <h3 className="text-2xl font-serif font-bold mb-6">Schedule a Viewing</h3>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="+1 (555) 000-0000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input type="date" className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" />
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 mt-4">
                                    Request Tour
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-border flex gap-4">
                                <button className="flex-1 py-3 rounded-xl border border-border hover:bg-muted transition-all flex items-center justify-center gap-2 font-medium">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                                <button className="flex-1 py-3 rounded-xl border border-border hover:bg-muted transition-all flex items-center justify-center gap-2 font-medium">
                                    <Heart className="w-4 h-4" />
                                    Save
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
