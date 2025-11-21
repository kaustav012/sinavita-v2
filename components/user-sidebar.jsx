"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";



export function UserSidebar({ activeTab, onTabChange }) {
  return (
    <div className="w-64 flex flex-col gap-2">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">User Name</h2>
        <p className="text-yellow-600">+91-00 0000 0000</p>
        <p className="text-gray-600 text-sm">abc@gmail.com</p>
      </div>
      <div className="flex flex-col">
        <Button
          variant="ghost"
          className={cn(
            "justify-start",
            activeTab === "update" &&
            "bg-yellow-100 text-yellow-700 -200 hover:text-yellow-800"
          )}
          onClick={() => onTabChange("update")}
        >
          Update Information
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "justify-start",
            activeTab === "orders" &&
            "bg-yellow-100 text-yellow-700 -200 hover:text-yellow-800"
          )}
          onClick={() => onTabChange("orders")}
        >
          My Order
        </Button>
        <Button
          variant="ghost"
          className={cn(
            "justify-start",
            activeTab === "support" &&
            "bg-yellow-100 text-yellow-700 -200 hover:text-yellow-800"
          )}
          onClick={() => onTabChange("support")}
        >
          Support
        </Button>
      </div>
    </div>
  );
}
