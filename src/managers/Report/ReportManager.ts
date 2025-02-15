import Express from 'express'
import { BacktestResults, DataSource, DataSourceType } from '@/types'
import { generateMD5Id } from '@/utils/generateId'
import QuickChart from 'quickchart-js'
import { TRADE_KEY } from '@/types'
import path from 'path'
import { Strategy } from '@/lib'

export class ReportManager {
  private readonly app = Express()
  private readonly PORT = 2555
  private readonly viewsPath: string

  constructor() {
    this.viewsPath = new URL('./', import.meta.url).pathname
    this.initializeApp()
  }

  private initializeApp() {
    this.app.use(Express.json())
    this.app.set('views', this.viewsPath)
    this.app.use(Express.static(this.viewsPath))
    this.app.listen(this.PORT, () => {
      console.log(`Report server listening on port ${this.PORT}`)
    })
  }

  public generateReport(
    strategy: Strategy,
    reportData: BacktestResults['reportData'],
  ) {
    const reportId = generateMD5Id()
    const { trades, data } = reportData
    const reportRouter = Express.Router()

    const priceData = data.filter((e) => e.type === DataSourceType.PRICE)
    const factorData = data.filter((e) => e.type === DataSourceType.FACTOR)

    reportRouter.get('/price-data', (_, res) => {
      res.json(priceData)
    })
    reportRouter.get('/factor-data', (_, res) => {
      res.json(factorData)
    })
    reportRouter.get('/trade-data', (_, res) => {
      res.json(trades)
    })
    reportRouter.get('/', (_, res) => {
      const buildPath = path.join(this.viewsPath, 'build/index.html').replace('\\C', 'C')
      res.sendFile(buildPath)
    })

    this.app.use(`/${reportId}`, reportRouter)

    console.log(
      `Report for ${strategy.name}: http://localhost:${this.PORT}/${reportId}`,
    )
  }
}
