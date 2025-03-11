import * as React from "react";
import TestRenderer from "react-test-renderer";

import { ThemedText } from "../ThemedText";

it(`renders correctly`, () => {
  const tree = TestRenderer.create(<ThemedText>Snapshot test!</ThemedText>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
