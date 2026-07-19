"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search experiences"
      className="h-11 w-full rounded-xl border border-[#d9e3f6] bg-[#f8f9ff] px-3 text-sm text-[#121c2a] outline-none transition focus:border-[#0b57db]"
    />
  );
}
