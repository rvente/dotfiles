#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

export VISUAL="vim"

# Vim-Like bindings in command line
set -o vi

# set vim as editor
alias q='exit'
alias ra='ranger'
alias emax='emacsclient -t -a'
# export VISUAL="emacsclient -t -a ''"
export VISUAL="vim"
export EDITOR="$VISUAL"

sh ~/.xprofile
