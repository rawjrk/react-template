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
cd react-template

# remove unnecessary files
rm -rf .git
rm README.md LICENSE package-lock.json

# move files from subfolder
mv -v ./* ..
mv -v ./.[^.]* ..

# then remove it
rm -r ../react-template
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

## Scripts

By default the following scripts are setup:

- `npm start` to start a dev server (all changes are tracked and recompiled on the go)
- `npm run build` to run a production build (compiled with minimization)
- `npm run build-dev` to run a one-time dev. build (faster compilation, no minimalization)
- `npm test` to run tests with Jest (one time)
- `npm run test-w` to run tests in watch mode
- `npm run coverage` to run tests coverage reports
