import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchForm({ onSubmit, isLoading }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(prompt);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full bg-white rounded-full shadow-lg p-3 mb-10 border border-gray-200 hover:shadow-xl transition duration-300"
    >
      <Search className="text-gray-500 h-6 w-6 ml-3" />
      <input
        type="text"
        className="flex-grow bg-transparent p-3 text-lg text-gray-800 focus:outline-none"
        placeholder="Example: '5 days in Paris with museums & street food'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="px-6 py-3 bg-sky-500 text-white font-semibold rounded-full hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Planning...
          </div>
        ) : (
          "Plan My Trip"
        )}
      </button>
    </form>
  );
}
