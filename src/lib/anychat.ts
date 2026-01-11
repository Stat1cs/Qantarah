function mustGetEnv(name: string): string | undefined {
  const v = process.env[name];
  if (!v) return undefined;
  return v;
}

function normalizeBaseUrl(input: string): string {
  const trimmed = input.trim();
  try {
    const u = new URL(trimmed);
    // Prefer the origin so env vars like "https://app.example.com/login" still work cleanly.
    return u.origin;
  } catch {
    // Best-effort fallback for non-URL values.
    return trimmed.replace(/\/+$/, "");
  }
}

export function getAnychatBaseUrl(): string {
  // Set this to your AnyChat custom domain (preferred).
  const raw = mustGetEnv("NEXT_PUBLIC_ANYCHAT_BASE_URL") ?? "https://anychat.one";
  return normalizeBaseUrl(raw);
}

export function anychatUrl(path: string): string {
  const base = getAnychatBaseUrl();
  return new URL(path, base).toString();
}

