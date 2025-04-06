import { prisma } from "@/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        accounts: {
          select: { type: true },
        },
      },
    });
    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return Response.json({
      message: "Usuário encontrado com sucesso!",
      user,
    });
  } catch (error: any) {
    console.log(error.message);
    return Response.json({
      message: error.message,
      user: null,
    });
  }
}
