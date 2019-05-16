import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Grid from "..";
import GridSample from '../sample';

storiesOf("Grid", module)
  .add("Sample", () => (
    <GridSample />
  ))
  .add("Yours", () => (
    <Grid />
  ));