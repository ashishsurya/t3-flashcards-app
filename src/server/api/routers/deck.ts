import { createTRPCRouter, protectedProcedure } from "../trpc";
import z from "zod";

export const decksRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1, { message: "Deck title cannot be empty..." }),
      })
    )
    .mutation(({ ctx, input }) =>
      ctx.prisma.deck.create({
        data: {
          title: input.title,
          author: { connect: { id: ctx.session.user.id } },
        },
      })
    ),
  getDecks: protectedProcedure.query(({ ctx }) =>
    ctx.prisma.deck.findMany({
      where: { authorId: ctx.session.user.id },
      orderBy: [{ createdAt: "desc" }],
      include: { _count: true },
    })
  ),
});
