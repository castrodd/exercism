using System;
using System.Linq;

public static class LogAnalysis 
{
    public static string SubstringAfter(this string log, string delimiter) =>
        log.Split(delimiter).Last();
    
    public static string SubstringBetween(this string log, string left, string right) =>
        log.Split(left).Last().Split(right).First().Trim();
    
    public static string Message(this string log) =>
        log.Split(':').Last().Trim();
    
    public static string LogLevel(this string log) =>
        log.SubstringBetween("[", "]");
}