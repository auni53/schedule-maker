export function getTag(name) {
  return name.replace(/[&-\s]/g, '').toLowerCase();
}
