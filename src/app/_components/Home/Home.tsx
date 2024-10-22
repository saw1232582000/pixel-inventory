"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col gap-y-10 pb-[50px]">
      <div className="sticky top-0 z-50 flex h-[200px] w-full items-center bg-[#1f2128]">
        <span className="ml-[100px] text-[30px] text-[#e17a06]">
          PIXEL INVENTORY
        </span>
      </div>
      <div className="flex w-full justify-center">
        <div
          className="flex h-[600px] w-[70%] items-center justify-center bg-blue-400"
          style={{
            background: `url("/background.jpg")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <button className="hover:scale-x-110 hover:scale-y-110 transform duration-500 h-[50px] rounded-[5px] bg-[#000000] p-[10px] text-[20px] text-[#d56303]" onClick={()=>router.push('https://www.youtube.com/live/SDzfa5zZrkA')}>
            WATCH STREAM
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-[15px] flex w-[70%] flex-col items-center">
          <span className="text-[40px] text-white">NEW GAMES</span>
          <div className="h-[8px] w-[200px] bg-[#ff8704]"></div>
        </div>
        <div className="flex w-[70%] gap-x-5">
          <div className="flex w-full flex-col items-center justify-center">
            <span className="mb-[10px] text-[20px] text-[#ff8704]">
              ECLIPSE REALM
            </span>
            <div
              className="h-[600px] w-full rounded-[10px] bg-yellow-200"
              style={{
                background: `url("/eclipse_worriors.jpg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <span className="mb-[10px] text-[20px] text-[#ff8704]">
              ECLIPSE REALM
            </span>
            <div
              className="h-[600px] w-full rounded-[10px] bg-yellow-200"
              style={{
                background: `url("/cypher_dominion.jpg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-[15px] flex w-[70%] flex-col items-center">
          <span className="text-[40px] text-white">UPCOMING TOURNAMENTS</span>
          <div className="h-[8px] w-[200px] bg-[#ff8704]"></div>
        </div>
        <div className="flex w-[70%] gap-x-14">
          <div className="flex w-full flex-col items-center justify-center">
            <span className="mb-[10px] text-[20px] text-[#ff8704]">
              TOURNAMENT REGISTRATION
            </span>
            <div className="flex w-full">
              <span className="mb-[10px] text-[16px] text-white">
                Register for the PSBA Tournament today!
              </span>
            </div>
            <div
              className="h-[700px] w-full rounded-[10px] bg-yellow-200"
              style={{
                background: `url("/mlbb_registration.jpeg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <span className="mb-[10px] text-[20px] text-[#ff8704]">
              TOURNAMENT AUDIENCE
            </span>
            <div className="flex w-full">
              <span className="mb-[10px] text-[16px] text-white">
                Be a part of the audience and watch live on October 25!
              </span>
            </div>
            <div
              className="h-[700px] w-full rounded-[10px] bg-yellow-200"
              style={{
                background: `url("/mlbb_audience.jpeg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="z-0 flex w-full justify-center">
        <div className="relative flex h-[500px] w-[70%] bg-[#141419] pb-[30px]">
          <div className="flex w-full flex-col items-center justify-end gap-y-5">
            <Image
              src="/headset-Photoroom.png"
              height={256}
              width={256}
              className="h-[300px] w-auto object-center"
              alt="thank you for your order"
            />

            <span className="text-[30px] text-[#ea7609]">
              Gaming Headset-$109
            </span>
            <button
              className="h-[50px] w-[200px] rounded-[5px] border-[1px] bg-[#ff8605] text-[25px] font-semibold text-white"
              onClick={() => router.push("/Checkout")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="relative flex h-[500px] w-[70%] bg-[#141419] pb-[30px]">
          <div className="flex w-full flex-col items-center justify-end gap-y-5">
            <Image
              src="/controller-Photoroom.png"
              height={256}
              width={256}
              className="mt-[20px] h-[80%] w-auto bg-transparent object-center"
              alt="thank you for your order"
            />
            <span className="text-[30px] text-[#ea7609]">
              Gaming Controller-$109
            </span>
            <button
              className="h-[50px] w-[200px] rounded-[5px] border-[1px] bg-[#ff8605] text-[25px] font-semibold text-white"
              onClick={() => router.push("/Checkout")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-[15px] flex w-[70%] flex-col items-center">
          <span className="text-[40px] text-white">Shopping Cart</span>
          <div className="h-[8px] w-[200px] bg-[#ff8704]"></div>
        </div>
        <div className="flex w-[70%] flex-col text-white">
          <span>Gaming Controller- $189 x 1</span>
          <span>Gaming Headset- $109 x 1</span>
          <div className="mt-[10px] flex w-full gap-x-2">
            <button className="rounded-[5px] bg-[#000000] p-[12px] text-[20px] text-[#d56303]">
              RESET CART
            </button>
            <button className="rounded-[5px] bg-[#000000] p-[12px] text-[20px] text-[#d56303]">
              Buy
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
