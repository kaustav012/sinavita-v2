"use client";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { motion } from "framer-motion";
import { Input } from "../../../components/ui/input";
import Link from "next/link";
import MigrainSupport from "../../../components/MigrainSupport";
import Content from "./components/Content";
import { useParams } from "next/navigation";
import { PRODUCT_SUPPORT_BY_ID } from "../../../services/product";
import { useEffect, useState } from "react";
import LoadingText from "../../../components/LoadingText";
export default function Page() {
  const { id } = useParams(); // Get the ID from the URL

  const [loading, setLoading] = useState(true);
  const [productSupport, setProductSupport] = useState([])
  useEffect(() => {
    const fetchRideTypes = async () => {
      setLoading(true);
      try {
        const data = await PRODUCT_SUPPORT_BY_ID(id);
        setProductSupport(data || []);
      } catch (error) {
        console.error("Error fetching ride types", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRideTypes();
  }, [id]);
  return (
    loading ?
      <LoadingText /> :
      <div>
        <Header id={id} />
        <Content productSupport={productSupport} />
        <Footer productSupport={productSupport} id={id} />
      </div>
  );
}
