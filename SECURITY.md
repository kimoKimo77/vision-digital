# Security and authentication setup

## Authentication provider

This project is a static HTML site. The added login/account pages use Supabase Auth; they do not create a trusted backend by themselves.

1. Create a Supabase project.
2. In Authentication settings, configure the site URL and redirect URLs for the deployed site's exact HTTPS origin, including `/account.html`.
3. Configure email confirmation and password reset behavior for the intended production policy.
4. Set the project's URL and **publishable/anon key** in `auth-config.js`. The browser key is public by design; never put a `service_role` key or other privileged secret in browser files or Git.
5. Test signup, email confirmation, login, password reset, session refresh, and logout on the deployed HTTPS site.

## Important limitations

- `account.html` is a client-side page guard, not a security boundary. A user can request static HTML directly. Never place private data in static files.
- Protect data with Supabase Row Level Security (RLS) policies and server-side authorization. Enable RLS for every table exposed through the API and write policies for the intended user roles.
- Supabase browser sessions persist in browser storage by the client library. Any same-origin XSS can compromise a session. Avoid unsafe HTML injection, add restrictive security headers at the hosting layer, and audit third-party scripts.
- Do not use a service-role key in the browser.
- Configure rate limits, email delivery, abuse monitoring, and MFA as appropriate for the risk profile.
- Do not expose auth tokens in URLs, logs, analytics, or error messages.

## AWS deployment

The deployment workflow now requests short-lived AWS credentials via GitHub OIDC instead of static AWS access-key secrets. Configure these GitHub Actions **repository/environment variables**:

- `AWS_REGION`
- `AWS_ROLE_ARN`
- `ECR_REPOSITORY`
- `ECS_SERVICE`
- `ECS_CLUSTER`
- `ECS_TASK_DEFINITION` (path inside the repository)
- `CONTAINER_NAME`

Configure the AWS IAM OIDC provider for `https://token.actions.githubusercontent.com`, audience `sts.amazonaws.com`, and an IAM role trust policy scoped to this repository, the `main` branch, and the `production` environment as appropriate. Grant only the permissions required for ECR push and ECS task-definition/service deployment.

The workflow intentionally fails before deployment until all variables are configured and both `Dockerfile` and the ECS task-definition file exist. The current repository is static HTML and does not currently contain a Dockerfile or ECS task definition. Decide whether ECS is actually the target; for static hosting, a static deployment (for example, S3 + CloudFront or GitHub Pages) is simpler.

## Before production

- Configure HTTPS and security headers at the hosting layer (CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, and an appropriate `frame-ancestors` policy).
- Pin third-party GitHub Actions to verified full commit SHAs and review upgrades.
- Protect the `main` branch and production environment with required reviewers where available.
- Run dependency, secret, and workflow security scans. Never commit real credentials.
