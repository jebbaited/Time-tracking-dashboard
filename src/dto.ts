export type Time = {
  current: number
  previous: number
}

export type Data = {
  title: string
  timeframes: {
    daily: Time
    weekly: Time
    monthly: Time
  }
}
