import { addParameters, configure } from '@storybook/react';
import packageJson from '../package.json';

addParameters({
  options: {
    name: 'React CSS Spinners Tutorial',
    url: packageJson.repository.url,
    showAddonPanel: false
    // more configuration here
  }
});

function loadStories () {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
