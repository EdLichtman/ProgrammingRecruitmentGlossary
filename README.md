Bash command -- adds README.md to folders that don't have it.
find . -type d -exec touch {}/"README.md" \;
