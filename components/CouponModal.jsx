// components/CouponModal.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { FaSadTear } from "react-icons/fa";
import { Frown } from "lucide-react";


export default function CouponModal({ open, onClose, onApply, availableCoupons }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Available Coupons</DialogTitle>
        </DialogHeader>
        {availableCoupons != 0 ?
          (<div className="space-y-4">
            {availableCoupons.map((coupon) => (
              <div
                key={coupon.code}
                className="p-4 rounded-lg border flex justify-between items-center"
              >
                <div>
                  <div className="font-semibold">{coupon.code}</div>
                  <div className="text-sm text-muted-foreground">{coupon.description}</div>
                </div>
                <Button onClick={() => onApply(coupon)}>Apply</Button>
              </div>
            ))}
          </div>) : (
            <div className="flex items-center gap-2 mt-4">
              <Frown color="#999" />
              <p className="text-lg text-gray-500">Sorry, no coupons available at this moment!</p>
            </div>
          )}
      </DialogContent>
    </Dialog>
  );
}
