import slash from "slash";

export function getLastPath(path: string): string {
  const formattedPath: string = slash(path);
  return formattedPath.substring(formattedPath.lastIndexOf("/") + 1);
}
