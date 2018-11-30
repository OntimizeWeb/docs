#!/bin/bash
clear

VERSION=$1
BRANCH="${VERSION}.x.x"
SITE_FOLDER_NAME="v${VERSION}"

# Me muevo a la rama de la version
git checkout $BRANCH
git pull

# Genero carpeta _site
bundle exec jekyll build --config _config.yml,_config.deploy.yml