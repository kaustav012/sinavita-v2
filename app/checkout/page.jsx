"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Facebook, Twitter, Instagram, Youtube, PinIcon as Pinterest, Phone, MapPin } from "lucide-react"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { useEffect, useState } from "react"
import { useAuth } from "../../services/context/AuthContext";
import LoadingText from "../../components/LoadingText";
import { BASE_URL, PAYMENT_GET_WAY_API } from "../../services/product";
import { toast } from "react-toastify";
import axios from "axios";
import { useAddress } from "../../services/context/AddressContext";
import { Pencil, Trash2 } from 'lucide-react';
import { useCart } from "../../services/context/CartContext";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js"
import PaypalButtonCom from "./PaypalButtonCom"
import { useBusiness } from "../../services/context/BusinessContext";
import CouponModal from '../../components/CouponModal'
import { CardElement, Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


export default function CheckoutPage() {
  const router = useRouter();
  const { userToken, loading } = useAuth();
  const { addresses, handleDeleteAddress, deleteLoading, fetchAddresses } = useAddress()
  const { cartItems, removeFromCart, subtotal, tax, total, taxParcentage, fetchTaxRate, clearCart } = useCart();
  const { businessData } = useBusiness()
  const [discountedTotal, setDiscountedTotal] = useState(0);
  const [error, setError] = useState(null);
  // Load Stripe once outside the component
  const stripePromise = loadStripe(businessData?.stripe?.public_key);


  useEffect(() => {
    fetchTaxRate();
  }, []);

  const [formData, setFormData] = useState({
    address_id: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    country_code: '',
    country: '',
  });
  const [loadingThree, setLoadingThree] = useState(false);
  const [checkoutloading, setCheckoutLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [addressToggleButton, setAddressToggleButton] = useState(false)
  const [shippingChargeAmount, setShippingChargeAmount] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const [clientSecret, setClientSecret] = useState(null);

  const options = {
    clientSecret
  };
  useEffect(() => {
    let newTotal = total + shippingChargeAmount;

    if (appliedCoupon) {
      if (appliedCoupon.discount_type === "fixed") {
        newTotal = Math.max(newTotal - appliedCoupon.discount_amount, 0); // Prevent negative value
      } else if (appliedCoupon.discount_type === "percent") {
        const discount = newTotal * (appliedCoupon.discount_amount / 100);
        newTotal = newTotal - discount;
      }
    }

    setDiscountedTotal(newTotal);
  }, [total, shippingChargeAmount, appliedCoupon]);

  useEffect(() => {
    const fetchCoupons = async () => {
      const token = localStorage.getItem("userToken");
      if (!token) return;
      try {
        const response = await axios.post("https://sinavita-admin.flameoflames.com/api/all-coupon",
          {
            price: subtotal
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json"
            }
          });
        if (response.data.success && Array.isArray(response.data.data)) {
          const coupons = response.data.data.map(coupon => ({
            id: coupon.id, // Add coupon_id from API response
            code: coupon.code,
            description: coupon.description,
            discount_amount: parseFloat(coupon.discount),
            discount_type: coupon.discount_type
          }));
          console.log('Fetched Coupons', coupons)
          setAvailableCoupons(coupons);
        } else {
          toast.error("Failed to fetch coupons.");
        }
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    };

    fetchCoupons();
  }, []);


  const applyCoupon = async (couponParam) => {
    const token = localStorage.getItem("userToken");
    if (!token) return;

    // Prevent applying coupon if cart is empty
    if (!cartItems || cartItems.length === 0) {
      toast.error("Your cart is empty. Add items to apply a coupon.");
      return;
    }

    let couponCode, couponId;
    let productId = cartItems[0]?.product_id; // Use the first product ID from cart

    // Handle both modal selection (object) and manual entry (string)
    if (typeof couponParam === 'string') {
      couponCode = couponParam;
      const coupon = availableCoupons.find(c => c.code === couponCode);
      if (!coupon) {
        toast.error("Invalid coupon code");
        return;
      }
      couponId = coupon.id;
    } else {
      couponCode = couponParam.code;
      couponId = couponParam.id;
    }

    try {
      const response = await axios.post(
        "https://sinavita-admin.flameoflames.com/api/user/coupon",
        {
          coupon_code: couponCode,
          coupon_id: couponId,
          min_amount: subtotal,
          product_id: productId, // Add product_id here
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
          }
        }
      );

      if (response.data.status_code === 200) {
        const apiCoupon = {
          code: response.data.coupon_code,
          discount_amount: parseFloat(response.data.discount_percentage),
          discount_type: "percent"
        };
        setAppliedCoupon(apiCoupon);
        toast.success(`Coupon "${apiCoupon.code}" applied!`);
      } else {
        toast.error(response.data.message || "Invalid or expired coupon");
      }
    } catch (error) {
      console.error("Coupon application error:", error);
      toast.error("Failed to apply coupon. Please try again.");
    }
  };


  const getShippingCharges = async (payload) => {
    const token = localStorage.getItem('userToken');
    try {
      const response = await axios.post(
        `${BASE_URL}/shipmondo/shipping-charge`,
        payload,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShippingChargeAmount(response?.data?.price);
    } catch (error) {
      console.error('Error fetching shipping charges:', error);
      // throw new Error(error?.response?.data?.message || 'Failed to get shipping charges');
    }
  };


  const getAddressById = (selectedAddressId) => {
    if (selectedAddressId) {
      setAddressToggleButton(true)
      const selectedAddress = addresses.find(
        (address) => address.id === selectedAddressId
      );
      setFormData({
        address_id: selectedAddressId,
        name: selectedAddress?.name,
        phone: selectedAddress?.phone,
        email: selectedAddress?.email,
        address: selectedAddress?.address,
        zip: selectedAddress?.zip,
        city: selectedAddress?.city,
        country_code: selectedAddress?.country_code,
        country: selectedAddress?.country,
      });
    }

  }

  useEffect(() => {
    if (addresses.length > 0 && !selectedAddressId) {
      setAddressToggleButton(false)
      setSelectedAddressId(addresses[0]?.id);
      getShippingCharges({
        product_id: cartItems[0]?.product_id,
        address_id: addresses[0]?.id

      })
    }



  }, [addresses, selectedAddressId]);


  const handleSelect = (id) => {
    setSelectedAddressId(id);
    setFormData({
      ...formData,
      address_id: id
    });
    getShippingCharges({
      product_id: cartItems[0]?.product_id,
      address_id: id

    })
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingThree(true);
    try {
      const response = await axios.post(
        'https://sinavita-admin.flameoflames.com/api/user/add-address',
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
        toast.success("Address added successfully!");
        setAddressToggleButton(false)
        fetchAddresses()
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          zip: '',
          city: '',
          country_code: '',
          country: '',
        });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message || 'Failed to add address');
    }

    setLoadingThree(false);
  };
  const handleUpdateSubmit = async (e, id) => {
    e.preventDefault();
    setLoadingThree(true);
    try {
      const response = await axios.post(
        'https://sinavita-admin.flameoflames.com/api/user/edit-address',
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
        toast.success("Address update successfully!");
        setAddressToggleButton(false)
        fetchAddresses()
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          zip: '',
          city: '',
          country_code: '',
          country: '',
        });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.message || 'Failed to add address');
    }

    setLoadingThree(false);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://sinavita-admin.flameoflames.com/api/get-countries ');
        if (response.data.success) {
          const countryList = response.data.data
            .map(c => ({
              name: c.name,
              code: c.code
            }))
            .sort((a, b) => a.name.localeCompare(b.name));

          setCountries(countryList);
        } else {
          toast.error("Failed to load countries.");
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (e) => {
    const selected = countries.find(c => c.name === e.target.value);
    setFormData(prev => ({
      ...prev,
      country: selected?.name || '',
      country_code: selected?.code || '',
    }));
  };

  useEffect(() => {
    if (!loading && !userToken) {
      router.push("/login");
    }
  }, [loading, userToken]);

  const [selectedPayment, setSelectedPayment] = useState("PayPal");

  const handleChangePaymentMethod = (value) => {
    setSelectedPayment(value);
  };



  const [paymentGetWay, setPaymentGetWay] = useState([])
  const [loadingTwo, setLoadingTwo] = useState(true)
  useEffect(() => {
    const paymengetWayFun = async () => {
      setLoadingTwo(true);
      try {
        const data = await PAYMENT_GET_WAY_API();
        setPaymentGetWay(data || []);
      } catch (error) {
        console.error("Error fetching ride types", error);
      } finally {
        setLoadingTwo(false);
      }
    };

    paymengetWayFun();
  }, []);

  // console.log("selectedPayment: ", selectedPayment);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const paymentIntentResponse = await axios.post(
          `${BASE_URL}/stripe-payment`,
          { amount: discountedTotal, address_id: selectedAddressId },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
              'Content-Type': 'application/json'
            }
          }
        );
        setClientSecret(paymentIntentResponse.data.clientSecret);
      } catch (err) {
        console.log(err)
      }
    };

    if (!clientSecret) {
      createPaymentIntent();
    }
  }, [discountedTotal, clientSecret]);

  const StripeCheckoutButton = ({ amount, onSuccess, onError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!stripe || !elements || !clientSecret) return;

      setLoading(true);
      setError(null);

      try {
        // ✅ Collect billing details from your form
        const billingDetails = {
          email: formData.email, // Use email from your form
        };

        // ✅ Submit Elements first to validate form
        const { error: submitError } = await elements.submit();
        if (submitError) throw submitError;

        // ✅ Confirm payment with manual billing details
        const { error: stripeError } = await stripe.confirmPayment({
          elements,
          clientSecret,
          confirmParams: {
            payment_method_data: {
              billing_details: billingDetails, // Provide missing details here
            },
            return_url: `${window.location.origin}/profile`,
          },
          redirect: 'if_required'
        });

        if (stripeError) throw stripeError;
        onSuccess();
      } catch (err) {
        setError(err.message || 'Payment failed');
        onError(err);
      } finally {
        setLoading(false);
      }
    };

    if (!clientSecret) {
      return <p>loading</p>;
    }


    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border rounded-lg p-4 mt-6 mb-4">
          <PaymentElement
            options={{
              layout: "tabs",
              fields: {
                billingDetails: {
                  email: 'never',
                }
              }
            }}
          />
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button
          type="submit"
          className="w-full"
          disabled={!stripe || loading}
        >
          {loading ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
        </Button>
      </form>
    );
  };



  const handleCheckout = async (
    cartItems,
    subtotal,
    tax,
    total,
    taxParcentage,
    shippingChargeAmount,
    selectedPayment,
    selectedAddressId
  ) => {
    console.log('shippingChargeAmount', shippingChargeAmount)
    const checkoutData = {
      items: cartItems.map((item) => ({
        product_id: item.product_id,
        price: Number(item.price),
        subscription_type: item?.subscription_type,
        name: item.title,
      })),
      sub_total: subtotal.toFixed(2),
      shipping_charge: shippingChargeAmount.toFixed(2),
      tax,
      payable_amount: (total + shippingChargeAmount).toFixed(2),
      payment_method: selectedPayment,
      address_id: selectedAddressId,
      tax_percentage: taxParcentage,
    };

    setCheckoutLoading(true)

    try {
      console.log('This is checkoutData', checkoutData);
      const response = await axios.post(
        `${BASE_URL}/user/checkout`, // Replace with your API
        checkoutData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}` // If needed
          },
        }
      );
      console.log('Checkout Response', response)
      setCheckoutLoading(false)
      toast.success('Checkout completed successfully!');
      clearCart()
      router.push("/profile");
      console.log('Checkout Success:', response.data);
    } catch (error) {
      setCheckoutLoading(false)
      console.error('Checkout Error:', error);
      toast.error(error?.response?.data?.message || 'Checkout failed!');
    }
  };


  // ===========Paypal payment getway===========

  const paypalScriptOptions = {
    "client-id": businessData?.paypal?.client_id,
    currency: "USD"
  }


  if (loading) return <LoadingText />;
  if (!userToken) return null; // Avoid flicker before redirect
  console.log('This is clientSecret', clientSecret)
  return (
    loadingTwo ?
      <LoadingText /> :
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Address Form */}
              <form onSubmit={addressToggleButton ? handleUpdateSubmit : handleSubmit}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <h3 className="text-xl font-semibold">{addressToggleButton ? "Update Shipping Address" : "Add Shipping Address"}</h3>
                    </div>
                    <div className="grid gap-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone No</Label>
                          <Input id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <select
                            id="country"
                            value={formData.country}
                            onChange={handleCountryChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                          >
                            <option value="">Select a country</option>
                            {countries.map((country, idx) => (
                              <option key={idx} value={country.name}>{country.name}</option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" value={formData.city} onChange={handleChange} placeholder="City" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="zip">Zip / Postal Code</Label>
                          <Input id="zip" value={formData.zip} onChange={handleChange} placeholder="Zip code" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email ID</Label>
                          <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                        </div>
                      </div>
                      <Button className="w-full bg-yellow-500 -600"
                        type="submit"
                        disabled={loadingThree}

                      >
                        {loadingThree ? 'Saving...' : addressToggleButton ? "Update Address" : 'Save Address'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </form>

              {/* Payment Options */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Payment Options</h3>
                  <RadioGroup value={selectedPayment} onValueChange={handleChangePaymentMethod} className="space-y-3">
                    {paymentGetWay?.map((ele, index) => (
                      ele?.status && (
                        <div key={index} className="flex items-center space-x-3 border rounded-lg p-4">
                          <RadioGroupItem value={ele.name} id={ele.name} />
                          <Label htmlFor={ele.name}>{ele.name}</Label>
                        </div>
                      )
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            <div >
              {addresses?.map((address) => {
                const isSelected = selectedAddressId === address.id;
                return (
                  <div
                    key={address.id}
                    className={`bg-white shadow-md rounded-xl p-4 border transition-all mt-3 cursor-pointer ${isSelected
                      ? 'border-blue-500 ring-2 ring-blue-300'
                      : 'border-gray-100 hover:shadow-lg'
                      }`}
                    onClick={() => handleSelect(address.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-gray-800">{address.name}</h3>
                        <p className="text-sm text-gray-600">{address.email}</p>
                        <p className="text-sm text-gray-600">
                          {address.phone} ({address.country_code})
                        </p>
                        <p className="text-sm text-gray-600">
                          {address.address}, {address.city}, {address.zip}
                        </p>
                        <p className="text-sm text-gray-600">{address.country}</p>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            getAddressById(address?.id);
                          }}
                          className="text-blue-500 hover:text-blue-700"
                          title="Edit"
                        >
                          <Pencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteAddress(address.id);
                            setAddressToggleButton(false)
                          }}
                          className="text-red-500 hover:text-red-700"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="text-sm text-blue-600 font-medium mt-2">{deleteLoading ? "loading..." : "Selected"}</div>
                    )}
                  </div>
                );
              })}
              <div className="mt-3">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6">Checkout</h3>
                    {
                      cartItems?.map((ele, index) => {
                        return (
                          <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg mb-6">
                            <Image
                              src={ele?.image}
                              alt="Product"
                              width={30}
                              height={30}
                              className="rounded-md"
                            />
                            <div>
                              <h3 className="font-medium">{ele?.title}</h3>
                              <p className="font-bold">{ele.subscription_type !== "single" && "12 x"} ${ele?.price}{ele.subscription_type !== "single" && "/"}{ele.subscription_type === "single" ? null : ele?.subscription_type}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Sub Total:</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax {taxParcentage}%</span>
                        <span>${tax}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping Charges</span>
                        <span>${(shippingChargeAmount).toFixed(2)}</span>
                      </div>
                      <>
                        <div className="flex justify-between">
                          <span>Taxable Value:</span>
                          <span>${(total + shippingChargeAmount).toFixed(2)}</span>
                        </div>
                        {appliedCoupon && (
                          <div className="flex justify-between text-green-600">
                            <span>Coupon Applied ({appliedCoupon.code}):</span>
                            <span>- ${(total + shippingChargeAmount - discountedTotal).toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-medium pt-2 border-t">
                          <span>Total Payable:</span>
                          <span>${discountedTotal.toFixed(2)}</span>
                        </div>
                      </>
                      <div className="mb-6 space-y-2">
                        <Label htmlFor="coupon">Enter Coupon Code</Label>
                        <div className="flex gap-2">
                          <Input
                            id="coupon"
                            placeholder="e.g., SAVE10"
                            value={appliedCoupon?.code || ""}
                            onChange={(e) => setAppliedCoupon({ code: e.target.value })}
                            className="flex-1"
                          />
                          <Button
                            onClick={() => {
                              const found = availableCoupons.find(c => c.code.toLowerCase() === appliedCoupon?.code?.toLowerCase());
                              if (found) {
                                setAppliedCoupon(found);
                                toast.success(`Coupon "${found.code}" applied!`);
                              } else {
                                toast.error("Invalid coupon code");
                              }
                            }}
                          >
                            Apply
                          </Button>
                        </div>
                        {appliedCoupon?.description && (
                          <p className="text-green-600 text-sm">✓ {appliedCoupon.description}</p>
                        )}
                      </div>
                      <Button variant="link" onClick={() => setModalOpen(true)}>
                        <span className="text-blue-600">
                          View Coupons
                        </span>
                      </Button>

                      <CouponModal
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                        onApply={applyCoupon}
                        availableCoupons={availableCoupons}
                      />
                    </div>
                    {selectedPayment === "PayPal" && <div className="mt-5" style={{ border: "1px solid #ccc", padding: "10px" }}>
                      <PayPalScriptProvider options={paypalScriptOptions}>
                        <PaypalButtonCom
                          cartItems={cartItems}
                          subtotal={subtotal}
                          tax={tax}
                          total={total}
                          taxPercentage={taxParcentage}
                          shippingChargeAmount={shippingChargeAmount}
                          selectedPayment={selectedPayment}
                          selectedAddressId={selectedAddressId}
                          totalTaxableAmount={(total + shippingChargeAmount).toFixed(2)}
                        />
                      </PayPalScriptProvider>
                    </div>}

                    {selectedPayment === "COD" && <Button className="w-full mt-6 bg-yellow-500 -600" onClick={() => handleCheckout(cartItems, subtotal, tax, total, taxParcentage, shippingChargeAmount, selectedPayment, selectedAddressId)}>

                      {checkoutloading ? 'Please wait...' : ' COD (Cash on Delivery)'}
                    </Button>}
                    {selectedPayment === "Stripe" && businessData?.stripe?.public_key && clientSecret && (
                      <Elements options={options} stripe={stripePromise}>
                        <StripeCheckoutButton
                          amount={discountedTotal * 100}
                          onSuccess={() => handleCheckout(cartItems, subtotal, tax, total, taxParcentage, shippingChargeAmount, selectedPayment, selectedAddressId)}
                          onError={(error) => {
                            toast.error(`Payment failed: ${error.message}`);
                          }}
                        />
                      </Elements>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Order Summary */}

          </div>
        </main >

        <Footer />
      </div >
  )
}

