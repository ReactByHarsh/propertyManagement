"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                        <span className="text-primary-foreground font-serif text-2xl font-bold">O</span>
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-tight">Orchids<span className="text-primary">PM</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    {[
                        { name: "Properties", href: "/properties" },
                        { name: "Services", href: "/services" },
                        { name: "About Us", href: "/about" },
                        { name: "Contact", href: "/contact" }
                    ].map((item) => (
                        <Link key={item.name} href={item.href} className="hover:text-primary transition-colors relative group">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                        Client Login
                    </Link>
                    <Link
                        href="/signup"
                        className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
