import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Hero from "../landing_page/home/Hero";


//Test suite

describe('Hero Component',() => {
    test('render Hero image', () => {
        render(<Hero/>);
        const heroImage = screen.getByAltText('Hero image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','/images/homeHero.png');
    });

test('render signup button', () => {
  render(<Hero />);
  const signupButton = screen.getByRole('button', { name: /signup now/i });
  expect(signupButton).toBeInTheDocument();
  expect(signupButton).toHaveClass('btn-primary');
});
});
