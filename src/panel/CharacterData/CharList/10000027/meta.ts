import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 凝光 */
export const meta: CharDetailInfo  = {
    info: {
		title: "掩月天权",
		allegiance: "璃月七星",
		birth: "8-26",
		astro: "玑衡仪座",
		desc: "「璃月七星」中的「天权」，其名下财富之多，全大陆鲜有人能望其项背。",
		cncv: "杜冥鸦",
		jpcv: "大原沙耶香",
		ver: 1
	},
	costumes: [202701],
	baseAttr:{
		[AttrKeys.hp]: 9787,
		[AttrKeys.atk]: 212.4,
		[AttrKeys.def]: 573.32
	},
	growAttr:{
		key: AttrKeys.dmg,
		value: 24
	},
	materials:{
		[MaterialType.gem]: "坚牢黄玉",
		[MaterialType.boss]: "玄岩之塔",
		[MaterialType.specialty]: "琉璃百合",
		[MaterialType.normal]: "尉官的徽记",
		[MaterialType.talent]: "「繁荣」的哲学",
		[MaterialType.weekly]: "北风的魂匣"
	},
	talent:{
		[GsTalentType.a]: {
			id: 2731,
			name: "普通攻击·千金掷",
			desc: [
				"<h3>普通攻击</h3>",
				"发射宝石，造成岩元素伤害。",
				"命中时，赋予凝光一枚星璇。",
				"<h3>重击</h3>",
				"消耗体力，发射一颗巨型宝石，造成岩元素伤害。",
				"若凝光拥有星璇，施放重击时会将所有星璇一同发射，造成额外的伤害。",
				"<h3>下落攻击</h3>",
				"凝聚晶岩的力量，从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成岩元素范围伤害。"
			],
			tables: [
				{
					name: "普通攻击伤害",
					isSame: false,
					values: [
						"28%",
						"30.1%",
						"32.2%",
						"35%",
						"37.1%",
						"39.2%",
						"42%",
						"44.8%",
						"47.6%",
						"50.4%",
						"53.31%",
						"57.12%",
						"60.93%",
						"64.74%",
						"68.54%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"174.08%",
						"187.14%",
						"200.19%",
						"217.6%",
						"230.66%",
						"243.71%",
						"261.12%",
						"278.53%",
						"295.94%",
						"313.34%",
						"331.45%",
						"355.12%",
						"378.8%",
						"402.47%",
						"426.15%"
					]
				},
				{
					name: "星璇伤害",
					unit: "每个",
					isSame: false,
					values: [
						"49.6%",
						"53.32%",
						"57.04%",
						"62%",
						"65.72%",
						"69.44%",
						"74.4%",
						"79.36%",
						"84.32%",
						"89.28%",
						"94.44%",
						"101.18%",
						"107.93%",
						"114.68%",
						"121.42%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点",
						"50点"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"56.83%",
						"61.45%",
						"66.08%",
						"72.69%",
						"77.31%",
						"82.6%",
						"89.87%",
						"97.14%",
						"104.41%",
						"112.34%",
						"120.27%",
						"128.2%",
						"136.12%",
						"144.05%",
						"151.98%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"113.63% / 141.93%",
						"122.88% / 153.49%",
						"132.13% / 165.04%",
						"145.35% / 181.54%",
						"154.59% / 193.1%",
						"165.16% / 206.3%",
						"179.7% / 224.45%",
						"194.23% / 242.61%",
						"208.77% / 260.76%",
						"224.62% / 280.57%",
						"240.48% / 300.37%",
						"256.34% / 320.18%",
						"272.19% / 339.98%",
						"288.05% / 359.79%",
						"303.9% / 379.59%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 2732,
			name: "璇玑屏",
			desc: [
				"借由黄金、黑曜岩与强者的余裕，构建出坚固的璇玑屏，并造成岩元素范围伤害。",
				"<h3>璇玑屏</h3>",
				"·阻挡敌人发射的投射物；",
				"·耐久度按比例继承凝光的生命值上限。",
				"璇玑屏被视为岩元素创造物，可以阻挡部分攻击，不可攀爬。同时只能存在一个。",
				"<i>星罗棋布，璇玑合屏。</i>"
			],
			tables: [
				{
					name: "继承生命",
					isSame: false,
					values: [
						"50.1%",
						"53.1%",
						"56.1%",
						"60%",
						"63%",
						"66%",
						"69.9%",
						"73.8%",
						"77.7%",
						"81.6%",
						"85.5%",
						"89.4%",
						"93.3%",
						"97.2%",
						"101.1%"
					]
				},
				{
					name: "技能伤害",
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
					name: "冷却时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 2739,
			name: "天权崩玉",
			desc: [
				"凝光在身边凝聚诸多宝石，散之一瞬，自动索敌打击附近的敌人，造成大量岩元素伤害。",
				"施放天权崩玉时，如果附近有璇玑屏存在，璇玑屏将发射额外的宝石飞弹协同攻击。",
				"<i>星散玉崩，尽灭群丑。</i>"
			],
			tables: [
				{
					name: "宝石伤害",
					unit: "每个",
					isSame: false,
					values: [
						"86.96%",
						"93.48%",
						"100%",
						"108.7%",
						"115.22%",
						"121.74%",
						"130.44%",
						"139.14%",
						"147.83%",
						"156.53%",
						"165.22%",
						"173.92%",
						"184.79%",
						"195.66%",
						"206.53%"
					]
				},
				{
					name: "冷却时间",
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
					name: "元素能量",
					isSame: true,
					values: [
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40",
						"40"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: new Map([
			["普通攻击伤害", [
				28,
				30.1,
				32.2,
				35,
				37.1,
				39.2,
				42,
				44.8,
				47.6,
				50.4,
				53.31,
				57.12,
				60.93,
				64.74,
				68.54
			]],
			["重击伤害", [
				174.08,
				187.14,
				200.19,
				217.6,
				230.66,
				243.71,
				261.12,
				278.53,
				295.94,
				313.34,
				331.45,
				355.12,
				378.8,
				402.47,
				426.15
			]],
			["星璇伤害", [
				49.6,
				53.32,
				57.04,
				62,
				65.72,
				69.44,
				74.4,
				79.36,
				84.32,
				89.28,
				94.44,
				101.18,
				107.93,
				114.68,
				121.42
			]],
			["下坠期间伤害", [
				56.83,
				61.45,
				66.08,
				72.69,
				77.31,
				82.6,
				89.87,
				97.14,
				104.41,
				112.34,
				120.27,
				128.2,
				136.12,
				144.05,
				151.98
			]],
			["低空/高空坠地冲击伤害", [
				[113.63, 141.93],
				[122.88, 153.49],
				[132.13, 165.04],
				[145.35, 181.54],
				[154.59, 193.1],
				[165.16, 206.3],
				[179.7, 224.45],
				[194.23, 242.61],
				[208.77, 260.76],
				[224.62, 280.57],
				[240.48, 300.37],
				[256.34, 320.18],
				[272.19, 339.98],
				[288.05, 359.79],
				[303.9, 379.59]
			]],
			["低空/高空坠地冲击伤害2", [
				[113.63, 141.93],
				[122.88, 153.49],
				[132.13, 165.04],
				[145.35, 181.54],
				[154.59, 193.1],
				[165.16, 206.3],
				[179.7, 224.45],
				[194.23, 242.61],
				[208.77, 260.76],
				[224.62, 280.57],
				[240.48, 300.37],
				[256.34, 320.18],
				[272.19, 339.98],
				[288.05, 359.79],
				[303.9, 379.59]
			]]
		]),
		[GsTalentType.e]: new Map([
			["继承生命", [
				50.1,
				53.1,
				56.1,
				60,
				63,
				66,
				69.9,
				73.8,
				77.7,
				81.6,
				85.5,
				89.4,
				93.3,
				97.2,
				101.1
			]],
			["技能伤害", [
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
			]]
		]),
		[GsTalentType.q]: new Map([
			["宝石伤害", [
				86.96,
				93.48,
				100,
				108.7,
				115.22,
				121.74,
				130.44,
				139.14,
				147.83,
				156.53,
				165.22,
				173.92,
				184.79,
				195.66,
				206.53
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "悬星尽散击云碎",
			desc: [
				"普通攻击命中时，会造成范围伤害。"
			]
		}],
		[2, {
			name: "璇玑合璧镇昆仑",
			desc: [
				"璇玑屏碎裂时，会清除冷却时间。",
				"该效果每6秒只能触发一次。"
			]
		}],
		[3, {
			name: "星罗宿列天权临",
			desc: [
				"天权崩玉的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "攻守易形著神机",
			desc: [
				"璇玑屏会使周围角色的所有元素抗性提升10%。"
			]
		}],
		[5, {
			name: "琼屏千扇正天衡",
			desc: [
				"璇玑屏的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "七星璨璨凝流光",
			desc: [
				"施放天权崩玉时，会为凝光生成七枚星璇。"
			]
		}]
	]),
	passive: [
		{
			name: "奇石珠宝录",
			desc: [
				"在小地图上显示周围能产出锻造用矿石的矿脉位置。"
			],
		},
		{
			name: "星移势转",
			desc: [
				"拥有星璇时，凝光的重击不会消耗体力。"
			],
		},
		{
			name: "储之千日，用之一刻",
			desc: [
				"穿过璇玑屏的角色会获得12%岩元素伤害加成，持续10秒。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.dmg
		],
		details: new Map([
			["1", [821, 17.81, 48.07, 0]],
			["20", [2108, 45.75, 123.49, 0]],
			["40", [4076, 88.45, 238.76, 0]],
			["50", [5189, 112.62, 303.98, 6]],
			["60", [6448, 139.93, 377.71, 12]],
			["70", [7561, 164.07, 442.88, 12]],
			["80", [8674, 188.24, 508.1, 18]],
			["90", [9787, 212.4, 573.32, 24]],
			["20+", [2721, 59.05, 159.4, 0]],
			["40+", [4512, 97.91, 264.28, 6]],
			["50+", [5770, 125.22, 338, 12]],
			["60+", [6884, 149.38, 403.22, 12]],
			["70+", [7996, 173.53, 468.39, 18]],
			["80+", [9110, 197.69, 533.61, 24]]
		])
	},
};