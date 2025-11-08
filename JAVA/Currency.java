public class Local {
    
    static int rate = 10;

   
    static void calculateAmount() {

        int amount = 500;

        int total = amount + rate;
        System.out.println("Total = " + total);
    }


    public static void main(String[] args) {
        calculateAmount();
    }
}
