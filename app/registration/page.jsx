"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { toast } from "react-toastify";
import { useAuth } from "../../services/context/AuthContext";

export default function Registration() {
  const router = useRouter();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      toast.error("Please accept the terms and privacy policy.");
      return;
    }

    setLoading(true);
    const { termsAccepted, ...payload } = formData;

    const result = await register(payload);
    setLoading(false);

    if (result.success) {
      toast.success("Registration successful! Redirecting...");
      router.push("/login");
    } else {
      toast.error(result.message || "Registration failed.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center py-16">
        <div className="w-full max-w-md p-6 rounded-xl bg-gray-50 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Welcome To Sinavita</h1>
            <p className="mt-1 text-sm text-gray-600">Create a new account</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Input
              name="password_confirmation"
              type="password"
              placeholder="Confirm Password"
              value={formData.password_confirmation}
              onChange={handleChange}
              required
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onCheckedChange={(checked) =>
                  handleChange({ target: { name: "termsAccepted", type: "checkbox", checked } })
                }
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <Link href="/terms" className="text-yellow-600 hover:text-yellow-500 font-medium">
                  Terms & Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 py-6"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-600 hover:text-yellow-500 font-medium">
              Login
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
