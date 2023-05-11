---
title: Qwotes
description: Script to display quotes on terminal startup
slug: qwotes
public: true
layout: ../../layouts/BlogPost.astro
createdAt: Nov 20 2022
tags:
  - Projects
heroImage: /posts/qwotes.png
---

`Qwotes` is a simple bash script to display quotes on terminal startup (or anywhere!). For instructions regarding installation, read the README from the [repository](https://github.com/schmeekygeek/qwotes).

# Dependencies
`Qwotes` depends on 
- `curl` - Command line utility for transferring data using various network protocols
- `jq` - Command line json parser.

# Working
`Qwotes` makes a `GET` request to [api.quotable.io/random](https://api.quotable.io), the `random` endpoint to get a random quote, then parses the response body using `jq` to take the quote and its author and places it in two text files, called `author.txt`, and `qwote.txt` in the `~/.cache` directory.

Then the following code to be put in `~/.bashrc` reads from the text file and displays it on the terminal everytime the shell is sourced i.e started.
```bash
echo
echo -en "${RED}\e[3m❤ $(cat ~/.cache/qwote.txt) ❤\e[0m${NC}"
echo -en "\n${BLUE}\e[3m- $(cat ~/.cache/author.txt)\e[0m${NC}"
echo
```
The above code will display the same quote every time the shell is sourced. To refresh, or get a new quote, simply run `qwotes` again and source `~/.bashrc`.

You can read from the text files that were generated upon running `qwotes` in your own applications too.

