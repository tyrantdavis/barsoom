import * as core from "@actions/core";

const name = core.getInput("name");
const outputValue = `Hello ${name}`;
core.setOutput("salutation", outputValue);
  