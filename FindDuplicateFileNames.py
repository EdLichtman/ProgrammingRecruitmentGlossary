import fnmatch
import os

rootDir = './Official Repository'

matches = []
test = os.walk(rootDir)
for root, dirnames, filenames in os.walk(rootDir):
    for filename in fnmatch.filter(filenames, 'README.md'):
        matches.append([root[root.rindex('/')+1:],os.path.join(root, filename)])
duplicates = list(
    filter(
        lambda x: [
            i for i, y in enumerate(matches) 
            if x[0].rfind("(Redirect)")], matches
        )
    )

hasDuplicate = False

for counter, value in enumerate(duplicates):
    hasDuplicate = True
    print duplicates[counter][1]

if not hasDuplicate:
    print "There are no duplicates"