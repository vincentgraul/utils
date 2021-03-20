import execa from "execa";

export async function getPackageInfo(name: string, field?: string): Promise<string> {
  return (await execa.command(formatNpmInfoCommand(name, field))).stdout;
}

export function getPackageInfoSync(name: string, field?: string): string {
  return execa.commandSync(formatNpmInfoCommand(name, field)).stdout;
}

function formatNpmInfoCommand(name: string, field?: string): string {
  return `npm info ${name} ${field ? field : "--json"}`;
}
