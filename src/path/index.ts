import slash from "slash";

export interface File {
  name: string;
  extension: string;
  path: string;
}

function getLastPath(path: string): string {
  const formattedPath: string = slash(path);
  return formattedPath.substring(formattedPath.lastIndexOf("/") + 1);
}

function decomposeFilePath(path: string): File {
  const details: string[] = path.split("/").pop().split(".");
  const extension: string = details.pop();

  return { name: details.join("."), extension, path };
}

export default {
  getLastPath,
  decomposeFilePath,
};
