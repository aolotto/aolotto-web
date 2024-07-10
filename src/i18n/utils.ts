export function parseLocaleByPath(path) {
  const parts = path?.split('/');
  const lang = parts.shift() || parts.shift();
  return {
    lang,
    path: parts.join("/")
  }
}