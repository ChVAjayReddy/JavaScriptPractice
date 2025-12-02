public class demo5 {
    void sumofDigits(int n)
    {
        int sum=0;
        while (n>0){
            sum=sum+n%10;
            n=n/10;
        }
        System.out.println(sum);

    }
    void reverse(int n)
    {
        int rev=0;
        int temp=n;
        while (temp!=0)
        {
            rev=rev*10+temp%10;
            temp=temp/10;
        }
        System.out.println(rev);
    }
    public static void main(String[] args) {
        demo5 obj=new demo5();
        obj.sumofDigits(101);
        obj.sumofDigits(567);
        obj.reverse(721);
        obj.reverse(567);}}