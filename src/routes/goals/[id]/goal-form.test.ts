import { render } from "@testing-library/svelte";
import GoalForm from './goal-form.svelte';
import { vi, describe, it, expect } from 'vitest';

vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
  afterNavigate: vi.fn(),
  beforeNavigate: vi.fn(),
  disableScrollHandling: vi.fn(),
  invalidate: vi.fn(),
  invalidateAll: vi.fn(),
  onNavigate: vi.fn(),
  preloadCode: vi.fn(),
  preloadData: vi.fn(),
  pushState: vi.fn(),
  replaceState: vi.fn(),
}));

vi.mock('$app/stores', async () => {
  const { readable, writable } = await import('svelte/store');
  return {
    getStores: () => ({
      page: readable({ url: new URL('http://localhost'), params: {} }),
      navigating: readable(null),
      updated: readable(false),
      session: writable({}),
    }),
    page: readable({ url: new URL('http://localhost'), params: {} }),
    navigating: readable(null),
    updated: readable(false),
    session: writable({}),
  };
});

describe('GoalForm', () => {
  it('renders form with initial data', () => {
    const { getByLabelText } = render(GoalForm, {
      props: {
        data: {
          goalId: '1',
          goalname: 'Test Goal',
          duedate: '2023-12-31',
          goaltype: 'Running',
          goaltarget: '10',
          goalcurrent: '5',
          goalunit: 'km',
          description: 'Test description',
        },
      },
    });

    expect(getByLabelText('Goal Name *')).toHaveValue('Test Goal');
    expect(getByLabelText('Goal Target *')).toHaveValue('10');
    expect(getByLabelText('Goal Current *')).toHaveValue('5');
  });
});
