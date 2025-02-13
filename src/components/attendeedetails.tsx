import { useFormContext } from "react-hook-form";
import type { FormData } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImageUpload } from "@/components/image-upload";

export function AttendeeDetails() {
  const { control } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <div className="mb-8 rounded-3xl border border-[#07373F] bg-[#052228] p-6">
        <h3 className="mb-4 text-white">Upload Profile Photo</h3>
        <ImageUpload />
      </div>

      <div className="space-y-4 border-t-2 border-[#07373F] pt-5">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light text-white">
                Enter your name
              </FormLabel>
              <Input
                {...field}
                className="rounded-xl border-[#07373F] bg-[#07373F]/0 p-6 text-white focus-visible:outline-[#07373F]"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light text-white">
                Enter your email *
              </FormLabel>
              <Input
                {...field}
                type="email"
                className="rounded-xl border-[#07373F] bg-[#07373F]/0 p-6 text-white focus-visible:outline-[#07373F]"
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="specialRequest"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-light text-white">
                Special request?
              </FormLabel>
              <Textarea
                {...field}
                placeholder="Textarea"
                className="rounded-xl border-[#07373F] bg-[#07373F]/0 text-white focus-visible:outline-[#07373F]"
              />
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
