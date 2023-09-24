# Concurrency State Management

It is essential to properly manage state of an applicaton that utilizes concurrency. There are various ways to do them in Go.

## Using `sync/atomic`

The `sync/atomic` package provides low-level atomic memory primitives useful for implementing an atomic counter.

```go
var totalDone uint64

var wg sync.WaitGroup

for i := 0; i < 50; i++ {
    wg.Add(1)
    go func() {
        atomic.AddUint64(&totalDone, 1) //increment by 1
        wg.Done()
    }()
}

wg.Wait()

fmt.Println("Total done:", totalDone)
```

This should print out `Total done: 50`.

## Using `sync.Mutex`

Mutexes can be allowed to manage more complex state and provide safe access to goroutines.

```go
//create a container struct
type container struct {
    //mutex must be added to the struct
    //to enable locking and unlocking
    mu sync.Mutex
    counters map[string]int
}

//implement a method to increment a counter
func (c *container) incrementCounter(key string) {
    c.mu.Lock() //lock the mutex to prevent other goroutines from accessing the map as it is being modified
    defer c.mu.Unlock() //unlock the mutex when the function returns
    c.counters[key]++
}

func main(){
    c := container{
        //mutex requires no initialization
        counters: make(map[string]int),
    }

    var wg sync.WaitGroup

    incCounters := func(name string, n int) {
        for i := 0; i < n; i++ {
            //increment the particular counter
            c.incrementCounter(name)
        }
    }

    wg.Add(2)

    go incCounters("foo", 50)
    go incCounters("bar", 50)

    wg.Wait()
    fmt.Println(c.counters)
}
```

The above code should print out `map[bar:50 foo:50]`. If the mutex was not used, the map would be in an inconsistent state, and the counters would not be accurate.
