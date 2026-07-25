"use client";

import React from "react";
import { DecisionTree } from "@/components/content/decision-tree";
import { useTranslations } from "@/hooks/use-translations";

type DecisionTreeVariant = "servicesPage";

type Props = {
  variant?: DecisionTreeVariant;
};

/**
 * LocaleDecisionTree — renders the decision tree with fully translated
 * titles, descriptions, tags, and compare-action strings for the
 * active locale (EN/MS/ZH).
 */
export function LocaleDecisionTree({ variant = "servicesPage" }: Props) {
  const t = useTranslations();

  if (variant === "servicesPage") {
    return (
      <DecisionTree
        title={t("decisionTree.servicesPage.title")}
        tagLabels={{
          recommended: t("decisionTree.tags.recommended"),
          lighter: t("decisionTree.tags.lighter"),
          urgent: t("decisionTree.tags.urgent")
        }}
        options={[
          {
            level: "recommended",
            title: t("decisionTree.servicesPage.fullService.title"),
            description: t("decisionTree.servicesPage.fullService.description"),
            compareService: t("decisionTree.servicesPage.diyMaterials.title"),
            compareAction: t("decisionTree.servicesPage.fullService.compareAction")
          },
          {
            level: "lighter",
            title: t("decisionTree.servicesPage.diyMaterials.title"),
            description: t("decisionTree.servicesPage.diyMaterials.description"),
            compareService: t("decisionTree.servicesPage.fullService.title"),
            compareAction: t("decisionTree.servicesPage.diyMaterials.compareAction")
          },
          {
            level: "urgent",
            title: t("decisionTree.servicesPage.emergency.title"),
            description: t("decisionTree.servicesPage.emergency.description"),
            compareService: t("decisionTree.servicesPage.fullService.title"),
            compareAction: t("decisionTree.servicesPage.emergency.compareAction")
          }
        ]}
      />
    );
  }

  return null;
}
