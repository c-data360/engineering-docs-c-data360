import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = { title: "Engineering Docs" };

export default function RootPage() {
  redirect("/fr");
}
