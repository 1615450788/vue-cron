import { createStore } from './utils/hookstroe';

type IName = 'second' | 'minute' | 'hour' | 'dayofMonth' | 'month' | 'dayofWeek' | 'year'

const commonRegMap = /[0-9,\-*/]+/;

const RegMap = {
  second: commonRegMap,
  minute: commonRegMap,
  hour: commonRegMap,
  month: /[0-9,\-*/\?LWC]+/,
  dayofMonth: commonRegMap,
  dayofWeek: /[0-9,\-*/\?LC#]+/,
  year: commonRegMap,
}

function check(name: IName, cb: Function) {
  return (value: string) => {
    if (value === undefined) return
    if (RegMap[name]?.test(value)) {
      return cb()
    } else {
      throw new Error(`error ${name}, is not match RegExp:${RegMap[name]}`)
    }
  }
}

export const useCron = createStore((set: any, get: any) => ({
  second: "*",
  minute: "*",
  hour: "*",
  dayofMonth: "*",
  month: "*",
  dayofWeek: "?",
  year: "*",
  setSecond: check('second', (second: string) => {
    set({ second });
  }),
  setMinute: check('minute', (minute: string) => {
    set({ minute });
  }),
  setHour: check('hour', (hour: string) => {
    set({ hour });
  }),
  setdayofMonth: check('dayofMonth', (dayofMonth: string) => {
    const dayofWeek = dayofMonth === '?' ? '*' : '?'
    set({ dayofMonth, dayofWeek });
  }),
  setMonth: check('month', (month: string) => {
    set({ month });
  }),
  setdayofWeek: check('dayofWeek', (dayofWeek: string) => {
    const dayofMonth = dayofWeek === '?' ? '*' : '?'
    set({ dayofWeek, dayofMonth });
  }),
  setYear: check('year', (year: string) => {
    set({ year });
  }),
}));
