import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
    {
        name: "Seeker",
        price: "Free",
        description: "Perfect for starting your personal study journey.",
        features: ["Standard Bible versions", "Basic note-taking", "Sync across 2 devices", "Community forums"],
        cta: "Start for Free",
        focused: false,
    },
    {
        name: "Disciple",
        price: "$9",
        duration: "/mo",
        description: "Advanced tools for the dedicated scripture student.",
        features: [
            "All Bible versions & translations",
            "Unlimited cross-references",
            "AI-powered study insights",
            "Priority multi-device sync",
            "Personalized reading plans",
        ],
        cta: "Join as Disciple",
        focused: true,
    },
    {
        name: "Scribe",
        price: "$24",
        duration: "/mo",
        description: "Designed for teachers, scholars, and leaders.",
        features: [
            "Everything in Disciple",
            "Advanced group management",
            "Teaching & presentation mode",
            "Original Greek & Hebrew tools",
            "Early access to new features",
        ],
        cta: "Go Pro",
        focused: false,
    },
];

export default function PricingTable() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">A Plan for Every Journey</h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Choose the level of depth you need for your spiritual growth and study.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`p-8 rounded-3xl border flex flex-col transition-all duration-300 ${tier.focused
                                ? "bg-surface border-primary ring-1 ring-primary relative scale-105 z-10 shadow-xl shadow-primary/5"
                                : "bg-surface/50 border-border"
                                }`}
                        >
                            {tier.focused && (
                                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-background text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                            <div className="flex items-baseline space-x-1 mb-4">
                                <span className="text-4xl font-bold">{tier.price}</span>
                                {tier.duration && <span className="text-muted text-sm">{tier.duration}</span>}
                            </div>
                            <p className="text-muted text-sm mb-8 leading-relaxed">
                                {tier.description}
                            </p>
                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start space-x-3 text-sm">
                                        <Check className="w-5 h-5 text-primary shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/sign-up"
                                className={`w-full py-3 rounded-xl text-center font-bold transition-all ${tier.focused
                                    ? "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/20"
                                    : "bg-warm text-foreground border border-border hover:bg-warm/80"
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
