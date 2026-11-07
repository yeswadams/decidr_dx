/** Framework-independent identifiers and registration contracts. */
export type CapabilityKind = 'service' | 'workflow' | 'contract';

export interface CapabilityRegistration {
  readonly id: string;
  readonly kind: CapabilityKind;
  readonly displayName?: string;
  readonly version?: string;
}

export interface CapabilityRegistry {
  register(capability: CapabilityRegistration): void;
}
