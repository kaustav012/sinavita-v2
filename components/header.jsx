'use client'
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../services/context/CartContext";
import { useBusiness } from "../services/context/BusinessContext";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../services/context/AuthContext";
import { useEffect } from "react";
import LanguagesIcon from "../app/icons/LanguagesIcon";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";
const Header = ({ productDetails, id }) => {
  const { cartItems } = useCart();
  const { userToken, userData } = useAuth();
  const { businessData } = useBusiness()

  useEffect(() => {
    const addTranslateScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addTranslateScript();
  }, []);

  const handleLanguageChange = (lang) => {
    if (!lang) return;

    const cookieLang = `googtrans=/en/${lang}`;
    document.cookie = cookieLang;
    localStorage.setItem("googtrans", cookieLang);
    location.reload();
  };



  return (
    <>
      <div
        container
        direction="row"
        alignItems="center"
        className="nav-container bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
      >
        <div className="brand" item>
          <Link href="/" className="">
            <Image src={businessData?.sections?.logo} width={150} height={150} alt="sinavita" loading="lazy" />
            <p className="text-sm hidden sm:block">
              {businessData?.sections?.business_tagline}
            </p>
          </Link>
        </div>

        <div className="nav-link-wrapper hidden sm:block" item>
          <Link href="/" className="shop-link">
            shop
          </Link>
          <Link href={id ? `/product-support/${id}` : "#"} className="shop-link">
            about
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <div className="relative">
            <Link href="/cart">
              <Button
                className="cart-button"
                style={{
                  padding: "14px 35px",
                  border: "2px solid #fff",
                  borderRadius: "26px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  lineHeight: "110%",
                  textTransform: "uppercase",
                }}
              >
                Cart
              </Button>
            </Link>

            {/* Quantity Badge */}
            {cartItems.length > 0 && (
              <span className="absolute -top-5 -right-2 bg-red-500 text-white text-xs font-bold px-4 py-3 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
          {/* User Profile or Login */}
          {userToken ? (
            <Link href="/profile" className="flex items-center gap-2">
              <Avatar
                alt="Valk Technologies"
                src="https://cdn-icons-png.flaticon.com/128/847/847969.png"
                sx={{ width: 42, height: 42 }}
              />
              <p className="text-sm font-medium">{userData?.name}</p>
            </Link>
          ) : (
            <Link href="/login">
              <Button
                variant="outlined"
                style={{
                  padding: "14px 35px",
                  border: "2px solid #fff",
                  borderRadius: "26px",
                  backgroundColor: "transparent",
                  color: "#fff",
                  lineHeight: "110%",
                  textTransform: "uppercase",
                }}
              >
                Login
              </Button>
            </Link>
          )}
          {/* Hidden Google Translate element */}
          <div id="google_translate_element" style={{ display: "none" }}></div>

          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="w-[70px]">
              <SelectValue placeholder={<LanguagesIcon />} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="no">Norwegian</SelectItem>
              <SelectItem value="sv">Swedish</SelectItem>
            </SelectContent>
          </Select>


        </div>
      </div>

    </>
  );
};

export default Header;
