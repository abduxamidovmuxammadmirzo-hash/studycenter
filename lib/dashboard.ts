import { PaymentStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type DashboardStats = {
  studentCount: number;
  teacherCount: number;
  groupCount: number;
  paymentCount: number;
  paidAmountThisMonth: number;
  overduePaymentCount: number;
};

export type RecentPayment = {
  id: string;
  studentName: string;
  amount: number;
  status: PaymentStatus;
  dueDate: Date;
};

export async function getDashboardStats(): Promise<DashboardStats> {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  const [studentCount, teacherCount, groupCount, paymentCount, overduePaymentCount, paidAmountAggregate] =
    await prisma.$transaction([
      prisma.student.count(),
      prisma.teacher.count(),
      prisma.group.count(),
      prisma.payment.count(),
      prisma.payment.count({
        where: {
          status: PaymentStatus.OVERDUE,
        },
      }),
      prisma.payment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          status: PaymentStatus.PAID,
          paidAt: {
            gte: startOfMonth,
            lt: startOfNextMonth,
          },
        },
      }),
    ]);

  return {
    studentCount,
    teacherCount,
    groupCount,
    paymentCount,
    overduePaymentCount,
    paidAmountThisMonth: paidAmountAggregate._sum.amount ?? 0,
  };
}

export async function getRecentPayments(limit = 5): Promise<RecentPayment[]> {
  const payments = await prisma.payment.findMany({
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      student: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  return payments.map((payment) => ({
    id: payment.id,
    studentName: `${payment.student.firstName} ${payment.student.lastName}`,
    amount: payment.amount,
    status: payment.status,
    dueDate: payment.dueDate,
  }));
}
