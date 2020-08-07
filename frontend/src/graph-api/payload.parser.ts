import { GraphPayload } from "./payload.model";

/**
 * Parsers for Payload.
 * Very simple so far, segregated just in case query got more
 * complex in the future.
 * Example:
 * Input: {search: "gough"}
 * Output: "q=gough"
 */

export const parsePayload = (p: GraphPayload): string => {
  return [
    p.search ? `q=${p.search}&f=entities` : "",
  ]
    .filter(i => i)
    .join("&");
};
