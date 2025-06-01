import * as Sentry from '@sentry/astro';
import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.production', '.env.preview', '.env.local', '.env'],
});
const environment = process.env;
const vercel_environment = environment['VERCEL_ENV'];
let env = 'development';
if (vercel_environment) {
  env = vercel_environment;
}

const vercel_git_commit_sha = environment['VERCEL_GIT_COMMIT_SHA'];
let release = 'local';
if (vercel_git_commit_sha) {
  release = vercel_git_commit_sha;
}

Sentry.init({
  dsn: 'https://48d91fded7fe61b194b9d40ab5e473ab@o4509420739690496.ingest.us.sentry.io/4509420744343552',
  environment: env,
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  release: `${env}-${release}`,
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  tracesSampleRate: 1.0, // This sets the sample rate at 100%. You may want to change it to 100% while in development and then sample at a lower rate in production.
});
