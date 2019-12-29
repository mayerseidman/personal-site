#!/bin/bash
echo "My file name is $file"
git status
git add -A 
git commit -m "changes"
git push origin master
npm run build
firebase deploy