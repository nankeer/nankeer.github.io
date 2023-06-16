set -e

npm run build
git add .
git commit -m "deploy"
git push -u origin master
git subtree push --prefix dist origin gh-pages



