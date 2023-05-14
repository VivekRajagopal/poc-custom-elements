import {createComponent} from '@lit-labs/react';
import * as React from 'react';
import {LabelledButton} from './labelled-button.js';

export const LabelledButtonComponent = createComponent({
  tagName: 'labelled-button',
  elementClass: LabelledButton,
  react: React,
  events: {
    onclicked: 'clicked',
  },
});
