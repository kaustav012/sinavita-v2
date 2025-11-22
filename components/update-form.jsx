import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"

export function UpdateForm() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-8">Update your information</h1>
      <form className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" defaultValue="Kaustav Biswas" className="bg-gray-50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone No</Label>
            <Input id="phone" defaultValue="+91-6290572677" className="bg-gray-50" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" defaultValue="kaustav@valktechnologies.com" className="bg-gray-50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value="************" className="bg-gray-50" />
          </div>
        </div>
        <div className="flex justify-end">
          <Button className="bg-yellow-500 -600 text-white px-8">Update</Button>
        </div>
      </form>
    </div>
  )
}

