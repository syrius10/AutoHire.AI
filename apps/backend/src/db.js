import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();    // ✅ Load environment variables

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20, // ✅ Allow up to 20 concurrent connections
    idleTimeoutMillis: 30000, // ✅ Close idle connections after 30s
    connectionTimeoutMillis: 2000, // ✅ Timeout if connection takes too long
  });