import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export default function SupportPage() {
    return (
        <div className="pb-20">
            <section className="pt-32 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">How can we help?</h1>
                    <p className="text-muted text-lg">
                        Our mission is to support your spiritual growth. Reach out if you have questions,
                        need technical help, or want to share feedback.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {[
                    {
                        title: "Help Center",
                        desc: "Browse our documentation for quick answers to common questions.",
                        icon: HelpCircle,
                        button: "Browse Docs"
                    },
                    {
                        title: "Email Support",
                        desc: "Contact our dedicated team for personalized assistance.",
                        icon: Mail,
                        button: "Send Email"
                    },
                    {
                        title: "Community",
                        desc: "Join our forum to discuss features and share study tips.",
                        icon: MessageCircle,
                        button: "Join Community"
                    }
                ].map((item, idx) => (
                    <div key={idx} className="bg-surface p-8 rounded-3xl border border-white/5 text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                            <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                        <p className="text-muted text-sm mb-8 leading-relaxed">{item.desc}</p>
                        <button className="w-full py-3 border border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-background transition-colors">
                            {item.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
