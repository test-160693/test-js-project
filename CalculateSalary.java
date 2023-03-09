class CalculateSalary {
    public static final double RATES_OF_I_TAX=10;
    private static final double RATES_OF_H_INS= 1.5;
  protected static final double RATES_OF_S_INS= 7;
  public static void main(String args[]){
  int grosssalary=1000;
  int net=calc(grosssalary);
  printincomeinformation(grosssalary, net);
  }
  public static int calc (int salary){
    double deductiona= salary*(RATES_OF_I_TAX/ 100);
    double deductionb=salary*(RATES_OF_H_INS/100);

    double deductionc = salary  * (RATES_OF_S_INS/ 100);
    int tmp=salary -(int)deductiona-(int)deductionb-(int)deductionc;
  return tmp;
  }
  public static void printincomeinformation(int allsalary, int homepay)
  {
    System.out.println("Gross income: " + allsalary + " doller\nNet income:   " + homepay + "doller\n");
    if (3000<allsalary)
    {
      System.out.println("You get great salary!\nDo your best at work!\n");;   
    };
    if (3000>=allsalary) {
      System.out.println("You're glowing up now!\nDo your best at work!\n");
    }
  }
}
