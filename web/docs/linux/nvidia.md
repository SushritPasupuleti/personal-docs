---
sidebar_position: 1
---

## nVidia on Linux

A simple list of resources for relatively pain-free setup of nVidia drivers (non-free) on Linux.

## Distros with included Drivers
These are distros that ship with drivers included, and offer the best convenience.

However, both options have their respective cons.

- `Arch` via `archinstall` has first-class support out of the box.
	- Arch
- `Pop!_OS`
	- Debian/Ubuntu-based.
- `Manjaro`
	- Arch, but lots of controversies.

## Installing Manually

- `Fedora` via RPMFusion - [Resource](https://rpmfusion.org/Howto/NVIDIA#Current_GeForce.2FQuadro.2FTesla)
	- Has instructions for CUDA/CUDNN
	- NVENC
	- Suspend fixes and more.

- `Arch` via the Arch Wiki - [Resource](https://wiki.archlinux.org/title/NVIDIA)
	- Super detailed and explains well.
	- Has config for Wayland as well
	- Is harder to reproduce with a script like with Fedora.

Fedora is ultimately the best balance personally, but the other alternatives are good to know about and try out as well.
