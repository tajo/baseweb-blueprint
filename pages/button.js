import * as React from "react";
import { Button, KIND, SIZE } from "baseui/button";

export default () => (
  <React.Fragment>
    <Button>Primary</Button>
    <Button kind={KIND.secondary}>Secondary</Button>
    <Button kind={KIND.tertiary}>Tertiary</Button>
    <Button kind={KIND.minimal}>Minimal</Button>
    <Button isLoading>Loading</Button>
    <Button isSelected>Selected</Button>
    <Button disabled>Disabled</Button>
    <Button size={SIZE.compact}>Compact size</Button>
    <Button size={SIZE.large}>Large size</Button>
  </React.Fragment>
);
