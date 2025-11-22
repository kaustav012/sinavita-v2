"use client";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import Footer from "../../../components/footer";
import Header from "../../../components/header";
import MigrainSupport from "../../../components/MigrainSupport";
import LoadingText from "../../../components/LoadingText";
import { PRODUCT_FAQ_BY_ID } from "../../../services/product";
import { useParams } from "next/navigation";

export default function FAQPage() {
  const { id } = useParams(); // Get the ID from the URL

  const [loading, setLoading] = useState(true);
  const [productFAQ, setProductFAQ] = useState([])
  useEffect(() => {
    const fetchRideTypes = async () => {
      setLoading(true);
      try {
        const data = await PRODUCT_FAQ_BY_ID(id);
        setProductFAQ(data || []);
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
      <div className="min-h-screen bg-gray-50">
        <Header id={id} />
        {/* Search Section */}
        <section className="bg-gray-100 py-16 mt-6">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold text-center mb-8">
              How Can We Help You
            </h1>
            <div className="max-w-2xl mx-auto">
              <input
                type="search"
                placeholder="Search for answers..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-gray mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg overflow-hidden">
              {
                productFAQ?.faq_category?.map((elem, index) => {
                  return (
                    <div className="p-6" key={index}>
                      <h3 className="text-xl font-semibold mb-6 text-yellow-600 flex items-center">
                        {elem?.name}
                        <ChevronDown className="ml-2 h-5 w-5" />
                      </h3>

                      <Accordion type="single" collapsible>
                        {
                          elem?.faq?.map((val, ind) => {
                            return (
                              <AccordionItem value={`item-${ind + 1}`}>
                                <AccordionTrigger>
                                  {val?.question}
                                </AccordionTrigger>
                                <AccordionContent >
                                  <div dangerouslySetInnerHTML={{ __html: val?.answer }} />
                                </AccordionContent>
                              </AccordionItem>
                            )
                          })
                        }
                      </Accordion>
                    </div>
                  )
                })
              }
            </div>

            {/* <Button
            variant="outline"
            className="w-full justify-between text-xl font-semibold text-yellow-600 p-6"
          >
            How To Use
            <ChevronRight className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="w-full justify-between text-xl font-semibold text-yellow-600 p-6"
          >
            Safety
            <ChevronRight className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            className="w-full justify-between text-xl font-semibold text-yellow-600 p-6"
          >
            Subscription Plan
            <ChevronRight className="h-5 w-5" />
          </Button> */}
          </div>
        </section>

        {/* CTA Section */}
        <MigrainSupport id={id} />
        <Footer id={id} />
      </div>
  );
}
