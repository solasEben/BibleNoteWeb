import Link from "next/link";
import { User, CheckCircle2, Heart, Shield } from "lucide-react";

export default function DisciplePage() {
    return (
        <div className="pb-20">
            <section className="pt-32 pb-16 px-4 bg-surface/10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <User className="w-10 h-10 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">The Disciple's Path</h1>
                    <p className="text-muted text-lg leading-relaxed">
                        Your personal sanctuary for reflection, prayer, and deep scriptural exploration.
                        BibleNote is designed to help you build a consistent and meaningful relationship with the Word.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Personal Revelations",
                            desc: "Capture every insight exactly when it strikes. Our rich-text editor makes journaling a joy.",
                            icon: Heart
                        },
                        {
                            title: "Verse Memory",
                            desc: "Build your internal library of scripture with interactive tools and spaced-repetition reminders.",
                            icon: CheckCircle2
                        },
                        {
                            title: "Spiritual Growth",
                            desc: "Track your progress across different themes and books to see how God's Word is working in your life.",
                            icon: Shield
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-surface p-8 rounded-3xl border border-white/5">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 text-center">
                <Link href="/sign-up" className="inline-block bg-primary text-background px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    Start Your Disciple Journey
                </Link>
            </div>
        </div>
    );
}
