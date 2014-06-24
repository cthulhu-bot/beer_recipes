Learning Points:

Didn't get a chance to implement the saving feature I wanted.  Given more time I wanted to be able to generate short guids (e.g. xTnvR) a la jsfiddle and save them in mongo as the key alongside the associated DOM object.

Also found a future point to blog about.  Linux NodeJS apps are NOT compatable with Windows NodeJS apps.  Due to Windows having a 260 character limit on path lengths.  I started off developing on my linux machine and when trying to simultaneously pull that repo down to windows I received the error:  Error: ENOENT.

Node modules get nested extremely deep when installed via npm due to npm including the source for ALL package dependencies (and their package dependencies and so on and so on).  This led to extremely deep directories in linux which proved incompatable with Windows.  The solution was to remove the node_modules directory and reinstall everything via npm (while on windows this time).

App Info:

TravisCI:       https://travis-ci.org/cthulhu-bot/beer_recipes

Heroku Deploy:  http://beer-recipes.herokuapp.com/

