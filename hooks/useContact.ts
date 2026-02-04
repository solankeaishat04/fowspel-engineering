// hooks/useContact.ts
import { useMutation } from "@tanstack/react-query";
import { ContactInput } from "@/schemas/useContact";

export const useContact = () =>
  useMutation({
    mutationFn: async (data: ContactInput) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      return res.json();
    },
  });
