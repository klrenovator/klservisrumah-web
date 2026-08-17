import { validateTopicalAuthorityMap } from "@/config/topical-authority-validate";
import { topicalAuthorityMap } from "@/config/topical-authority-map";
import { servicesData } from "@/config/services-data";

const issues = validateTopicalAuthorityMap();

if (issues.length > 0) {
  console.error(`\nTopical authority map validation FAILED with ${issues.length} issue(s):\n`);
  for (const issue of issues) {
    console.error(`  [${issue.serviceSlug}] ${issue.field} → "${issue.value}": ${issue.message}`);
  }
  process.exit(1);
}

const entryCount = Object.keys(topicalAuthorityMap).length;
const specCount = Object.values(topicalAuthorityMap).reduce((sum, s) => sum + s.specialties.length, 0);
console.log(`Topical authority map OK: ${entryCount}/${Object.keys(servicesData).length} services, ${specCount} typed specialty relationships. All referenced slugs are valid.`);
