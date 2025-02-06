import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmpTaxCalculator from '../components/EmpTaxCalculator';
import EmpTaxCalculatorPage from '../pages/EmpTaxCalculatorPage';

describe('EmpTaxCalculator Component', () => {
  // 1. Test to check if 'Employee Tax Calculator' heading is rendered
  test('renders_heading_correctly', () => {
    render(<EmpTaxCalculator />);

    const heading = screen.getByRole('heading', { name: /Employee Tax Calculator/i });
    expect(heading).toBeInTheDocument();
  });

  // 2. Test to check if all form fields are rendered
  test('renders_form_fields_correctly', () => {
    render(<EmpTaxCalculator />);

    const salaryLabel = screen.getByText(/Salary:/i);
    const taxRateLabel = screen.getByText(/Tax Rate:/i);
    const calculateButton = screen.getByRole('button', { name: /Calculate Tax/i });

    expect(salaryLabel).toBeInTheDocument();
    expect(taxRateLabel).toBeInTheDocument();
    expect(calculateButton).toBeInTheDocument();
  });

  // 4. Test for calculating tax with valid inputs
  test('calculates_tax_correctly', async () => {
    render(<EmpTaxCalculator />);

    fireEvent.change(screen.getByLabelText(/Salary:/i), { target: { value: '50000' } });
    fireEvent.change(screen.getByLabelText(/Tax Rate:/i), { target: { value: '20' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate Tax/i }));

    const result = await screen.findByText(/Tax to be paid: \$10000/i);
    expect(result).toBeInTheDocument();
  });

  // 5. Test for displaying validation error on empty form submission
  test('displays_validation_error_for_empty_form', async () => {
    render(<EmpTaxCalculator />);

    fireEvent.click(screen.getByRole('button', { name: /Calculate Tax/i }));

    await waitFor(() => {
      const errorMessage = screen.getByText(/Please fill all fields/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  // 6. Test for error when salary or tax rate is invalid
  test('displays_error_for_invalid_inputs', async () => {
    render(<EmpTaxCalculator />);

    fireEvent.change(screen.getByLabelText(/Salary:/i), { target: { value: '-500' } });
    fireEvent.change(screen.getByLabelText(/Tax Rate:/i), { target: { value: '200' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate Tax/i }));

    await waitFor(() => {
      const errorMessage = screen.getByText(/Invalid input values/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  // 7. Test to check if EmpTaxCalculatorPage renders correctly
  test('renders_emp_tax_calculator_page_correctly', () => {
    render(<EmpTaxCalculatorPage />);

    const heading = screen.getByRole('heading', { name: /Employee Tax Calculator Page/i });
    expect(heading).toBeInTheDocument();
  });

  // 8. Test to ensure no error message is displayed initially
  test('does_not_show_error_message_initially', () => {
    render(<EmpTaxCalculator />);

    const errorMessage = screen.queryByText(/Please fill all fields/i);
    expect(errorMessage).not.toBeInTheDocument();
  });

  // 9. Test to check if decimal tax rates are handled correctly
  test('handles_decimal_tax_rate_correctly', async () => {
    render(<EmpTaxCalculator />);

    fireEvent.change(screen.getByLabelText(/Salary:/i), { target: { value: '45000' } });
    fireEvent.change(screen.getByLabelText(/Tax Rate:/i), { target: { value: '12.5' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate Tax/i }));

    const result = await screen.findByText(/Tax to be paid: \$5625/i);
    expect(result).toBeInTheDocument();
  });

  // 10. Test for handling large numbers correctly
  test('handles_large_numbers_correctly', async () => {
    render(<EmpTaxCalculator />);

    fireEvent.change(screen.getByLabelText(/Salary:/i), { target: { value: '1000000000' } });
    fireEvent.change(screen.getByLabelText(/Tax Rate:/i), { target: { value: '25' } });
    fireEvent.click(screen.getByRole('button', { name: /Calculate Tax/i }));

    const result = await screen.findByText(/Tax to be paid: \$250000000/i);
    expect(result).toBeInTheDocument();
  });

  // 11. Test to ensure input fields accept only numbers
  test('accepts_only_numbers_in_input_fields', () => {
    render(<EmpTaxCalculator />);

    const salaryInput = screen.getByLabelText(/Salary:/i);
    fireEvent.change(salaryInput, { target: { value: 'abc' } });
    expect(salaryInput.value).toBe(''); // Should remain empty when non-numeric value is entered

    const taxRateInput = screen.getByLabelText(/Tax Rate:/i);
    fireEvent.change(taxRateInput, { target: { value: 'xyz' } });
    expect(taxRateInput.value).toBe(''); // Should remain empty when non-numeric value is entered
  });
});
