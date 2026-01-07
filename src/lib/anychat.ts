function mustGetEnv(name: string): string | undefined {
  const v = process.env[name];
  if (!v) return undefined;
  return v;
}

export function getAnychatBaseUrl(): string {
  // Set this to your AnyChat custom domain (preferred).
  return (
    mustGetEnv("NEXT_PUBLIC_ANYCHAT_BASE_URL") ??
    "https://anychat.one"
  );
}

export function anychatUrl(path: string): string {
  const base = getAnychatBaseUrl();
  return new URL(path, base).toString();
}

