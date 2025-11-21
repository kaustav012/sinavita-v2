import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const orders = [
  {
    id: "ORD001",
    date: "2024-01-20",
    total: "$2,999",
    status: "Delivered",
    items: 3,
  },
  {
    id: "ORD002",
    date: "2024-01-18",
    total: "$1,499",
    status: "In Transit",
    items: 1,
  },
  {
    id: "ORD003",
    date: "2024-01-15",
    total: "$4,999",
    status: "Processing",
    items: 2,
  },
]

export function OrdersList() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h1 className="text-2xl font-semibold mb-8">My Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    order.status === "Delivered"
                      ? "border-yellow-500 text-yellow-500"
                      : order.status === "In Transit"
                        ? "border-blue-500 text-blue-500"
                        : "border-orange-500 text-orange-500"
                  }
                >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

