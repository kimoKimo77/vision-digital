import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("AWS deployment uses S3 and CloudFront with OIDC, not ECS", async () => {
  const workflow = await read("../.github/workflows/aws.yml");
  assert.match(workflow, /id-token: write/);
  assert.match(workflow, /pull_request:/);
  assert.match(workflow, /if: github.event_name == .workflow_dispatch./);
  assert.match(workflow, /configure-aws-credentials/);
  assert.match(workflow, /aws s3 sync/);
  assert.match(workflow, /cloudfront create-invalidation/);
  assert.doesNotMatch(workflow, /ECS_SERVICE|ECS_CLUSTER|ECR_REPOSITORY/);
  assert.match(workflow, /node --test tests\/\*\.test\.mjs/);
});

test("deployment generates public Supabase config without committing credentials", async () => {
  const workflow = await read("../.github/workflows/aws.yml");
  assert.match(workflow, /SUPABASE_URL/);
  assert.match(workflow, /SUPABASE_PUBLISHABLE_KEY/);
  assert.match(workflow, /writeFile\('auth-config\.js'/);
  assert.match(workflow, /service-role keys here/i);
});

test("CloudFormation keeps S3 private and uses CloudFront OAC", async () => {
  const template = await read("../infra/static-site.yml");
  assert.match(template, /BlockPublicPolicy: true/);
  assert.match(template, /RestrictPublicBuckets: true/);
  assert.match(template, /AWS::CloudFront::OriginAccessControl/);
  assert.match(template, /AWS::CloudFront::ResponseHeadersPolicy/);
  assert.match(template, /redirect-to-https/);
  assert.doesNotMatch(template, /WebsiteConfiguration:/);
  assert.doesNotMatch(template, /DependsOn:\n\s+- SiteBucketPolicy/);
});
