# react-template

Minimalistic template for React projects.

## How to Use

I just simply add a small bash-script to the main projects directory:

```bash
#!/bin/bash

# create new-repo
mkdir new-repo
cd new-repo
echo "" > README.md

# copy license from existing file
cp ../MIT-LICENSE.txt ./LICENSE

# initial commit
git init
git add .
git commit -m"initial commit"

# copy template
git clone https://github.com/rawjrk/react-template.git

# remove unnecessary files
rm -rf react-template/.git
rm react-template/README.md
rm react-template/LICENSE
rm react-template/package-lock.json

# copy .gitignore
cp react-template/.gitignore .

# move files from subfolder and delete it
mv -v react-template/* .
rm -r react-template
```

**Then run it:** `$ ./new-repo.sh`

### Check result

```
$ cd new-repo
$ git log --oneline
xxxxxxx (HEAD -> main) initial commit
```

### Further actions

Don't fortget to run `$ npm install`.

Also, consider updating `author` and `license` fields in your `package.json` file.

At this step everything is up to you. You could add/remove other dependencies, rename directory and develop your project the way you like.

Enjoy! `:)`
