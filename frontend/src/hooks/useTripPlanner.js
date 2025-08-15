import { useState } from "react";

const API_URL = "http://127.0.0.1:8000/plan-trip";

export const useTripPlanner = () => {
  const [plan, setPlan] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlan = async (prompt) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: prompt,
          history: history
        }),
      });
      if (!res.ok) throw new Error("Failed to fetch plan");
      const data = await res.json();
      setPlan(data);
      setHistory(prev => [...prev, [prompt, JSON.stringify(data)]]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { tripPlan: plan, isLoading: loading, errorMsg: error, getPlan: fetchPlan };
};
