import { MapPin } from "lucide-react";

export default function ItineraryCard({ day, index }) {
  return (
    <div
      key={day.day}
      className="bg-white rounded-2xl shadow-sm p-5 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      <h3 className="text-xl font-bold mb-2 text-sky-700">Day {day.day}</h3>
      <p className="text-gray-500 mb-3 flex items-center gap-2">
        <MapPin size={16} /> {day.theme}
      </p>
      <ul className="space-y-2 text-gray-700">
        {day.activities.map((act, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="w-2 h-2 bg-sky-400 rounded-full mt-2"></span>
            {act}
          </li>
        ))}
      </ul>
    </div>
  );
}
