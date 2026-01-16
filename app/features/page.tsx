import FeatureGrid from "@/components/feature-grid";
import CTA from "@/components/cta";

export default function FeaturesPage() {
    return (
        <div className="pb-20">
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Experience Scripture Like Never Before</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        BibleNote combines deep scholarly tools with a serene, intuitive interface to help you
                        discover the richness of the Word.
                    </p>
                </div>
            </section>

            <FeatureGrid />

            <section className="py-24 px-4 bg-background">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Designed for Focus</h2>
                        <p className="text-muted mb-6 leading-relaxed">
                            In a world full of distractions, BibleNote provides a clean, minimalistic environment
                            that allows you to focus purely on the text and your personal reflections.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Distraction-free reading mode",
                                "Customizable themes and typography",
                                "Offline access to your entire library",
                                "Cross-platform synchronization"
                            ].map((item) => (
                                <li key={item} className="flex items-center space-x-3">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="aspect-video bg-surface border border-white/5 rounded-3xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-primary font-serif italic text-2xl">Intuitive Design</span>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
