# Useful Nix Commands (Maybe NixOS specific)

## Rebuild System and Switch to latest generation

```bash
sudo nixos-rebuild switch
```

## Repair System

```bash
sudo nixos-rebuild switch --repair
```

## Rebuild System and Boot into latest generation

```bash
sudo nixos-rebuild boot
```

## Rebuild Bootloader

```bash
sudo nixos-rebuild --install-bootloader switch
```

## Show changes after rebuild

```bash
nix profile diff-closures --profile /nix/var/nix/profiles/system
```

Shows colored diff of changes like this:

```bash
Version 217 -> 218:
  nix: ∅ → 2.13.6, +11643.2 KiB
  nixos-generators: ∅ → 1.7.0, +25.6 KiB
  nixos-system-nixy-zangetsu-Add-gRPC-Tools: ε → ∅, -68.9 KiB
  nixos-system-nixy-zangetsu-Feat-Switch-to-Host-Specific-Configs: ∅ → ε, +69.0 KiB
  unit-nix-gc.timer: ∅ → ε
```
