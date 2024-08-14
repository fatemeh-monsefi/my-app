import { notFound } from "next/navigation";

export default function page({ params }) {
  if (params.id === "101010") {
    notFound();
  }

  return <div>Details about product with the ID: {params.id}</div>;
}
