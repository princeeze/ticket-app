import { useFormContext } from "react-hook-form";
import type { FormData } from "@/lib/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function TicketTypeSelection() {
  const ticketOptions = [
    {
      type: "regular",
      price: "Free",
      label: "REGULAR ACCESS",
      available: "20/52",
    },
    {
      type: "vip1",
      price: "$150",
      label: "VIP ACCESS",
      available: "20/52",
    },
    {
      type: "vip2",
      price: "$150",
      label: "VVIP ACCESS",
      available: "20/52",
    },
  ];

  const { control, watch } = useFormContext<FormData>();
  const selectedTicketType = watch("ticketType");

  return (
    <div className="mt-8 space-y-8">
      <div
        className="rounded-3xl border border-[#07373F] border-[0px_2px_2px_2px] p-4 backdrop-blur-[7px] sm:p-6"
        style={{
          background:
            "radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, rgba(10, 12, 17, 0.1)",
        }}
      >
        <h2 className="text-center font-road text-5xl text-[#fafafa] sm:text-6xl">
          Techember Fest &apos;25
        </h2>
        <p className="mx-auto mt-3 max-w-72 text-center text-[#fafafa]">
          Join us for an unforgettable experience at [Event Name]! Secure your
          spot now.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-[#fafafa]">
          <span>📍 [Event Location]</span>
          <span className="mx-2">||</span>
          <span>March 15, 2025 | 7:00 PM</span>
        </div>
      </div>
      <div>
        <h3 className="mb-4 border-t-2 border-[#07373F] pt-8 text-white">
          Select Ticket Type:
        </h3>
        <FormField
          control={control}
          name="ticketType"
          render={({ field }) => (
            <FormItem>
              <div className="grid grid-cols-1 gap-4 rounded-3xl border border-[#07373F] bg-[#052228] p-4 sm:grid-cols-3">
                {ticketOptions.map((ticket) => (
                  <button
                    key={ticket.type}
                    type="button"
                    onClick={() => field.onChange(ticket.type)}
                    className={`rounded-2xl border-2 border-[#197686] p-3 text-left transition-colors ${
                      selectedTicketType === ticket.type
                        ? "bg-[#12464E] text-white"
                        : "text-white hover:bg-[#12464E]/40"
                    }`}
                  >
                    <div className="text-2xl">{ticket.price}</div>
                    <div className="mt-2 text-sm">{ticket.label}</div>
                    <div className="mt-1 text-xs opacity-60">
                      {ticket.available}
                    </div>
                  </button>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name="quantity"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Number of Tickets</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full border-[#07373F] bg-[#07373F]/0 text-white focus-visible:outline-[#07373F]">
                <SelectValue placeholder={1} />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
