public  class Demo6{
    void factorial(int n){
        int factorial=1;
        for(int i=1;i<=n;i++){
            factorial=factorial*i;

        }
        System.out.println(factorial);
}
void middlechar(String s){
        int length=s.length();
        String result="";
        if(length%2==0){
            result+=s.charAt((length/2)-1);
            result+=s.charAt(length/2);
        }
        else {
            result+=s.charAt(length/2);
        }
        System.out.println(result);}
public static void main(String[] args){
        Demo6 d=new Demo6();
        d.factorial(3);
        d.middlechar("Wonder");
        d.middlechar("World");   
}}