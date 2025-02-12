"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { PersonalInfo } from "./personal-info";
import { Progress } from "@/components/ui/progress";
import { TicketTypeSelection } from "@/components/ticket-type-selection";
import { formSchema, type FormData } from "@/lib/schema";

const STORAGE_KEY = "ticketFormData";

export function TicketSelection() {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketType: undefined,
      quantity: "1",
      name: "",
      email: "",
    },
  });

  const { handleSubmit, watch, setValue } = methods;

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.entries(parsedData).forEach(([key, value]) => {
        setValue(key as keyof FormData, value as string);
      });
    }
  }, [setValue]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!");
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-screen-sm rounded-[40px] bg-[#041E23] border-[#0E464F] p-12 border "
      >
        <div className="relative space-y-3 pb-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-light font-jeju text-white">
              {currentStep === 1 ? "Ticket Selection" : "Personal Information"}
            </h1>
            <span className="text-sm text-gray-400">Step {currentStep}/3</span>
          </div>
          <Progress value={currentStep * 50} className="bg-[#0E464F] h-1" />
        </div>

        <div
          className="mt-8 border p-6 backdrop-blur-[7px] rounded-3xl border-[0px_2px_2px_2px] border-[#07373F]"
          style={{
            background:
              "radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(10, 12, 17, 0.1)",
          }}
        >
          <h2 className="text-center font-road text-6xl text-[#fafafa]">
            Techember Fest &apos;25
          </h2>
          <p className="mt-3 text-center max-w-72 mx-auto text-[#fafafa]">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-[#fafafa]">
            <span>📍 [Event Location]</span>
            <span className="mx-2">||</span>
            <span>March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <TicketTypeSelection />

        {/* {currentStep === 1 ? <TicketTypeSelection /> : <PersonalInfo />} */}

        <div className="mt-8 flex justify-between gap-4">
          {currentStep === 1 ? (
            <>
              <Button
                type="button"
                variant="outline"
                className="w-full text-[#26B5C0]"
              >
                Cancel
              </Button>
              <Button
                type="button"
                className="w-full bg-[#26B5C0] text-white hover:bg-[#26B5C0]/90"
                onClick={handleNext}
              >
                Next
              </Button>
            </>
          ) : (
            <>
              <Button
                type="button"
                variant="outline"
                className="w-full text-[#26B5C0]"
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                type="submit"
                className="w-full bg-[#26B5C0] text-white hover:bg-[#26B5C0]/90"
              >
                Complete Purchase
              </Button>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
