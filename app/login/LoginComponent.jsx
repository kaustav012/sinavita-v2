"use client";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../services/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginComponent() {
  const searchParams = useSearchParams();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const redirect = searchParams.get("redirect") || "/";

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(form);

    if (res.success) {
      toast.success("Login successful!");
      router.push(redirect);
    } else {
      toast.error(res.message || "Login failed.");
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
              <h1 className="text-2xl font-bold text-gray-900">Welcome To Sinavita</h1>
              <p className="mt-2 text-gray-600">Login Your Account</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm font-medium text-gray-600">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    href={`/forgot-password?redirect=${encodeURIComponent(redirect)}`}
                    className="text-sm text-yellow-600 hover:text-yellow-500"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-6"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link
                  href={`/registration?redirect=${encodeURIComponent(redirect)}`}
                  className="text-yellow-600 hover:text-yellow-500"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}