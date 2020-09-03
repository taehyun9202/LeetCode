class Solution(object):
    def detectCycle(self, head):
        current = sRunner = fRunner = head
        while fRunner and fRunner.next:
            fRunner = fRunner.next.next
            sRunner = sRunner.next
            
            if fRunner == sRunner:
                while current:
                    if current == sRunner:
                        return current
                    current = current.next
                    sRunner = sRunner.next
        return None