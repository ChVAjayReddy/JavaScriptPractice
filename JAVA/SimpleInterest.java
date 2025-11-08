public  class SimpleInterest{
    static int principal=5000;
    static  int rate=5;
    static int time=2;
    public static void calculateInterest()  {
        System.out.println("Interest : "+ (principal * rate * time) / 100);

        
    }
    public static void main(String[] args) {
        calculateInterest();
        
    }
}