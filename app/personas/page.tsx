import PersonaCard from "@/components/persona-card";
import CTA from "@/components/cta";

export default function PersonasPage() {
    return (
        <div className="pb-20">
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Path</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        BibleNote is built to support your unique relationship with the Word, whether
                        you are learning for yourself or leading others.
                    </p>
                </div>
            </section>

            <PersonaCard />

            <CTA />
        </div>
    );
}
