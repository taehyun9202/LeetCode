public class Solution {
    public ListNode RotateRight(ListNode head, int k) {
        ListNode tail = new ListNode(0);
        var count = 0;
        while(count < k){
            ListNode node = head;
            head = head.next;
            node.next = null;
            if(count == 0){
                tail = node;
            }
            else{
                tail.next = node;
            }
            count++;
        }
        ListNode runner = head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = tail;
        return head;
    }
}