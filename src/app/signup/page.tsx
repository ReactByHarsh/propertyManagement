"use client";

import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight, Building2, Key } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function SignupPage() {
    const [role, setRole] = useState<"owner" | "tenant">("owner");

    return (
        <div className="min-h-screen bg-background text-foreground pt-20 flex items-center justify-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-secondary/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10 py-20">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                    className="bg-card p-8 md:p-12 rounded-3xl border border-border shadow-2xl max-w-2xl mx-auto w-full"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-serif font-bold mb-3">Create Your Account</h1>
                        <p className="text-muted-foreground">Join thousands of property owners and tenants experiencing the future of real estate.</p>
                    </div>

                    <form className="space-y-8">
                        {/* Role Selection */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => setRole("owner")}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${role === "owner"
                                        ? "border-primary bg-primary/5 text-primary"
                                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                                    }`}
                            >
                                <Building2 className="w-8 h-8" />
                                <span className="font-bold">Property Owner</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("tenant")}
                                className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all ${role === "tenant"
                                        ? "border-primary bg-primary/5 text-primary"
                                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                                    }`}
                            >
                                <Key className="w-8 h-8" />
                                <span className="font-bold">Tenant</span>
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium ml-1">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="confirmPassword" className="text-sm font-medium ml-1">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-2 ml-1">
                            <input type="checkbox" id="terms" className="mt-1 rounded border-input text-primary focus:ring-primary" />
                            <label htmlFor="terms" className="text-sm text-muted-foreground">
                                I agree to the <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                        >
                            Create Account
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-bold hover:underline">
                            Log In
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
