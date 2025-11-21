// pages/index.tsx
'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import HealthSolutions from '@/components/Home/HealthSolutions';
import WhySinavita from '@/components/Home/WhySinavita';
import ProductRange from '@/components/Home/ProductRange';
import Footer from '@/components/footer';
import LoadingText from '@/components/LoadingText';
import { PRODUCT_LIST } from '../services/product';
import CookieBanner from '@/components/CookieBanner';
import NewsletterModal from '@/components/NewsletterModal';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [newsletterOpen, setNewsletterOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await PRODUCT_LIST();
        setProduct(data || []);
      } catch (error) {
        console.error('Error fetching products', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setNewsletterOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const productGroups = [
    {
      title: "MIGRAINE",
      products: [
        {
          title: "SinaVita® Migraine Support",
          desc: "Advanced formula for targeted relief",
          price: "$37.00",
        },
        {
          title: "SinaVita® Migraine Support",
          desc: "Fast-localized nasal support",
          price: "$37.00",
        },
        {
          title: "SinaVita® Migraine Tablets",
          desc: "Effective daily migraine management",
          price: "$37.00",
        },
        {
          title: "SinaVita® Mesh Mebulizer",
          desc: "For medication and inhalation support",
          price: "$78.00",
        },
      ],
    },
    {
      title: "ALLERGY",
      products: [
        {
          title: "SinaVita® Allergy Support",
          desc: "Advanced formula for targeted relief",
          price: "$37.00",
        },
        {
          title: "SinaVita® Allergy Nasal Spray",
          desc: "Fast-localized nasal support",
          price: "$37.00",
        },
        {
          title: "SinaVita® Allergy Tablets",
          desc: "Effective daily allergy management",
          price: "$37.00",
        },
        {
          title: "SinaVita® Mesh Mebulizer",
          desc: "For medication and inhalation support",
          price: "$78.00",
        },
      ],
    },
    {
      title: "IMMUNE",
      products: [
        {
          title: "SinaVita® Immune Support",
          desc: "Year-round immune resilience",
          price: "$37.00",
        },
        {
          title: "SinaVita® Immune Nasal Spray",
          desc: "Fast-localized support",
          price: "$37.00",
        },
        {
          title: "SinaVita® Immune Tablets",
          desc: "Effective daily immune management",
          price: "$37.00",
        },
        {
          title: "SinaVita® Mesh Mebulizer",
          desc: "For medication and inhalation support",
          price: "$78.00",
        },
      ],
    },
    {
      title: "RESPIRATORY",
      products: [
        {
          title: "SinaVita® Respiratory Support",
          desc: "Advanced formula for easier breathing",
          price: "$37.00",
        },
        {
          title: "SinaVita® Respiratory Nasal Spray",
          desc: "Fast-localized nasal relief",
          price: "$37.00",
        },
        {
          title: "SinaVita® Respiratory Tablets",
          desc: "Daily respiratory management",
          price: "$37.00",
        },
        {
          title: "SinaVita® Mesh Mebulizer",
          desc: "For medication and inhalation support",
          price: "$78.00",
        },
      ],
    },
  ];


  return (
    <>
      <CookieBanner />

      {loading ? (
        <LoadingText />
      ) : (
        <div className="h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <HealthSolutions product={product} />
            <WhySinavita />
            <ProductRange productGroups={productGroups} />
          </main>
          <Footer />
        </div>
      )}

      <NewsletterModal open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    </>
  );
}
