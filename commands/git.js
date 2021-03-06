/****************************************
 * 
 *   Git: Command for AleeBot
 *   Copyright (C) 2017-2020 Alee Productions
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * *************************************/
module.exports.run = async (client, message) => {
  const Discord = require('discord.js');
  const git = require('git-last-commit');
  git.getLastCommit(function(err, commit) {
  const embed = new Discord.RichEmbed()
  .setTitle('GitHub Information')
  .addField('**Repository:**', 'https://github.com/aleeproductions/AleeBot-JS')
  .addField('**Last Commit:**', commit.subject)
  .addField('**Commited By:**', commit.author.name)
  .setColor('#1fd619')
  message.channel.send({ embed });
  })
};

exports.conf = {
  aliases: [],
  guildOnly: false,
};
exports.help = {
  name: 'git',
  description: 'Get the git info.',
  usage: 'git',
  category: '- General Commands',
};
