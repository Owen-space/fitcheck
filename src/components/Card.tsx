export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-black rounded-lg p-6 shadow-md">
      <h3 className="font-semibold text-black mb-4">{title}</h3>
      {children}
    </div>
  );
}