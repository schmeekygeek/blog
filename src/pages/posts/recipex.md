---
title: RecipEx
description: Free to use app to read recipes of your favorite dishes
slug: recipex
public: true
layout: ../../layouts/BlogPost.astro
createdAt: Dec 06 2022
tags:
  - Projects
heroImage: /posts/recipex.png
---

[Download the apk](/posts/recipex.apk)

RecipEx is a free to use app to read recipes of your favorite dishes, aiming to provide an easy to use user-interface and pleasant reading experience.

# Credits
RecipEx uses [TheMealDB's REST api](https://themealdb.com/api) for fetching recipes based on categories, ids, and queries.

# Tech-stack
RecipEx is built using the following technologies:
- [Flutter](https://flutter.dev) -- A Dart framework to build fast, truly cross-platform apps with native platform capabilities.
- [Dart](https://dart.dev) -- A fast, null-safe programming language.
- [Firebase](https://firebase.google.com) -- A backend-as-a-service platform from Google for serverless functions, a database (firestore), analytics, authentication, etc.

# History and background
RecipEx's development started on the *6th of December, 2022*, and is a personal project that I built to sharpen my skills and essentially get good at programming in general. It was actually not my intention to make RecipEx suitable for public usage, but you could use it if you want :)

# Why RecipEx isn't open-source
RecipEx was originally meant to be an open-source application, but couldn't quite end up being one.
The reason is that I accidentally ended up chucking important, confidential details to source control, that I don't want to be revealing to every Bob and their grandma.

*Q. Well, you could just add it to the `.gitignore` file dumb-dumb.*

I could, but the damage was already done, as I committed those files meaning that anyone viewing the repository will have the unwanted privilege of browsing the source-code from a past commit, and quite possibly read my credentials, given to them.

In order to truly get rid of the possibility that people could view these credentials, I will have to rewrite my entire git repository history from scratch, or create and maintain two different repositories, which, to be honest, seems like a lot of work.

Or maybe I'm just missing out on something completely life-saving that would help make RecipEx open-source because I am, by no means, smart enough to understand how everything here works.

# The Backend
I originally intended to have my own backend for RecipEx, but after a lot of mistakes, bad decisions and hopping from one backend solution to another, I finally decided to stick with Firebase, for the sake of my sanity.
