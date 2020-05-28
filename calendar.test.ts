import {describe, it, expect} from '@jest/globals';
import CalendarUtils from './calendar';

const calendar = new CalendarUtils();

describe('Calendar utils', () => {
    it('returns first correct first month digit', () => {
        expect(calendar.getFirstDayDigit(2020, 5)).toEqual(5)
    })

    it('returns correct total number of days', () => {
        expect(calendar.getDaysInMonthCount(2020, 5)).toEqual(31)
    })
})