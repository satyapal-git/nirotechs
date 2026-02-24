import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import("next").NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensure Next uses this project as the workspace root (avoids picking up lockfiles above).
    root: __dirname,
  },
};

export default nextConfig;

