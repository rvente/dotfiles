#!/bin/bash

cp ~/.config/i3/* ./dotconfig/i3/
cp ~/.config/ranger/* ./dotconfig/ranger/

cd ./tildeslash/

cp ~/.spacemacs ./
cp ~/.bashrc ./
cp ~/.gtkrc-2.0 ./
cp ~/.spacemacs ./
#cp ~/.vimrc ./
cp ~/.xprofile ./

cd ..
pacman -Qqen > Packages
pacman -Qqem > Packages.aur

