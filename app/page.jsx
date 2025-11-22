// pages/index.tsx
'use client';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import HealthSolutions from '../components/Home/HealthSolutions';
import WhySinavita from '../components/Home/WhySinavita';
import ProductRange from '../components/Home/ProductRange';
import Footer from '../components/footer';
import LoadingText from '../components/LoadingText';
import { PRODUCT_LIST, PRODUCT_SINGLE_LIST } from '../services/product';
import CookieBanner from '../components/CookieBanner';
import NewsletterModal from '../components/NewsletterModal';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [productSingle, setProductSIngle] = useState([]);
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
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await PRODUCT_SINGLE_LIST();
        setProductSIngle(data || []);
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
            {productSingle?.length > 0 && < ProductRange productGroups={productSingle} />}
          </main>
          <Footer />
        </div>
      )}

      <NewsletterModal open={newsletterOpen} onOpenChange={setNewsletterOpen} />
    </>
  );
}
