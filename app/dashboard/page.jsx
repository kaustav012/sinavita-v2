"use client"

import { useState } from "react"
import { UserSidebar } from "@/components/user-sidebar"
import { UpdateForm } from "@/components/update-form"
import { OrdersList } from "@/components/orders-list"
import { SupportForm } from "@/components/support-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("update")

  return (
    <div className="bg-gray-50">
      <div className="h-[1300px]">
      <Header/>
      <div className="py-16 container mx-auto flex gap-8">
        <UserSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1">
          {activeTab === "update" && <UpdateForm />}
          {activeTab === "orders" && <OrdersList />}
          {activeTab === "support" && <SupportForm />}
        </div>
      </div>
      </div>
      <div className="">
      <Footer/>
      </div>
    </div>
  )
}

