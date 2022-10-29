using System;
using System.Linq;

public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        string[] parts = phoneNumber.Split('-');
        string areaCode = parts.First();
        string prefixCode = parts[1];
        string lastDigits = parts.Last();

        return (areaCode == "212", prefixCode == "555", lastDigits);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        return phoneNumberInfo.IsFake;
    }
}
