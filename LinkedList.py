# Queue FIRST IN FIRST OUT (FIFO)
class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue(object):
    def __init__(self):
        self.head = None
        self.tail = None

    # add new node to last of the queue
    def enqueue(self, node):
        if self.head == None:               # if node queue is empty add one
            self.head = node                # head is new node 
            self.tail = node                # tail is also new node
        else:   
            self.tail.next = node           # last Node now pointing newNode(adding)
            self.tail = self.tail.next      # newNode now has tail pointing itself

    # check if queue contains data
    def contains(self, node):
        runner = self.head                  # set runner to check through queue
        counter = 0                         # set counter
        array = []                          # set array
        while runner != None:               # run through queue until it finds empty node
            if runner.data == node.data:    # find node with data
                array.append(counter)       # add counter into array
            counter += 1                    # increase counter by 1
            runner = runner.next            # if not, move on
        return array

    # delete first node from the queue and return data of new first Node
    def dequeue(self, node = None):
        if node:                            # if there is arg passed
            runner = self.head              # set runner
            while runner.next != None:      # run through queue
                if runner.next.data == node.data:
                    print(runner.next.data, "deleted from the queue")
                    runner.next = runner.next.next      #remove data from the queue
                else:
                    runner = runner.next
        else:
            print(self.head.data, "deleted from the queue")
            self.head = self.head.next      # new head is now heading to second Node
            return self.head.data          # print data of new first Node

    # get size of the queue
    def size(self):
        counter = 0                         # declare counter as 0
        runner = self.head                  # decalre runner to run through queue
        while runner:
            counter += 1                    # increase counter by 1 as running through queue
            runner = runner.next            # move to next Node
        return counter                      # print counter
    
    # check if queue is empty
    def isEmpty(self):
        if self.head:
            return False
        return True

    # get first data of the queue
    def peek(self):
        if self.head:
            return self.head.data
        return "No Node in Queue"
    
    def print(self):
        runner = self.head              # set runner
        string = ""                     # set empty string
        while runner:                   # run through queue
            string += str(runner.data)  # add data to string
            if runner.next:
                string += ">"
            runner = runner.next
        print(string)

    def removeMinMax(self):
        runner = self.head              # set runner
        minimum = self.head.data        # set min max as first data of Node
        maximum = self.head.data
        while runner:                   # run through queue
            if runner.data < minimum:
                minimum = runner.data   # if runner's data is smaller, data is new min
            if runner.data > maximum:
                maximum = runner.data   # if runner's data is greater, data is new max
            runner = runner.next
        self.dequeue(Node(minimum))     # remove minimum data from the queue
        self.dequeue(Node(maximum))     # remove maximum data from the queue



print("/////////////// below is Queue //////////////////")
q = Queue()
# print("Empty? :", q.isEmpty())
# print("First data :", q.peek())
q.enqueue(Node(5))
q.enqueue(Node(3))
q.enqueue(Node(1))
q.enqueue(Node(8))
q.enqueue(Node(2))
q.enqueue(Node(12))
q.enqueue(Node(6))
q.enqueue(Node(7))
q.enqueue(Node(5))
q.enqueue(Node(4))
q.enqueue(Node(3))
q.enqueue(Node(2))
# q.print()
# print("Count :", q.size())
# q.removeMinMax()
# q.dequeue(Node(2))
# q.dequeue()
q.print()
# print("Count :", q.size())
# print("5 located in ", q.contains(Node(5)))

#
#
#
#
#
# Stack LAST IN FIRST OUT (LIFO)
class Stack(object):
    def __init__(self):
        self.top = None

    # add new node to stack
    def push(self, node):
        node.next = self.top
        self.top = node

    # print stack
    def print(self):
        runner = self.top                      # set runner
        string = ""                             # set empty string
        while runner:                           # run through queue
            string += str(runner.data)          # add data to string
            if runner.next:
                string += ">"
            runner = runner.next
        print(string)
    
    def isEmpty(self):
        if self.top:
            return True
        return False

    def pop(self):
        if self.isEmpty() == False:
            print("Empty Stack")
        runner = self.top.data
        self.top = self.top.next
        return runner

    def peek(self):
        return self.top.data

    def size(self):
        counter = 0
        runner = self.top
        while runner:
            counter += 1
            runner = runner.next
        return counter

    def contains(self, node):
        runner = self.top
        counter = 0
        array = []
        while runner:
            if runner.data == node.data:
                array.append(counter)
            counter += 1
            runner = runner.next
        return array

    # copy and create new stack
    # use only one additional queue
    def copyStack(self):
        newQueue = Queue()                      # declare new queue
        newStack = Stack()                      # declare new stack
        # get and save all the data from given stack to new array
        runner = self.top
        print("Copying Stack...")
        print("below is orignal Stack")
        self.print()
        while runner:
            newQueue.enqueue(Node(runner.data))
            runner = runner.next
        print("below is new Queue")
        newQueue.print()
        Qrunner = newQueue.head
        while Qrunner:
            newStack.push(Node(Qrunner.data))
            Qrunner = Qrunner.next
        print("below is copied Stack")
        return newStack.print()

    ### use only one additional stack, sort queue in absolute-value order ###

    # compare first and second 
    


            





print("/////////////// below is Stack //////////////////")
s = Stack()
# print("Empty? :", q.isEmpty())
# print("First data :", q.peek())
s.push(Node(5))
s.push(Node(3))
s.push(Node(1))
s.push(Node(8))
s.push(Node(2))
s.push(Node(12))
s.push(Node(6))
s.push(Node(7))
s.push(Node(5))
s.push(Node(4))
s.push(Node(3))
s.push(Node(2))
# s.print()
# print("Count :", s.size())
# s.pop()
# s.pop()
# s.pop()
s.print()
# print("Count :", s.size())
# print("5 located in stack", s.contains(Node(5)))



s.copyStack()

#
#
#
#
#

