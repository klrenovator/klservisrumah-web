import { createStaticTranslator } from "../i18n";
import { roomRenovationEstimatorEnDict } from "./i18n/tools/room-renovation-estimator-en";
import { buildRoomRenovationEstimatorSpec } from "./builders/room-renovation-estimator";

export const roomRenovationEstimatorSpec = buildRoomRenovationEstimatorSpec(createStaticTranslator(roomRenovationEstimatorEnDict));
