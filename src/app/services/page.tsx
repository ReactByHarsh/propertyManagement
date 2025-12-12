"use client";

import { motion } from "framer-motion";
import {
    Building2,
    ShieldCheck,
    Wallet,
    Users,
    BarChart3,
    Wrench,
    Clock,
    FileCheck
} from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-20">
            {/* Hero Section */}
            <section className="relative py-20 lg:py-32 overflow-hidden bg-primary/5">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-serif font-bold mb-6">
                            Comprehensive <span className="text-primary">Management Services</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="text-lg text-muted-foreground leading-relaxed">
                            We offer a full suite of property management solutions designed to maximize your investment returns while minimizing your workload. From tenant acquisition to financial reporting, we handle it all with precision and care.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-32">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Tenant Acquisition",
                                description: "We find and retain high-quality tenants through strategic marketing and rigorous screening processes."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8" />,
                                title: "Screening & Vetting",
                                description: "Comprehensive background checks, credit reports, and rental history verification to ensure reliable tenants."
                            },
                            {
                                icon: <Wallet className="w-8 h-8" />,
                                title: "Rent Collection",
                                description: "Automated rent collection systems ensuring timely payments and direct deposits to your account."
                            },
                            {
                                icon: <Wrench className="w-8 h-8" />,
                                title: "Maintenance & Repairs",
                                description: "24/7 maintenance coordination with a network of trusted, licensed, and insured vendors."
                            },
                            {
                                icon: <BarChart3 className="w-8 h-8" />,
                                title: "Financial Reporting",
                                description: "Detailed monthly financial statements and year-end tax reporting for complete transparency."
                            },
                            {
                                icon: <FileCheck className="w-8 h-8" />,
                                title: "Legal Compliance",
                                description: "Staying up-to-date with local property laws and regulations to protect your investment."
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all"
                            >
                                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-4">Our Management Process</h2>
                        <p className="text-muted-foreground">A streamlined approach to onboarding and managing your property.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

                        {[
                            { step: "01", title: "Consultation", desc: "We evaluate your property and discuss your goals." },
                            { step: "02", title: "Onboarding", desc: "Seamless transition of documents and keys." },
                            { step: "03", title: "Marketing", desc: "Professional photography and listing syndication." },
                            { step: "04", title: "Management", desc: "Day-to-day operations and tenant care." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-background p-6 rounded-xl border border-border text-center md:text-left relative"
                            >
                                <span className="text-4xl font-serif font-bold text-primary/20 absolute top-4 right-4">{item.step}</span>
                                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-4 mx-auto md:mx-0 relative z-10">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
