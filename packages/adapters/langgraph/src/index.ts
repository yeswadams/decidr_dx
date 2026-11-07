import type { CapabilityRegistration } from '@decidr/core';

/** Integration boundary for graph-based AI workflows; no LangGraph dependency is required yet. */
export interface LangGraphCapability extends CapabilityRegistration {
  readonly kind: 'workflow';
  readonly integration: 'langgraph';
}

export type LangGraphRegistration = (capability: LangGraphCapability) => void;
