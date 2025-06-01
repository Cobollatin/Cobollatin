import * as Sentry from '@sentry/astro';
import dotenv from 'dotenv';

dotenv.config({
  path: ['.env.production', '.env.preview', '.env.local', '.env'],
});
const environment = process.env;
const vercel_enviroment = environment['VERCEL_ENV'];
let env = 'development';
if (vercel_enviroment) {
  env = vercel_enviroment;
}

Sentry.init({
  dsn: 'https://48d91fded7fe61b194b9d40ab5e473ab@o4509420739690496.ingest.us.sentry.io/4509420744343552',
  environment: env,
  integrations: [Sentry.replayIntegration()],
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/astro/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  tracesSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
});
