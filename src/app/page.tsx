"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Wallet,
  Users,
  ArrowRight,
  Star,
  CheckCircle2
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-chart-2/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-secondary-foreground text-sm font-medium mb-8">
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Property Management</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-chart-2">Real Estate</span> Experience
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Experience the pinnacle of property management. We combine cutting-edge technology with white-glove service to maximize your investment's potential.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-background border border-border rounded-full font-medium text-lg hover:bg-secondary/20 transition-all hover:-translate-y-1"
              >
                View Portfolio
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex items-center gap-8 text-muted-foreground">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">2,500+</p>
                <p className="text-sm">Premium Properties Managed</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-gradient-to-br from-background to-muted rounded-[2rem] p-2 shadow-2xl border border-border/50">
              <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-muted relative">
                {/* Placeholder for a high-end property image - using a gradient for now as requested no placeholders but I can't fetch external images easily without knowing valid URLs. I will use a sophisticated CSS pattern. */}
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Penthouse"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30">
                      Penthouse Suite
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold">The Royal Palm Residences</h3>
                  <p className="text-white/80">Palm Jumeirah, Dubai</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-serif font-bold mb-6">Redefining Property Management</h2>
            <p className="text-lg text-muted-foreground">
              We bring a new level of sophistication to real estate. Our comprehensive suite of services ensures your peace of mind and maximizes your returns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Elite Tenant Screening",
                description: "Rigorous background checks and financial vetting to ensure only the most qualified tenants occupy your properties."
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Asset Optimization",
                description: "Strategic maintenance and upgrade planning to enhance property value and ensure long-term appreciation."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Concierge Service",
                description: "24/7 dedicated support for both owners and tenants, handling every request with professionalism and speed."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 rounded-3xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/0 to-black/20" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Ready to Elevate Your Portfolio?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12">
            Join the exclusive circle of property owners who trust Orchids PM with their most valuable assets.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-2xl hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
