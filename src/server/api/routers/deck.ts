import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import z from "zod";

export const decksRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1, { message: "Deck title cannot be empty..." }),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const deckwithSameName = await ctx.prisma.deck.findFirst({
        where: { authorId: ctx.session.user.id, title: input.title },
      });

      if (deckwithSameName) {
        throw new TRPCError({
          message: "Deck with same title already exists.",
          code: "CONFLICT",
        });
      } else {
        const deck = await ctx.prisma.deck.create({
          data: {
            title: input.title,
            author: { connect: { id: ctx.session.user.id } },
          },
        });
        return deck;
      }
    }),
  getDecks: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.deck.findMany({
      where: { authorId: ctx.session.user.id },
      orderBy: [{ createdAt: "desc" }],
      include: { _count: true },
    })
  ),
});
