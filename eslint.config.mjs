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
      "@typescript-eslint/no-explicit-any": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },
  {
    // These pre-existing estimator templates deliberately share one broad
    // import/signature shape even when an individual calculator does not use
    // every helper. Keep the strict profile on all application and SEO code;
    // isolate only the legacy template exceptions until that subsystem is
    // regenerated with per-file imports and typed locale overlays.
    files: ["lib/estimator/builders/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-useless-assignment": "off"
    }
  },
  {
    // The large legacy localization registry performs a checked deep merge of
    // heterogeneous tool records. Its ten existing casts predate the strict
    // no-any policy; no new file receives this exception.
    files: ["config/tools-i18n.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];
