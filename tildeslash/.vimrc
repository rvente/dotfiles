" Working under xfce4 termin4l using nvim
set nocompatible               " Be iMproved

let vimplug_exists=expand('~/.config/vim/autoload/plug.vim')
let g:vim_bootstrap_editor = "vim"				" nvim or vim

" Required:
call plug#begin(expand('~/.config/vim/plugged'))

" Plug install packages
Plug 'scrooloose/nerdtree'
Plug 'jistr/vim-nerdtree-tabs'
Plug 'tpope/vim-fugitive'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'reedes/vim-lexical'
Plug 'junegunn/goyo.vim'
Plug 'airblade/vim-gitgutter'
Plug 'bronson/vim-trailing-whitespace'
Plug 'majutsushi/tagbar'
Plug 'avelino/vim-bootstrap-updater'
Plug 'sheerun/vim-polyglot'

"My Pack
Plug 'francoiscabrol/ranger.vim' "Adds ranger file manager
Plug 'rbgrouleff/bclose.vim'    "see above, dependency needed for nvim
Plug 'reedes/vim-colors-pencil' "For writing prose
Plug 'reedes/vim-pencil'        "see above
Plug 'terryma/vim-multiple-cursors'     "acivate with <C-n>
Plug 'junegunn/limelight.vim'
Plug 'flazz/vim-colorschemes'
Plug 'kana/vim-operator-user'
Plug 'haya14busa/vim-operator-flashy'

call plug#end()

" Required:
filetype plugin indent on

"" Tabs. May be overriten by autocmd rules
set tabstop=4
set softtabstop=0
set shiftwidth=4
set expandtab

"" Enable hidden buffers
set hidden

"" Searching
set hlsearch
set incsearch
set ignorecase
set smartcase

"" Directories for swp files
set nobackup
set noswapfile

set fileformats=unix,dos,mac
set showcmd

"terminal
set shell=/bin/bash
nnoremap <leader>t :shell<CR>

" session management
let g:session_directory = "~/.config/vim/session"
let g:session_autoload = "no"
let g:session_autosave = "yes"
let g:session_command_aliases = 1

" visal settings
syntax on
set ruler
set number
set relativenumber
set splitbelow
set splitright
noh

set mousemodel=popup
set t_Co=256
set guioptions=egmrti

set showcmd

"" Disable the blinking cursor.
set scrolloff=3

"" Status bar
set laststatus=2

"" Use modeline overrides
set modeline
set modelines=10

set title
set titleold="vim"
set titlestring=%F

set statusline=%F%m%r%h%w%=(%{&ff}/%Y)\ (line\ %l\/%L,\ col\ %c)\

