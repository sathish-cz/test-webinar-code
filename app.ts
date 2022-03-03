#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { PipelineStackNew } from './pipelines_webinar/pipeline_stack';

const app = new App();

new PipelineStackNew(app, 'PipelineStackNew');

app.synth();
