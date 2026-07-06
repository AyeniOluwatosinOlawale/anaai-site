import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.05,
  integrations: [Sentry.replayIntegration()],
  environment: process.env.NODE_ENV,
  allowUrls: [
    /https:\/\/www\.anaai\.tech/,
    /https:\/\/anaai\.tech/,
    /https:\/\/www\.anaaiconsult\.co\.uk/,
    /https:\/\/anaaiconsult\.co\.uk/,
  ],
})
