"use client";

import { useState } from "react";
import { UserSidebar } from "../../components/user-sidebar";
import { UpdateForm } from "../../components/update-form";
import { OrdersList } from "../../components/orders-list";
import { SupportForm } from "../../components/support-form";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("update");

  return (
    <div className="bg-gray-50">
      <div className="h-auto">
        <Header />
        <div className="py-16 container mx-auto flex gap-8">
          <div className="flex-1 item-center justify-center">
            <SupportForm />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
