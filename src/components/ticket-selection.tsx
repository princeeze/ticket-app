"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { PersonalInfo } from "@/components/personal-info";
import { Progress } from "@/components/ui/progress";
import { TicketTypeSelection } from "@/components/ticket-type-selection";
import { formSchema, type FormData } from "@/lib/schema";
import { AttendeeDetails } from "./attendeedetails";
import { useRouter } from "next/navigation";

const STORAGE_KEY = "ticketFormData";

export function TicketSelection() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketType: undefined,
      quantity: "1",
      name: "",
      email: "",
      specialRequest: "",
      profilePhotoUrl: "",
    },
  });

  const { handleSubmit, watch, setValue, setError } = methods;

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
    if (!data.profilePhotoUrl) {
      alert("Please add a profile picture");
      return;
    }
    router.push("/ticket");
  };

  const handleNext = () => {
    const ticketType = watch("ticketType");
    if (currentStep === 1) {
      if (!ticketType) {
        setError("ticketType", {
          type: "required",
          message: "Please select a ticket type",
        });
        return;
      }
    }
    setTimeout(() => {
      setCurrentStep(currentStep + 1);
    }, 100);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-[700px] rounded-[40px] border border-[#0E464F] bg-[#041E23] p-12"
      >
        <div className="relative space-y-3 pb-8">
          <div className="flex items-center justify-between">
            <h1 className="font-jeju text-3xl font-light text-white">
              {currentStep === 1 ? "Ticket Selection" : "Attendee Details"}
            </h1>
            <span className="text-sm text-gray-400">Step {currentStep}/3</span>
          </div>
          <Progress value={currentStep * 33} className="h-1 bg-[#0E464F]" />
        </div>

        <div className="rounded-[32px] border border-[#0E464F] bg-[#08252B] p-6">
          {currentStep === 1 && <TicketTypeSelection />}
          {currentStep === 2 && <AttendeeDetails />}
          {currentStep === 3 && <PersonalInfo />}

          <div className="mt-8 flex items-center justify-between gap-4">
            {currentStep === 1 ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-[#24A0B5] bg-transparent py-5 text-[#26B5C0] hover:bg-[#24A0B5]/5 hover:text-[#24A0B5]"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="w-full border border-[#24A0B5] bg-[#24A0B5] py-5 text-white hover:bg-[#24A0B5]/70"
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
                  className="w-full border-[#24A0B5] bg-transparent py-5 text-[#26B5C0] hover:bg-[#24A0B5]/5 hover:text-[#24A0B5]"
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="w-full border border-[#24A0B5] bg-[#24A0B5] py-5 text-white hover:bg-[#24A0B5]/70"
                >
                  Get My Free Ticket
                </Button>
              </>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
