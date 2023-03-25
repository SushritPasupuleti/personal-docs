---
sidebar_position: 2
---

Immediately setup an isolated environment to test packages.

## Creating a Shell Environment
This example will create a shell environment with `neofetch`.

```bash
nix-shell -p neofetch
```

Exit the shell with `exit`.

## Reproducible Shells
A package version can be specified by pointing to the source.

```bash
nix-shell -p git -I nixpkgs=https://github.com/NixOS/nixpkgs/archive/2a601aafdc5605a5133a2ca506a34a3a73377247.tar.gz
```

`-I` specifies the source from where the particular version of the package must be built.

### Using Scripts
To create a script that spins up a `nix-shell`, follow the following syntax:

```sh
#!/usr/bin/env nix-shell
#! nix-shell -i bash --pure
#! nix-shell -p bash cowsay

cowsay Hello There
```

Run the script as usual.

This can be used to quickly run scripts with dependencies you do not want to install on your system.

`--pure` allows you to ignore most unnecessary Environment Variables from your Host system.

