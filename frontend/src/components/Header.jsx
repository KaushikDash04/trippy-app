import { Plane } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center mb-8">
      <Plane className="inline-block text-sky-500 h-14 w-14 mb-3" />
      <h1 className="text-4xl sm:text-5xl font-bold text-sky-700 tracking-tight">
        Trippy - AI Trip Planner
      </h1>
      <p className="text-gray-600 mt-2 text-lg">
        Tell me where you want to go, and I’ll plan the perfect trip.
      </p>
    </div>
  );
}
