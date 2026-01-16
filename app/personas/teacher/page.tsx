import Link from "next/link";
import { GraduationCap, Layout, Users, FileText } from "lucide-react";

export default function TeacherPage() {
    return (
        <div className="pb-20">
            <section className="pt-32 pb-16 px-4 bg-surface/10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                        <GraduationCap className="w-10 h-10 text-accent" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">The Teacher's Toolkit</h1>
                    <p className="text-muted text-lg leading-relaxed">
                        Equip yourself to lead. BibleNote provides the scholarly tools and collaborative
                        features required to prepare impactful lessons and manage study groups.
                    </p>
                </div>
            </section>

            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            title: "Lesson Preparation",
                            desc: "Organize your research with powerful tags, category folders, and cross-reference links.",
                            icon: FileText
                        },
                        {
                            title: "Group Management",
                            desc: "Easily share reading plans and study materials with your class or study group.",
                            icon: Users
                        },
                        {
                            title: "Scholarly Tools",
                            desc: "Deep dive into original Hebrew and Greek with integrated concordance and scholarly notes.",
                            icon: Layout
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-surface p-8 rounded-3xl border border-white/5">
                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 text-center">
                <Link href="/sign-up" className="inline-block bg-accent text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    Register as a Teacher
                </Link>
            </div>
        </div>
    );
}
