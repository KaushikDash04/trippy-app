import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import ErrorDisplay from "./components/ErrorDisplay";
import PlanDetails from "./components/PlanDetails";
import { useTripPlanner } from "./hooks/useTripPlanner";

export default function App() {
  const { tripPlan, isLoading, errorMsg, getPlan } = useTripPlanner();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-purple-50 font-sans">
      <div
        className="min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div
          className={`w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-6 sm:p-8 transition-all duration-500 
            ${tripPlan ? "mt-10" : "min-h-screen flex flex-col justify-center"}`}
        >
          <Header />
          <SearchForm onSubmit={getPlan} isLoading={isLoading} />
          {errorMsg && <ErrorDisplay message={errorMsg} />}
          {tripPlan && <PlanDetails plan={tripPlan} />}
        </div>

      </div>
    </div>
  );
}
