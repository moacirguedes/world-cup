import React from 'react';
import Radio from '../../../components/radio';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Radio />', () => {
  it('should render correctly', () => {
    const { container } = render(<Radio />);

    expect(container).toBeInTheDocument();
  });
});
