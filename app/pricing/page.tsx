import PricingTable from "@/components/pricing-table";
import CTA from "@/components/cta";

export default function PricingPage() {
    return (
        <div className="pb-20">
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Invest in your spiritual growth with plans designed for individuals, families, and leaders.
                    </p>
                </div>
            </section>

            <PricingTable />

            <section className="py-24 px-4 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {[
                            {
                                q: "Can I cancel my subscription anytime?",
                                a: "Yes, you can cancel your subscription at any time from your account settings. You will continue to have access until the end of your billing period."
                            },
                            {
                                q: "Is there a student or missionary discount?",
                                a: "Absolutely. We offer 50% off for verified students and missionaries. Contact our support team to apply."
                            },
                            {
                                q: "Do I own my data?",
                                a: "Always. You can export your notes, highlights, and journals in various formats (PDF, Markdown, JSON) at any time."
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-surface/50 p-6 rounded-2xl border border-white/5">
                                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </div>
    );
}
