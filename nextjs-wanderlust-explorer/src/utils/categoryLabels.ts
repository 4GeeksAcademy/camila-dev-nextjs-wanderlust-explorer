const CATEGORY_LABELS: Record<string, string> = {
  Adventure: "Aventura",
  Culture: "Cultura",
  Food: "Gastronomía",
  Wellness: "Bienestar",
  Nature: "Naturaleza",
};

export function getCategoryLabel(category: string) {
  return CATEGORY_LABELS[category] ?? category;
}