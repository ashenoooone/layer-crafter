import { strict } from "assert";

/**
 * Converts a string to PascalCase.
 * @param str - The input string.
 * @returns The string in PascalCase.
 */
function toPascalCase(str: string): string {
  return str.replace(/(^\w|-\w|\s\w|_\w)/g, (match) =>
    match.replace(/[-_\s]/, "").toUpperCase()
  );
}

/**
 * Converts a string to kebab-case.
 * @param str - The input string.
 * @returns The string in kebab-case.
 */
function toKebabCase(str: string): string {
  return str
    .replace(/[-_\s]+/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

/**
 * Converts a string to snake_case.
 * @param str - The input string.
 * @returns The string in snake_case.
 */
function toSnakeCase(str: string): string {
  return str
    .replace(/\s+/g, "_")
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .toLowerCase();
}

function convertToCase(str: string, casing: Case): string {
  switch (casing) {
    case "pascal":
      return toPascalCase(str);
    case "kebab":
      return toKebabCase(str);
    case "snake":
      return toSnakeCase(str);
    default:
      throw new Error(`Invalid casing: ${casing}`);
  }
}

export default { toPascalCase, toKebabCase, toSnakeCase, convertToCase };
