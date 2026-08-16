import "dotenv/config";
import Database from "better-sqlite3";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../../generated/prisma/client.ts";

const connectionUrl = process.env.DATABASE_URL || "dev.db";

const adapter = new PrismaBetterSqlite3({
  url: connectionUrl
});

const prisma = new PrismaClient({ adapter });

export { prisma };
