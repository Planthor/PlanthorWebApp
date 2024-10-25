import { render } from "@testing-library/svelte";
import GoalForm from './goal-form.svelte';

vi.mock('$app/navigation', () => ({
  goto: vi.fn(),
}));

describe('GoalForm', () => {
  it('renders form with initial data', () => {
    const { getByLabelText, getByPlaceholderText } = render(GoalForm, {
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
    expect(getByPlaceholderText('DD/MM/YYYY')).toHaveValue('2023-12-31');
    expect(getByLabelText('Goal Target *')).toHaveValue('10');
    expect(getByLabelText('Goal Current *')).toHaveValue('5');
    expect(getByPlaceholderText('Your note here')).toHaveValue('Test description');
  });
});