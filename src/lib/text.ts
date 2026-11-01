/** Lowercase and strip accents so "cafe" matches "café" and "an gi" matches "ăn gì". */
export const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/g, "d");
