// 1. Sukurkitę sąrašo mazgo struktūrą ListNode, bet kokiam duomenų tipui 
type ListNode<T> = {
  data: T,
  next: ListNode<T>
};

// 2. Sukurkite sąrašo klasę List.
//    Sukurkite konstruktorių, jog jis galėtų priimti pirmu parametru perduotą ListNode elementą ir priskirti
//    jį į sąrašo pradžios savybė -> head ir sąrašo pabaigos savybę -> tail.
//    Taip pat įgalinkite, kad konstruktoriaus mazgo parametras nebūtų privalomas.
class List<T> {
  public head: ListNode<T> | null;
  public tail: ListNode<T> | null;

  constructor(initialNode?: ListNode<T>) {
    if (initialNode !== undefined) {
      this.head = initialNode;
      this.tail = initialNode;
    }
    else {
      this.head = null;
      this.tail = null;
    }
  }
}

// 3. Sukurkite metodą pridėti sąrašo elementui. 
//    Elementai visuomet pridedami į sąrašo galą, t.y.: paskutinis


