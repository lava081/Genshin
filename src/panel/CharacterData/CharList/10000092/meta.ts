import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 嘉明 */
export const metaData = {
	info: {
		title: "骏猊頕首",
		allegiance: "剑匣镖局",
		birth: "12-22",
		astro: "醒狮座",
		desc: "剑匣镖局的镖师，威水舞兽队的话事人。",
		cncv: "谢莹",
		jpcv: "小松昌平",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 11419,
		[AttrKeys.atk]: 301.6,
		[AttrKeys.def]: 703
	},
	growAttr: {
		key: AttrKeys.atk + "Pct",
		value: 24
	},
	materials: {
		[MaterialType.gem]: "燃愿玛瑙",
		[MaterialType.boss]: "帝皇的决断",
		[MaterialType.specialty]: "星螺",
		[MaterialType.normal]: "史莱姆原浆",
		[MaterialType.talent]: "「繁荣」的哲学",
		[MaterialType.weekly]: "无光质块"
	},
	talent: {
		[GsTalentType.a]: {
			id: 9231,
			name: "普通攻击·刃爪悬星",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多四段的连续攻击。",
				"<h3>重击</h3>",
				"持续消耗体力，旋转大剑攻击周围的敌人。",
				"停止旋转时，会进行一次格外有力的挥砍。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"83.86%",
						"90.68%",
						"97.51%",
						"107.26%",
						"114.08%",
						"121.88%",
						"132.61%",
						"143.34%",
						"154.06%",
						"165.76%",
						"177.46%",
						"189.16%",
						"200.86%",
						"212.57%",
						"224.27%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"79.04%",
						"85.48%",
						"91.91%",
						"101.1%",
						"107.54%",
						"114.89%",
						"125%",
						"135.11%",
						"145.22%",
						"156.25%",
						"167.28%",
						"178.31%",
						"189.34%",
						"200.37%",
						"211.4%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"106.65%",
						"115.33%",
						"124.01%",
						"136.41%",
						"145.09%",
						"155.01%",
						"168.65%",
						"182.29%",
						"195.93%",
						"210.81%",
						"225.69%",
						"240.57%",
						"255.45%",
						"270.34%",
						"285.22%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"127.95%",
						"138.36%",
						"148.78%",
						"163.66%",
						"174.07%",
						"185.97%",
						"202.34%",
						"218.7%",
						"235.07%",
						"252.92%",
						"270.78%",
						"288.63%",
						"306.48%",
						"324.34%",
						"342.19%"
					]
				},
				{
					name: "重击循环伤害",
					isSame: false,
					values: [
						"62.52%",
						"67.61%",
						"72.7%",
						"79.97%",
						"85.06%",
						"90.87%",
						"98.87%",
						"106.87%",
						"114.87%",
						"123.59%",
						"132.31%",
						"141.04%",
						"149.76%",
						"158.49%",
						"167.21%"
					]
				},
				{
					name: "重击终结伤害",
					isSame: false,
					values: [
						"113.09%",
						"122.29%",
						"131.5%",
						"144.65%",
						"153.86%",
						"164.37%",
						"178.84%",
						"193.31%",
						"207.77%",
						"223.55%",
						"239.33%",
						"255.11%",
						"270.89%",
						"286.67%",
						"302.45%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点",
						"每秒40点"
					]
				},
				{
					name: "最大持续时间",
					isSame: true,
					values: [
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒",
						"5秒"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"64.15%",
						"69.37%",
						"74.59%",
						"82.05%",
						"87.27%",
						"93.23%",
						"101.44%",
						"109.64%",
						"117.85%",
						"126.8%",
						"135.75%",
						"144.7%",
						"153.65%",
						"162.6%",
						"171.55%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"128.26% / 160.21%",
						"138.7% / 173.25%",
						"149.14% / 186.29%",
						"164.06% / 204.92%",
						"174.5% / 217.96%",
						"186.43% / 232.86%",
						"202.84% / 253.35%",
						"219.24% / 273.84%",
						"235.65% / 294.34%",
						"253.54% / 316.69%",
						"271.44% / 339.05%",
						"289.34% / 361.4%",
						"307.24% / 383.76%",
						"325.13% / 406.11%",
						"343.03% / 428.46%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 9232,
			name: "瑞兽登高楼",
			desc: [
				"以舞兽之法向前扑击，接触目标或地形后高高腾跃至空中。",
				"嘉明因元素战技·瑞兽登高楼而升空后，若进行下落攻击，则会施展格外强劲的下落攻击·踏云献瑞。",
				"<h3>下落攻击·踏云献瑞</h3>",
				"通过元素战技·瑞兽登高楼施放的下落攻击，造成的伤害将转化为无法被附魔覆盖的火元素伤害，并在落地时使嘉明消耗一定的生命值，至多通过这种方式使嘉明的生命值降低至10%。",
				"踏云献瑞造成的伤害视为下落攻击伤害。",
				"<i>「瑞兽踏高步采青呢，寓意瑞气临门，生财有道，祝各位步步高升啦！」</i>"
			],
			tables: [
				{
					name: "下落攻击·踏云献瑞伤害",
					isSame: false,
					values: [
						"230.4%",
						"247.68%",
						"264.96%",
						"288%",
						"305.28%",
						"322.56%",
						"345.6%",
						"368.64%",
						"391.68%",
						"414.72%",
						"437.76%",
						"460.8%",
						"489.6%",
						"518.4%",
						"547.2%"
					]
				},
				{
					name: "消耗生命值",
					unit: "生命值上限",
					isSame: false,
					values: [
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%",
						"15%"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒",
						"6秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 9239,
			name: "璨焰金猊舞",
			desc: [
				"嘉明进入舞兽态势，为嘉明施加短暂的火元素附着，恢复一定的生命值，并召唤可靠的伙伴猊兽·文仔砸击目标，造成火元素范围伤害。",
				"猊兽·文仔完成砸击后将向附近滚落，随后向嘉明的位置移动，成功与嘉明会合时，猊兽·文仔将退场，并刷新嘉明的元素战技「瑞兽登高楼」的冷却时间。",
				"舞兽态势持续期间，提高嘉明的抗打断能力，下落攻击·踏云献瑞落地时，或瑞兽登高楼的向前扑击结束时，若嘉明的生命值高于50%，将再次唤出猊兽·文仔。",
				"场上至多同时存在一位嘉明自己的猊兽·文仔。",
				"效果将在嘉明退场时解除。",
				"<i>「金猊吐祥，火树银花，嗱，这个就叫红红火火，常赚常有咯。」</i>"
			],
			tables: [
				{
					name: "猊兽·文仔砸击伤害",
					isSame: false,
					values: [
						"370.4%",
						"398.18%",
						"425.96%",
						"463%",
						"490.78%",
						"518.56%",
						"555.6%",
						"592.64%",
						"629.68%",
						"666.72%",
						"703.76%",
						"740.8%",
						"787.1%",
						"833.4%",
						"879.7%"
					]
				},
				{
					name: "技能治疗量",
					unit: "生命值上限",
					isSame: false,
					values: [
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%",
						"30%"
					]
				},
				{
					name: "舞兽态势持续时间",
					isSame: true,
					values: [
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒",
						"12秒"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒",
						"15秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60",
						"60"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: {
			"一段伤害": [
				83.86,
				90.68,
				97.51,
				107.26,
				114.08,
				121.88,
				132.61,
				143.34,
				154.06,
				165.76,
				177.46,
				189.16,
				200.86,
				212.57,
				224.27
			],
			"二段伤害": [
				79.04,
				85.48,
				91.91,
				101.1,
				107.54,
				114.89,
				125,
				135.11,
				145.22,
				156.25,
				167.28,
				178.31,
				189.34,
				200.37,
				211.4
			],
			"三段伤害": [
				106.65,
				115.33,
				124.01,
				136.41,
				145.09,
				155.01,
				168.65,
				182.29,
				195.93,
				210.81,
				225.69,
				240.57,
				255.45,
				270.34,
				285.22
			],
			"四段伤害": [
				127.95,
				138.36,
				148.78,
				163.66,
				174.07,
				185.97,
				202.34,
				218.7,
				235.07,
				252.92,
				270.78,
				288.63,
				306.48,
				324.34,
				342.19
			],
			"重击循环伤害": [
				62.52,
				67.61,
				72.7,
				79.97,
				85.06,
				90.87,
				98.87,
				106.87,
				114.87,
				123.59,
				132.31,
				141.04,
				149.76,
				158.49,
				167.21
			],
			"重击终结伤害": [
				113.09,
				122.29,
				131.5,
				144.65,
				153.86,
				164.37,
				178.84,
				193.31,
				207.77,
				223.55,
				239.33,
				255.11,
				270.89,
				286.67,
				302.45
			],
			"下坠期间伤害": [
				64.15,
				69.37,
				74.59,
				82.05,
				87.27,
				93.23,
				101.44,
				109.64,
				117.85,
				126.8,
				135.75,
				144.7,
				153.65,
				162.6,
				171.55
			],
			"低空/高空坠地冲击伤害": [
				[128.26, 160.21],
				[138.7, 173.25],
				[149.14, 186.29],
				[164.06, 204.92],
				[174.5, 217.96],
				[186.43, 232.86],
				[202.84, 253.35],
				[219.24, 273.84],
				[235.65, 294.34],
				[253.54, 316.69],
				[271.44, 339.05],
				[289.34, 361.4],
				[307.24, 383.76],
				[325.13, 406.11],
				[343.03, 428.46]
			],
			"低空/高空坠地冲击伤害2": [
				[128.26, 160.21],
				[138.7, 173.25],
				[149.14, 186.29],
				[164.06, 204.92],
				[174.5, 217.96],
				[186.43, 232.86],
				[202.84, 253.35],
				[219.24, 273.84],
				[235.65, 294.34],
				[253.54, 316.69],
				[271.44, 339.05],
				[289.34, 361.4],
				[307.24, 383.76],
				[325.13, 406.11],
				[343.03, 428.46]
			]
		},
		[GsTalentType.e]: {
			"下落攻击·踏云献瑞伤害": [
				230.4,
				247.68,
				264.96,
				288,
				305.28,
				322.56,
				345.6,
				368.64,
				391.68,
				414.72,
				437.76,
				460.8,
				489.6,
				518.4,
				547.2
			],
			"消耗生命值": [
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15,
				15
			]
		},
		[GsTalentType.q]: {
			"猊兽·文仔砸击伤害": [
				370.4,
				398.18,
				425.96,
				463,
				490.78,
				518.56,
				555.6,
				592.64,
				629.68,
				666.72,
				703.76,
				740.8,
				787.1,
				833.4,
				879.7
			],
			"技能治疗量": [
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30,
				30
			]
		}
	},
	cons: new Map([
		[1, {
			name: "通明庇佑",
			desc: [
				"璨焰金猊舞的猊兽·文仔成功与嘉明会合时，将为嘉明恢复15%生命值。"
			]
		}],
		[2, {
			name: "步踏梅花",
			desc: [
				"嘉明受到治疗时，若此次治疗回复量溢出，嘉明的攻击力将提升20%，持续5秒。"
			]
		}],
		[3, {
			name: "醒灵擂震",
			desc: [
				"瑞兽登高楼的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "云里翻山",
			desc: [
				"瑞兽登高楼的下落攻击·踏云献瑞命中敌人时，将为嘉明恢复2点元素能量。该效果每0.2秒至多触发一次。"
			]
		}],
		[5, {
			name: "吼法怖魔",
			desc: [
				"璨焰金猊舞的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "百兽俱驯",
			desc: [
				"瑞兽登高楼的下落攻击·踏云献瑞的暴击率提升20%，暴击伤害提升40%，攻击范围提升。"
			]
		}]
	]),
	passive: [
		{
			name: "醒兽锐行",
			desc: [
				"在白天（6时至18时），队伍中自己的角色移动速度提高10%。",
				"该效果在秘境、征讨领域、深境螺旋中无效，且无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "舞起升平",
			desc: [
				"瑞兽登高楼的下落攻击·踏云献瑞命中敌人后，嘉明每0.2秒恢复一次生命值，回复量基于嘉明生命值上限的1.5%，持续0.8秒。"
			],
		},
		{
			name: "祥烟瑞气",
			desc: [
				"嘉明的生命值低于50%时，获得20%受治疗加成。嘉明的生命值高于或等于50%时，下落攻击·踏云献瑞造成的伤害提升20%。"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.atk + "Pct"
		],
		details: new Map([
			["1", [957, 25.29, 58.94, 0]],
			["20", [2460, 64.96, 151.42, 0]],
			["40", [4755, 125.6, 292.77, 0]],
			["50", [6054, 159.91, 372.74, 6]],
			["60", [7523, 198.7, 463.14, 12]],
			["70", [8821, 232.98, 543.05, 12]],
			["80", [10120, 267.29, 623.03, 18]],
			["90", [11419, 301.6, 703, 24]],
			["20+", [3175, 83.85, 195.45, 0]],
			["40+", [5264, 139.03, 324.05, 6]],
			["50+", [6732, 177.81, 414.45, 12]],
			["60+", [8031, 212.12, 494.43, 12]],
			["70+", [9329, 246.41, 574.34, 18]],
			["80+", [10628, 280.72, 654.31, 24]]
		])
	},
};