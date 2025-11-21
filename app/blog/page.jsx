'use client'
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { BLOG_API } from "@/services/product";
import LoadingText from "@/components/LoadingText";

export default function BlogPage() {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await BLOG_API();
        setBlogData(data || []);
        setFilteredData(data || []);
        const uniqueCategories = [
          ...new Set(data.map((blog) => blog.category?.name).filter(Boolean)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredData(blogData);
    } else {
      const filtered = blogData.filter((blog) => blog.category?.name === category);
      setFilteredData(filtered);
    }
  };

  return loading ? (
    <LoadingText />
  ) : (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900">Blog</span>
        </div>
      </div>

      {/* Blog Title */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
      </div>

      {/* Blog Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          <button
            onClick={() => handleCategoryClick("All")}
            className={`px-4 py-2 rounded-md ${selectedCategory === "All"
              ? "bg-yellow-500 text-white"
              : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-md ${selectedCategory === category
                ? "bg-yellow-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((blog) => (
            <div key={blog.id} className="border rounded-lg overflow-hidden shadow-sm">
              <Link href={`/blog/blog-details/${blog.id}`} className="aspect-w-16 aspect-h-9 bg-gray-100">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={400}
                  height={225}
                  className="object-cover"
                />
              </Link>
              <div className="px-2 pb-4">
                <Link href={`/blog/blog-details/${blog.id}`}>
                  <h3 className="text-2xl text-dark font-semibold py-2"> {blog.title.length > 80 ? blog.title.slice(0, 77) + "..." : blog.title}</h3>
                </Link>
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{blog.author || "Author"}</span>
                  <span>
                    {new Date(blog.created_at).toLocaleDateString("en-GB")}
                  </span>
                </div>
                <p
                  className="text-gray-600 text-sm line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: blog.description.slice(0, 150) + "...",
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
