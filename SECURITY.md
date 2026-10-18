# Security and authentication setup

## Authentication provider

This project is a static HTML site. The added login/account pages use Supabase Auth; they do not create a trusted backend by themselves.

1. Create a Supabase project.
2. In Authentication settings, configure the site URL and redirect URLs for the deployed site's exact HTTPS origin, including `/account.html`.
3. Explicitly enable **Email Confirmations** in Supabase Auth. Configure password reset behavior and verify that confirmation emails arrive before production use.
4. Set the project's URL and **publishable/anon key** in `auth-config.js`. The browser key is public by design; never put a `service_role` key or other privileged secret in browser files or Git.
5. Test signup, email confirmation, login, password reset, session refresh, and logout on the deployed HTTPS site.

## Important limitations

- `account.html` is a client-side page guard, not a security boundary. A user can request static HTML directly. Never place private data in static files.
- Protect data with Supabase Row Level Security (RLS) policies and server-side authorization. Enable RLS for every table exposed through the API and write policies for the intended user roles.
- Supabase browser sessions persist in browser storage by the client library. Any same-origin XSS can compromise a session. Avoid unsafe HTML injection, add restrictive security headers at the hosting layer, and audit third-party scripts.
- Do not use a service-role key in the browser.
- Configure rate limits, email delivery, abuse monitoring, and MFA as appropriate for the risk profile.
- Do not expose auth tokens in URLs, logs, analytics, or error messages.

## AWS S3 + CloudFront deployment

The workflow `.github/workflows/aws.yml` deploys the static site to a private S3 bucket and invalidates CloudFront using short-lived GitHub OIDC credentials. The CloudFormation template at `infra/static-site.yml` provisions the bucket, CloudFront OAC, and baseline security response headers. Review the template and deploy it to your AWS account before enabling deployment.

Set GitHub `production` environment variables: `AWS_REGION`, `AWS_ROLE_ARN`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`, `SUPABASE_URL`, and `SUPABASE_PUBLISHABLE_KEY`. The public Supabase publishable/anon key is injected into `auth-config.js` at deploy time and is not committed. Never use a service-role key in the browser.

Configure the AWS IAM OIDC provider (`https://token.actions.githubusercontent.com`, audience `sts.amazonaws.com`) and restrict the role trust policy to this repository, branch `main`, and the `production` environment. Grant only `s3:ListBucket` and required `s3:PutObject`/`s3:DeleteObject` permissions for the target bucket, plus `cloudfront:CreateInvalidation` for the specific distribution. Configure CloudFront origin access control and keep S3 public access blocked.

## Supabase data access

An example `public.profiles` table and owner-only RLS policies are provided in `supabase/schema.sql`. Review the schema for your data model before applying it in Supabase SQL Editor or migrations. RLS must be enabled on every exposed table; a policy on `profiles` does not protect other tables. Never grant browser users access to secrets or privileged service-role credentials.

The repository includes static regression checks in `tests/auth-security.test.mjs`. These tests do not replace live integration tests against a configured Supabase project.

## Before production

- Configure HTTPS and security headers at the hosting layer (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and an appropriate `frame-ancestors` policy).
- Pin third-party GitHub Actions to verified full commit SHAs and review upgrades.
- Protect the `main` branch and production environment with required reviewers where available.
- Run dependency, secret, and workflow security scans. Never commit real credentials.
