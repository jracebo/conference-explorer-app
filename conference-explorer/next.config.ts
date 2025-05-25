import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Added SCSS configuration
  // Makes _variables.scss be accessible to all SCSS module of the entire project.
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/styles")],
    additionalData: `
      @import "variables";
      @import "common";  
    `,
  }
};

export default nextConfig;
