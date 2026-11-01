import { notFound } from "next/navigation";

// Unknown paths under a locale render that locale's 404 page.
export default function CatchAll() {
  notFound();
}
