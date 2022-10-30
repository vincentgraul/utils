export enum Platform {
  Browser = "browser",
  Server = "server",
}

export interface Exception {
  origin: string;
  message?: string;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function isServer(): boolean {
  return typeof window === "undefined";
}

function isBrowserOrThrowException(e: Exception = getDefaultException(Platform.Browser)): boolean {
  const value: boolean = isBrowser();

  if (!value) {
    throw new Error(formatException(e, Platform.Browser));
  }

  return value;
}

function isServerOrThrowException(e: Exception = getDefaultException(Platform.Server)): boolean {
  const value: boolean = isServer();

  if (!value) {
    throw new Error(formatException(e, Platform.Server));
  }

  return value;
}

function getDefaultException(platform: Platform): Exception {
  return { origin: "this function", message: `is not available in ${platform} environment` };
}

function formatException(exception: Exception, platform: Platform): string {
  const message: string = exception.message
    ? exception.message
    : getDefaultException(platform).message;

  return `${exception.origin} ${message}`;
}

export default {
  isBrowser,
  isServer,
  isBrowserOrThrowException,
  isServerOrThrowException,
};
