import { WinstonModule } from 'nest-winston';
import { hostname } from 'os';
import { format, transports } from 'winston';
import SentryTransport, {
  SentryTransportOptions,
} from 'winston-transport-sentry-node';

export function createLogger() {
  const sentryOptions: SentryTransportOptions = {
    sentry: {
      dsn: process.env.SENTRY_DNS,
      environment: process.env.ENV || 'DEV',
      serverName: hostname(),
      release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
    },
  };

  const formatter = format.combine(
    format.simple(),
    format.colorize({ all: true }),
  );

  const consoleOptions = {
    format: formatter,
  };

  return WinstonModule.createLogger({
    transports: [
      new transports.Console(consoleOptions),
      new SentryTransport(sentryOptions),
    ] as any[],
  });
}
