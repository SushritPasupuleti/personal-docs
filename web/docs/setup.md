---
sidebar_position: 1
---

# References

- [Official Docs](https://www.passwordstore.org/)

- [GUI Client](https://qtpass.org/)

# Setup

The process is as follows: `(generate gpg key) -> (init pass with gpg key) -> (init git repo for pass)`

## Key Setup

### Generate a new GPG key

```bash
gpg --full-generate-key
```

**Note**: Make note of the `uid` as it will be required for operations.

### Export the public key

```bash
mkdir exported-keys
cd exported-keys
gpg --output public.pgp --armor --export <uid>
gpg --output private.pgp --armor --export-secret-key <uid>
```

### Import the public key

```bash
gpg --import public.pgp
gpg --import private.pgp
```

### Edit `trust` of the key

```bash
gpg --edit-key <uid>
# Enters the gpg shell
trust
# Select trust value from prompt
save
```

### Edit the expiry date of the key

```bash
gpg --edit-key <uid>
# Enters the gpg shell
expire
# Select expiry value from prompt
save
```

## `pass` Setup

### Init `pass` with the GPG key

```bash
pass init <uid>
```

### Init git repo for `pass`

```bash
pass git init
```


# Usage

## Add a new password

```bash
pass insert <path/to/password>
# Example: pass insert github/personal
# Example: pass insert github/work
```

**Note**: Avoid using `emails` in the path as a safety measure.

## View a password

```bash
pass show <path/to/password>
```

## Edit a password

```bash
pass edit <path/to/password>
```

## Copy a password to clipboard

```bash
pass -c <path/to/password>
```

## Generate a new password

```bash
pass generate <path/to/password> <length>
# Example: pass generate github/personal 20
```

