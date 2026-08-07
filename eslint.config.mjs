import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "public/**",
      "next-env.d.ts",
      "*.config.mjs",
      "coverage/**",
      // Node-only build tooling: runs under `node --experimental-strip-types`,
      // not through the Next.js/browser lint profile.
      "scripts/ts-resolver.mjs",
      "lib/estimator/rate-book.generated.ts"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
      // Guardrail ON: the tree currently has zero `any` (verified across all
      // sources). Keep it that way — lint fails the build.
      "@typescript-eslint/no-explicit-any": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  }
];
