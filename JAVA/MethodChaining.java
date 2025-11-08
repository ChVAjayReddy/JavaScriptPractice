public class MethodChaining {

    static int a = 20;
    static int b = 30;


    public static void sum() {
        int result = a + b;
        System.out.println("Sum: " + result);
    }

  
    public static void average() {
        sum(); 
        double avg = (double) (a + b) / 2; 
        System.out.println("Average: " + avg);
    }

    public static void main(String[] args) {
        average(); 
    }
}