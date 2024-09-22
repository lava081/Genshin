import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 米卡 */
export const meta: CharDetailInfo  = {
    info: {
		title: "晴霜的标绘",
		allegiance: "西风骑士团",
		birth: "8-11",
		astro: "林鸽座",
		desc: "平凡家庭出身的年轻骑士，在小队中担任「前进测绘员」一职。为人低调，谨小慎微。",
		cncv: "邓宥希",
		jpcv: "三瓶由布子",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 12506,
		[AttrKeys.atk]: 223.02,
		[AttrKeys.def]: 713.23
	},
	growAttr:{
		key: AttrKeys.hp + "Pct",
		value: 24
	},
	materials:{
		[MaterialType.gem]: "哀叙冰玉",
		[MaterialType.boss]: "苍砾蕊羽",
		[MaterialType.specialty]: "钩钩果",
		[MaterialType.normal]: "尉官的徽记",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "无心的渊镜"
	},
	talent:{
		[GsTalentType.a]: {
			id: 8031,
			name: "普通攻击·西风枪术·镝传",
			desc: [
				"<h3>普通攻击</h3>",
				"结合手弩与长枪，进行至多五段的连击。",
				"<h3>重击</h3>",
				"消耗一定体力，向前方突进，对路径上的敌人造成伤害。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"43.26%",
						"46.78%",
						"50.31%",
						"55.34%",
						"58.86%",
						"62.88%",
						"68.42%",
						"73.95%",
						"79.48%",
						"85.52%",
						"91.56%",
						"97.59%",
						"103.63%",
						"109.67%",
						"115.7%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"41.5%",
						"44.88%",
						"48.26%",
						"53.08%",
						"56.46%",
						"60.32%",
						"65.63%",
						"70.94%",
						"76.25%",
						"82.04%",
						"87.83%",
						"93.62%",
						"99.41%",
						"105.2%",
						"110.99%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"54.5%",
						"58.94%",
						"63.38%",
						"69.71%",
						"74.15%",
						"79.22%",
						"86.19%",
						"93.16%",
						"100.13%",
						"107.74%",
						"115.34%",
						"122.95%",
						"130.55%",
						"138.16%",
						"145.76%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"27.61% + 27.61%",
						"29.86% + 29.86%",
						"32.11% + 32.11%",
						"35.32% + 35.32%",
						"37.57% + 37.57%",
						"40.14% + 40.14%",
						"43.67% + 43.67%",
						"47.2% + 47.2%",
						"50.73% + 50.73%",
						"54.59% + 54.59%",
						"58.44% + 58.44%",
						"62.29% + 62.29%",
						"66.15% + 66.15%",
						"70% + 70%",
						"73.85% + 73.85%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"70.87%",
						"76.64%",
						"82.41%",
						"90.65%",
						"96.42%",
						"103.02%",
						"112.08%",
						"121.15%",
						"130.21%",
						"140.1%",
						"149.99%",
						"159.88%",
						"169.77%",
						"179.66%",
						"189.55%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"112.75%",
						"121.92%",
						"131.1%",
						"144.21%",
						"153.39%",
						"163.87%",
						"178.3%",
						"192.72%",
						"207.14%",
						"222.87%",
						"238.6%",
						"254.33%",
						"270.07%",
						"285.8%",
						"301.53%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点",
						"20点"
					]
				},
				{
					name: "下坠期间伤害",
					isSame: false,
					values: [
						"63.93%",
						"69.14%",
						"74.34%",
						"81.77%",
						"86.98%",
						"92.93%",
						"101.1%",
						"109.28%",
						"117.46%",
						"126.38%",
						"135.3%",
						"144.22%",
						"153.14%",
						"162.06%",
						"170.98%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"127.84% / 159.68%",
						"138.24% / 172.67%",
						"148.65% / 185.67%",
						"163.51% / 204.24%",
						"173.92% / 217.23%",
						"185.81% / 232.09%",
						"202.16% / 252.51%",
						"218.51% / 272.93%",
						"234.86% / 293.36%",
						"252.7% / 315.64%",
						"270.54% / 337.92%",
						"288.38% / 360.2%",
						"306.22% / 382.48%",
						"324.05% / 404.76%",
						"341.89% / 427.04%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 8032,
			name: "星霜的流旋",
			desc: [
				"利用手弩攻击敌人，并为队伍中附近的所有角色赋予灵风状态。处于灵风状态下的角色处于场上时，攻击速度将获得提升。",
				"依据点按、长按，以不同的方式产生效果。",
				"<h3>点按</h3>",
				"快速发射能够穿透敌人的霜流矢，对触及的敌人造成冰元素伤害。",
				"<h3>长按</h3>",
				"进行瞄准，并对一名瞄准锁定的敌人发射冰星信标，造成冰元素伤害。冰星信标命中后，将升空爆裂，向周围至多3名其他敌人发射冰星破片，造成冰元素伤害。",
				"<i>霜天之下，其为星芒。</i>"
			],
			tables: [
				{
					name: "霜流矢伤害",
					isSame: false,
					values: [
						"67.2%",
						"72.24%",
						"77.28%",
						"84%",
						"89.04%",
						"94.08%",
						"100.8%",
						"107.52%",
						"114.24%",
						"120.96%",
						"127.68%",
						"134.4%",
						"142.8%",
						"151.2%",
						"159.6%"
					]
				},
				{
					name: "冰星信标伤害",
					isSame: false,
					values: [
						"84%",
						"90.3%",
						"96.6%",
						"105%",
						"111.3%",
						"117.6%",
						"126%",
						"134.4%",
						"142.8%",
						"151.2%",
						"159.6%",
						"168%",
						"178.5%",
						"189%",
						"199.5%"
					]
				},
				{
					name: "冰星破片伤害",
					isSame: false,
					values: [
						"25.2%",
						"27.09%",
						"28.98%",
						"31.5%",
						"33.39%",
						"35.28%",
						"37.8%",
						"40.32%",
						"42.84%",
						"45.36%",
						"47.88%",
						"50.4%",
						"53.55%",
						"56.7%",
						"59.85%"
					]
				},
				{
					name: "攻击速度提升",
					isSame: false,
					values: [
						"13%",
						"14%",
						"15%",
						"16%",
						"17%",
						"18%",
						"19%",
						"20%",
						"21%",
						"22%",
						"23%",
						"24%",
						"25%",
						"25%",
						"25%"
					]
				},
				{
					name: "灵风持续时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 8039,
			name: "苍翎的颂愿",
			desc: [
				"从骑士团的诵祷中导引鼓舞伙伴奋勇前行的力量，为队伍中附近的所有角色恢复生命值，回复量受益于米卡的生命值上限，并为其施加鹰翎状态。",
				"<h3>鹰翎</h3>",
				"处于鹰翎状态下的当前场上角色在普通攻击命中敌人时，米卡将为其恢复生命值，回复量受益于米卡的生命值上限。",
				"处于这种状态下的角色，短时间内至多通过这种方式恢复一次生命值。",
				"<i>「逆境中心怀希望、顺遂时不忘警戒…因为那洁白的翎羽，终将引领迷途的旅者。」</i>"
			],
			tables: [
				{
					name: "施放治疗量",
					isSame: false,
					values: [
						"12.17%HP + 1172.04",
						"13.08%HP + 1289.26",
						"13.99%HP + 1416.24",
						"15.21%HP + 1553",
						"16.12%HP + 1699.52",
						"17.04%HP + 1855.82",
						"18.25%HP + 2021.88",
						"19.47%HP + 2197.71",
						"20.69%HP + 2383.31",
						"21.9%HP + 2578.67",
						"23.12%HP + 2783.81",
						"24.34%HP + 2998.71",
						"25.86%HP + 3223.38",
						"27.38%HP + 3457.82",
						"28.9%HP + 3702.03"
					]
				},
				{
					name: "鹰翎治疗量",
					isSame: false,
					values: [
						"2.43%HP + 233.95",
						"2.61%HP + 257.35",
						"2.8%HP + 282.7",
						"3.04%HP + 310",
						"3.22%HP + 339.25",
						"3.4%HP + 370.45",
						"3.65%HP + 403.59",
						"3.89%HP + 438.69",
						"4.13%HP + 475.74",
						"4.38%HP + 514.74",
						"4.62%HP + 555.69",
						"4.86%HP + 598.58",
						"5.17%HP + 643.43",
						"5.47%HP + 690.23",
						"5.78%HP + 738.98"
					]
				},
				{
					name: "鹰翎治疗间隔",
					isSame: true,
					values: [
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒",
						"2.5秒"
					]
				},
				{
					name: "鹰翎持续时间",
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
					name: "冷却时间",
					isSame: true,
					values: [
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒",
						"18秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70",
						"70"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: new Map([
			["一段伤害", [
				43.26,
				46.78,
				50.31,
				55.34,
				58.86,
				62.88,
				68.42,
				73.95,
				79.48,
				85.52,
				91.56,
				97.59,
				103.63,
				109.67,
				115.7
			]],
			["二段伤害", [
				41.5,
				44.88,
				48.26,
				53.08,
				56.46,
				60.32,
				65.63,
				70.94,
				76.25,
				82.04,
				87.83,
				93.62,
				99.41,
				105.2,
				110.99
			]],
			["三段伤害", [
				54.5,
				58.94,
				63.38,
				69.71,
				74.15,
				79.22,
				86.19,
				93.16,
				100.13,
				107.74,
				115.34,
				122.95,
				130.55,
				138.16,
				145.76
			]],
			["四段伤害", [
				55.22,
				59.72,
				64.22,
				70.64,
				75.14,
				80.28,
				87.34,
				94.4,
				101.46,
				109.18,
				116.88,
				124.58,
				132.3,
				140,
				147.7
			]],
			["四段伤害2", [
				[27.61, 27.61],
				[29.86, 29.86],
				[32.11, 32.11],
				[35.32, 35.32],
				[37.57, 37.57],
				[40.14, 40.14],
				[43.67, 43.67],
				[47.2, 47.2],
				[50.73, 50.73],
				[54.59, 54.59],
				[58.44, 58.44],
				[62.29, 62.29],
				[66.15, 66.15],
				[70, 70],
				[73.85, 73.85]
			]],
			["五段伤害", [
				70.87,
				76.64,
				82.41,
				90.65,
				96.42,
				103.02,
				112.08,
				121.15,
				130.21,
				140.1,
				149.99,
				159.88,
				169.77,
				179.66,
				189.55
			]],
			["重击伤害", [
				112.75,
				121.92,
				131.1,
				144.21,
				153.39,
				163.87,
				178.3,
				192.72,
				207.14,
				222.87,
				238.6,
				254.33,
				270.07,
				285.8,
				301.53
			]],
			["下坠期间伤害", [
				63.93,
				69.14,
				74.34,
				81.77,
				86.98,
				92.93,
				101.1,
				109.28,
				117.46,
				126.38,
				135.3,
				144.22,
				153.14,
				162.06,
				170.98
			]],
			["低空/高空坠地冲击伤害", [
				[127.84, 159.68],
				[138.24, 172.67],
				[148.65, 185.67],
				[163.51, 204.24],
				[173.92, 217.23],
				[185.81, 232.09],
				[202.16, 252.51],
				[218.51, 272.93],
				[234.86, 293.36],
				[252.7, 315.64],
				[270.54, 337.92],
				[288.38, 360.2],
				[306.22, 382.48],
				[324.05, 404.76],
				[341.89, 427.04]
			]],
			["低空/高空坠地冲击伤害2", [
				[127.84, 159.68],
				[138.24, 172.67],
				[148.65, 185.67],
				[163.51, 204.24],
				[173.92, 217.23],
				[185.81, 232.09],
				[202.16, 252.51],
				[218.51, 272.93],
				[234.86, 293.36],
				[252.7, 315.64],
				[270.54, 337.92],
				[288.38, 360.2],
				[306.22, 382.48],
				[324.05, 404.76],
				[341.89, 427.04]
			]]
		]),
		[GsTalentType.e]: new Map([
			["霜流矢伤害", [
				67.2,
				72.24,
				77.28,
				84,
				89.04,
				94.08,
				100.8,
				107.52,
				114.24,
				120.96,
				127.68,
				134.4,
				142.8,
				151.2,
				159.6
			]],
			["冰星信标伤害", [
				84,
				90.3,
				96.6,
				105,
				111.3,
				117.6,
				126,
				134.4,
				142.8,
				151.2,
				159.6,
				168,
				178.5,
				189,
				199.5
			]],
			["冰星破片伤害", [
				25.2,
				27.09,
				28.98,
				31.5,
				33.39,
				35.28,
				37.8,
				40.32,
				42.84,
				45.36,
				47.88,
				50.4,
				53.55,
				56.7,
				59.85
			]],
			["攻击速度提升", [
				13,
				14,
				15,
				16,
				17,
				18,
				19,
				20,
				21,
				22,
				23,
				24,
				25,
				25,
				25
			]]
		]),
		[GsTalentType.q]: new Map([
			["施放治疗量", [
				1184.21,
				1302.34,
				1430.23,
				1568.21,
				1715.6399999999999,
				1872.86,
				2040.13,
				2217.18,
				2404,
				2600.57,
				2806.93,
				3023.05,
				3249.2400000000002,
				3485.2000000000003,
				3730.9300000000003
			]],
			["施放治疗量2", [
				[12.17, 1172.04],
				[13.08, 1289.26],
				[13.99, 1416.24],
				[15.21, 1553],
				[16.12, 1699.52],
				[17.04, 1855.82],
				[18.25, 2021.88],
				[19.47, 2197.71],
				[20.69, 2383.31],
				[21.9, 2578.67],
				[23.12, 2783.81],
				[24.34, 2998.71],
				[25.86, 3223.38],
				[27.38, 3457.82],
				[28.9, 3702.03]
			]],
			["鹰翎治疗量", [
				236.38,
				259.96000000000004,
				285.5,
				313.04,
				342.47,
				373.84999999999997,
				407.23999999999995,
				442.58,
				479.87,
				519.12,
				560.3100000000001,
				603.44,
				648.5999999999999,
				695.7,
				744.76
			]],
			["鹰翎治疗量2", [
				[2.43, 233.95],
				[2.61, 257.35],
				[2.8, 282.7],
				[3.04, 310],
				[3.22, 339.25],
				[3.4, 370.45],
				[3.65, 403.59],
				[3.89, 438.69],
				[4.13, 475.74],
				[4.38, 514.74],
				[4.62, 555.69],
				[4.86, 598.58],
				[5.17, 643.43],
				[5.47, 690.23],
				[5.78, 738.98]
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "遇合的因缘",
			desc: [
				"星霜的流旋产生的灵风状态能使苍翎的颂愿的鹰翎状态恢复生命值的间隔降低，降低比例等同于灵风状态提供的攻击速度提升比例。"
			]
		}],
		[2, {
			name: "伴行的旅路",
			desc: [
				"星霜的流旋的霜流矢首次命中敌人时，或是冰星信标命中敌人时，将产生1层固有天赋「速射牵制」的侦明效果。",
				"需要解锁固有天赋「速射牵制」。"
			]
		}],
		[3, {
			name: "游击的心得",
			desc: [
				"苍翎的颂愿的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "晴霜的祝念",
			desc: [
				"米卡自己的苍翎的颂愿的鹰翎状态为队伍中的角色进行治疗时，将为米卡恢复3点元素能量。通过一次施放苍翎的颂愿产生的鹰翎状态，至多恢复5次元素能量。"
			]
		}],
		[5, {
			name: "引示的铃箭",
			desc: [
				"星霜的流旋的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "依随的策援",
			desc: [
				"星霜的流旋灵风状态下的侦明效果叠加层数上限提升1层。需要解锁固有天赋「速射牵制」。",
				"此外，处于灵风状态下的当前场上角色，其物理伤害的暴击伤害提高60%。"
			]
		}]
	]),
	passive: [
		{
			name: "勘界定标",
			desc: [
				"在小地图上显示周围的蒙德区域特产的位置。"
			],
		},
		{
			name: "速射牵制",
			desc: [
				"在下列情况下，星霜的流旋的灵风状态将获得侦明效果强化，使角色处于场上时，造成的物理伤害提升10%：",
				"·霜流矢命中超过1名敌人时，每额外命中1名敌人就产生1层侦明效果；",
				"·冰星破片命中敌人时，将产生1层侦明效果。每枚冰星破片只能触发1次。",
				"灵风状态的侦明效果至多叠加3层，在持续期间内重复施放星霜的流旋时，将移除原有的灵风状态与其侦明效果。"
			],
		},
		{
			name: "地貌测绘",
			desc: [
				"同时处于苍翎的颂愿的鹰翎状态与星霜的流旋的灵风状态下的当前场上角色，在攻击造成暴击时，灵风状态将产生1层固有天赋「速射牵制」的侦明效果。在一次灵风状态的持续期间内，通过这种方式至多产生1层侦明效果。",
				"此外，灵风状态下侦明效果叠加层数上限提升1层。",
				"需要解锁固有天赋「速射牵制」。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.hp + "Pct"
		],
		details: new Map([
			["1", [1049, 18.7, 59.8, 0]],
			["20", [2694, 48.04, 153.63, 0]],
			["40", [5208, 92.88, 297.03, 0]],
			["50", [6631, 118.25, 378.17, 6]],
			["60", [8239, 146.93, 469.88, 12]],
			["70", [9661, 172.28, 550.96, 12]],
			["80", [11083, 197.65, 632.1, 18]],
			["90", [12506, 223.02, 713.23, 24]],
			["20+", [3477, 62.01, 198.3, 0]],
			["40+", [5765, 102.8, 328.77, 6]],
			["50+", [7373, 131.48, 420.49, 12]],
			["60+", [8796, 156.85, 501.63, 12]],
			["70+", [10217, 182.2, 582.7, 18]],
			["80+", [11640, 207.57, 663.84, 24]]
		])
	},
};