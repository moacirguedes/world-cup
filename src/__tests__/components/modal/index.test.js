import React from 'react';
import Modal from '../../../components/modal';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Modal />', () => {
  it('should render correctly', () => {
    const { container } = render(<Modal />);

    expect(container).toBeInTheDocument();
  });
});
