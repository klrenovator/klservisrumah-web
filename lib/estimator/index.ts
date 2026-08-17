import type { EstimatorSpec } from "./types";
import { paintingSpec } from "./painting";
import { paintQuantityEstimatorSpec } from "./paint-quantity-estimator";
import { wallAreaCalculatorSpec } from "./wall-area-calculator";
import { ceilingAreaCalculatorSpec } from "./ceiling-area-calculator";
import { ceilingReplacementCostSpec } from "./ceiling-replacement-cost";
import { pipeLeakEstimatorSpec } from "./pipe-leak-estimator";
import { waterPressureTroubleshooterSpec } from "./water-pressure-troubleshooter";
import { pipeReplacementCostSpec } from "./pipe-replacement-cost";
import { waterproofingCostCalculatorSpec } from "./waterproofing-cost-calculator";
import { roofAreaCalculatorSpec } from "./roof-area-calculator";
import { bathroomWaterproofingEstimatorSpec } from "./bathroom-waterproofing-estimator";
import { balconyWaterproofingEstimatorSpec } from "./balcony-waterproofing-estimator";
import { electricalInstallationCostSpec } from "./electrical-installation-cost";
import { socketQuantityCalculatorSpec } from "./socket-quantity-calculator";
import { lightingInstallationCalculatorSpec } from "./lighting-installation-calculator";
import { ceilingFanInstallationEstimatorSpec } from "./ceiling-fan-installation-estimator";
import { handymanCostEstimatorSpec } from "./handyman-cost-estimator";
import { furnitureAssemblyEstimatorSpec } from "./furniture-assembly-estimator";
import { curtainInstallationCalculatorSpec } from "./curtain-installation-calculator";
import { doorInstallationCostSpec } from "./door-installation-cost";
import { windowReplacementEstimatorSpec } from "./window-replacement-estimator";
import { glassReplacementCalculatorSpec } from "./glass-replacement-calculator";
import { flooringAreaCalculatorSpec } from "./flooring-area-calculator";
import { tileQuantityCalculatorSpec } from "./tile-quantity-calculator";
import { vinylFlooringCostEstimatorSpec } from "./vinyl-flooring-cost-estimator";
import { roofRepairEstimatorSpec } from "./roof-repair-estimator";
import { roofReplacementCostSpec } from "./roof-replacement-cost";
import { renovationBudgetCalculatorSpec } from "./renovation-budget-calculator";
import { roomRenovationEstimatorSpec } from "./room-renovation-estimator";
import { kitchenRenovationEstimatorSpec } from "./kitchen-renovation-estimator";
import { bathroomRenovationEstimatorSpec } from "./bathroom-renovation-estimator";
import { deepCleaningCostEstimatorSpec } from "./deep-cleaning-cost-estimator";
import { moveInOutCleaningCalculatorSpec } from "./move-in-out-cleaning-calculator";
import { airconInstallationCostSpec } from "./aircon-installation-cost";
import { airconGasTopupCostSpec } from "./aircon-gas-topup-cost";
import { airconSizeCalculatorSpec } from "./aircon-size-calculator";
import { airconBtuCalculatorSpec } from "./aircon-btu-calculator";
import { airconElectricityCostSpec } from "./aircon-electricity-cost";
import { airconSavingsCalculatorSpec } from "./aircon-savings-calculator";
import { airconServicePickerSpec } from "./aircon-service-picker";
import { leakSpec } from "./leak";
import { ceilingSpec } from "./ceiling";
import { plumbingSpec } from "./plumbing";
import { tvMountSpec } from "./tv-mount";

