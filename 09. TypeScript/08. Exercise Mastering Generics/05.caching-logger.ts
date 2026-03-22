enum LoggingLevel {
  Info = "Info",
  Error = "Error",
  Warning = "Warning",
  Debug = "Debug",
}

enum LoggingFormat {
  Standard = "[%level][%date] %text",
  Minimal = "*%level* %text",
}

interface CachingLogger<T extends LoggingLevel, V extends LoggingFormat> {
  cachedLogs: Map<T, string[]>;
  log(logLevel: T, message: string): void;
  getFormat(): V;
}

class Logger<
  T extends LoggingLevel,
  V extends LoggingFormat,
> implements CachingLogger<T, V> {
  cachedLogs: Map<T, string[]> = new Map();
  private format: V;

  constructor(format: V) {
    this.format = format;
  }

  log(logLevel: T, message: string): void {
    const currentDate = new Date().toISOString();
    const formattedMessage = this.format
      .replace("%level", logLevel)
      .replace("%date", currentDate)
      .replace("%text", message);

    console.log(formattedMessage);

    if (this.cachedLogs.has(logLevel)) {
      const currentMessages = this.cachedLogs.get(logLevel)!;
      currentMessages?.push(formattedMessage);
      this.cachedLogs.set(logLevel, currentMessages);
    } else {
      this.cachedLogs.set(logLevel, [formattedMessage]);
    }
  }

  getFormat(): V {
    return this.format;
  }
}

// let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Standard);
// logger.log(LoggingLevel.Info, "This is an info message.");
// logger.log(LoggingLevel.Info, "Another message.");
// logger.log(LoggingLevel.Error, "Something went wrong.");
// logger.log(LoggingLevel.Warning, "Be careful with the type assertions.");
// logger.log(LoggingLevel.Debug, "Running the debugger.");

// console.log("-----------");
// console.log(
//   [...logger.cachedLogs.entries()].map((x) => x[1].join("\n")).join("\n"),
// );

console.log(`-------------------------------`);
let logger = new Logger<LoggingLevel, LoggingFormat>(LoggingFormat.Minimal);
logger.log(LoggingLevel.Info, "Just a simple message.");
logger.log(LoggingLevel.Error, "A Problem happened.");
console.log("-----------");
console.log(logger.getFormat());
console.log(
  [...logger.cachedLogs.entries()].map((x) => x[1].join("\n")).join("\n"),
);
