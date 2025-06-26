---
title: Trackeen
date: 2025-06-26
slug: trackeen
description: Trackeen is a portable habit-tracking device developed with an ESP32 and programmed in C++ using PlatformIO.
image: https://res.cloudinary.com/dzdh345nq/image/upload/v1730816589/git/trackeen.jpg
---

### Trackeen: A Simple, Smart and Connected Habit Tracking Device

Over the past few months, I've been working on developing a device that aims to solve a common yet deeply personal challenge: **building and maintaining consistent habits**. That's how **Trackeen** was born — a small digital companion designed to help people stay aligned with their goals without relying on phones or complex apps.

![Trackeen Updating](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_1_qckvyg.jpg)

## Why Trackeen?

In a world saturated with notifications and distractions, many people are searching for simpler and more mindful ways to organize their lives. Mobile apps for habit tracking can be useful, but they’re often buried among countless other apps. Plus, constantly interacting with your phone can undermine your efforts to stay focused on healthy routines.

Trackeen was created to address this need: **a physical tool dedicated exclusively to habit tracking**, with no distractions, no social media, and no noise.

![Trackeen in progress](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_2_ilftul.jpg)

## What is Trackeen?

**Trackeen is a portable device based on the ESP32**, programmed with Arduino / C++ using PlatformIO. It allows users to manually log habits through a simple interface. Each time the user completes a meaningful action—like meditating, exercising, or drinking water—they can record it directly on the device.

Thanks to its **ultra low-power e-ink display**, the device can show essential information without draining the battery, staying on for weeks on a single charge. This screen also enables gentle visual reminders without emitting artificial light or causing distractions.

Trackeen provides **visual and auditory reminders** at strategic times to help users stay focused on their key habits. The device can also be configured to display basic stats for daily or weekly progress.

![Trackeen being assembled](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_3_ntnail.jpg)

## Smart Cloud Sync

One of the system’s most powerful features is its ability to connect to the internet via Wi-Fi and **sync data with Google Sheets in real time**, using the Google API. This gives users not only a local copy of their progress but also the ability to **view and analyze their data from any device**. This integration removes the need for third-party apps and makes analysis easy through familiar tools like Google Sheets or Google Data Studio.

![Trackeen in different colors](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_4_fgrhdi.jpg)

## Technical Features

- **Platform:** ESP32 programmed in C++ with PlatformIO  
- **Display:** Low-power e-ink (ePaper) screen  
- **Connectivity:** Wi-Fi with OAuth2 authentication to send data to Google Sheets  
- **User Interface:** Physical buttons and on-screen menu  
- **Reminders:** Sound and visual icons  
- **Syncing:** Real-time cloud sync via API  
- **Remote Updates:** OTA-compatible via custom API  
- **Power Efficiency:** Optimized for long use thanks to ESP32 low-power modes  

## A Personal and Technical Journey

As **Co-Founder and sole developer** of the project, I was responsible for the entire technical system — from firmware architecture and ESP32 programming to energy management, integration with Google services, and the development of internal tools for remote updates.

I worked side by side with my partner Konrad, who leads the business side of the project, while I handled all aspects of the technical development and implementation. It was a challenging project that allowed me to combine my interests in electronics, embedded software, product design, and cloud workflow automation.

![Andi and Konrad in a meeting](https://res.cloudinary.com/dzdh345nq/image/upload/v1750964750/git/trackeen_5_wg5qyy.jpg)

---

**Trackeen is, above all, a tool built with intention.**  
It’s not here to replace your phone, but to help you reconnect with your goals without distractions.  
Its simplicity is its greatest strength: a small, elegant device focused on one thing — helping you stay on track.
