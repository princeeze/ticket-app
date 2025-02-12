import { z } from "zod";

export const formSchema = z.object({
  ticketType: z.enum(["regular", "vip1", "vip2"], {
    required_error: "Please select a ticket type",
  }),
  quantity: z.string().min(1).max(5),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

export type FormData = z.infer<typeof formSchema>;
