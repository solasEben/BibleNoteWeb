import { BookOpen, Share2, Search, Zap, Shield, Cloud } from "lucide-react";

const features = [
    {
        title: "Deep Context Search",
        description: "Instantly find cross-references and historical context across the entire Bible.",
        icon: Search,
    },
    {
        title: "Seamless Sync",
        description: "Your notes, highlights, and insights always with you across all devices.",
        icon: Cloud,
    },
    {
        title: "Collaborative Study",
        description: "Share and discuss your scriptural findings with your study group or congregation.",
        icon: Share2,
    },
    {
        title: "AI-Powered Insights",
        description: "Get context-aware suggestions and summaries to deepen your understanding.",
        icon: Zap,
    },
    {
        title: "Interactive Journal",
        description: "Rich-text editor designed specifically for verse-by-verse annotation.",
        icon: BookOpen,
    },
    {
        title: "Private & Secure",
        description: "Your spiritual journey is personal. We ensure your data remains your own.",
        icon: Shield,
    },
];

export default function FeatureGrid() {
    return (
        <section className="py-24 px-4 bg-surface/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Master Your Study</h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Everything you need to transform your regular reading into a profound spiritual experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
