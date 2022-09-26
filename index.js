#!/usr/bin/env node

// Create emoji
const emoji = require("node-emoji");

// Different emojis
const rocket = emoji.get("rocket");
const camera = emoji.get("camera");
const web = emoji.get("spider_web");
const wave = emoji.get("wave");

// Your details
const fname = "John Doe";                   // Update your name
const jobEmoji = emoji.get("computer");     // Job emoji
const occupation = "Developer";             // Your job or hobby

// Social links
const githubUser = "GitUser123";
const behanceUser = "BehanceUser123";
const domain = "www.github.com";

// Let's talk
const talk = emoji.get("loudspeaker");
const mail = emoji.get("mailbox");
const phone = emoji.get("phone");
const emailAddress = "user@domain.com";
const phoneNumber = ""


console.log(`

${wave} Hi, I'm ${fname}!
${jobEmoji} I am a ${occupation}.

=====================

# ${rocket} GitHub 
https://github.com/${githubUser} /

# ${camera} Behance 
https://behance.net/${behanceUser} /

# ${web} Website 
https://${domain} /

=====================

${talk} Let's talk!

# ${mail} Email 
hi@cal-dev-lab.uk

# ${phone} Phone
+44 (0) 780 777 2956

`);