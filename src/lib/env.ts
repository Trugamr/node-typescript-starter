import { z } from "zod";

export const env = z
	.object({
		NODE_ENV: z.enum(["development", "production"]),
		LOG_LEVEL: z
			.enum(["trace", "debug", "info", "warn", "error", "fatal"])
			.default("info"),
	})
	.parse(process.env);
