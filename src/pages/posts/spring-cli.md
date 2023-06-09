---
title: Spring CLI
description: Script to initialize Spring-Boot projects right from your terminal
slug: spring-cli
public: true
layout: ../../layouts/BlogPost.astro
createdAt: July 20 2022
tags:
  - Projects
heroImage: /posts/spring-cli.png
---

[Link to GitHub repository](https://github.com/schmeekygeek/spring-cli)

# Table of Contents
- [About](#about)
- [Working](#working)
- [Install](#installation)
- [Usage](#usage)
- [Side Notes](#notes)
- [Contributing](#contributing)
- [License](#license)

# About

I needed a handy tool to generate ***Spring Boot*** projects from my terminal and I couldn't find any. So I wrote one myself :D

# Working
This script collects all relevant information required to initialize a ***Spring Boot*** project and makes an api call to [start.spring.io](https://start.spring.io) using [httpie](https://httpie.io) to download the zip file containing the project.

## Installation
* ***Dependency*** Httpie
```bash
$ npm install -g httpie
```

```bash
$ git clone https://github.com/schmeekygeek/spring-cli
$ cd spring-cli/
$ chmod +x spring-cli
$ sudo cp spring-cli ~/.local/bin/
```

To uninstall, simply remove `spring-cli` from `/usr/bin/`
```bash
$ sudo rm ~/.local/bin/spring-cli
```

# Usage
```bash
$ spring-cli
spring-cli: A command-line tool to generate spring projects right from your terminal

: Usage
        spring-cli {option}
: Options
        --help                          Print this help message and exit
        --list-dependencies             List all dependencies
        --create-project                Create a project interactively
```

# Notes
- I could've gone with cURL as the http client, but I felt like using httpie. You can edit the script however you like to fit your needs.

# Contributing
All sorts of pull requests to improve the script are welcome :D

# License
This product is licensed under the ***GNU General Public License V3***

<p align="center"><a href="https://github.com/schmeekygeek/spring-cli/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=GPL&logoColor=d9e0ee&colorA=302d41&colorB=c9cbff"/></a></p>
