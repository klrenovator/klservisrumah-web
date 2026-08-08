import { createStaticTranslator } from "../i18n";
import { pipeLeakEstimatorEnDict } from "./i18n/tools/pipe-leak-estimator-en";
import { buildPipeLeakEstimatorSpec } from "./builders/pipe-leak-estimator";

export const pipeLeakEstimatorSpec = buildPipeLeakEstimatorSpec(createStaticTranslator(pipeLeakEstimatorEnDict));
