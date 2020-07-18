import os

with open("modeling_images.txt", "w") as a:
    for path, subdirs, files in os.walk('../modeling'):
       for filename in files:
         #f = os.path.join(path, filename)
         a.write(str(filename) + os.linesep) 
