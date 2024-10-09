# The Bard - Discord Bot
<div
    style="display: flex; justify-content: center; align-items: center; margin-bottom: 20px;"
>
    <img src="./the-bard.jfif" alt="Cat The Bard" width="300" style="border-radius: 250px;" />
</div>
In recent years, many of the most popular **music bots** have been shut down by platforms like _YouTube_, _Spotify_, and other music services. **The Bard** is a Discord bot you can add to your server to fill that gap. The Bard streams music from YouTube and is free to use.

To prevent The Bard from being taken down, we are **not providing a public link** to add it to your server. However, you can clone this repository and run it on your own server.

## Features
- 🎶 **Play music from YouTube:** `!play <song URL>`
- ⏭️ **Skip the current track:** `!skip`
- 🛑 **Stop the music:** `!stop`
- 📜 **Show the current queue:** `!queue`
- ❓ **Display the help message:** `!help`
- 🎲 **Roll a dice:** `!roll <quantity of dice>d<dice faces> <modifiers>`  
  _(e.g., `!roll 2d6+3`)_

## How to run
First of all, you need to install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). Then you can follow the steps below:
1. Clone this repository
```bash
git clone <https url>
cd the-bard-bot
```
2. Install the dependencies
```bash
npm install
```
3. Create a `.env` file in the root of the project and add the following content:
```env
DISCORD_TOKEN=<your discord bot token>
PREFIX=<your prefix> # Default is !
```
To get a Discord Bot Token you need to create a new application in the [Discord Developer Portal](https://discord.com/developers/applications) and create a bot in the Bot section.
4. Run the bot
```bash
npm start
```
5. Invite the bot to your server from the Discord Developer Portal

## Conclusion
The Bard is a simple Discord bot that plays music from YouTube. It is a great alternative to other music bots that have been taken down. You can clone this repository and run it on your own server to enjoy music with your friends.