import Link from "next/link";
import { BRAND } from "@/lib/brand";

export default function SignIn() {
    return (
        <div className="flex min-h-screen items-center justify-center px-4 py-12">
            <div className="w-full max-w-md space-y-8 bg-surface p-10 rounded-[2rem] border border-border shadow-2xl">
                <div className="text-center">
                    <Link href="/" className="text-3xl font-bold text-primary italic">
                        {BRAND.name}
                    </Link>
                    <h2 className="mt-6 text-2xl font-bold text-foreground">Sign in to your account</h2>
                    <p className="mt-2 text-sm text-muted">
                        Welcome back to your sanctuary.
                    </p>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 placeholder:text-muted focus:border-primary outline-none transition-colors text-foreground"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 placeholder:text-muted focus:border-primary outline-none transition-colors text-foreground"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                            <label htmlFor="remember-me" className="ml-2 block text-muted">Remember me</label>
                        </div>
                        <Link href="#" className="font-semibold text-primary hover:underline transition-all">Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl text-lg font-bold text-background bg-primary hover:scale-[1.02] transition-transform"
                    >
                        Sign in
                    </button>
                </form>
                <p className="text-center text-sm text-muted">
                    New here? <Link href="/sign-up" className="text-primary font-bold hover:underline transition-all">Create an account</Link>
                </p>
            </div>
        </div>
    );
}
