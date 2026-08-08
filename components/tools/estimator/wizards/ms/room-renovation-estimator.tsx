"use client";
import { buildRoomRenovationEstimatorSpec } from "@/lib/estimator/builders/room-renovation-estimator";
import { roomRenovationEstimatorMsDict } from "@/lib/estimator/i18n/tools/room-renovation-estimator-ms";
import { chromeMsDict } from "@/lib/estimator/i18n/chrome-ms";
import { createStaticTranslator } from "@/lib/i18n";
import { EstimatorForm } from "../../estimator-form";
const contentT = createStaticTranslator(roomRenovationEstimatorMsDict);
const chromeT = createStaticTranslator(chromeMsDict);
const spec = buildRoomRenovationEstimatorSpec(contentT);
export default function Wizard() {
  return <EstimatorForm spec={spec} translator={chromeT} />;
}
