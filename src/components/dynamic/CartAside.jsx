// components/CartAside.jsx
"use client";
import { useEffect } from "react";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { BiSolidCoupon } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { useCart } from "@/context/CartContext";

export default function CartAside({ onClose }) {
    const { cartItems, removeFromCart, updateQuantity } = useCart();
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const freeGiftTarget = 999;
    const progress = Math.min((total / freeGiftTarget) * 100, 100);
    const remaining = Math.max(freeGiftTarget - total, 0);

    return (
        <>
            <div
                className="fixed inset-0 bg-[#00000060] bg-opacity-40 z-40"
                onClick={onClose}
            />

            <aside className="fixed asidcar overflow-hidden top-0 right-0 w-full md:w-[420px] h-screen bg-white shadow-2xl z-50 flex flex-col">

                {/* Header */}
                <div className="flex justify-between border-[#0b1c2c] bg-[#0b1c2c] rounded-b-2xl items-center p-4 border-b">
                    <div className="flex items-center gap-3">
                        <CiShoppingCart />    <h2 className="text-lg desc-font text-[#fff] font-semibold">Your cart - {cartItems.length} items</h2>
                    </div>
                    <button onClick={onClose} className="text-xl text-[#fff] font-bold">×</button>
                </div>

                {/* FREE GIFT PROGRESS BAR */}
                <div className="p-4 space-y-2 border-b">
                <div className="flex items-center justify-between">    <p className="text-xs font-medium text-green-600">
                        Get a free gift by adding items worth ₹{freeGiftTarget}
                    </p> 
                       <p className="text-xs text-gray-500">
                        ₹{remaining} more
                    </p></div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                            className="h-2 bg-green-600 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                 
                </div>

                {/* CART ITEMS */}
                {/* CART ITEMS + OFFERS + COUPONS SCROLLABLE */}
                <div className="all-in-one flex-1 overflow-y-auto">

                    {/* CART ITEMS */}
                    <div className="p-4 space-y-4">
                        {cartItems.length === 0 ? (
                            <p className="text-gray-500 text-center">Your cart is empty</p>
                        ) : (
                            cartItems.map((item) => (
                                <div key={item.id} className="flex items-start gap-4 border-b pb-4">
                                    <div className="w-20 h-20 relative">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>

                                    <div className="flex-1 text-[#0b1c2c]">
                                        <p className="font-semibold text-xl desc-font">{item.name}</p>

                                        <div className="flex items-center justify-between mt-2">
                                            <p className="font-bold text-xl text-black desc-font">
                                                ₹{item.price * item.quantity}
                                            </p>
                                            <div className="flex items-center gap-2 border px-2 py-1 ">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, +1)}>+</button>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-xl text-[#0b1c2c7e] font-bold"
                                    >
                                        <MdOutlineDelete />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    {/* COUPONS */}
                    <div className="p-4 border-t space-y-3 text-[#0b1c2c]">
                        <h3 className="font-semibold text-xl text-[#0b1c2c] desc-font">Offers & Rewards</h3>

                        <button className="w-full border rounded-xl px-4 py-2 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <BiSolidCoupon /> <span>Coupons</span>
                            </div>
                            <FiChevronRight className="text-lg" />
                        </button>
                    </div>

                    {/* SPECIAL OFFERS */}
                    <div className="p-4 border-t space-y-2 text-[#0b1c2c]">
                        <h3 className="font-semibold text-xl text-[#0b1c2c] desc-font">Special Offers For You</h3>

                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                            {[1, 2, 3, 4, 5].map((offer, i) => (
                                <div key={i} className="min-w-[220px] flex gap-3 items-center border p-3 rounded-lg bg-white">
                                    <div className="w-14 h-14 relative">
                                        <Image
                                            src="/product.webp"
                                            alt="Offer"
                                            fill
                                            className="rounded-md object-cover"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-sm desc-font font-medium">Offer {i + 1}</p>
                                        <p className="font-semibold desc-font text-sm">₹299</p>
                                    </div>

                                    <button className="border px-2 py-1 desc-font rounded text-sm">+ ADD</button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>



                {/* FOOTER */}
                <div className="px-4 py-2 border-t space-y-2 desc-font text-[#0b1c2c]">
                    <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>₹{total}</span>
                    </div>

                    <button className="bg-black text-white w-full py-3 rounded-md">
                        Checkout
                    </button>

                    <button
                        onClick={onClose}
                        className="border w-full py-3 rounded-md"
                    >
                        Continue Shopping
                    </button>
                </div>

            </aside>
        </>
    );
}
