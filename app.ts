#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { NodeJsPipelineStack } from './pipelines_webinar/pipeline_stack';

const app = new App();

new NodeJsPipelineStack(app, 'NodeJsPipelineStack');

app.synth();
