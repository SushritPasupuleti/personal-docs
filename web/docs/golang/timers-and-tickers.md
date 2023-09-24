# Timers and Tickers

## Timers

Timers allow you to execute code at some point in the future. This is useful for executing code once after some time has passed.

```go
timer := time.NewTimer(time.Second * 2) // after 2 seconds

<-timer.C //blocks on `timer`'s channel until the timer expires, then proceeds with execution
fmt.Println("Timer expired")
```

Timers can also be stopped before they expire.

```go
timer := time.NewTimer(time.Second * 2) // after 2 seconds

go func(){
    <-timer.C
    fmt.Println("Timer expired")
}()

stop := timer.Stop() // stop the timer before it expires
if stop {
    fmt.Println("Timer stopped")
}
```

In the above example, as the goroutine runs in the background, waiting to print that it has "expired", the `stop()` function is called in the foreground, and the timer is stopped before it can expire.

## Tickers

Tickers allow execution of code, at specific intervals.

```go
ticker := time.NewTicker(time.Millisecond * 500) // every 500 milliseconds

//runs in the background until stopped
go func(){
    for t := range ticker.C {
        fmt.Println("Tick at", t)
    }
}()

time.Sleep(time.Millisecond * 1600) // sleep for 1600 milliseconds
//the ticker will have ticked 3 times by now
ticker.Stop() // stop the ticker
fmt.Println("Ticker stopped")
```
