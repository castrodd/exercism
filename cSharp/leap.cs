using System;

public static class Leap
{
    public static bool IsLeapYear(int year)
    {
        if (year % 4 == 0) {
            return (year % 100 == 0) ? (year % 400 == 0) ? true : false : true;
        }
        return false;
    }
}