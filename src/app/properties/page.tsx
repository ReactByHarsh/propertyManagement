"use client";

import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

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
        tag: "Luxury"
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
        tag: "Penthouse"
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
        tag: "Featured"
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
        tag: "Villa"
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
        tag: "Modern"
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
        tag: "Exclusive"
    }
];

export default function PropertiesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Exclusive Properties</h1>
                        <p className="text-lg text-muted-foreground">
                            Discover our curated collection of premium residences in the most sought-after locations.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((property, i) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                    {/* Using div with bg image for now to avoid Next.js Image config issues with external domains if not configured. 
                       Ideally would use next/image with configured domains. */}
                                    <Image
                                        src={property.image}
                                        alt={property.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-border">
                                        {property.tag}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                                        <p className="font-bold text-xl">{property.price}</p>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{property.title}</h3>
                                    <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                                        <MapPin className="w-4 h-4" />
                                        {property.location}
                                    </div>

                                    <div className="flex items-center justify-between py-4 border-t border-border text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Bed className="w-4 h-4" />
                                            <span>{property.beds} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Bath className="w-4 h-4" />
                                            <span>{property.baths} Baths</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Square className="w-4 h-4" />
                                            <span>{property.sqft} sqft</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/properties/${property.id}`}
                                        className="mt-4 w-full py-3 rounded-lg border border-primary text-primary font-medium flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
