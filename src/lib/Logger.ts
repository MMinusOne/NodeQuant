import chalk from 'chalk'

export class Logger {
  public success(payload: string) {
    console.log(chalk.green(payload))
  }
  public debug(payload: any) {
    console.log(payload)
  }
  public info(payload: string) {
    console.log(chalk.cyan(payload))
  }
  public warn(payload: string) {
    console.log(chalk.yellow(payload))
  }
  public error(payload: string) {
    console.log(chalk.red(payload))
  }
}

export const logger = new Logger();