using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Response(string statement)
    {
        bool hasLetters = Regex.IsMatch(statement, @"[a-zA-Z]");
        bool isQuestion = statement.Trim().EndsWith("?");
        bool isYelling = hasLetters && statement == statement.ToUpper();

        if (String.IsNullOrEmpty(statement.Trim())) return "Fine. Be that way!";
        if (isQuestion && isYelling) return "Calm down, I know what I'm doing!";
        if (isQuestion) return "Sure.";
        if (isYelling) return "Whoa, chill out!";
        
        return "Whatever.";
    }
}