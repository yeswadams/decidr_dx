import type { CapabilityRegistration, CapabilityRegistry } from '@decidr/core';

export type { CapabilityRegistration, CapabilityRegistry, CapabilityKind } from '@decidr/core';

/** Small registration facade for applications that want to expose capabilities to Decidr. */
export function createDecidr(registry: CapabilityRegistry) {
  return {
    register(capability: CapabilityRegistration): void {
      registry.register(capability);
    },
  };
}
