#!/bin/bash

cp ~/.config/i3/* ./dotconfig/i3/

cd ./tildeslash/

cp ~/.spacemacs ./
cp ~/.bashrc ./
cp ~/.gtkrc-2.0 ./
cp ~/.spacemacs ./
cp ~/.vimrc ./
cp ~/.xprofile ./

pacman -Qqen > Packages
pacman -Qqem > Packages.aur

