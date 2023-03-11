---
sidebar_position: 1
---

# Nix (Package Manager)

Nix is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible. It provides atomic upgrades and rollbacks, side-by-side installation of multiple versions of a package, multi-user package management and easy setup of build environments.

## My use case

I have been using `homebrew` as a package manager on my mac, and by extention a subset of the same packages can be installed on linux too. This allows me to setup scripts to auto-install all my required tools and softwares on a new device. However dependency-pinning and management on it has been bad, and accidental upgrades are disrupting my workflow.

I have been looking at `nix` for a while now and it seems to be a good fit for my use case. I will be using `nix` to manage my packages and tools on my mac and linux machines, alongside (atleast for now) `homebrew` since a few packages are still only on `homebrew` (`yabai` the Tiling WM that I make use of for example).

## Installation

I came across this new custom implementation of the Nix Installer from [Determinate Systems](https://github.com/DeterminateSystems/nix-installer) which offers a safe uninstall path and better out-of-the-box experience. Plus the installer is built on `rust` instead of `bash`.

Follow the instructions from their [Zero to Nix Guide](https://zero-to-nix.com/start/install) it is also a handy guide and entry point into `nix`.

Start by running the installer:

```bash
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix | sh -s -- install
```

:::info
No need to run it as `root`, it will self-escalate on execution.
:::

Check if the installation was successful:

```bash
nix --version
```

## Uninstall

Just run:

```bash
/nix/nix-installer uninstall
```

## Setup `nix-env`

Run this only once after installation:

```bash
nix-env --install
```

