'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { BLOG_API, BLOG_BY_ID } from "@/services/product"
import LoadingText from "@/components/LoadingText"
import parse from 'html-react-parser' // to safely render HTML from API

export default function BlogDetails() {
  const { id } = useParams(); // Get the blog ID from the URL
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [blogDetails, setBlogDetails] = useState(null);
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const fetchBlogDetails = async () => {
      setLoading(true);
      try {
        const data = await BLOG_BY_ID(id);
        setBlogDetails(data);
      } catch (error) {
        console.error("Error fetching blog details", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlogDetails();
  }, [id]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await BLOG_API();
        setBlogData(data || []);
        const uniqueCategories = [
          ...new Set(data.map((blog) => blog.category?.name).filter(Boolean)),
        ];
        setCategories(uniqueCategories);

        // Set current blog from the list if id is present
        if (id && data.length) {
          const selected = data.find((b) => b.id.toString() === id);
          setCurrentBlog(selected || null);
        }
      } catch (error) {
        console.error("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  const relatedBlogs = currentBlog
    ? blogData.filter(
      (blog) =>
        blog.category?.name === currentBlog.category?.name &&
        blog.id !== currentBlog.id
    )
    : [];
  if (loading || !blogDetails) return <LoadingText />;

  const {
    title,
    description,
    author = "Admin",
    image,
    tags,
    slug,
  } = blogDetails;

  const parsedTags = tags ? tags.replace(/"/g, '').split(',') : [];


  const shareUrl = `https://yourdomain.com/blog/${slug || id}`;
  const titleBlog = encodeURIComponent(title || "Check out this blog!");

  const handleShare = (platform) => {
    let url = "";

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${titleBlog}`;
        break;
      case "instagram":
        alert("Instagram does not support direct web sharing. Copy the URL instead.");
        return;
      default:
        return;
    }

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Blog Content */}
          <article className="lg:col-span-9">
            {/* Header */}
            <div className="space-y-6 mb-12">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {title}
                </h1>
                <p className="text-gray-600 max-w-2xl">
                  {/* Optional short description here */}
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Admin</span>
                  <span>•</span>
                  <span>5 min read</span>
                  <span>•</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            {image && (
              <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
                <Image
                  src={image}
                  alt="Blog cover"
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-12">
              {parse(description || "<p>No content found.</p>")}
            </div>

            {/* Tags */}
            {parsedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {parsedTags.map((tag, index) => (
                  <Button key={index} variant="outline" size="sm" className="rounded-full">
                    {tag.trim()}
                  </Button>
                ))}
              </div>
            )}

            {/* Engagement */}
            <Card className="mb-12">
              <CardContent className="flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" onClick={() => handleShare("facebook")}>
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleShare("twitter")}>
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleShare("instagram")}>
                    <Instagram className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </article>

          {/* Right Side - Related Posts */}
          <aside className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Posts</h3>
            <div className="space-y-6">
              {relatedBlogs?.map((blog, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative pb-4 rounded-lg overflow-hidden">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={400}
                        height={135}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-semibold text-md mb-1">
                      {blog.title.length > 80 ? blog.title.slice(0, 77) + "..." : blog.title}
                    </h3>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{blog.author || "Author"}</span>
                      <span>{new Date(blog.created_at).toLocaleDateString("en-GB")}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  )
}
