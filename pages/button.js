import * as React from "react";
import { Button, KIND, SIZE } from "baseui/button";
import Upload from "baseui/icon/upload";
import ArrowRight from "baseui/icon/arrow-right";

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
    <Button startEnhancer={() => <ArrowRight size={24} />}>
      Start Enhancer
    </Button>
    <Button endEnhancer={() => <Upload size={24} />}>End Enhancer</Button>
  </React.Fragment>
);
