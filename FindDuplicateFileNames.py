import fnmatch
import os

rootDir = './Official Repository'

matches = []
for root, dirnames, filenames in os.walk(rootDir):
    for filename in fnmatch.filter(filenames, 'README.md'):
        matches.append([root[root.rindex('/')+1:],os.path.join(root, filename)])
duplicates = list(
    filter(
        lambda x: [
            i for i, y in enumerate(matches) 
            if x[0].rfind("(Redirect)") == -1 
                and y[0] == x[0] 
                and y[1] != x[1]], matches
        )
    )

hasDuplicate = False

for counter, value in enumerate(duplicates):
    hasDuplicate = True
    print duplicates[counter][1]

if not hasDuplicate:
    print "There are no duplicates"