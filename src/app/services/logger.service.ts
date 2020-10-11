export class LoggerService {

  static isProduction: boolean = false;

  constructor(private source?: string) { }
  static enableProduciton() {
    LoggerService.isProduction = true;
  }
  debug(...object: any[]) {
    this.log(object, console.log)
  }

  info(...object: any[]) {
    this.log(object, console.log);
  }

  warn(...object: any[]) {
    this.log(object, console.warn);
  }

  error(...object: any[]) {
    this.log(object, console.error)
  }

  private log(object: any[], func) {
    if (!LoggerService.isProduction) {
      let logMessage = this.source ? [`[${this.source}]`].concat(object) : object;
      func.apply(console, logMessage);
    }
  }

}
