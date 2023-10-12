---
sidebar_position: 1
---

# Async Rust

## Concurrency Models

Concurrency can be achieved in many ways. The most common ones are:

- **OS Threads**: The OS schedules threads and the threads run in parallel. This is the most common way of achieving concurrency in most languages. However, synchronization between threads is hard and error-prone. Thread Pools can mitigate some of these but within limit.

- **Event-driven Programming**: The program is driven by events. The program is single-threaded and the events are handled sequentially. This is the most common way of achieving concurrency in JavaScript. However, the program can be blocked by a long-running event handler. Utilizes callbacks.

- **Coroutines**: The program is single-threaded and the coroutines are scheduled by the program. This is the most common way of achieving concurrency in Go. However, while a large number of tasks can be run in parallel, the abstraction to achieve this level of simplicity comes at the cost of finer control.

- **Actor Model**: All concurrent tasks are actors. Actors are single-threaded and communicate with each other by sending messages. This is the most common way of achieving concurrency in Erlang. However, control flow and retry logic is not simple.

## Async in Rust

Rust's implementation is slighly different from other languages.

**Futures are inert**: Futures will only make progress when polled, dropping it will stop it from making further progress.

**Async is zero-cost**: Async can be used without heap allocations and dynamic dispatch, which offers great performance. Good for embedded systems.

**No built-in runtime**: Rust has no built-in runtime, which means that you can choose the runtime that best fits your needs from crates.

