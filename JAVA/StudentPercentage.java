public class StudentPercentage{
static int sub1=60;
static int sub2=70;
static int sub3=80;
public static int total() { 
    return sub1+sub2+sub3;
}
public static void avaerage() {
    int total=total();
    System.err.println("Total :"+total+" Percentage :"+ (total*100/300));
    
}
public static void main(String[] args) {
    avaerage();
}

}