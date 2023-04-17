---
title: Why I use dvorak
description: The circumstances that led me to use the dvorak alternate keyboard layout and the challenges I faced
slug: why-i-use-dvorak
public: true
layout: ../../layouts/BlogPost.astro
createdAt: April 17 2023
tags:
  - Miscellaneous
heroImage: /posts/why-i-use-dvorak.png
---

As a programmer, I have to type a lot and suffer from [Repetitive Strain Injury (RSI)](https://my.clevelandclinic.org/health/diseases/17424-repetitive-strain-injury). I've tried many ways to help with this, such as improving my posture, which did help, but not to a great extent. After a bit of research, I decided to switch to a completely different layout other than QWERTY.
I considered other options such as Colemak, but chose Dvorak because it was good enough, and it was natively available in many operating systems.

# The problem with QWERTY
QWERTY was supposedly designed for typewriters to solve a very specific problem – to keep the keys from jamming against each other. The most frequently used keys were placed apart from each other to prevent them from jamming, resulting in a very non-ergonomic and inefficient layout.
It was essentially designed to tackle a problem that no longer exists today in the modern world.

![Heatmap of QWERTY and Dvorak](/posts/dvorak-qwerty-heatmap.png)
The above heatmap is proof why QWERTY was never meant to be ergonomic

# A brief history of the Dvorak keyboard
[Dvorak](https://en.wikipedia.org/wiki/Dvorak_keyboard_layout) is a keyboard layout which was designed by [August Dvorak](https://en.wikipedia.org/wiki/August_Dvorak), an American educational psychologist and professor with his brother-in-law in the year 1936, aimed to be faster, more efficient and ergonomic than [QWERTY](https://en.wikipedia.org/wiki/QWERTY).

It positions the most used keys of the english alphabet on the home-row[^1] of the keyboard, which reduces the distance the fingers need to reach to hit a key, consequently increasing speed.

Almost all vowels of the English alphabet is accessible by just the left hand's resting position, allowing for alternation, a technique where one finger or hand doesn't have to press a key repeatedly to type a sequence of characters.

(Try typing the word 'minimum' on your QWERTY keyboard using the typical [touch-type method](https://en.wikipedia.org/wiki/Touch_typing), and you'll probably understand what I mean)

# Why the Dvorak keyboard couldn't take over

When the Dvorak layout was introduced as an alternative, QWERTY had already cemented itself as the most popular keyboard layout, and the people, organizations, schools won't bother learning a new one because the established standard of QWERTY keyboards was good enough for their basic typing needs.

> I am tired of trying to do something worthwhile for the human race, they simply don't want to change

-- August Dvorak

# My journey of switching to Dvorak
I looked up ways to start learning Dvorak and came across [learn.dvorak.nl](https://learn.dvorak.nl), an online platform that provides 5 lessons that you can take to learn Dvorak.

Being adept with QWERTY, it was an excruciating experience at first, where I managed to type a lesson of 100 words with the initial 8 keys of Dvorak's home row, in 14 minutes.
I felt like I was at war with my brain. My instinct and muscle memory was overwhelming, it made me type in QWERTY, but I insisted on typing Dvorak's keys. 
However, I kept going. 
Repeatedly typing away the first lesson, going from finishing the first lesson in 14 minutes to ending up at ~12 within a span of 6-7 lessons.

It started to feel real good. I instantly realized that it was much more comfortable and easily better than QWERTY. I was amazed at how many words of the English language can be easily typed by just the home row of the Dvorak layout.
I was still using QWERTY at the time, outside of my practice hours.

Days passed by, I went from typing the first lesson in 12 minutes down to ~6 minutes. I was feeling confident. One of the main advantages of trying to type in a new layout is that it makes you faster and more accurate in the one you already use because you have to press each key deliberately, and rely on muscle memory the least.

After managing to complete the 1st lesson in ~4 minutes, I decided to go to the next one that consisted of the entire home-row and not just the initial 8 keys. Obviously struggled a lot, but practiced it to the point where I could complete that lesson in ~4-5 minutes or so.

![homerow](/posts/homerow.png)

After completing all other lessons, I could now type the entire Roman alphabet in Dvorak, albeit slow.
I started using it all the time in my daily tasks. It was an amazing feeling. I loved how comfortable and fast it felt. Just when I was actually enjoying typing in it, was when reality started to set in.

# The huge setback
I had essentially learned the Dvorak layout and had gotten quite good at it, when I realized, that using [Vim](https://en.wikipedia.org/wiki/Vim_(text_editor))[^2] would not be as easy as I thought it would be. Vim is a terminal based text editor, highly optimized for editing code, that forces you to use just the keyboard, making you more productive and saving time.

It has modes such as `Normal` and `Insert`, where you can navigate between one, and edit text in another.
There are other modes such as `Visual` and `Command` that let you select text and execute commands, respectively.

Editing text was muscle memory for me. It was not like I had to think about the sequence of keys I needed to press to achieve a desired behavior. Deleting a line with `Shift-v` or `dd` for example, was something I never had to think about. I just went, I want to delete a line, do `Shift-v`. With dvorak, it felt really uncomfortable. I felt like I had to re-learn how to use Vim, to be able to use it with Dvorak.

I was devastated. Having invested so much time trying to learn a new layout only to not be able to do the thing that I decided to learn it for in the first place. I tried looking at ways to map my Vim key bindings to QWERTY, such that I would be typing only my key bindings in QWERTY and every other text in Dvorak. But I soon realized that it would,
- Defeat the entire purpose of switching to Dvorak in the first place.
- Be impossible to be able to use Dvorak outside of Vim in programs such as tmux.
- Absolutely turn my brain into mush.

I had to shake my head and walk away sadly.

# What was next for me?
I still was practicing Dvorak apart from work but continued to use QWERTY with Vim. Then I one day, I thought to my self, "What if I simply learn to use Vim with Dvorak?" *Duh.* Why didn't I think of that?

![duh](/posts/willem-duh.gif)

Just kidding. I thought about learning it, but felt so lazy that I decided to find ways to go around it, until I realized, that,
> I simply can't let how I feel dictate what I do in life.

-- Me, professional retard

# Vim with Dvorak

I stumbled across a Vim plugin written by [ThePrimeagen](https://twitter.com/ThePrimeagen)[^3] called [VimBeGood](https://github.com/ThePrimeagen/vim-be-good) intended to help developers practice using Vim by playing games such as *whack-a-mole*.
It was the perfect program for my use-case. I starting practing Vim with Dvorak on it. There were a few rough bumps on the road but with VimBeGood, I managed to learn almost all my key bindings and got quite good at it.
I felt confident on using Dvorak with Vim.

It was a very liberating feeling, because I was always under this regret that I had wasted my time trying to learn a new layout, all to just keep it aside forever. I started seeing light at the end of the tunnel, my eyes glistening with teardrops, as I try and contain my emotions. My journey was complete.

[^1]: The middle row of a modern-day keyboard
[^2]: A powerful terminal based text editor that forces you to use just the keyboard for editing text
[^3]: Engineer at Netflix, content creator on Twitch and YouTube.
