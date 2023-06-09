# react-template

Minimalistic template for React projects.

## How to Use

I just simply add a small bash-script to the main projects directory:

```bash
#!/bin/bash

# get project name from cli argument
project_name=$1

# if not entered, ask for project name
if [ ! $project_name ]
then
  read -p 'enter project name: ' project_name
fi

# create new-repo
mkdir $project_name
cd $project_name

# create README file
echo \# $project_name > README.md

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

Then run it as `./new-repo.sh <project_name>`.

Where `<project_name>` is the name of repo you're creating.

If not specified, script will ask for it anyway:

```
$ ./new-repo.sh
enter project name:
```

### Check result

```
$ cd new-repo
$ git log --oneline
xxxxxxx (HEAD -> main) initial commit
```

### Further actions

Don't fortget to run `npm install`.

Also, consider updating `author` and `license` fields in your `package.json` file.

At this step everything is up to you. You could add/remove other dependencies, rename directory and develop your project the way you like.

Enjoy! `:)`

## Alternatively

You could also use `degit` to clone the repo without history.

```
degit github:rawjrk/react-template
```

For more info, please visit the official [documentation](https://github.com/Rich-Harris/degit).

## Scripts

By default the following scripts are setup:

- `npm start` to start a dev server (all changes are tracked and recompiled on the go)
- `npm run build` to run a production build (compiled with minimization)
- `npm run build:dev` to run a one-time dev. build (faster compilation, no minimalization)
- `npm run lint` to run linting with ESLint and Prettier
- `npm test` to run tests with Jest (one time)
- `npm run test:watch` to run tests in watch mode
- `npm run test:cov` to run tests and get coverage report
