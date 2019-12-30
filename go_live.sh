#!/bin/bash
echo "Bon Voyage ................🚢................"
echo "Here comes Github commands 🐱"
git status
git add -A 
git commit -m "changes"
git push origin master
echo "Time to build 🏗️"
npm run build
echo "Lets get lit (firebase) 🔥"
firebase deploy