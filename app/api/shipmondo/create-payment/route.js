// /app/api/shipmondo/create-payment/route.js
import { NextResponse } from "next/server";
import { Buffer } from "buffer";

export async function POST(request) {
  try {
    const { amount, order_id, return_url, cancel_url } = await request.json();

    if (!amount || !order_id || !return_url || !cancel_url) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const shipmondoRes = await fetch(
      "https://sandbox.shipmondo.com/api/public/v3",
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `${process.env.SHIPMONDO_USER}:${process.env.SHIPMONDO_KEY}`
            ).toString("base64"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency: "DKK",
          reference: order_id,
          success_url: return_url,
          cancel_url: cancel_url,
        }),
      }
    );

    if (!shipmondoRes.ok) {
      const errorData = await shipmondoRes.json();
      return NextResponse.json(
        { error: errorData.message || "Shipmondo API error" },
        { status: shipmondoRes.status }
      );
    }

    const data = await shipmondoRes.json();
    return NextResponse.json({ redirect_url: data.url });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create payment link" },
      { status: 500 }
    );
  }
}