"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants: Variants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const navLinks = [
        { name: "Properties", href: "/properties" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="w-10 h-10 bg-primary rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                        <span className="text-primary-foreground font-serif text-2xl font-bold">O</span>
                    </div>
                    <span className="text-2xl font-serif font-bold tracking-tight">Orchids<span className="text-primary">PM</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
                    {navLinks.map((item) => (
                        <Link key={item.name} href={item.href} className="hover:text-primary transition-colors relative group">
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth Buttons */}
                <div className="hidden lg:flex items-center gap-4">
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

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden z-50 p-2 text-foreground"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <Link
                                href="/login"
                                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Client Login
                            </Link>
                            <Link
                                href="/signup"
                                className="w-full py-3 bg-primary text-primary-foreground rounded-xl text-center font-medium hover:bg-primary/90 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
