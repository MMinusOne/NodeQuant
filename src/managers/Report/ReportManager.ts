import path from 'path'
import fs from 'fs'
import { BacktestResults, DataSource } from '@/types'
import { generateMD5Id } from '@/utils/generateId'
import QuickChart from 'quickchart-js'
import { TRADE_KEY } from '@/types'

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

  private installReportDirectory(reportData: BacktestResults['reportData']) {
    const reportId = generateMD5Id()
    const reportPath = this.reportsDirectory.concat(`/`).concat(reportId)

    const registar: {
      dataSources: string[]
      trades: string
    } = {
      dataSources: [],
      trades: reportPath.concat('/').concat('trades.json'),
    }

    fs.mkdirSync(reportPath)

    for (const dataSource of reportData.data) {
      const dataSourcePath = reportPath
        .concat('/')
        .concat(dataSource.name.concat('.json'))
      registar.dataSources.push(dataSourcePath)
      fs.writeFileSync(dataSourcePath, JSON.stringify(dataSource))
    }

    fs.writeFileSync(registar.trades, JSON.stringify(reportData.trades))

    fs.writeFileSync(
      reportPath.concat('/registar.json'),
      JSON.stringify(registar),
    )
    return reportPath
  }

  public generateReport(backtestResults: BacktestResults) {
    const reportPath = this.installReportDirectory(backtestResults.reportData)

    const equityGraph = new QuickChart()

    const { trades } = backtestResults.reportData

    // Calculate cumulative equity curve
    let runningEquity = 0
    const equityCurve = trades.map(trade => {
      runningEquity += (trade.getData()[TRADE_KEY.PL] || 0)
      return runningEquity
    })

    equityGraph
      .setWidth(800)
      .setHeight(400)
      .setConfig({
        type: 'line',
        data: {
          labels: trades.map((_, i) => i + 1), // Start from trade #1
          datasets: [
            {
              label: 'Equity Curve',
              data: equityCurve,
              fill: false,
              borderColor: 'rgb(81, 75, 192)',
              tension: 0.1 // Slightly smooth the line
            },
          ],
        },
        options: {
          scales: {
            y: {
              title: {
                display: true,
                text: 'Cumulative Profit/Loss'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Trade Number'
              }
            }
          }
        }
      })

    equityGraph.toFile(reportPath.concat(`/equity_curve.png`))
  }
}
