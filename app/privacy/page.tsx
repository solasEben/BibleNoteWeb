export default function PrivacyPage() {
    return (
        <div className="pb-20 px-4">
            <section className="pt-32 pb-16 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none text-muted space-y-6 leading-relaxed">
                    <p>
                        Your privacy is of utmost importance to us at BibleNote. This policy outlines how
                        we collect, use, and protect your personal information.
                    </p>
                    <h2 className="text-xl font-bold text-white">1. Information Collection</h2>
                    <p>
                        We collect information you provide directly to us, such as when you create an account,
                        subscribe to our newsletter, or contact us for support. This may include your name,
                        email address, and payment information.
                    </p>
                    <h2 className="text-xl font-bold text-white">2. Use of Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services,
                        to process transactions, and to communicate with you about your account.
                    </p>
                    <h2 className="text-xl font-bold text-white">3. Data Security</h2>
                    <p>
                        We implement a variety of security measures to maintain the safety of your
                        personal information. Your data is stored on secure servers and is encrypted
                        where appropriate.
                    </p>
                    <h2 className="text-xl font-bold text-white">4. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your personal information at any time.
                        Please contact us if you need assistance with this.
                    </p>
                </div>
            </section>
        </div>
    );
}
