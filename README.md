# node-iterator
Simplistic iterator API.

## Iterator

### constructor(array)
Iterator takes one parameter, which is any array. The array is cloned, so modifying the array will not modify the behaviour of the Iterator instance.

    var iterator = new Iterator(data);
    
### hasNext(): boolean
Returns true if there are more items that have yet to be iterated through.

### next(): any
Returns the next item.

### hasPrevious(): boolean
Returns true if the iterator can back-step.

### previous(): any
Returns the previous item

### reset(): void
Sets the cursor back at the beginning

### Example
    var data = [1,2,3,4,5];
    var iter = new Iterator(data);
    
    iter.next(); // 1
    iter.next(); // 2
    
    iter.reset();
    
    while (iter.hasNext()) {
        iter.next();
        /*
        1
        2
        3
        4
        5
        */
    }
    
    while(iter.hasPrevious()) {
        iter.previous();
        /*
        5
        4
        3
        2
        1
        */
    }
