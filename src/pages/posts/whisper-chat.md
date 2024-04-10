---
title: WhisperChat
description: An anonymous texting platform
slug: whisperchat
public: true
layout: ../../layouts/BlogPost.astro
createdAt: April 9 2024
tags:
  - Projects
heroImage: /posts/whisperchat.jpeg
---

`WhisperChat` is a simple anonymous texting platform built for mobile.

[Backend (GitHub)](https://github.com/schmeekygeek/whisperchat-backend)

[Client App (GitHub)](https://github.com/schmeekygeek/whisper-chat)

# What it does
You select what in what range you would want to talk to someone, and the closest person in your range that lies in their own selected range are matched together to talk.

# Technologies used

### Golang.
A simple to use, general purpose, fast and memory efficient programming language for building backend applications, cloud services, command-line applications and more.

### Websockets.
A TCP based protocol for the web that allows for stateful bidirectional communication between hosts.
### Flutter.
A Dart framework for building cross-platform applications.

### Ngrok.
A cloud service for fast application delivery and `localhost-to-cloud` exposing tunnelling services.

# How it works
`WhisperChat` collects your location (longitude, latitude) and a range (in kms) from you, and sends it to the server. The client has to wait in a queue. As soon as another client connects, the distance between their location and yours is calculated and compared with the range that both of them have selected. If the distance between them is less than both ranges, then they're moved from the queue to a room where they can communicate.
