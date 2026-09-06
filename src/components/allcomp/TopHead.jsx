"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaUserCircle , FaShoppingCart  } from "react-icons/fa";
import FragranceMenu from "./MenuCompo";
import CartAside from "../dynamic/CartAside";
import { useCart } from "@/context/CartContext";

export default function TopHead() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);


   const { cartItems } = useCart();
  const pathname = usePathname();
  // const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Announcement Bar */}
      {visible && (
        <div className="w-full bg-black text-white text-xs hidden md:block relative">
          <div className="container mx-auto px-4 py-1 text-center">
            Free delivery on orders above ₹2599 • Wear the vibe, own the moment
          </div>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}

      {/* Header */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300
          ${visible ? "md:top-6" : "top-0"}
          ${pathname === "/" ? "bg-black/0" : "bg-transparent"}
          ${isScrolled ? "backdrop-blur-sm shadow-md bg-white/40" : ""}
        `}
      >
        <div className="flex items-center justify-between px-4 md:px-10 py-2 text-white">
          <div className="flex gap-2 items-center ">
            <HiOutlineBars3BottomLeft onClick={() => setOpen(true)} className={`${isScrolled ? "text-black" : ""} ${pathname === "/" ? "" :  "text-black"} text-2xl md:text-3xl cursor-pointer`} />
            <h2 className={`  ${isScrolled ? " text-black" : ""} ${pathname === "/" ? "" :  "text-black"} desc-font tracking-widest md:text-xl text-xl `}>Menu</h2>
          </div>

          <Link href="/">
            <h1 className={`  ${isScrolled ? " text-black" : ""} ${pathname === "/" ? "" :  "text-black"} desc-font tracking-widest md:text-4xl text-3xl `}>OPAL MORSEL</h1>

          </Link>


          <div className="flex items-center gap-4 text-md">
            <FaUserCircle className={`${isScrolled ? "text-black" : ""} ${pathname === "/" ? "" :  "text-black"}`} />
       
         
         {/* Cart */}
            <div
              className="relative cursor-pointer"
              onClick={() => setIsCartOpen(true)}
            >
              <FaShoppingCart size={18} className={`${isScrolled ? "text-black" : ""} ${pathname === "/" ? "" :  "text-black"}`} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </div>

            {isCartOpen && <CartAside onClose={() => setIsCartOpen(false)} />}
           </div>

        </div>
      </header>
      <FragranceMenu
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
