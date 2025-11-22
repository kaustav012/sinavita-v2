"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../services/context/AuthContext";

export default function ForgotPasswordPageContent() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect") || "/";
    const { sendPasswordReset } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await sendPasswordReset({ email });
        if (res.success) {
            toast.success("Password reset link sent! Check your email.");
            router.push(redirect);
        } else {
            toast.error(res.message || "Failed to send reset link.");
        }
        setLoading(false);
    };

    return (
        <div className="h-screen">
            <Header />
            <main className="flex items-center justify-center py-20 h-[80vh]">
                <div className="w-[600px]">
                    <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
                            <p className="mt-2 text-gray-600">Enter your email to reset password</p>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="space-y-2">
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-6"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Send Reset Link"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-gray-600">
                            <Link
                                href={`/login?redirect=${encodeURIComponent(redirect)}`}
                                className="text-yellow-600 hover:text-yellow-500"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
