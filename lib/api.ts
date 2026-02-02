/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/api.ts
import { supabase } from "./supabase";

export async function submitContact(data: any) {
  const { error } = await supabase.from("contacts").insert([data]);
  if (error) throw error;
}
