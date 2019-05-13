npm run build
rm -rfv out
npm run export
touch out/.nojekyll
cp CNAME out/
git commit -a -m "new buiold"
git push
git subtree push --prefix out origin gh-pages