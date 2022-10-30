import { execaCommand, execaCommandSync } from "execa";

async function getPackageInfo(name: string, field?: string): Promise<string> {
  return (await execaCommand(formatNpmInfoCommand(name, field))).stdout;
}

function getPackageInfoSync(name: string, field?: string): string {
  return execaCommandSync(formatNpmInfoCommand(name, field)).stdout;
}

function formatNpmInfoCommand(name: string, field?: string): string {
  return `npm info ${name} ${field ? field : "--json"}`;
}

export default {
  getPackageInfo,
  getPackageInfoSync,
};
