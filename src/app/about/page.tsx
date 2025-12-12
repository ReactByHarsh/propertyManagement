"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                    >
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
                            Setting the Standard in <span className="text-primary">Luxury Management</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Founded on the principles of integrity, excellence, and innovation, Orchids PM has established itself as the premier property management firm for discerning owners. We don't just manage properties; we cultivate investments and curate living experiences.
                        </p>
                        <div className="flex gap-8">
                            <div>
                                <p className="text-3xl font-bold font-serif text-primary">10+</p>
                                <p className="text-sm text-muted-foreground">Years Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold font-serif text-primary">$500M+</p>
                                <p className="text-sm text-muted-foreground">Assets Managed</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold font-serif text-primary">2.5k+</p>
                                <p className="text-sm text-muted-foreground">Units Managed</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden bg-muted"
                    >
                        {/* Abstract placeholder or gradient since I can't use external images easily without knowing they work. Using a nice CSS pattern. */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-muted-foreground/50 font-serif text-2xl">Our Headquarters</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground">The pillars that define our approach to every interaction.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Integrity First",
                                desc: "We believe in transparent, honest communication. Trust is the foundation of our business, and we earn it every day."
                            },
                            {
                                title: "Excellence Always",
                                desc: "Good enough is never enough. We strive for perfection in every detail, from maintenance requests to financial reports."
                            },
                            {
                                title: "Innovation Driven",
                                desc: "We leverage the latest technology to streamline operations, enhance communication, and maximize efficiency."
                            }
                        ].map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-background p-8 rounded-xl border border-border hover:border-primary transition-colors"
                            >
                                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{value.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
