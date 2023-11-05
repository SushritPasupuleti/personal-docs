# Remove Special Characters from Data

## Problem

You have a column with special characters and you want to remove them.

## Solution

Use the `REPLACE` function to remove the special characters.

```sql
UPDATE table_name SET column_name = REPLACE(column_name, 'special_character', '');
```

Example:

```sql
--- Remove all spaces from the name column
UPDATE users SET name = REPLACE(name, ' ', '');
--- Remove `'` from the name column
UPDATE users SET name = REPLACE(name, '''', '');
```
