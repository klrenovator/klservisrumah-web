/**
 * Shared types for the guided estimator engine.
 *
 * A tool is described declaratively as a list of steps; the wizard shell
 * (`components/tools/estimator/estimator-wizard.tsx`) renders any spec that
 * matches this contract. Adding a new estimator therefore means writing a
 * spec — never another bespoke form.
 */

export type AnswerValue = string | string[] | number | boolean;
export type Answers = Record<string, AnswerValue>;

export type Choice = {
  value: string;
  label: string;
  /** Short helper line shown under the label on card/multi controls. */
  hint?: string;
  /** Emoji glyph — zero-byte "icon" that renders instantly on mobile. */
  icon?: string;
  /** Price caption, e.g. "From RM 450 / room" (always sourced from pricing). */
  price?: string;
  /** Marks the most common answer so users can pick with one tap. */
  popular?: boolean;
};

export type FieldBase = {
  id: string;
  label: string;
  help?: string;
  /** Hide the field until the condition passes (e.g. custom-size inputs). */
  visible?: (answers: Answers) => boolean;
  /** A required field blocks "Next" until answered. */
  required?: boolean;
};

export type CardsField = FieldBase & {
  kind: "cards";
  choices: Choice[];
  /** 1 = full-width stacked rows, 2 = two-up grid (default). */
  columns?: 1 | 2;
};

export type SelectField = FieldBase & {
  kind: "select";
  choices: Choice[];
  placeholder?: string;
};

export type MultiField = FieldBase & {
  kind: "multi";
  choices: Choice[];
  /** Minimum selections required when the field is required. */
  min?: number;
};

export type SliderField = FieldBase & {
  kind: "slider";
  min: number;
  max: number;
  step?: number;
  defaultValue: number;
  /** Renders the current value, e.g. (v) => `${v} points`. */
  format?: (value: number) => string;
};

export type ToggleField = FieldBase & {
  kind: "toggle";
  onLabel?: string;
  offLabel?: string;
  defaultValue?: boolean;
};

export type NumberField = FieldBase & {
  kind: "number";
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  defaultValue?: number;
};

export type Field =
  | CardsField
  | SelectField
  | MultiField
  | SliderField
  | ToggleField
  | NumberField;

export type Step = {
  id: string;
  title: string;
  subtitle?: string;
  icon?: string;
  fields: Field[];
  /** Skip the whole step when the condition fails. */
  visible?: (answers: Answers) => boolean;
};

/** An optional extra the customer can toggle on the result screen. */
export type AddOn = {
  id: string;
  label: string;
  price: number;
  note?: string;
  /** Pre-ticked because the answers imply it is needed. */
  recommended?: boolean;
};

export type LinkRef = { label: string; href: string; desc?: string };

export type Severity = "routine" | "soon" | "urgent" | "emergency";

export type EstimateResult = {
  /** Mid-point estimate in MYR. */
  price: number;
  /** Published-band low / high in MYR. */
  low: number;
  high: number;
  /** Labour vs materials split of `price`. */
  labour: number;
  materials: number;
  /** Human duration, e.g. "1–2 working days". */
  duration: string;
  /** Headline service we would send, e.g. "Interior Repainting — Standard". */
  recommendedService: string;
  /** Package tier name shown as a badge. */
  packageName: string;
  /** Route to the matching service page. */
  serviceHref: string;
  /** How the number was built, in plain language. */
  breakdown: { label: string; value: string; note?: string }[];
  /** Toggleable extras that change the total live. */
  addOns: AddOn[];
  /** Diagnostic findings (leak / plumbing triage). */
  findings?: { title: string; detail: string }[];
  severity?: Severity;
  severityNote?: string;
  /** Cross-sell + maintenance + reading suggestions. */
  related: LinkRef[];
  maintenance?: string[];
  articles?: LinkRef[];
  /** Anything the on-site inspection still has to confirm. */
  assumptions: string[];
  /** Set when scope genuinely cannot be priced without a site visit. */
  quoteOnly?: boolean;
  quoteOnlyReason?: string;
};

export type EstimatorSpec = {
  /** Tool slug, e.g. "painting-calculator". */
  slug: string;
  name: string;
  /** Service slug used for WhatsApp routing + analytics. */
  serviceSlug: string;
  steps: Step[];
  /** Default answers so the live estimate is meaningful from step 1. */
  defaults: Answers;
  compute: (answers: Answers) => EstimateResult;
  /** Label of the primary result figure, e.g. "Estimated cost". */
  resultLabel?: string;
};
