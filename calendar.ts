type Day = {
	date: string,
	day: number,
	dayLabel: string,
	dayLabelShort: string
	month: number,
	monthLabel: string,
	monthLabelShort: string
	year: number
}

export const monthLabel = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthLabelShort = monthLabel.map((m: string) => m.substring(0, 3))

export const dayLabel = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const dayLabelShort = dayLabel.map((d: string) => d.substring(0, 3));

export default class CalendarUtils {
	private presentYear = new Date().getFullYear();
	private presentMonth = new Date().getMonth();

	public getFirstDayDigit(yearDigit: number, monthDigit: number): number {
		return new Date(yearDigit, monthDigit - 1).getDay()
	}

	public getDaysInMonthCount(yearDigit: number, monthDigit: number) {
		return 32 - new Date(yearDigit, monthDigit - 1, 32).getDate()
	}

	public getMonthDays(year: number, month: number): Day[] {
		let days: Day[] = [];
		let firstDay = this.getFirstDayDigit(year, month);
        for (let i = 1; i <= this.getDaysInMonthCount(year, month); i++) {
			days.push(
				{
					date: i+'/'+month+'/'+year,
					day: i,
					dayLabel: dayLabel[firstDay],
					dayLabelShort: dayLabelShort[firstDay],
					month: month,
					monthLabel: monthLabel[month - 1],
					monthLabelShort: monthLabelShort[month - 1],
					year: year 
				}
			)
			firstDay++;
			if (firstDay > 6) {
				firstDay = 0;
			}
		}
		return days
	}

	public presentMonthFirstDayDigit(): number {
		return this.getFirstDayDigit(this.presentYear, this.presentMonth)
	}

	public presentMonthDaysCount(): number {
		return this.getDaysInMonthCount(this.presentYear, this.presentMonth)
	}

	public presentMonthDays() {
		return this.getMonthDays(this.presentYear, this.presentMonth)
	}

	public nextMonthFirstDayDigit(): number {
		if (this.presentMonth == 11) {
			return this.getFirstDayDigit(this.presentYear + 1, 1)
		}
		return this.getFirstDayDigit(this.presentYear, this.presentMonth + 1)
	}

	public nextMonthDaysCount(): number {
		if (this.presentMonth == 11) {
			return this.getDaysInMonthCount(this.presentYear + 1, 1)
		}
		return this.getDaysInMonthCount(this.presentYear, this.presentMonth + 1)
	}

	public nextMonthDays() {
		if (this.presentMonth == 11) {
			return this.getMonthDays(this.presentYear + 1, 1)
		}
		return this.getMonthDays(this.presentYear, this.presentMonth + 1)
	}

	public previousMonthFirstDayDigit(): number {
		if (this.presentMonth == 0) {
			return this.getFirstDayDigit(this.presentYear - 1, 12)
		}
		return this.getFirstDayDigit(this.presentYear, this.presentMonth - 1)
	}

	public previousMonthDaysCount(): number {
		if (this.presentMonth == 0) {
			return this.getDaysInMonthCount(this.presentYear - 1, 12)
		}
		return this.getDaysInMonthCount(this.presentYear, this.presentMonth - 1)
	}

	public previousMonthDays() {
		if (this.presentMonth == 0) {
			return this.getMonthDays(this.presentYear - 1, 12)
		}
		return this.getMonthDays(this.presentYear, this.presentMonth - 1)
	}
}