// hooks/useContact.ts
import { useMutation } from "@tanstack/react-query";
import { submitContact } from "@/lib/api";

export const useContact = () =>
  useMutation({
    mutationFn: submitContact,
  });
