import path from 'path'
import fs from 'fs'
import { BacktestResults, DataSource } from '@/types'

export class ReportManager {
  private reportsDirectory: string = path.join(process.cwd(), 'reports')

  constructor() {
    this.createReportsDirectory()
  }

  private createReportsDirectory() {
    if (!fs.existsSync(this.reportsDirectory)) {
      fs.mkdirSync(this.reportsDirectory)
    }
  }

  private installReportDirectory(reportName: string, dataSources: DataSource[]) {}
   

  public generateReport(backtestResults: BacktestResults) {
    
  }
}
