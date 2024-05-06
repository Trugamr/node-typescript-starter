import { z } from "zod";

export const env = z
	.object({
		NODE_ENV: z.enum(["development", "production"]).default("development"),
		LOG_LEVEL: z
			.enum(["trace", "debug", "info", "warn", "error", "fatal"])
			.default("info"),
	})
	.parse(process.env);
