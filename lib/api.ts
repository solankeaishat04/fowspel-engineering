// // lib/api.ts
// // import { supabase } from "./supabase";
// import { ContactInput } from "@/schemas/useContact";

// export async function submitContact(data: ContactInput) {
//   const { error } = await supabase.from("contacts").insert([data]);

//   if (error) {
//     console.error("Supabase Insert Error:", error);
//     throw new Error(error.message);
//   }

//   return true;
// }