export const estimatorSpecs: Record<string, EstimatorSpec> = {
  "painting-calculator": paintingSpec,
  "leak-triage": leakSpec,
  "ceiling-calculator": ceilingSpec,
  "plumbing-diagnostic": plumbingSpec,
  "tv-mount-advisor": tvMountSpec,
  "paint-quantity-estimator": paintQuantityEstimatorSpec,
  "wall-area-calculator": wallAreaCalculatorSpec,
  "ceiling-area-calculator": ceilingAreaCalculatorSpec,
  "ceiling-replacement-cost": ceilingReplacementCostSpec,
  "pipe-leak-estimator": pipeLeakEstimatorSpec,
  "water-pressure-troubleshooter": waterPressureTroubleshooterSpec,
  "pipe-replacement-cost": pipeReplacementCostSpec,
  "waterproofing-cost-calculator": waterproofingCostCalculatorSpec,
  "roof-area-calculator": roofAreaCalculatorSpec,
  "bathroom-waterproofing-estimator": bathroomWaterproofingEstimatorSpec,
  "balcony-waterproofing-estimator": balconyWaterproofingEstimatorSpec,
  "electrical-installation-cost": electricalInstallationCostSpec,
  "socket-quantity-calculator": socketQuantityCalculatorSpec,
  "lighting-installation-calculator": lightingInstallationCalculatorSpec,
  "ceiling-fan-installation-estimator": ceilingFanInstallationEstimatorSpec,
  "handyman-cost-estimator": handymanCostEstimatorSpec,
  "furniture-assembly-estimator": furnitureAssemblyEstimatorSpec,
  "curtain-installation-calculator": curtainInstallationCalculatorSpec,
  "door-installation-cost": doorInstallationCostSpec,
  "window-replacement-estimator": windowReplacementEstimatorSpec,
  "glass-replacement-calculator": glassReplacementCalculatorSpec,
  "flooring-area-calculator": flooringAreaCalculatorSpec,
  "tile-quantity-calculator": tileQuantityCalculatorSpec,
  "vinyl-flooring-cost-estimator": vinylFlooringCostEstimatorSpec,
  "roof-repair-estimator": roofRepairEstimatorSpec,
  "roof-replacement-cost": roofReplacementCostSpec,
  "renovation-budget-calculator": renovationBudgetCalculatorSpec,
  "room-renovation-estimator": roomRenovationEstimatorSpec,
  "kitchen-renovation-estimator": kitchenRenovationEstimatorSpec,
  "bathroom-renovation-estimator": bathroomRenovationEstimatorSpec,
  "deep-cleaning-cost-estimator": deepCleaningCostEstimatorSpec,
  "move-in-out-cleaning-calculator": moveInOutCleaningCalculatorSpec,
  "aircon-installation-cost": airconInstallationCostSpec,
  "aircon-gas-topup-cost": airconGasTopupCostSpec,
  "aircon-size-calculator": airconSizeCalculatorSpec,
  "aircon-btu-calculator": airconBtuCalculatorSpec,
  "aircon-electricity-cost": airconElectricityCostSpec,
  "aircon-savings-calculator": airconSavingsCalculatorSpec,
  "aircon-service-picker": airconServicePickerSpec,
};

export { paintingSpec, leakSpec, ceilingSpec, plumbingSpec, tvMountSpec, paintQuantityEstimatorSpec, wallAreaCalculatorSpec, ceilingAreaCalculatorSpec, ceilingReplacementCostSpec, pipeLeakEstimatorSpec, waterPressureTroubleshooterSpec, pipeReplacementCostSpec, waterproofingCostCalculatorSpec, roofAreaCalculatorSpec, bathroomWaterproofingEstimatorSpec, balconyWaterproofingEstimatorSpec, electricalInstallationCostSpec, socketQuantityCalculatorSpec, lightingInstallationCalculatorSpec, ceilingFanInstallationEstimatorSpec, handymanCostEstimatorSpec, furnitureAssemblyEstimatorSpec, curtainInstallationCalculatorSpec, doorInstallationCostSpec, windowReplacementEstimatorSpec, glassReplacementCalculatorSpec, flooringAreaCalculatorSpec, tileQuantityCalculatorSpec, vinylFlooringCostEstimatorSpec, roofRepairEstimatorSpec, roofReplacementCostSpec, renovationBudgetCalculatorSpec, roomRenovationEstimatorSpec, kitchenRenovationEstimatorSpec, bathroomRenovationEstimatorSpec, deepCleaningCostEstimatorSpec, moveInOutCleaningCalculatorSpec };
export * from "./types";
export { formatMYR } from "./format";
