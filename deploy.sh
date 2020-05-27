#!/usr/bin/env sh

set -e
yarn docs:build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:dlxqlig/dlxqlig.github.io.git master:gh-pages
cd -