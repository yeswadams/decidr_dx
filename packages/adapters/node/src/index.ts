import type { CapabilityRegistration } from '@decidr/core';

/** Node-specific adapter surface. Framework hooks and instrumentation are future work. */
export interface NodeCapabilityOptions extends CapabilityRegistration {
  readonly runtime: 'node';
}

export function defineNodeCapability<T extends NodeCapabilityOptions>(capability: T): T {
  return capability;
}
