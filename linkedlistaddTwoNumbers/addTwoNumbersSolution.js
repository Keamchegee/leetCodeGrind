/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
///ABOVE TEMPLATE GIVEN  BY LEETCODE PLATFORM
var addTwoNumbers = function(l1, l2) {
    //to reference to first elmenti.e node
   let dummy=new ListNode(0);
   //current copies dummy but stores ref to last element
   let current=dummy;
   //intializing carry to zero
   let carry =0;

    //traversing the list to read values
     //*looping rules
     /*1.loop while l1.next is not null
        2.loop while l2.next is not null
        3.lopp while carry has a value not equal 0*/
    while(l1 !==null||l2 !==null||carry !==0){
        const x= (l1!==null)?l1.val: 0;
        const y= (l2 !==null)?l2.val:0;
        //addition of digts together with carry
         let sum =x+y+carry;
         //modulo to get ones digit that goes into new node
         let digit=sum%10;
         //getting the carry
         carry =Math.floor(sum/10);
         //creating result node
         const newNode= new ListNode(digit);
         //attaching to result list
         current.next=newNode;
         //move current pointer forward to point to newly created
         current=current.next;
         //moving the the l1 and l2 pointers
         if(l1!==null) l1=l1.next;
         if(l2!==null) l2=l2.next;
    }
    //returning head of our soution
    return dummy.next;
};