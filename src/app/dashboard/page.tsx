"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Home,
    Users,
    Settings,
    Bell,
    Search,
    Plus,
    ArrowUpRight,
    Wallet,
    Wrench
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-muted/30 pt-20">
            <div className="flex">
                {/* Sidebar - Hidden on mobile, visible on desktop */}
                <aside className="hidden lg:block w-64 bg-background border-r border-border h-[calc(100vh-5rem)] sticky top-20 overflow-y-auto">
                    <div className="p-6 space-y-6">
                        <div className="space-y-1">
                            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl font-medium">
                                <LayoutDashboard className="w-5 h-5" />
                                Dashboard
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-xl font-medium transition-colors">
                                <Home className="w-5 h-5" />
                                Properties
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-xl font-medium transition-colors">
                                <Users className="w-5 h-5" />
                                Tenants
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-xl font-medium transition-colors">
                                <Wrench className="w-5 h-5" />
                                Maintenance
                            </Link>
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-xl font-medium transition-colors">
                                <Wallet className="w-5 h-5" />
                                Financials
                            </Link>
                        </div>

                        <div className="pt-6 border-t border-border">
                            <Link href="#" className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:bg-muted rounded-xl font-medium transition-colors">
                                <Settings className="w-5 h-5" />
                                Settings
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 lg:p-10">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-serif font-bold">Dashboard Overview</h1>
                                <p className="text-muted-foreground">Welcome back, here's what's happening with your portfolio.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="relative hidden md:block">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        type="text"
                                        placeholder="Search properties..."
                                        className="pl-10 pr-4 py-2 rounded-full bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none w-64"
                                    />
                                </div>
                                <button className="p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors relative">
                                    <Bell className="w-5 h-5 text-muted-foreground" />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                                    <Plus className="w-4 h-4" />
                                    <span className="hidden sm:inline">Add Property</span>
                                </button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { label: "Total Properties", value: "12", change: "+2", trend: "up" },
                                { label: "Occupancy Rate", value: "94%", change: "+1.5%", trend: "up" },
                                { label: "Total Revenue", value: "$145.2k", change: "+12%", trend: "up" },
                                { label: "Pending Requests", value: "5", change: "-2", trend: "down" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-card p-6 rounded-2xl border border-border shadow-sm"
                                >
                                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-3xl font-bold font-serif">{stat.value}</h3>
                                        <div className={`flex items-center text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-orange-600'}`}>
                                            {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : null}
                                            {stat.change}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Activity & Properties */}
                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Recent Activity */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="lg:col-span-2 bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
                            >
                                <div className="p-6 border-b border-border flex items-center justify-between">
                                    <h3 className="font-bold font-serif text-lg">Recent Activity</h3>
                                    <Link href="#" className="text-sm text-primary hover:underline">View All</Link>
                                </div>
                                <div className="divide-y divide-border">
                                    {[
                                        { title: "New Tenant Application", desc: "John Doe applied for Unit 402", time: "2 hours ago", icon: <Users className="w-4 h-4" /> },
                                        { title: "Maintenance Request", desc: "Leaking faucet in Unit 105", time: "5 hours ago", icon: <Wrench className="w-4 h-4" /> },
                                        { title: "Rent Payment Received", desc: "$2,500 from Sarah Smith", time: "1 day ago", icon: <Wallet className="w-4 h-4" /> },
                                        { title: "Lease Renewed", desc: "Unit 304 renewed for 12 months", time: "2 days ago", icon: <Home className="w-4 h-4" /> }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 flex items-start gap-4 hover:bg-muted/50 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-medium text-sm">{item.title}</p>
                                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                                            </div>
                                            <span className="text-xs text-muted-foreground">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Quick Actions / Summary */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="font-bold font-serif text-xl mb-4">Premium Support</h3>
                                    <p className="text-primary-foreground/80 mb-6 text-sm">
                                        Need assistance with your portfolio? Our dedicated concierge team is available 24/7.
                                    </p>
                                    <button className="w-full py-3 bg-white text-primary rounded-xl font-bold hover:bg-secondary transition-colors">
                                        Contact Support
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
