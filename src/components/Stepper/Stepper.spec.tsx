import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Stepper } from './Stepper';

describe('Stepper component', () => {
  it('should generate different values', () => {
    render(<Stepper />);

    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '-' }));

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('should generate use input field', async () => {
    render(<Stepper />);

    const input = screen.getByLabelText(/your value/i);
    await userEvent.type(input, '456');
    await userEvent.type(input, '{enter}');

    expect(screen.getByText('456')).toBeInTheDocument();
  });
});
