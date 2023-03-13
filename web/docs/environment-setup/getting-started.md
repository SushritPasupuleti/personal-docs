---
sidebar_position: 1
---

# Getting Started

By following this guide you can setup a development environment that is similar to mine. This guide is not meant to be a one size fits all solution, but rather a starting point for you to build your own development environment.

## What's included

- Unix system Compatibile (WSL2, MacOS, Linux) dotfiles.

- Installation scripts via Homebrew for MacOS and Linux (partially).

:::info

Check [Windows Setup](/docs/environment-setup/windows) for a Windows specific setup.

:::

### Custom Scripts

Apart from the setup scripts, there are a few scripts that I created to make my life easier.

- `./scripts/sp.sh` - fuzzy find and navigate to a given TMUX session.

- `./scripts/sims.sh` - fuzzy find and start an iOS simulator.

- `./scripts/emus.sh` - fuzzy find and start an Android simulator.

- `./scripts/portkill.sh` - kill a process running on a given port.

## Setup

Start by cloning the `dots` repository (it is not mandatory to clone this into your home directory, setup scripts will create symlinks where appropriate):

```bash
git clone https://github.com/SushritPasupuleti/dots
```
:::note

Please do not clone this repo, it will most likely break your setup, this is customized for my usecases. Feel free to look around for inspiration though.

:::

### tmux

Setup oh-my-tmux:

```bash
cd
git clone https://github.com/gpakosz/.tmux.git
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

### Run Installation Scripts

Setup Applications/Utilities and setup symlinks:

```bash
chmod +x setup.sh
chmod +x pre-setup.sh
./pre-setup.sh
./setup.sh
```

### Manage Exports

Export Environment Variables in fish by creating a file at: `~/.config/fish/conf.d/exports.fish`

```fish
set -gx ENV_VAR "value"
```

### Change Default Shell

```bash
chsh -s $(which fish)
```

## Wrapping Up

With this, you should have a working development environment.

Make sure to reopen your terminal to see the changes.
