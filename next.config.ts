import { readFileSync } from "node:fs"
import { join } from "node:path"
import type { NextConfig } from "next"

/* Lê GMAPS_API_KEY do .env.deploy (sincronizado do cofre; nunca commitado).
   A chave é pública por natureza (Maps Embed API) e restrita por referrer no GCC. */
function gmapsKeyFromDeployEnv(): string {
  if (process.env.GMAPS_API_KEY) {
    return process.env.GMAPS_API_KEY
  }
  try {
    const raw = readFileSync(join(__dirname, ".env.deploy"), "utf8")
    const line = raw.split(/\r?\n/).find(l => l.startsWith("GMAPS_API_KEY="))
    return line ? line.slice("GMAPS_API_KEY=".length).replace(/^"|"$/g, "").trim() : ""
  } catch {
    return ""
  }
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_GMAPS_API_KEY: gmapsKeyFromDeployEnv(),
  },
}

export default nextConfig
