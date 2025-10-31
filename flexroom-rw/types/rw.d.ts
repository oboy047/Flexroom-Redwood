import { AppContext } from "../src/worker";

declare module "rwsdk/worker" {
  interface DefaultAppContext extends AppContext {}
}
export {};

declare global {
  interface Env {
    DB: D1Database;
    CLOUDFLARE_ACCOUNT_ID?: string;
    CLOUDFLARE_DATABASE_ID?: string;
    CLOUDFLARE_D1_TOKEN?: string;
  }
}
