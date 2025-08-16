export type AppLocale = "en";
// | "bg"
// | "bs"
// | "sr"
// | "hr"
// | "ro"
// | "sl"
// | "sk"
// | "el"
// | "la";

export type CountryCode = keyof typeof countryToLocale;

export const countryToLocale = {
  US: "en",
  // BG: "bg",
  // BA: "bs",
  // RS: "sr",
  // HR: "hr",
  // RO: "ro",
  // SI: "sl",
  // SK: "sk",
  // GB: "en",
  // DE: "en",
  // FR: "en",
  // EL: "el", // Greece
  // VA: "la", // Vatican City (Latin)
} as const satisfies Record<string, AppLocale>;
