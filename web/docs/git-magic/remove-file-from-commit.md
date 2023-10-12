# Removing a file from recent Commit

Sometimes, you accidentally commit a file you meant to put into `.gitignore`. You can remove it from the last commit with:

```bash
git reset HEAD^ -- path/to/file
git commit --amend --no-edit
```
