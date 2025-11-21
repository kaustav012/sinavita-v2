import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SupportForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm flex-1 flex-col items-center">
      <h1 className="text-3xl md:text-4xl lg:text-8xl font-bold text-center mb-12 md:mb-12" style={{ textTransform: 'uppercase' }}>
        Contact With Us
      </h1>
      <form className="space-y-6 max-w-2xl mx-auto">
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Enter subject"
            className="bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger className="bg-gray-50">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="order">Order Related</SelectItem>
              <SelectItem value="product">Product Related</SelectItem>
              <SelectItem value="shipping">Shipping Related</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Type your message here"
            className="min-h-[150px] bg-gray-50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="attachment">Attachment (optional)</Label>
          <Input id="attachment" type="file" className="bg-gray-50" />
        </div>
        <div className="flex justify-end">
          <Button className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-white rounded-lg px-20 py-6 text-lg font-medium transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
