export default function ErrorDisplay({ message }) {
  return (
    <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-center shadow-sm">
      <strong>Error</strong> {message}
    </div>
  );
}
