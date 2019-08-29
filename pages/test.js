import * as React from "react";
import { Button, KIND, SIZE } from "baseui/button";
import Upload from "baseui/icon/upload";
import ArrowRight from "baseui/icon/arrow-right";
import { Input } from "baseui/input";
import { Slider } from "baseui/slider";
import { Notification, KIND as NOTKIND } from "baseui/notification";
import { Heading, HeadingLevel } from "baseui/heading";
import { Paragraph1 } from "baseui/typography";

export default () => (
  <React.Fragment>
    <p>
      <Button>Button One</Button>
    </p>
    <p>
      <Button kind={KIND.secondary}>Button Two</Button>
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
    <p>
      <div
        style={{ fontFamily: "Arial", marginLeft: "1px", marginRight: "21px" }}
      >
        Arial
      </div>
    </p>
    <p>
      <Input value="Hello" />
      <Input
        value="Hello"
        overrides={{
          Input: {
            style: ({ $theme }) => {
              return {
                backgroundColor: "lightblue"
              };
            }
          }
        }}
      />
    </p>
    <p>
      <Slider value={[20]} />
    </p>
    <p>
      <Slider
        value={[10]}
        overrides={{
          Thumb: {
            style: {
              width: "40px",
              backgroundColor: "yellow"
            }
          }
        }}
      />
    </p>
    <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "23px" }}>
      Strange typo
    </p>
    <p>
      <Notification>Default info notification</Notification>
      <Notification kind={NOTKIND.positive}>
        Default info notification
      </Notification>
      <Notification
        overrides={{ Body: { style: { width: "200px", padding: "13px" } } }}
        kind={NOTKIND.warning}
      >
        Default info notification
      </Notification>
    </p>
    <HeadingLevel>
      <Heading>Base Web [L1]</Heading>
      <Paragraph1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        fermentum velit ante, ac fringilla nulla pulvinar in. Aenean ut nisi
        mattis, lobortis purus vel, aliquet ante. In vel viverra lectus. Vivamus
        a diam faucibus, rutrum quam a, varius felis. Sed pellentesque sodales
        libero commodo vestibulum. Phasellus convallis gravida tempor. Sed ut
        bibendum nisl.
      </Paragraph1>
    </HeadingLevel>
  </React.Fragment>
);
