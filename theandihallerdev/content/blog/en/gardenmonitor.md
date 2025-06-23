---
title: From Zero to Full-Stack IoT Project in 4 Hours with AI. Is This the Future of Dev?
date: 2025-06-23
slug: gardenmonitor
description: Full-Stack application build with AI, from frontend to Arduino firmware.
image: https://res.cloudinary.com/dzdh345nq/image/upload/v1750710512/greenhouse_q4ak1w.png
---

#### I just built a full-stack IoT system — from frontend to Arduino firmware — in a few hours, and I barely wrote any code.

A few days ago, my friend Konrad sent me a message about this awesome new AI tool he found: [Lovable.dev](https://lovable.dev/), a site that creates web applications with **zero code**, only AI prompts. I was blown away by how well it made a simple landing page, so of course I had to see how far it could go.

I asked it to create a simple landing page for a coffee shop with login for customers to sign up and get points every time they bought something. A simple CRUD. Again, I was amazed at how well it worked **— with only three prompts**, I was able to create the landing and integrate it with Supabase (an open-source platform that offers a database and backend tools to simplify application development). The only thing I had to do was create a new account, set up a project, and give Lovable permission to access it. Crazy!

I had never used Supabase before — or any platform like it — but I was able to create a fully functional web app with a database in minutes.

Naturally, the next thing had to be even bigger. So I decided to return to an old idea and finally bring it to life: **The Greenhouse Monitor**.

The idea is to build a device to monitor a greenhouse or garden using an ESP32 to collect sensor data and send it to a database, then display the information on a web page.

I started again with Lovable because I needed to visualize my idea first, and since it only takes one prompt for the UI to be generated, I thought: why not? There are no rules today.

And since there are no rules, I decided to embrace the **vibe-coding** thing completely and downloaded Cursor — the cool new AI IDE I’d been meaning to try out.

Again, I was blown away by how smooth it was to set up. I created an account, signed in, imported my VSCode settings, and boom — everything worked. Seamless transition. Just wow.

I cloned my frontend repo and opened it with Cursor. Then I asked it to handle the integration with Supabase based on the sensor data I wanted to display and let it rip. In no time, it edited the project and even gave me the SQL code for Supabase — which, of course, I just slapped into the editor and ran without even reading it **(because that’s the vibe — aka vibe-coding: trusting the AI and running with it)**.

And guess what? Everything worked. The sample data was visible.

Now I needed the last part: the Arduino code. I started a new PlatformIO project from Cursor and wrote the prompt to create a program. I added the sensors I wanted to use and passed in the SQL structure as context. It generated the code in no time.

The final step was to create an Edge Function in Supabase to receive the data and store it. Guess what I did? Yep — I asked Cursor for it, and it delivered. Everything was ready.

Did it work on the first try? Not really. There were small mistakes at almost every step — but nothing crazy. I had to tweak and fix some things manually, mostly because it was faster for me to do it than to ask for changes. But it worked! **A full-stack IoT project, vibe-coded from end to end**.

I’m still in disbelief at how fast I was able to do it. Maybe 4 hours, start to finish.

Will it scale? I don’t know.
Is it secure? I have no idea.
I only skimmed the code, and I have zero experience with RLS, roles, or rules to verify if my database is secure.


---

### But now the real question: Where does this lead?

Is this how things are going to be done now?
Are developers really going to be replaced?
Am I a traitor to my kind?

I don’t have the answers. What I know is that I built something I probably wouldn’t have finished alone — in record time — using tools I barely understood. That’s both exciting and slightly terrifying.

I’m definitely going to keep exploring tools like Lovable and Cursor. What do you think about this new way of building? Is vibe-coding the future — or a shortcut we’ll regret?

If you want to check it out, visit: [Greenhouse Monitor](https://garden.theandihaller.com/)