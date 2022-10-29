using System;

static class AssemblyLine
{
    private static readonly double ratePerHour = 221.0;
    
    public static double SuccessRate(int speed)
    {
        if (speed == 0) return 0;
        if (speed < 5) return 1.0;
        if (speed < 9) return 0.9;
        if (speed < 10) return 0.8;
        return 0.77; 
    }
    
    public static double ProductionRatePerHour(int speed) =>
        ratePerHour*speed*AssemblyLine.SuccessRate(speed);

    public static int WorkingItemsPerMinute(int speed) =>
        (int)(AssemblyLine.ProductionRatePerHour(speed)/60);
}