if exists("*fugitive#statusline")
  set statusline+=%{fugitive#statusline()}
endif

"*****************************************************************************
"" Abbreviations
"*****************************************************************************
"" no one is really happy until you have this shortcuts
cnoreabbrev W! w!
cnoreabbrev Q! q!
cnoreabbrev Qall! qall!
cnoreabbrev Wq wq
cnoreabbrev Wa wa
cnoreabbrev wQ wq
cnoreabbrev WQ wq
cnoreabbrev W w
cnoreabbrev Q q
cnoreabbrev Qall qall

"" NERDTree configuration
let g:NERDTreeChDirMode=2
let g:NERDTreeIgnore=['\.rbc$', '\~$', '\.pyc$', '\.db$', '\.sqlite$', '__pycache__']
let g:NERDTreeSortOrder=['^__\.py$', '\/$', '*', '\.swp$', '\.bak$', '\~$']
let g:NERDTreeShowBookmarks=1
let g:nerdtree_tabs_focus_on_files=1
let g:NERDTreeMapOpenInTabSilent = '<RightMouse>'
let g:NERDTreeWinSize = 50
set wildignore+=*/tmp/*,*.so,*.swp,*.zip,*.pyc,*.db,*.sqlite
nnoremap <silent> <F2> :NERDTreeFind<CR>
noremap <F3> :NERDTreeToggle<CR>

"*****************************************************************************
"" Autocmd Rules
"*****************************************************************************
"" The PC is fast enough, do syntax highlight syncing from start
augroup vimrc-sync-fromstart
  autocmd!
  autocmd BufEnter * :syntax sync fromstart
augroup END

"" Remember cursor position
augroup vimrc-remember-cursor-position
  autocmd!
  autocmd BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g`\"" | endif
augroup END

set autoread

let mapleader=' '

" Disable visualbell
set noerrorbells visualbell

" Copy/Paste/Cut
noremap YY "+y<CR>
noremap <leader>p "+gP<CR>
noremap XX "+x<CR>

" prev next and close buffer controls
noremap <C-j> :bp<CR>
noremap <C-k> :bn<CR>
noremap <C-w> :bd<CR>

" Vmap for maintain Visual Mode after shifting > and <
vmap < <gv
vmap > >gv

" Move visual block
vnoremap J :m '>+1<CR>gv=gv
vnoremap K :m '<-2<CR>gv=gv

"" ranger launch
map <leader>f :Ranger<CR>
let g:ranger_map_keys = 0

" theme load
" colorscheme proletariat " benokai 1989 tomorrow-night proletairat / airline alduin
let g:onedark_termcolors=16
colorscheme onedark
set background=dark

" invisibles
set listchars=tab:▸\ ,eol:¬
set list

if (empty($TMUX))
  if (has("nvim"))
    "For Neovim 0.1.3 and 0.1.4 < https://github.com/neovim/neovim/pull/2198 >
    let $NVIM_TUI_ENABLE_TRUE_COLOR=1
  endif
  "For Neovim > 0.1.5 and Vim > patch 7.4.1799 < https://github.com/vim/vim/commit/61be73bb0f965a895bfb064ea3e55476ac175162 >
  "Based on Vim patch 7.4.1770 (`guicolors` option) < https://github.com/vim/vim/commit/8a633e3427b47286869aa4b96f2bfc1fe65b25cd >
  " < https://github.com/neovim/neovim/wiki/Following-HEAD#20160511 >
  if (has("termguicolors"))
    set termguicolors
  endif
endif

augroup lexical
  autocmd!
  autocmd FileType markdown,mkd,md call lexical#init()
  autocmd FileType textile call lexical#init()
  autocmd FileType text call lexical#init({ 'spell': 0 })
augroup END
let g:lexical#spell_key = '<leader>s'

autocmd! User GoyoEnter Limelight
autocmd! User GoyoLeave Limelight!

"Airline Settings -- requires https://github.com/powerline/fonts read http://vi.stackexchange.com/questions/3359/how-to-fix-status-bar-symbols-in-airline-plugin
let g:airline_powerline_fonts = 1
let g:airline_theme = 'onedark'

let g:airline#extensions#virtualenv#enabled = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline#extensions#tabline#enabled = 1
let g:airline_powerline_fonts = 1
"let g:airline_symbols.space = "\ua0"

if !exists('g:airline_symbols')
    let g:airline_symbols = {}
endif

" unicode symbols
let g:airline_left_sep = '»'
let g:airline_left_sep = '▶'
let g:airline_right_sep = '«'
let g:airline_right_sep = '◀'
let g:airline_symbols.linenr = '␊'
let g:airline_symbols.linenr = '␤'
let g:airline_symbols.linenr = '¶'
let g:airline_symbols.branch = '⎇'
let g:airline_symbols.paste = 'ρ'
let g:airline_symbols.paste = 'Þ'
let g:airline_symbols.paste = '∥'
let g:airline_symbols.whitespace = 'Ξ'

" airline symbols
let g:airline_left_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_right_sep = ''
let g:airline_right_alt_sep = ''
let g:airline_symbols.branch = ''
let g:airline_symbols.readonly = ''
let g:airline_symbols.linenr = ''
let g:airline_left_sep = ''
let g:airline_left_alt_sep = ''
let g:airline_right_sep = ''
let g:airline_right_alt_sep = ''
let g:airline_symbols.branch = ''
let g:airline_symbols.readonly = ''
let g:airline_symbols.linenr = ''

"flashy
map <silent> y <Plug>(operator-flashy)
nmap <silent> Y <Plug>(operator-flashy)$

"Prose Writing Section"

augroup pencil
    autocmd!
    autocmd FileType markdown,mkd,md call pencil#init()
    autocmd FileType markdown,mkd,md set so=10
    autocmd FileType markdown,mkd,md set nolist
    autocmd FileType text            call pencil#init()
    augroup END

let g:pencil#wrapModeDefault = 'soft'
let g:pencil#conceallevel = 0     " 0=disable, 1=one char, 2=hide char, 3=hide all (def)
let g:pencil#concealcursor = 'c'  " n=normal, v=visual, i=insert, c=command (def)

set so=999 " keep active line in the centre of screen

