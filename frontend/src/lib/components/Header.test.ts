import { beforeEach, describe, expect, it } from 'vitest';
import { render } from '@testing-library/svelte';
import Header from '$lib/components/Header.svelte';

describe('Pokemon Details', () => {
  it('Should show a loading spinner when making the API Call', () => {
    const { getByText } = render(Header);

    expect(() => getByText(/Pompompurin/i)).not.toThrow();
  });
});
