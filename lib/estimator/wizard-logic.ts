/**
 * Pure wizard state logic, kept out of the React component so it can be
 * exercised directly by `scripts/test-estimators.ts` without a DOM.
 *
 * The component owns rendering and `useState`; everything that decides *what*
 * to show, *whether* the user may continue, and *how* the answers are
 * summarised for WhatsApp lives here.
 */

import type { Answers, EstimatorSpec, Field, Step } from "./types";

export function fieldVisible(field: Field, answers: Answers): boolean {
  return field.visible ? field.visible(answers) : true;
}

export function stepVisible(step: Step, answers: Answers): boolean {
  if (step.visible && !step.visible(answers)) return false;
  return step.fields.some((field) => fieldVisible(field, answers));
}

/** Steps currently reachable given the answers so far. */
export function visibleSteps(spec: EstimatorSpec, answers: Answers): Step[] {
  return spec.steps.filter((step) => stepVisible(step, answers));
}

/** Fields currently shown within a step. */
export function visibleFields(step: Step, answers: Answers): Field[] {
  return step.fields.filter((field) => fieldVisible(field, answers));
}

/** Has a required field been satisfied? Optional fields always pass. */
export function fieldAnswered(field: Field, answers: Answers): boolean {
  if (!field.required) return true;
  const value = answers[field.id];

  if (field.kind === "multi") {
    const list = Array.isArray(value) ? value : [];
    return list.length >= (field.min ?? 1);
  }
  if (field.kind === "slider" || field.kind === "number") {
    return typeof value === "number" && Number.isFinite(value);
  }
  if (field.kind === "toggle") return true;
  return typeof value === "string" && value.length > 0;
}

/** May the user advance from this step? */
export function canAdvance(step: Step, answers: Answers): boolean {
  return visibleFields(step, answers).every((field) => fieldAnswered(field, answers));
}

/**
 * Fields blocking the Next button, so the UI can name them instead of showing
 * a generic "please answer the required question".
 */
export function blockingFields(step: Step, answers: Answers): Field[] {
  return visibleFields(step, answers).filter((field) => !fieldAnswered(field, answers));
}

/** Specific, actionable prompt for whatever is blocking the step. */
export function blockingMessage(step: Step, answers: Answers): string | null {
  const blocked = blockingFields(step, answers);
  if (!blocked.length) return null;
  const [field] = blocked;
  if (field.kind === "multi") {
    const min = field.min ?? 1;
    return min > 1
      ? `Select at least ${min} options under “${field.label}” to continue.`
      : `Select at least one option under “${field.label}” to continue.`;
  }
  return `Choose an option under “${field.label}” to continue.`;
}

/** Human-readable rendering of one answer, used in the WhatsApp summary. */
export function describeAnswer(field: Field, answers: Answers): string | null {
  const value = answers[field.id];
  if (value === undefined || value === null || value === "") return null;

  switch (field.kind) {
    case "cards":
    case "select": {
      const choice = field.choices.find((item) => item.value === value);
      return choice ? `${field.label}: ${choice.label}` : null;
    }
    case "multi": {
      const list = Array.isArray(value) ? value : [];
      if (!list.length) return null;
      const labels = list
        .map((item) => field.choices.find((choice) => choice.value === item)?.label)
        .filter(Boolean);
      return labels.length ? `${field.label}: ${labels.join(", ")}` : null;
    }
    case "slider":
      return `${field.label}: ${field.format ? field.format(Number(value)) : value}`;
    case "number":
      return `${field.label}: ${value}${field.suffix ? ` ${field.suffix}` : ""}`;
    case "toggle":
      return `${field.label}: ${value ? (field.onLabel ?? "Yes") : (field.offLabel ?? "No")}`;
    default:
      return null;
  }
}

/** Every answered field across every reachable step, in order. */
export function summariseAnswers(spec: EstimatorSpec, answers: Answers): string[] {
  return visibleSteps(spec, answers)
    .flatMap((step) => visibleFields(step, answers))
    .map((field) => describeAnswer(field, answers))
    .filter((line): line is string => Boolean(line));
}
