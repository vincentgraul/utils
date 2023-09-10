import { execaCommand, execaCommandSync } from "execa";

export async function getPackageInfo(name: string, field?: string): Promise<string> {
  return (await execaCommand(formatNpmInfoCommand(name, field))).stdout;
}

export function getPackageInfoSync(name: string, field?: string): string {
  return execaCommandSync(formatNpmInfoCommand(name, field)).stdout;
}

export function formatNpmInfoCommand(name: string, field?: string): string {
  return `npm info ${name} ${field ? field : "--json"}`;
}
