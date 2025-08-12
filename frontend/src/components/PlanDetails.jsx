import { Sun, Cloud } from "lucide-react";
import ItineraryCard from "./ItineraryCard";

export default function PlanDetails({ plan }) {
  return (
    <div className="animate-fade-in">
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6 border border-gray-100">
        <h2 className="text-3xl font-bold text-sky-700">{plan.destination}</h2>
        <div className="flex items-center gap-6 mt-3 text-gray-600">
          <div className="flex items-center gap-2">
            <Sun className="h-5 w-5 text-yellow-500" />
            <span>{plan.duration_days} days</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-sky-400" />
            <span>{plan.weather_forecast}</span>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {plan.itinerary.map((day, index) => (
          <ItineraryCard key={day.day} day={day} index={index} />
        ))}
      </div>
    </div>
  );
}
