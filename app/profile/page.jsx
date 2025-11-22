'use client';

import { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import { CalendarIcon, Edit, ShoppingBag, Truck } from 'lucide-react';
import DownloadIcon from '@mui/icons-material/Download';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from "next/navigation";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useAuth } from '../../services/context/AuthContext';
import LoadingText from '../../components/LoadingText';
import { BASE_URL, SELF_API } from '../../services/product';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useOrders } from '../../services/context/OrderContext';
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';
import { Calendar } from '../../components/ui/calendar';
import { Rating, TextField, Button } from '@mui/material';
export default function ProfilePage() {

  const dummyCalendarData = [
    {
      month: 'May',
      year: 2025,
      delivery: true,
      orders: [
        {
          id: 101,
          product_details: [
            { product_qty: 2, name: 'Organic Coffee Beans', subscription_type: 'Monthly' },
            { product_qty: 1, name: 'Reusable Mug', subscription_type: 'One-time' }
          ],
          sub_total: 350,
          payable_amount: 385,
          payment_method: 'Credit Card',
          created_at: '2025-05-10',
          invoice_download: true
        },
        {
          id: 102,
          product_details: [
            { product_qty: 3, name: 'Tea Sampler Pack', subscription_type: 'Biweekly' }
          ],
          sub_total: 45,
          payable_amount: 50,
          payment_method: 'PayPal',
          created_at: '2025-05-20',
          invoice_download: true
        }
      ]
    },
    {
      month: 'June',
      year: 2025,
      delivery: true,
      orders: []
    },
    {
      month: 'July',
      year: 2025,
      delivery: false,
      orders: [
        {
          id: 103,
          product_details: [
            { product_qty: 1, name: 'Premium Subscription', subscription_type: 'Annual' }
          ],
          sub_total: 1200,
          payable_amount: 1200,
          payment_method: 'Bank Transfer',
          created_at: '2025-07-05',
          invoice_download: false
        }
      ]
    },
    {
      month: 'August',
      year: 2025,
      delivery: false,
      orders: [
      ]
    },
    {
      month: 'September',
      year: 2025,
      delivery: false,
      orders: []
    },
    {
      month: 'October',
      year: 2025,
      delivery: false,
      orders: []
    },
    {
      month: 'November',
      year: 2025,
      delivery: false,
      orders: [

      ]
    },
    {
      month: 'December',
      year: 2025,
      delivery: false,
      orders: [

      ]
    }
  ];

  const router = useRouter();
  const { logout, userToken, userData, loading, } = useAuth()
  const { orderData, fetchOrderData, orderLoading } = useOrders();
  const [activeTab, setActiveTab] = useState(1);
  const [trackingInput, setTrackingInput] = useState('');
  const [matchedOrder, setMatchedOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonthYear, setSelectedMonthYear] = useState(
    format(selectedDate, "MMMM yyyy")
  );
  const [calendarData, setCalendarData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [ordersForMonth, setOrdersForMonth] = useState([]);
  const [reviews, setReviews] = useState({});
  const [apiLoading, setApiLoading] = useState(true);
  useEffect(() => {
    setSelectedMonthYear(format(selectedDate, "MMMM yyyy"));
  }, [selectedDate]);

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2025, i, 1); // Year 2025
    const monthName = format(date, "MMMM");

    // Simulate delivery status (e.g., based on even/odd months)
    const delivery = i % 2 === 0;

    return {
      month: monthName,
      year: 2025,
      delivery,
    };
  });

  useEffect(() => {
    fetchOrderData();
  }, []);

  useEffect(() => {
    const fetchExistingReviews = async () => {
      if (!orderData || !userToken) return;
      try {
        const response = await axios.get(
          `${BASE_URL}/user/get-review`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.data.success) {
          const fetchedReviews = {};
          response.data.data.forEach(review => {
            fetchedReviews[review.order_id] = {
              rating: parseInt(review.rating),
              text: review.review,
              submitted: true // Mark as submitted
            };
          });
          // Merge existing local reviews (e.g., unsaved edits) with fetched data
          setReviews(prev => ({
            ...prev,
            ...fetchedReviews
          }));
        } else {
          toast.error("Failed to load existing reviews.");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        toast.error("Could not fetch existing reviews.");
      }
    };

    fetchExistingReviews();
  }, [orderData, userToken]);

  useEffect(() => {
    if (!userToken) return;

    const fetchSubscriptionData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/all-order-calendar`,
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.data.success) {
          const apiData = response.data.data;

          const monthNames = [
            'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December', 'January', 'February', 'March', 'April'
          ];

          const groupedByMonth = monthNames.map(month => ({
            month,
            year: ['January', 'February', 'March', 'April'].includes(month) ? 2026 : 2025,
            delivery: false,
            orders: []
          }));

          apiData.forEach(order => {
            order.order_products.forEach(product => {
              const date = new Date(product.date);
              const deliveryMonth = format(date, 'MMMM');
              const deliveryYear = date.getFullYear();

              const targetMonth = groupedByMonth.find(
                m => m.month === deliveryMonth && m.year === deliveryYear
              );

              if (targetMonth) {
                targetMonth.delivery = true;

                const productDetail = {
                  product_qty: 1,
                  name: "Subscription Product",
                  subscription_type: "Monthly"
                };

                const existingOrderIndex = targetMonth.orders.findIndex(o => o.id === order.id);
                if (existingOrderIndex > -1) {
                  targetMonth.orders[existingOrderIndex].product_details.push(productDetail);
                } else {
                  const newOrder = {
                    id: order.id,
                    product_details: [productDetail],
                    sub_total: parseFloat(product.total_amount),
                    payable_amount: parseFloat(product.total_amount),
                    payment_method: order.payment_method,
                    created_at: product.date,
                    invoice_download: !!product.label_url
                  };
                  targetMonth.orders.push(newOrder);
                }
              }
            });
          });

          groupedByMonth.forEach(month => {
            month.orders.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
          });

          setCalendarData(groupedByMonth);
          setApiLoading(false);
        } else {
          toast.error("Failed to load subscription data.");
          setApiLoading(false);
        }
      } catch (error) {
        console.error("Error fetching calendar data:", error);
        toast.error("Could not fetch subscription calendar.");
        setApiLoading(false);
      }
    };

    fetchSubscriptionData();
  }, [userToken]);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [loadingTwo, setLoadingTwo] = useState(false);
  const [message, setMessage] = useState(null);

  const downloadInvoice = async (orderId) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/invoice-pdf`,
        { order_id: orderId },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Accept': 'application/json',
          },
        }
      );

      if (response.data.success) {
        const pdfUrl = response.data.pdf_url;

        // ✅ Open in new tab instead of downloading
        window.open(pdfUrl, '_blank');

        toast.success('Invoice opened in new tab!');
      } else {
        toast.error('Failed to generate invoice.');
      }
    } catch (error) {
      console.error('Invoice download error:', error);
      toast.error('Something went wrong while opening invoice.');
    }
  };

  useEffect(() => {
    if (userData) {
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingTwo(true);
    setMessage(null);

    try {
      const response = await axios.post(
        'https://sinavita-admin.flameoflames.com/api/user/update-profile',
        formData,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully!");
        // setMessage('Profile updated successfully!');
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error updating profile.");
    }

    setLoadingTwo(false);
  };









  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setTrackingInput('');
    setMatchedOrder(null);
    setIsLoading(false);
    setHasSearched(false);
  };



  const handleTrackingSearch = () => {
    setIsLoading(true);
    setMatchedOrder(null);
    setHasSearched(false);

    setTimeout(() => {
      const found = orderData.find(order => String(order.id) === trackingInput.trim());
      setMatchedOrder(found || null);
      setIsLoading(false);
      setHasSearched(true);
    }, 3000); // 3 seconds loading
  };

  const handleLogOut = () => {
    logout()
    router.push("/login");
  }

  useEffect(() => {
    if (!loading && !userToken) {
      router.push("/login");
    }
  }, [loading, userToken]);

  if (loading) return <LoadingText />;
  if (!userToken) return null; // Avoid flicker before redirect


  // 3. Handlers for rating and text changes:
  const handleRatingChange = (orderId, newValue) => {
    setReviews(prev => {
      const existing = prev[orderId] || { submitted: false };
      return {
        ...prev,
        [orderId]: {
          ...existing,
          rating: newValue
        }
      };
    });
  };

  const handleReviewTextChange = (orderId, e) => {
    const newText = e.target.value;
    setReviews(prev => {
      const existing = prev[orderId] || { submitted: false };
      return {
        ...prev,
        [orderId]: {
          ...existing,
          text: newText
        }
      };
    });
  };

  // 4. Submit handler (adjust to your API)
  const submitReview = async (orderId) => {
    const { rating = 0, text = '' } = reviews[orderId] || {};
    const order = orderData.find((o) => o.id === orderId);
    const productId = order?.product_details[0]?.product_id;

    // Check if any product in the order is a monthly subscription
    const isMonthly = order?.product_details?.some(
      (product) => product.subscription_type === 'monthly'
    );

    // Choose the appropriate API endpoint
    const endpoint = isMonthly ? '/user/monthly-review' : '/user/single-review';

    try {
      await axios.post(`${BASE_URL}${endpoint}`, {
        order_id: orderId,
        product_id: productId,
        rating,
        review: text,
      }, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });

      // Mark the review as submitted in the UI
      setReviews(prev => ({
        ...prev,
        [orderId]: {
          ...prev[orderId],
          submitted: true
        }
      }));

      toast.success('Review submitted! 🎉');
    } catch (err) {
      console.error(err);
      toast.error('Failed to submit review.');
    }
  };


  return (
    loading ?
      <LoadingText /> :
      <div>
        <Header />
        <div className="max-w-4xl mx-auto py-10 px-4 min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-center">My Profile</h1>

          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            className="mb-8"
          >
            <Tab icon={<AccountCircleIcon />} label="Profile" />
            <Tab icon={<ShoppingBag />} label="My Orders" />
            <Tab icon={<Edit />} label="Edit Profile" />
            <Tab icon={<Truck />} label="Order Tracking" />
            <Tab icon={<CalendarIcon />} label="Subscription Calendar" />
          </Tabs>

          {activeTab === 0 && (
            <div className="p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold mb-4">Customer Profile</h3>
              <p><strong>Name:</strong> {userData?.name}</p>
              <p><strong>Email:</strong> {userData?.email}</p>
              <p><strong>Phone:</strong> {userData?.phone}</p>
              {/* <p><strong>Address:</strong> 123 Main Street, NY</p> */}
              <button
                onClick={handleLogOut}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                {isLoading ? 'Searching...' : 'Logout'}
              </button>
            </div>
          )}

          {activeTab === 1 && orderData && (
            orderLoading ?
              <h3 className="text-xl font-semibold mb-4">Please wait ...</h3> :
              <div className="p-6 rounded-xl shadow border">
                <h3 className="text-xl font-semibold mb-4">Order History</h3>
                {[...orderData]?.reverse()?.map((order) => (
                  <div key={order.id} className="border p-4 rounded-md mb-4">
                    <p className="font-semibold text-lg">Order ID: #{order.id}</p>
                    <p><strong>Items:</strong></p>
                    <ul className="list-disc ml-5 mb-2">
                      {order.product_details.map((item, idx) => (
                        <li key={idx}>
                          {item.product_qty}x {item.name} ({item.subscription_type})
                        </li>
                      ))}
                    </ul>
                    <p><strong>Subtotal:</strong> ${order.sub_total}</p>
                    <p><strong>Total Payable:</strong> ${order.payable_amount}</p>
                    <p><strong>Payment Method:</strong> {order.payment_method}</p>
                    <p className="text-sm text-gray-500">
                      <strong>Placed on:</strong> {order.created_at}
                    </p>

                    {order.invoice_download ? (
                      <a
                        href='#'
                        onClick={() => downloadInvoice(order.id)}
                        className="mt-2 flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <DownloadIcon fontSize="small" /> Download Invoice
                      </a>
                    ) : (
                      <p className="text-sm text-red-500 mt-2">Invoice not available</p>
                    )}
                    {reviews[order.id]?.submitted ? (
                      // Display existing review
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold mb-2">Your Review</h4>
                        <Rating
                          name={`existing-rating-${order.id}`}
                          value={reviews[order.id].rating || 0}
                          readOnly
                        />
                        <p className="mt-2">{reviews[order.id].text}</p>
                      </div>
                    ) : (
                      // Show the review form
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold mb-2">Leave a Review</h4>
                        <Rating
                          name={`rating-${order.id}`}
                          value={reviews[order.id]?.rating || 0}
                          onChange={(_, newValue) => handleRatingChange(order.id, newValue)}
                        />
                        <TextField
                          multiline
                          minRows={3}
                          placeholder="Write your review..."
                          value={reviews[order.id]?.text || ''}
                          onChange={e => handleReviewTextChange(order.id, e)}
                          fullWidth
                          className="mt-2"
                        />
                        <div className="mt-4">
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => submitReview(order.id)}
                          >
                            Submit Review
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
          )}

          {activeTab === 2 && (
            <div className="p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loadingTwo}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  {loadingTwo ? 'Saving...' : 'Save Changes'}
                </button>
              </form>
            </div>
          )}

          {activeTab === 3 && (
            <div className="p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold mb-4">Track Your Order</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter Tracking ID"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <button
                  onClick={handleTrackingSearch}
                  className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  {isLoading ? 'Searching...' : 'Track Order'}
                </button>
              </div>

              {isLoading ? (
                <p className="text-gray-600">Searching for your order...</p>
              ) : matchedOrder ? (
                <div className="border p-4 rounded-md">
                  <p><strong>{matchedOrder.name}:</strong> {matchedOrder.status}</p>
                  <p className="text-sm text-gray-500">Tracking ID: {matchedOrder.id}</p>
                  <p className="text-sm text-green-600 font-medium">Expected Delivery: {matchedOrder.delivery}</p>
                </div>
              ) : hasSearched && !matchedOrder ? (
                <p className="text-red-600">No order found with this tracking ID.</p>
              ) : null}
            </div>
          )}
          {activeTab === 4 && (
            <div className="p-6 rounded-xl shadow border">
              <h3 className="text-xl font-semibold mb-4">Subscription Calendar</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {calendarData.map((monthData) => (
                  <div
                    key={`${monthData.month}-${monthData.year}`}
                    onClick={() => {
                      setSelectedMonth(monthData);
                      setOrdersForMonth(monthData.orders);
                    }}
                    className={`relative overflow-hidden rounded-md border shadow-sm transition-all hover:shadow-md cursor-pointer ${monthData.delivery ? "border-green-400 bg-green-50" : "border-gray-200 bg-gray-50"
                      } ${selectedMonth === monthData ? "ring-2 ring-blue-500" : ""}`}
                  >
                    <div className="p-2">
                      <h4 className="text-base font-medium">{monthData.month}</h4>
                      {monthData.orders.length > 0 ? (
                        <div className="mt-2 flex items-center gap-1 text-green-700 text-sm">
                          <span className="h-2 w-2 rounded-full bg-green-500"></span>
                          <span>
                            Delivery on <b>
                              {format(
                                new Date(
                                  Math.min(...monthData.orders.map(o => new Date(o.created_at)))
                                ),
                                "do"
                              )}
                            </b>
                          </span>
                        </div>
                      ) : (
                        <div className="mt-2 flex items-center gap-1 text-gray-500 text-sm">
                          <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                          <span>No deliveries scheduled</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {selectedMonth && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Orders for {selectedMonth.month} {selectedMonth.year}
                  </h3>
                  {ordersForMonth.length > 0 ? (
                    ordersForMonth.map((order) => (
                      <div key={order.id} className="border p-4 rounded-md mb-4">
                        <p className="font-semibold text-lg">Order ID: #{order.id}</p>
                        <p><strong>Items:</strong></p>
                        <ul className="list-disc ml-5 mb-2">
                          {order.product_details.map((item, idx) => (
                            <li key={idx}>
                              {item.product_qty}x {item.name} ({item.subscription_type})
                            </li>
                          ))}
                        </ul>
                        <p><strong>Subtotal:</strong> ${order.sub_total}</p>
                        <p><strong>Total Payable:</strong> ${order.payable_amount}</p>
                        <p><strong>Payment Method:</strong> {order.payment_method}</p>
                        <p className="text-sm text-gray-500">
                          <strong>Placed on:</strong> {order.created_at}
                        </p>
                        {order.invoice_download ? (
                          <a
                            href="#"
                            onClick={() => downloadInvoice(order.id)}
                            className="mt-2 flex items-center gap-2 text-blue-600 hover:underline"
                          >
                            <DownloadIcon fontSize="small" /> Download Invoice
                          </a>
                        ) : (
                          <p className="text-sm text-red-500 mt-2">Invoice not available</p>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No orders for this month.</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <Footer />
      </div>
  );
}
