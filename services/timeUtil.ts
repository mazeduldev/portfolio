import { Duration } from "../model/work-experience"

export default class TimeUtil {
  static months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  static getMonth = (date: Date): string => {
    return TimeUtil.months[date.getMonth()]
  }

  static formatDuration = (duration: Duration): string => {
    const start = `${TimeUtil.getMonth(duration.start)} ${duration.start.getFullYear()}`
    if (!duration.end) {
      return `${start} - Present`
    }
    const end = `${TimeUtil.getMonth(duration.end)} ${duration.end.getFullYear()}`
    return `${start} - ${end}`
  }
}
