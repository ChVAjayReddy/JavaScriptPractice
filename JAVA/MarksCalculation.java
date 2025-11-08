public class MarksCalculation{
    static int sub1=85;
     static int sub2=95;
      static int sub3=75;
      public static int totalmarks() {
        return sub1+sub2+sub3;     
          
      }
      public static void   average() {
       int total=totalmarks();
       System.out.println("Total "+total +" Average "+ total/3);

          
      }
      public static void main(String[] args) {
          
          average();
      }




}