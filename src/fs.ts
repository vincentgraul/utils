import { basename } from "path";
import { Dirent, readdir } from "fs-extra";
import slash from "slash";
import { isServerOrThrowException } from "./platform";

export interface Path {
  absolute: string;
  relative: string;
}

export interface Folder {
  name: string;
  path: Path;
}

export async function listFolders(path: string, excludes: string[] = []): Promise<Folder[]> {
  isServerOrThrowException();

  const folders: Folder[] = [];

  const readFolder = async (currentPath: Path) => {
    const dirents: Dirent[] = await readdir(currentPath.absolute, {
      withFileTypes: true,
    });

    for (const dirent of dirents) {
      if (dirent.isDirectory()) {
        const { name } = dirent;
        const path: Path = {
          absolute: `${currentPath.absolute}/${name}`,
          relative: `${currentPath.relative}/${name}`,
        };

        folders.push({ name, path });

        if (!excludes.includes(name)) {
          await readFolder(path);
        }
      }
    }
  };

  await readFolder({ absolute: slash(path), relative: basename(slash(path)) });

  return folders;
}
