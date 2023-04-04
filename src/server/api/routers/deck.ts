import { createTRPCRouter, protectedProcedure } from "../trpc";
import z from "zod";

export const decksRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const deck = await ctx.prisma.deck.create({
        data: {
          title: input.title,
          author: { connect: { id: ctx.session.user.id } },
        },
      });

      return deck;
    }),
  getDecks: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.deck.findMany({ where: { authorId: ctx.session.user.id } })
  ),
});
