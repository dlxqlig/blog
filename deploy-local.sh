#!/usr/bin/env sh

set -e
yarn build

cd public

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:dlxqlig/dlxqlig.github.io.git master
