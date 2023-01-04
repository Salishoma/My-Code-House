package com.oma;

import java.util.Stack;
import java.util.regex.Pattern;

public class ExpressionParse {
    public static String RE = "\033[0m";
    public static String R = "\033[0;31m";
    public static String G = "\033[0;32m";
    public static String Y = "\033[0;33m";
    public static String B = "\033[0;34m";
    public static String P = "\033[0;35m";
    public static String C = "\033[0;36m";
    public static String W = "\033[0;37m";

    public static void main(String[] args) {
//        System.out.println(postfix("123+*"));
        int a;
        System.out.println(ExpressionParse.R + "color" + ExpressionParse.G);
        System.out.println(postfix("34+56+*"));
    }

    public static double postfix(String exp) {
        int res;
//        ServiceLo
        Stack<String> symbols = new Stack<>();
        Stack<Double> numbers = new Stack<>();
        for (int i = exp.length() - 1; i >=0; i--) {
            String s = String.valueOf(exp.charAt(i));
            if (checkExp(s)) {
                symbols.push(s);
            } else {
                try {
                    numbers.push(Double.parseDouble(s));
                } catch (Exception ex) {

                }
            }
            while (numbers.size() >= 2 && !symbols.isEmpty()) {
                double first = numbers.pop();
                double sec = numbers.pop();
                String sym = symbols.pop();
                double x = resolveExp(first, sec, sym);
//                res += x;
                numbers.push(x);
            }
        }
        return numbers.pop();
    }

    public static boolean checkExp(String exp) {

        switch (exp) {
            case "+": case "-": case "*": case "/": case "^":
            return true;
        }
        return false;
    }

    public static double resolveExp(double first, double sec, String exp) {
        switch (exp) {
            case "+":
                return first + sec;
            case "-":
                return first - sec;
            case "*":
                return first * sec;
            case "/":
                return first / sec;
            case "^":
                return Math.pow(first, sec);
            default:
                return 0;
        }
    }
}
