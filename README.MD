# The Bard - Discord Bot
In the latest years all of the most famous _BOTS_ players of music was shut down by YouTube, Spotify and other music platforms. The Bard is a Discord Bot that you can add at your server to deal with this problem. The Bard is a bot that plays music from YouTube, and it's free to use.
Of course, we don´t want the BOT be shut down, so we are not going to provide a public link to add it to your server. But you can clone this repository and run it on your own server.

## Features
- Play music from YouTube - [!play <song url from youtube>]
- Skip music - [!skip]
- Stop music - [!stop]
- Show the queue - [!queue]
- Show the help message - [!help]
- Roll a dice - [!roll <quantity of dices>d<dice faces><options>] (e.g: !roll 2d6+3)

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