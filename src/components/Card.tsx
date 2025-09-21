export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mb-4 border border-gray-200">
      <h3 className="font-semibold text-lg mb-4 text-gray-900">{title}</h3>
      {children}
    </div>
  );
}
