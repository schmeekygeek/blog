---
title: Introduction to Vim
description: A beginner friendly guide to grokking the vim editor
slug: vim-tutorial
public: true
layout: ../../layouts/BlogPost.astro
createdAt: Apr 10 2023
tags:
  - Tutorials
heroImage: /posts/vim-tutorial.png
---

# A brief history of the Vim and Vi editors
- TODO history

# Installation
Many Linux distributions come pre-installed with Vim. However, if yours doesn't have it, you can do so by
- Arch Linux: `sudo pacman -S vim`
- Debian and its derivatives (Ubuntu, Linux Mint): `sudo apt install vim`
- MacOS: `brew install vim`
- Windows: `please install linux`

Open up Vim, and you'll be presented with this screen.

- TODO add image

Now, simply enter `:`(colon), your cursor will appear at the bottom of the editor. Insert `q` there and hit `Enter` to quit Vim. You have now successfully installed vim and learnt how to open it and exit it!

# Basic concepts of Vim
In Vim, there are 4 modes, namely `Normal`, `Insert`, `Command` and `Visual`.
- `Normal`: The mode where you navigate around your editor, jump between and delete words and lines. You mostly go to all other modes from here.
- `Insert`: The mode where you insert text to the buffer.
- `Command`: The mode where you execute commands in Vim such as save, quit, etc.
- `Visual`: The mode where you select and copy text.

We will learn about each of these modes to some depth in this tutorial.

## Normal
This is the mode where you navigate around your vim editor.
