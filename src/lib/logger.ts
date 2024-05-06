import pino from "pino";
import pretty from "pino-pretty";
import { env } from "@/lib/env";

const stream = pretty({
	colorize: true,
	ignore: "pid,hostname",
});

export const logger = pino({ level: env.LOG_LEVEL }, stream);
