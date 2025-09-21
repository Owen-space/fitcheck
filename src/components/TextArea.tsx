export function TextArea({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-black">{label}</span>
      <textarea
        className="px-3 py-3 bg-gray-50 border-b border-gray-300 focus:outline-none focus:border-black placeholder:text-gray-400 min-h-[80px]"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}