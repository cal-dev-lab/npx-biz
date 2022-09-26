#!/usr/bin/env node

/*
    I will be working on this alone but I am open to
    other developers to work on this and make suggestions.

    Source repo:    https://github.com/cal-dev-lab/npx-biz/
    NPM repo:       https://www.npmjs.com/package/npx-biz/
*/

// Next-steps:
// TODO: Moodboard npx-biz logo and fonts
// TODO: Find cool functionalities
// TODO: Find colours for text
// TODO: Make this a console selected input in the terminal to populate variables
// TODO: Make website and document code and next steps

// Create emoji
const emoji = require("node-emoji");

// Different emojis
const rocket = emoji.get("rocket");                 // GitHub emoji
const camera = emoji.get("camera");                 // Behance emoji
const web = emoji.get("spider_web");                // Website emoji
const wave = emoji.get("wave");                     // Title emoji
const picture = emoji.get("frame_with_picture");    // Instagram emoji
const bird = emoji.get("bird");                     // Twitter emoji

// Your details
const fname = "John Doe";                           // Update your name
const jobEmoji = emoji.get("computer");             // Job emoji
const occupation = "Developer";                     // Your job or hobby

// Social links
const githubUser = "GitUser123";                    // Your GitHub username
const behanceUser = "BehanceUser123";               // Your Behance username
const instagramUser = "IGUser123";                  // Your Instagram username
const twitterUser = "TwitterUser123";               // Your Twitter username
const domain = "www.github.com";                    // Your website

// Let's talk
const talk = emoji.get("loudspeaker");              // Title emoji
const mail = emoji.get("mailbox");                  // Email emoji
const phone = emoji.get("phone");                   // Phone emoji
const emailAddress = "user@domain.com";             // Your email address
const phoneNumber = "07537735777";                  // Your phone number

console.log(`

${wave} Hi, I'm ${fname}!
${jobEmoji} I am a ${occupation}.

=====================

Find me here:

# ${rocket} GitHub 
https://github.com/${githubUser}/

# ${camera} Behance 
https://behance.net/${behanceUser}/

# ${picture} Instagram
https://instagram.com/${instagramUser}/

# ${bird} Twitter
https://instagram.com/${twitterUser}/

# ${web} Website 
https://${domain}/

=====================

${talk} Let's talk!

# ${mail} Email
${emailAddress}

# ${phone} Phone
${phoneNumber}

`);