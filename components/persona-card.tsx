import { User, GraduationCap } from "lucide-react";
import Link from "next/link";

const personas = [
    {
        role: "The Disciple",
        description: "Deepen your personal walk. Organize your revelations, track your reading progress, and keep your prayers in one sacred space.",
        icon: User,
        href: "/personas/disciple",
        features: ["Personalized reading paths", "Reflection journaling", "Verse memory tools"],
    },
    {
        role: "The Teacher",
        description: "Empower your flock. Build study guides, manage group discussions, and access scholarly resources to prepare life-changing lessons.",
        icon: GraduationCap,
        href: "/personas/teacher",
        features: ["Group study tools", "Presentation exports", "Original language analysis"],
    },
];

export default function PersonaCard() {
    return (
        <section className="py-24 px-4 bg-surface/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Tailored for You</h2>
                    <p className="text-muted max-w-xl mx-auto">
                        Whether you are a lifelong student or a spiritual shepherd, BibleNote adapts to your specific needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {personas.map((persona) => (
                        <Link
                            key={persona.role}
                            href={persona.href}
                            className="group p-8 md:p-12 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-all flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-background transition-colors duration-500">
                                <persona.icon className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{persona.role}</h3>
                                <p className="text-muted leading-relaxed mb-6">
                                    {persona.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {persona.features.map(f => (
                                        <span key={f} className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
