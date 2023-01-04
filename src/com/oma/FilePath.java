package com.oma;

public class FilePath {
    public static String simplifyPath(String path) {
        int count = 0;
        StringBuilder res = new StringBuilder();
        String[] file = path.split("/");
        for (int i = file.length - 1; i >= 0; i--) {
            if (".".equals(file[i]) || "".equals(file[i])) {
                continue;
            }
            if ("..".equals(file[i])) {
                count += 1;
            } else if (count != 0) {
                count -= 1;
            } else {
                res.insert(0, "/" + file[i]);
            }
        }
        return res.length() == 0 ? "/" : res.toString();
    }

    public static void main(String[] args) {
        System.out.println(simplifyPath("/home/"));
        System.out.println(simplifyPath("/../"));
        System.out.println(simplifyPath("/home//foo/"));
    }
}
