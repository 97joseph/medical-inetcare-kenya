#!/usr/bin/env node

// Load environment variables FIRST - this must be at the very top
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' }); // Explicitly specify .env file path

// Debug: Verify environment variables are loaded (optional)
console.log('[DEBUG] JWT_SECRET loaded:', process.env.JWT_SECRET ? 'Yes' : 'No');

async function main() {
  try {
    // Verify required environment variables
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET environment variable is not set');
    }

    // Create a new actionhero process
    const { Process } = await import('actionhero');
    const app = new Process();

    // Handle unix signals and uncaught exceptions & rejections
    app.registerProcessSignals((exitCode) => {
      process.exit(exitCode);
    });

    // Start the app
    await app.start();

    console.log('Server started successfully');
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
}

// Execute main function
main();