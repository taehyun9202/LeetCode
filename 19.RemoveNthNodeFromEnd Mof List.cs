/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        int len = 0;
        ListNode node = head;
        while (node != null)
        {
            node = node.next;
            len++;
        }
        
        int count = 0;
        ListNode newNode = new ListNode(0);
        newNode.next = head;
        node = newNode;
        while (count < len - n)
        {
            node = node.next;
            count++;
        }
        
        node.next = node.next.next;
        return newNode.next;
    }
}