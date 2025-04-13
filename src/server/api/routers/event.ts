import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { eventsTable } from "~/server/db/schema";

const newEventSchema = z.object({
  name: z
    .string()
    .max(100, "The name of the event must be 100 characters or less"),
  description: z.string(),
  startAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date-time format for startAt",
    })
    .transform((val) => new Date(val)),
  endAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date-time format for endAt",
    })
    .transform((val) => new Date(val)),
  location: z.number(),
  createdBy: z.string(),
});

export const eventsRouter = createTRPCRouter({
  create: publicProcedure
    .input(newEventSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(eventsTable).values(input);
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const event = await ctx.db.query.eventsTable.findFirst({
        where: (events, { eq }) => eq(events.id, input.id),
      });

      return event ?? null;
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const events = await ctx.db.query.eventsTable.findMany({
      orderBy: (events, { desc }) => [desc(events.createdAt)],
      limit: 10,
    });

    return events ?? null;
  }),
});
