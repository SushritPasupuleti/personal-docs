# Concurrency in Go

Unlike `python` and `javascript`, `go` has built-in support for concurrency. This is achieved by using `goroutines` and `channels`.

## Sample code

Consider the following non-concurrent code:

```go
package main
import (
    "fmt"
)

//Prints out the numbers from 0 to count
func producer(count int) {
    for i := 0; i < count; i++ {
        fmt.Println("Generated: %d\n", i)
    }
}

//Prints out the numbers from 0 to count (in concurrent model, it should print out
//the numbers from `producer`.
func consumer(count int) {
    for i := 0; i < count; i++ {
        fmt.Println("Consumed: %d\n", i)
    }
}

func main() {
    producer(3)
    consumer(3)
}
```

The output of the above code is:

```bash
Generated: 0
Generated: 1
Generated: 2
Consumed: 0
Consumed: 1
Consumed: 2
```

## Understanding `sync` package

The `sync` package provides primitives to synchronize parts of the program.

### `sync.WaitGroup`

It simply _waits_ for a collection of goroutines to finish, it maintains a count of how many tasks need to be completed, before being done.

The count is decremented by calling `wg.Done()` and set by calling `wg.Add()`.

The `WaitGroup` waits for the count to reach zero with `wg.Wait()`.

## Rewriting the above code using `sync.WaitGroup`

```go
package main

import (
    "fmt"
    "sync"
)

//Prints out the numbers from 0 to count
func producer(count int, wg *sync.WaitGroup) {
    //executes wg.Done() when the function exits
    //hence the WaitGroup count is decremented by 1 i.e it is set to 1 from 2
    defer wg.Done()

    for i := 0; i < count; i++ {
        fmt.Println("Generated: %d\n", i)
    }
}

//Prints out the numbers from 0 to count (in concurrent model, it should print out
//the numbers from `producer`.
func consumer(count int, wg *sync.WaitGroup) {
    //executes wg.Done() when the function exits
    //hence the WaitGroup count is decremented by 1 i.e it is set to 0 from 1
    //and the WaitGroup is completed
    defer wg.Done()

    for i := 0; i < count; i++ {
        fmt.Println("Consumed: %d\n", i)
    }
}

func main() {
    var wg sync.WaitGroup
    wg.Add(2) //set the WaitGroup count to 2

    go producer(3, &wg) //pass the WaitGroup as a pointer
    go consumer(3, &wg)

    wg.Wait() //wait for the WaitGroup count to reach 0
    fmt.Println("Done")
}
```

The output of the above code is:

```bash
Generated: 0
Generated: 1
Consumed: 0
Generated: 2
Consumed: 1
Consumed: 2
Done
```

The above output will have a slighly different order of execution each time you run the program.

## Channels

Using `channels` we can send and receive values between goroutines.

### Creating a channel

```go
x := make(chan <type>)
```

### Sending a value to a channel

```go
x <- value
```

### Receiving a value from a channel

```go
another_var := <- x
```

### Closing a channel

```go
close(x)
```

### Sample code

```go
package main

import (
    "fmt"
    "sync"
)

//Prints out the numbers from 0 to count
func producer(count int, ch chan <- int, wg *sync.WaitGroup) { //send only channel
    //executes wg.Done() when the function exits
    //hence the WaitGroup count is decremented by 1 i.e it is set to 1 from 2
    defer wg.Done()

    for i := 0; i < count; i++ {
        fmt.Println("Generated: %d\n", i)
        ch <- i //send the value to the channel
    }
}

//Prints out the numbers from 0 to count (in concurrent model, it should print out
//the numbers from `producer`.
func consumer(count int, ch <- chan int wg *sync.WaitGroup) { //receive only channel
    //executes wg.Done() when the function exits
    //hence the WaitGroup count is decremented by 1 i.e it is set to 0 from 1
    //and the WaitGroup is completed
    defer wg.Done()

    for num in range ch {
        fmt.Println("Consumed: %d\n", num)
    }
}

func main() {
    nums := make(chan int) //create a channel

    var wg sync.WaitGroup
    wg.Add(2) //set the WaitGroup count to 2

    go consumer(3, nums, &wg) //pass the channel as an argument
    producer(3, nums, &wg)

    close(nums) //close the channel

    wg.Wait() //wait for the WaitGroup count to reach 0
    fmt.Println("Done")
}
```

The output of the above code is:

```bash
Generated: 0
Consumed: 0
Generated: 1
Consumed: 1
Generated: 2
Consumed: 2
Done
```

## Select

Allows `"awaiting"` on multiple channel operations.

```go
package main

import (
    "fmt"
    "time"
)

func main(){
    c1 := make(chan string)
    c2 := make(chan string)

    go func(){
        //simulate a blocking operation
        time.Sleep(time.Second * 1)
        c1 <- "one"
    }()

    go func(){
        //simulate a blocking operation
        time.Sleep(time.Second * 2)
        c2 <- "two"
    }()

    for i := 0; i < 2; i++ {
        select {
            case msg1 := <- c1:
                fmt.Println("received", msg1)
            case msg2 := <- c2:
                fmt.Println("received", msg2)
        }
    }
}
```

The output of the above code is:

```bash
received one
received two
```

### Timeout

Using `select` we can also implement timeouts to enforce a limit on the amount of time a channel can block.

```go

select {
    case msg1 := <- c1:
        fmt.Println("received", msg1)
    // if the operation takes more than 1 second, the timeout case will be executed
    case <- time.After(time.Second * 1):
        fmt.Println("timeout 1")
}
```
