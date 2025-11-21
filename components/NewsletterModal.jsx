'use client';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import Image from 'next/image';
import axios from 'axios';
import { BASE_URL } from '../services/product';

export default function NewsletterModal({ open, onOpenChange }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [newsletterData, setNewsletterData] = useState(null);
  const [error, setError] = useState('');
  useEffect(() => {
    if (open) {
      axios
        .get(`${BASE_URL}/newsletter-data`)
        .then((res) => {
          if (res.data.success) {
            setNewsletterData(res.data.data);
          }
        })
        .catch((err) => {
          console.error('Failed to fetch newsletter data:', err);
        });
    }
  }, [open]);

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${BASE_URL}/newsletter`, { email });
    setSubmitted(true);
    setTimeout(() => {
      onOpenChange(false);
    }, 2000); // 2 second delay
  } catch (error) {
    setError(error);
    console.error('Newsletter submission failed:', error);
  }
};


  const slides = Array.isArray(newsletterData?.newsletter_images)
    ? newsletterData.newsletter_images
    : newsletterData?.newsletter_image
    ? [newsletterData.newsletter_image]
    : [];

  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-full rounded-2xl shadow-lg p-0 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
          {/* Left: Image / Carousel */}
          {slides.length > 0 && (
            <div className="relative w-full h-64 lg:h-[480px] bg-gray-100">
              <Image
                src={slides[current]}
                alt={`Slide ${current + 1}`}
                fill
                className="object-cover"
              />
              {slides.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/75 hover:bg-white rounded-full p-2 shadow transition"
                  >
                    ‹
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/75 hover:bg-white rounded-full p-2 shadow transition"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === current ? 'bg-blue-600' : 'bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Right: Content */}
          <div className="p-8 bg-white flex flex-col justify-center">
            <DialogHeader className="p-0">
              <DialogTitle className="text-3xl mb-4 font-bold text-gray-800">
                {newsletterData?.newsletter_title}
              </DialogTitle>
              <DialogDescription
                className="mt-4 text-gray-600 leading-relaxed prose prose-sm"
                dangerouslySetInnerHTML={{
                  __html:
                    newsletterData?.newsletter_desc ||
                    'Subscribe to our list and be updated on what’s hot & new.'
                }}
              />
            </DialogHeader>

            {submitted ? (
              <div className="mt-8 text-center">
                <p className="text-lg font-medium text-green-600">
                  Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <Input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
                <DialogFooter className="p-0">
                  <div className="flex flex-col sm:flex-row sm:justify-end sm:space-x-4 space-y-2 sm:space-y-0">
                    <Button type="submit" className="w-full sm:w-auto">
                      <span className='text-lg'>Subscribe</span>
                    </Button>
                  </div>
                </DialogFooter>
              </form>
            )}
             {
              !submitted && error && (
                <div className="mt-8 text-center">
                <p className="text-lg font-medium text-red-600">
                  {error.response.data.message}!
                </p>
              </div>
              )
            }
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
