import React from 'react';
import Header from '../../../components/header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('<Header />', () => {
  it('should show the title correctly', () => {
    const { getByTestId } = render(
      <Header />
    );

    const headerTitle = getByTestId('title');

    expect(headerTitle).toHaveTextContent('World Cup');
  });
});
