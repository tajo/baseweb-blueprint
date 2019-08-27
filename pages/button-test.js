import * as React from "react";
import { Button, KIND, SIZE } from "baseui/button";
import Upload from "baseui/icon/upload";
import ArrowRight from "baseui/icon/arrow-right";

export default () => (
  <React.Fragment>
    <p>
      <Button>Button One</Button>
    </p>
    <p>
      <Button kind={KIND.secondary}>Button Two</Button>
    </p>
    <p>
      <Button kind={KIND.tertiary}>Button Three</Button>
    </p>
    <p>
      <Button kind={KIND.minimal}>Button Four</Button>
    </p>
    <p>
      <Button size={SIZE.compact}>Button Five</Button>
    </p>
    <p>
      <Button size={SIZE.large}>Button Six</Button>
    </p>
    <p>
      <Button startEnhancer={() => <ArrowRight size={24} />}>
        Button Seven
      </Button>
    </p>
    <p>
      <Button endEnhancer={() => <Upload size={24} />}>Button Eight</Button>
    </p>
    <p>
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                backgroundColor: "darkred"
              };
            }
          }
        }}
      >
        Button Nine
      </Button>
    </p>
    <p>
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                color: "yellow"
              };
            }
          }
        }}
      >
        Button Ten
      </Button>
    </p>
    <p>
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                padding: "30px"
              };
            }
          }
        }}
      >
        Button Eleven
      </Button>
    </p>
    <p>
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                borderWidth: "5px",
                borderStyle: "solid",
                borderColor: "green"
              };
            }
          }
        }}
      >
        Button Twelve
      </Button>
    </p>
  </React.Fragment>
);
