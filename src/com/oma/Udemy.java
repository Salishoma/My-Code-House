package com.oma;

public class Udemy {

    public static void main(String[] args) {
        Parent parent = new Child();
        parent.test();

    }
}

class Parent {
     void test() {
        System.out.println("In parent class");
    }
}

class Child extends Parent {
    public void test() {
        System.out.println("In child class");
    }
}
