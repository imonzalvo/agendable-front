import React from 'react';
import { Button } from 'antd';

export default {
  title: 'Button',
  component: Button,
  // includeStories: ['withText', 'withEmoji']
};

export const withText = () => <Button>Hello</Button>;
export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
