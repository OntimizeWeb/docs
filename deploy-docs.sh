#!/bin/bash
clear

VERSION=$1
BRANCH="${VERSION}.x.x"
SITE_FOLDER_NAME="v${VERSION}"
GHPAGES="gh-pages"

# Me muevo a la rama de la version
git checkout $BRANCH
git pull

# Genero carpeta _site
bundle exec jekyll build --config _config.yml,_config.deploy.yml

# Renombro _site a ../vX
mv _site ../$SITE_FOLDER_NAME

git checkout $GHPAGES
git pull

rm -rf $SITE_FOLDER_NAME

mv ../$SITE_FOLDER_NAME .
git add -A
git commit -m "Updating ${BRANCH} version docs"
git push
