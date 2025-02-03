import * as core from "@actions/core";
import * as github from "@actions/github";

try {
  const name = core.getInput("name");
  const outputValue = `Hello ${name}`;
  core.setOutput("salutation", outputValue);
  const time = new Date().toTimeString();
  core.setOutput("time", time);  
} catch (error) {
  core.setFailed(error.message);
}
