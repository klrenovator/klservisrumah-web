"use client";

import * as React from "react";
import { LangProvider } from "@/context/lang-context";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <LangProvider>{children}</LangProvider>;
}
