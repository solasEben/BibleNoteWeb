import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto rounded-[3rem] bg-surface border border-primary/20 p-12 md:p-24 text-center relative overflow-hidden">
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px]" />

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to deepen your <span className="text-primary italic">faith</span>?</h2>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Join thousands of believers who have transformed their scriptural study with BibleNote.
                        Start your free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="/sign-up"
                            className="w-full sm:w-auto bg-primary text-background px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20"
                        >
                            Get Started Now
                        </Link>
                        <Link
                            href="/pricing"
                            className="w-full sm:w-auto text-white font-semibold flex items-center justify-center hover:text-primary transition-colors group"
                        >
                            View all plans
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
