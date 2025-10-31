import { drizzle } from "drizzle-orm/d1";
import * as schema from "../src/db/schema";
import { env as rawEnv } from "cloudflare:workers";


const env = rawEnv as Env & { DB: D1Database };

export const db = drizzle(env.DB, { schema });
