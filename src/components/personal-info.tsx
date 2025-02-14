"use client";
import { FormData } from "@/lib/schema";
import { useState, useEffect } from "react";
import ticketbg from "@/assets/ticketbg.svg";
import ticketinfo from "@/assets/ticketinfo.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function PersonalInfo() {
  const [values, setValues] = useState<FormData>();

  const router = useRouter();

  const handleNext = () => {
    router.push("/");
  };

  const handleCancel = () => {
    router.push("/");
  };

  useEffect(() => {
    const stored = localStorage.getItem("ticketFormData");
    const storedValues: FormData | null = stored ? JSON.parse(stored) : null;
    if (storedValues) {
      setValues(storedValues);
    }
  }, []);

  const { ticketType, quantity, name, email, profilePhotoUrl, specialRequest } =
    values || {};
  console.log(values);

  return (
    <div className="mx-auto max-w-[700px] space-y-10 rounded-[40px] border border-[#0E464F] bg-[#041E23] p-4 py-12 sm:p-12 sm:py-24 md:space-y-20">
      <div className="space-y-2 text-center">
        <h3 className="text-3xl font-bold text-white">
          Your Ticket is Booked!
        </h3>
        <p className="mt-2 text-white">
          Check your email for a copy or you can <b>download</b>
        </p>
      </div>
      <div className="relative flex w-full items-center justify-center">
        <Image src={ticketbg} alt="Ticket" className="min-w-[300px]" />
        <div className="absolute left-1/2 top-1 w-[260px] -translate-x-1/2 p-4">
          <div className="flex flex-col gap-4 rounded-2xl border border-[#24A0B5] p-3">
            <div>
              <h2 className="text-center font-road text-4xl text-[#fafafa]">
                Techember Fest &apos;25
              </h2>
              <div className="mt-3 flex flex-col items-center justify-center gap-2 text-[10px] text-[#fafafa]">
                <span>📍 04 Rumens road, Ikoyi, Lagos</span>
                <span>📅 March 15, 2025 | 7:00 PM</span>
              </div>
            </div>
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-3xl border-4 border-[#24A0B5]/50">
              {profilePhotoUrl && (
                <Image
                  src={profilePhotoUrl}
                  width={144}
                  height={144}
                  alt="Profile"
                  className="cover h-full w-full"
                />
              )}
            </div>
            <div className="relative">
              <Image src={ticketinfo} alt="Ticket Info" />
              <div className="absolute top-0 mt-6 grid w-full grid-cols-2 gap-x-4 gap-y-7 px-3 text-xs font-semibold text-white">
                <p>{name} Name</p>
                <p>{email}Email</p>
                <p>{ticketType} Type</p>
                <p>{quantity} Quantity</p>
                <p>{specialRequest} Special</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-4">
        <Button
          type="button"
          variant="outline"
          className="w-full border-[#24A0B5] bg-transparent py-5 text-[#26B5C0] hover:bg-[#24A0B5]/5 hover:text-[#24A0B5]"
          onClick={handleCancel}
        >
          Book Anothter Ticket
        </Button>
        <Button
          type="button"
          className="w-full border border-[#24A0B5] bg-[#24A0B5] py-5 text-white hover:bg-[#24A0B5]/70"
          onClick={handleNext}
        >
          Download Ticket
        </Button>
      </div>
    </div>
  );
}
