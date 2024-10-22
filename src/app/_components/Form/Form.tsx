"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IFormProps {
  cardNo: string;
  email: string;
  address: string;
  phone: string;
}
const FormPage = () => {
  const notify = () => {
    reset({
      cardNo: "",
      email: "",
      address: "",
      phone: "",
    });
    toast("Purchase Complete!");
  };
  const { register, reset, resetField } = useForm<IFormProps>();
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-start">
      <ToastContainer />
      <div className="sticky top-0 z-50 flex h-[200px] w-full items-center bg-[#1f2128]">
        <span className="ml-[100px] text-[30px] text-[#e17a06]">
          PIXEL INVENTORY
        </span>
      </div>
      <div className="mt-10 flex w-[350px] flex-col items-center justify-center gap-y-4 rounded-[8px] bg-[#000000] p-8">
        <div className="flex h-full w-full flex-col items-center gap-4">
          <h1 className="pb-2 pt-4 text-2xl font-bold text-white">
            Billing Info{" "}
          </h1>
          <input
            className="h-[40px] w-full rounded-[5px] border-[1px] border-black bg-white p-2"
            placeholder="Card No"
            {...register("cardNo")}
          />
          <input
            className="h-[40px] w-full rounded-[5px] border-[1px] border-black bg-white p-2"
            placeholder="Billing Email"
            {...register("email")}
          />
          <input
            className="h-[40px] w-full rounded-[5px] border-[1px] border-black bg-white p-2"
            placeholder="Billing Address"
            {...register("address")}
          />
          <input
            className="h-[40px] w-full rounded-[5px] border-[1px] border-black bg-white p-2"
            placeholder="Billing Phone"
            {...register("phone")}
          />

          <button
            className="h-[40px] w-full rounded-[5px] border-[1px] bg-[#ff8605] text-[15px] font-semibold text-white"
            onClick={notify}
          >
            add to cart
          </button>
          <Link href={"/"}>
            <span className="text-white underline">Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
