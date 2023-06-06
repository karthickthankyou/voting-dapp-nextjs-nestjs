import { Module } from '@nestjs/common'
import { ReportsService } from './reports.service'
import { ReportsResolver } from './reports.resolver'
import { EthersModule } from 'src/ethers/ethers.module'

@Module({
  imports: [EthersModule],
  providers: [ReportsResolver, ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
