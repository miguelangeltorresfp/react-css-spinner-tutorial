import { storiesOf } from '@storybook/react';
import React from 'react';
import { Ellipsis, Ring, Ripple } from '../src';

storiesOf('Spinners', module)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />);
