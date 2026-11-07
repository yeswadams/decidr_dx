import type { CapabilityRegistration } from '@decidr/core';

/** Integration boundary for EVM contracts and events; no chain client is selected yet. */
export interface EvmCapability extends CapabilityRegistration {
  readonly kind: 'contract';
  readonly integration: 'evm';
}

export type EvmRegistration = (capability: EvmCapability) => void;
