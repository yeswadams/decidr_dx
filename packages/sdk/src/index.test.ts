import { describe, expect, it } from 'vitest';
import { createDecidr } from './index.js';

describe('createDecidr', () => {
  it('forwards capability registrations to the supplied registry', () => {
    const registered: string[] = [];
    const decidr = createDecidr({ register: ({ id }) => registered.push(id) });

    decidr.register({ id: 'orders-api', kind: 'service' });

    expect(registered).toEqual(['orders-api']);
  });
});
