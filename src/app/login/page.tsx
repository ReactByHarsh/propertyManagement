"use client";

import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login:", { email, password });
    };

    return (
        <div className="min-h-screen bg-background text-foreground pt-20 flex items-center justify-center relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4" />
                <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-secondary/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="container mx-auto px-6 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    {/* Left Side: Welcome Text */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={fadeIn}
                        className="hidden lg:block"
                    >
                        <h1 className="text-5xl font-serif font-bold mb-6">
                            Welcome Back to <br />
                            <span className="text-primary">Orchids PM</span>
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Access your property portfolio, track performance, and manage requests with our state-of-the-art dashboard.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Real-time Financial Insights",
                                "Streamlined Maintenance Requests",
                                "Secure Document Management"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side: Login Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-2xl max-w-md mx-auto w-full"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-serif font-bold mb-2">Client Login</h2>
                            <p className="text-muted-foreground text-sm">Enter your credentials to access your account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                                    <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 ml-1">
                                <input type="checkbox" id="remember" className="rounded border-input text-primary focus:ring-primary" />
                                <label htmlFor="remember" className="text-sm text-muted-foreground">Remember me for 30 days</label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                            >
                                Sign In
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-muted-foreground">
                            Don't have an account?{" "}
                            <Link href="/signup" className="text-primary font-bold hover:underline">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
