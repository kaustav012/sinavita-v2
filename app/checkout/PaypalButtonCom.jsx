// ✅ CORRECT EXAMPLE

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

const PaypalButtonCom = ({
    cartItems,
    subtotal,
    tax,
    total,
    taxPercentage,
    shippingChargeAmount,
    selectedPayment,
    selectedAddressId,
    totalTaxableAmount
}) => {
    const [{ isPending }] = usePayPalScriptReducer();

    if (isPending) return <p>Loading PayPal...</p>;


    const handleCheckout = async (
        cartItems,
        subtotal,
        tax,
        total,
        shippingChargeAmount,
        selectedPayment,
        selectedAddressId,
        taxPercentage,
    ) => {
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
            tax_percentage: taxPercentage,
        };

        setCheckoutLoading(true)

        try {
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




    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: totalTaxableAmount, // your dynamic amount
                            },
                        },
                    ],
                });
            }}
            onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                    handleCheckout(
                        cartItems,
                        subtotal,
                        tax,
                        total,
                        shippingChargeAmount,
                        selectedPayment,
                        selectedAddressId,
                        taxPercentage,
                    )
                });
            }}
        />
    );
};

// ✅ This must be outside your component or any block
export default PaypalButtonCom;
