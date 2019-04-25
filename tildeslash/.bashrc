#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# Vim-Like bindings in command line
set -o vi

# abbreviations
alias q='exit'
alias ra='ranger'
alias emax='emacsclient -t -a'
alias open='xdg-open'

# set editor
#export VISUAL="emacsclient -nw"
export VISUAL="vim"
export EDITOR="vim"

sh ~/.xprofile

export GTK_IM_MODULE=ibus
export XMODIFIERS=@im=ibus
export QT_IM_MODULE=ibus

alias virtualenv="/home/ralph/.local/bin/virtualenv "
source /usr/share/nvm/init-nvm.sh
