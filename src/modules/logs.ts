import * as fs from "fs";
import * as path from "path";

export type LogLevel = "info" | "warning" | "error";

export async function log(filename: string, message: string, level: LogLevel = "info"): Promise<void> {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

  try {
    // Ensure the logs directory exists
    const logsDir = path.join(__dirname, "..", "..", "log"); // Adjust the path as needed
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    const logFilePath = path.join(logsDir, filename);
    await fs.promises.appendFile(logFilePath, logMessage, { encoding: "utf8" });
  } catch (error: any) {
    console.error(`Error writing to log file ${filename}:`, error.message);
  }
}