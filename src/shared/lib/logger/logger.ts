import { env } from '@/shared/config';

type LogLevel = 'info' | 'warn' | 'error';

interface LogContext {
  scope?: string;
  message?: string;
  error?: unknown;
  meta?: Record<string, unknown>;
}

class Logger {
  private formatMessage(level: LogLevel, context: LogContext): string {
    const scope = context.scope ? `[${context.scope}]` : '';
    const message = context.message ?? '';

    return `[${level.toUpperCase()}] ${scope} ${message}`;
  }

  private extractError(error: unknown): string | undefined {
    if (!error) return undefined;

    if (error instanceof Error) {
      return error.message;
    }

    if (typeof error === 'string') {
      return error;
    }

    try {
      return JSON.stringify(error);
    } catch {
      return 'Unknown error';
    }
  }

  private log(level: LogLevel, context: LogContext) {
    const baseMessage = this.formatMessage(level, context);
    const errorMessage = this.extractError(context.error);

    const payload = {
      ...context.meta,
      error: errorMessage,
    };

    if (env.DEV) {
      switch (level) {
        case 'info':
          console.info(baseMessage, payload);
          break;
        case 'warn':
          console.warn(baseMessage, payload);
          break;
        case 'error':
          console.error(baseMessage, payload);
          break;
      }
      return;
    }

    if (env.PROD && level === 'error') {
      console.error(baseMessage);
    }
  }

  info(context: LogContext) {
    this.log('info', context);
  }

  warn(context: LogContext) {
    this.log('warn', context);
  }

  error(context: LogContext) {
    this.log('error', context);
  }
}

export const logger = new Logger();
