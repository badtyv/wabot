process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

/*
	* Create By ndaa
	* Follow https://github.com/ndaadev
	* Whatsapp : wa.me/6282113821188
*/

require('./settings');
const fs = require('fs');
const os = require('os');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const fse = require('fs-extra');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const request = require('request');
const maker = require('mumaker');
const fetch = require('node-fetch');
const googleIt = require('google-it');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const agent = require('superagent');
const similarity = require('similarity');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const nodemailer = require('nodemailer');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const imageToBase64 = require('image-to-base64');
const { exec, spawn, execSync } = require('child_process');
const { Primbon } = require('scrape-primbon');
const primbon = new Primbon();
const PDFDocument = require('pdfkit');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { chatGpt, tiktokDl, facebookDl, instaDl, instaDownload, instaStory, ytMp4, ytMp3, allDl, quotedLyo, Ytdl, cekKhodam, simi, mediafireDl } = require('./lib/screaper');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addUang, setUang, transfer } = require('./lib/game');
const { pinterest, pinterest2, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML } = require('./lib/function');

// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakbendera = db.game.tebakbendera = []

module.exports = ndaa = async (ndaa, m, chatUpdate, store) => {
	try {
		
		await LoadDataBase(ndaa, m);
		
		const botNumber = await ndaa.decodeJid(ndaa.user.id)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.type === 'editedMessage') ? (m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage ? m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : m.message.editedMessage.message.protocolMessage.editedMessage.conversation) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = db.set[botNumber].multiprefix ? '' : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		const more = String.fromCharCode(8206)
		const readmore = more.repeat(999)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		
		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'ndaa'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await ndaa.updateProfileStatus(`${ndaa.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`)
				setbio.status = new Date() * 1
			}
		}
		
		if (!ndaa.public) {
			if (!m.key.fromMe) return
		}
		
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black.bgWhite('[ PESAN ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ DARI ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
			if (db.set[botNumber].autoread) ndaa.readMessages([m.key]);
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await ndaa.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await ndaa.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await ndaa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await ndaa.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await ndaa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await ndaa.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await ndaa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await ndaa.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await ndaa.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await ndaa.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Filter Bot
		if (m.isBot) return
		
		// Mengetik
		if (db.set[botNumber].autotyping && isCmd) {
			await ndaa.sendPresenceUpdate('composing', m.chat)
		}
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam))
		}
		
		// Cek Expired
		prem.expiredCheck(ndaa, premium);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await ndaa.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await ndaa.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) ndaa.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				if (!roof.pilih2) ndaa.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`)
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) ndaa.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) ndaa.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				ndaa.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				ndaa.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					ndaa.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebaknegara, tebakgambar, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id && !isCmd) {
				if (gameName == 'kuismath') {
					jawaban = game[m.chat + id].jawaban
					const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`)
							delete kuismath[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				} else {
					jawaban = game[m.chat + id].jawaban
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`)
						delete game[m.chat + id]
					} else m.reply('*Jawaban Salah!*')
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await ndaa.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		
		
		switch(command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			case 'menu': {
				const menuny = `
				<< INFO KAMU >>
*Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
*Id* : @${m.sender.split('@')[0]}
*User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
*Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
*Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}

				<< INFO BOT >>
*Nama Bot* : ${botname}
*Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
*Owner* : @${owner[0].split('@')[0]}
*Mode* : ${ndaa.public ? 'Public' : 'Self'}
*Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }

				(( PEMBERITAHUAN DARI OWNER ))

				 - UPDATE VERSI 0.1 MERAPIKAN


*GENERAL*
${prefix}menu
${prefix}ping
${prefix}hosting

*GROUP*
${prefix}add (62xxx)
${prefix}kick (@tag/62xxx)
${prefix}promote (@tag/62xxx)
${prefix}demote (@tag/62xxx)
				`
				m.reply(menuny)
			}
			break
			case 'ping': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				resp = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\nOS: Ubuntu LTS`
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(resp)
			}
			break
			case 'hosting': {
				ndaa.reply('BOT ini menggunakan hosting seadanya, jadi jangan di spam ya dek ya')
			}
			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
		}
	} catch (err) {
		console.log(util.format(err));
		//m.reply('*❗ Internal server error️*');
		ndaa.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});