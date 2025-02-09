import { Strategy } from '@/lib/Strategy'
import { BacktestResults } from '@/types'
import { generateMD5Id } from '@/utils/generateId'
import fs from 'fs'
import path from 'path'

export class ReportManager {
  public reportsPath = path.join(process.cwd(), 'reports')

  public createReportDirectory() {
    if (!fs.existsSync(this.reportsPath)) {
      fs.mkdirSync(this.reportsPath)
    }
  }

  public generateReport(
    
  ) {
    /**
     * TODO: 
     * - make a reports folder 
     * - make a config.json with properties: reportId, dataSources 
     * - make a json file for each dataSource that will be charted in the specific report folder
     * - clone html file  
     */
    const reportId = generateMD5Id(); 
    const reportFolderPath = path.join(this.reportsPath, reportId)

    if (!fs.existsSync(reportFolderPath)) {
      fs.mkdirSync(reportFolderPath)
    }
   
  }
}
