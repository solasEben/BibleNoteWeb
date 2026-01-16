"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center space-x-2 bg-surface border border-primary/20 px-3 py-1 rounded-full mb-8"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Reimagining Scripture Study
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground"
                >
                    Your Personal <span className="text-gradient">Sanctuary</span> <br />
                    for Scriptural Wisdom
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    Elevate your Bible study with a distraction-free environment designed for reflection,
                    deep analysis, and spiritual growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                >
                    <Link
                        href="/sign-up"
                        className="w-full sm:w-auto bg-primary text-background px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                    >
                        <span>Start Your Journey</span>
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link
                        href="/features"
                        className="w-full sm:w-auto bg-warm border border-border px-8 py-4 rounded-xl font-bold hover:bg-warm/80 transition-colors text-foreground"
                    >
                        Explore Features
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
