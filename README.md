**What calendar-utils is**: This is a minimal library providing essential methods to easily create a calendar or something you may need accurate dates for

**What calendar-utils isn't**: This isn't a fully built calendar UI.

**But Why**: Honestly i needed it for something and thought someone might too.

## Usage
```typescript
const calendar = new CalendarUtils();

// core methods
// get first day digit
calendar.getFirstDayDigit(2020, 3);

// get an array containing information about every day in a month
calendar.getMonthDays(2020, 4);

// helper methods
calendar.presentMonthFirstDayDigit();
calendar.presentMonthDaysCount();
calendar.presentMonthDays()
calendar.nextMonthFirstDayDigit()
calendar.nextMonthDaysCount()
calendar.nextMonthDays()
calendar.previousMonthFirstDayDigit()
calendar.previousMonthDaysCount()
calendar.previousMonthDays()
```

## Missed something or there's a bug?

Please feel free to create an issue.