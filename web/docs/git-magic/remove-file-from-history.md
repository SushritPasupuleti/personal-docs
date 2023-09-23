# Removing a file from Git History

Usually applicable when you want to remove a committed `.env` file from your git history.

**Note:** This will rewrite your git history, so make sure you know what you're doing. And it is advisable to only do this, if your repo is not public (and has no changes pushed to it yet), because chances are someone has scraped or taken a look at it. Either way always regenerate any secrets/keys if exposed.

## Procedure

1. Update your `.gitignore` file to ignore the file you want to remove from history.

```bash
echo '.env' >> .gitignore
```

2. Remove file from git

```bash
git rm --cached .env
```

3. Remove file from git history

```bash
git filter-branch --index-filter "git rm -rf --cached --ignore-unmatch .env" HEAD
```

4. Force push to remote

```bash
git push --force
```

