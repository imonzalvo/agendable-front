import { configure } from '@storybook/react';

// We should create stories inside components' folder
configure(require.context('../stories', true, /\.js$/), module);
