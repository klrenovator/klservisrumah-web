"use client";
import { buildRoomRenovationEstimatorSpec } from "@/lib/estimator/builders/room-renovation-estimator";
import { roomRenovationEstimatorZhDict } from "@/lib/estimator/i18n/tools/room-renovation-estimator-zh";
import { chromeZhDict } from "@/lib/estimator/i18n/chrome-zh";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roomRenovationEstimatorZhDict);
const chromeT = createStaticTranslator(chromeZhDict);
const spec = buildRoomRenovationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
