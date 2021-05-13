# Save changes and change to master branch
git stash -u
git checkout master

# Generates dist folder
yarn build

# Commit dist folder
git add --all
git commit -m 'New documentation release'

# Switch to the gh-pages branch and get dist files, then move those files to the root
git checkout gh-pages
git checkout master src/.vuepress/dist/
mv src/.vuepress/dist/**/* .

# Clean generated folders for other branches
rm -r src dist
find ./ -type d -empty -delete