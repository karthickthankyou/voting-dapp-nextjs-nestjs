import { Injectable } from '@nestjs/common'
import { FindManyReportArgs, FindUniqueReportArgs } from './dto/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateReportInput } from './dto/create-report.input'

export type GroupByPersonalitiesType = {
  _count: number
  personalityId: number
}[]

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createReportInput: CreateReportInput, address: string) {
    return this.prisma.report.create({
      data: { ...createReportInput, reporter: address },
    })
  }

  findAll(args: FindManyReportArgs) {
    const take = args.take || 12
    return this.prisma.report.findMany({ ...args, take })
  }

  findOne(args: FindUniqueReportArgs) {
    return this.prisma.report.findUnique(args)
  }
  async groupByPersonalities(
    take = 12,
    skip = 0,
  ): Promise<GroupByPersonalitiesType> {
    const byPersonality = await this.prisma.report.groupBy({
      by: ['personalityId'],
      _count: {
        personalityId: true,
      },
      take,
      skip,
      orderBy: {
        _count: {
          personalityId: 'desc',
        },
      },
    })
    console.log(byPersonality)
    return byPersonality.map(({ _count, personalityId }) => ({
      _count: _count.personalityId,
      personalityId,
    }))
  }
}
