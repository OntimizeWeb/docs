#!/bin/bash
clear

VERSION=$1
BRANCH="${VERSION}.x.x"
SITE_FOLDER_NAME="v${VERSION}"

# Me muevo a la rama de la version
git checkout $BRANCH
git pull

# Genero carpeta _site
# bundle exec jekyll build --config _config.yml,_config.deploy.yml

# Renombro _site a ../vX
# mv _site ../$SITE_FOLDER_NAME

#git add $SITE_FOLDER_NAME
#git commit -m "Updating ${BRANCH} version docs"
#git merge -X ours gh-pages