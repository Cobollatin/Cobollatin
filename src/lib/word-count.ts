export function countText(text: string): { words: number; characters: number } {
  const trimmed = text.trim();
  return {
    words: trimmed ? (trimmed.match(/\S+/gu) ?? []).length : 0,
    characters: Array.from(text).length,
  };
}
