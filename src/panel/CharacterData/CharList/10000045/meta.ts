import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 罗莎莉亚 */
export const metaData = {
	info: {
		title: "棘冠恩典",
		allegiance: "西风教会",
		birth: "1-24",
		astro: "荆冠座",
		desc: "除了打扮哪里都不像神职人员的修女。冷淡的言行中透着锐利。总是单独行动。",
		cncv: "张安琪",
		jpcv: "加隈亚衣",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 12289,
		[AttrKeys.atk]: 240.01,
		[AttrKeys.def]: 709.82
	},
	growAttr: {
		key: AttrKeys.atk + "Pct",
		value: 24
	},
	materials: {
		[MaterialType.gem]: "哀叙冰玉",
		[MaterialType.boss]: "极寒之核",
		[MaterialType.specialty]: "落落莓",
		[MaterialType.normal]: "尉官的徽记",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "武炼之魂·孤影"
	},
	talent: {
		[GsTalentType.a]: {
			id: 4531,
			name: "普通攻击·教会枪术",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续枪击。",
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
						"52.46%",
						"56.73%",
						"61%",
						"67.1%",
						"71.37%",
						"76.25%",
						"82.96%",
						"89.67%",
						"96.38%",
						"103.7%",
						"111.02%",
						"118.34%",
						"125.66%",
						"132.98%",
						"140.3%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"51.6%",
						"55.8%",
						"60%",
						"66%",
						"70.2%",
						"75%",
						"81.6%",
						"88.2%",
						"94.8%",
						"102%",
						"109.2%",
						"116.4%",
						"123.6%",
						"130.8%",
						"138%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"31.82%*2",
						"34.41%*2",
						"37%*2",
						"40.7%*2",
						"43.29%*2",
						"46.25%*2",
						"50.32%*2",
						"54.39%*2",
						"58.46%*2",
						"62.9%*2",
						"67.34%*2",
						"71.78%*2",
						"76.22%*2",
						"80.66%*2",
						"85.1%*2"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"69.66%",
						"75.33%",
						"81%",
						"89.1%",
						"94.77%",
						"101.25%",
						"110.16%",
						"119.07%",
						"127.98%",
						"137.7%",
						"147.42%",
						"157.14%",
						"166.86%",
						"176.58%",
						"186.3%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"41.62% + 43%",
						"45.01% + 46.5%",
						"48.4% + 50%",
						"53.24% + 55%",
						"56.63% + 58.5%",
						"60.5% + 62.5%",
						"65.82% + 68%",
						"71.15% + 73.5%",
						"76.47% + 79%",
						"82.28% + 85%",
						"88.09% + 91%",
						"93.9% + 97%",
						"99.7% + 103%",
						"105.51% + 109%",
						"111.32% + 115%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"136.74%",
						"147.87%",
						"159%",
						"174.9%",
						"186.03%",
						"198.75%",
						"216.24%",
						"233.73%",
						"251.22%",
						"270.3%",
						"289.38%",
						"308.46%",
						"327.54%",
						"346.62%",
						"365.7%"
					]
				},
				{
					name: "重击体力消耗",
					isSame: true,
					values: [
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点",
						"25点"
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
			id: 4532,
			name: "噬罪的告解",
			desc: [
				"罗莎莉亚快速移动至目标敌人身后，进行长枪穿刺与挥砍，造成冰元素伤害。",
				"无法通过施放时的快速移动，转移至体型较大的敌人身后。",
				"<i>对着修女罗莎莉亚的告解并不能获得赦罪。相反，罪孽越深，降罚的冰寒就越是刺骨。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"58.4% + 136%",
						"62.78% + 146.2%",
						"67.16% + 156.4%",
						"73% + 170%",
						"77.38% + 180.2%",
						"81.76% + 190.4%",
						"87.6% + 204%",
						"93.44% + 217.6%",
						"99.28% + 231.2%",
						"105.12% + 244.8%",
						"110.96% + 258.4%",
						"116.8% + 272%",
						"124.1% + 289%",
						"131.4% + 306%",
						"138.7% + 323%"
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
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒",
						"0秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 4539,
			name: "终命的圣礼",
			desc: [
				"这是罗莎莉亚专属的领祷仪式。挥舞武器扫击身边的敌人后，凝聚极寒的冰枪击向地面，分别造成冰元素伤害。",
				"冰枪在存在期间内，会间歇性释放寒气，对附近的敌人造成冰元素伤害。",
				"<i>审判这件事很麻烦，所以越过审判直接执行临终祈礼吧。罗莎莉亚本就不信奉风神，这件事因此格外轻松。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"104% + 152%",
						"111.8% + 163.4%",
						"119.6% + 174.8%",
						"130% + 190%",
						"137.8% + 201.4%",
						"145.6% + 212.8%",
						"156% + 228%",
						"166.4% + 243.2%",
						"176.8% + 258.4%",
						"187.2% + 273.6%",
						"197.6% + 288.8%",
						"208% + 304%",
						"221% + 323%",
						"234% + 342%",
						"247% + 361%"
					]
				},
				{
					name: "冰枪持续伤害",
					isSame: false,
					values: [
						"132%",
						"141.9%",
						"151.8%",
						"165%",
						"174.9%",
						"184.8%",
						"198%",
						"211.2%",
						"224.4%",
						"237.6%",
						"250.8%",
						"264%",
						"280.5%",
						"297%",
						"313.5%"
					]
				},
				{
					name: "持续时间",
					isSame: true,
					values: [
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒",
						"8秒"
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
				52.46,
				56.73,
				61,
				67.1,
				71.37,
				76.25,
				82.96,
				89.67,
				96.38,
				103.7,
				111.02,
				118.34,
				125.66,
				132.98,
				140.3
			],
			"二段伤害": [
				51.6,
				55.8,
				60,
				66,
				70.2,
				75,
				81.6,
				88.2,
				94.8,
				102,
				109.2,
				116.4,
				123.6,
				130.8,
				138
			],
			"三段伤害": [
				63.64,
				68.82,
				74,
				81.4,
				86.58,
				92.5,
				100.64,
				108.78,
				116.92,
				125.8,
				134.68,
				143.56,
				152.44,
				161.32,
				170.2
			],
			"三段伤害2": [
				[31.82, 2],
				[34.41, 2],
				[37, 2],
				[40.7, 2],
				[43.29, 2],
				[46.25, 2],
				[50.32, 2],
				[54.39, 2],
				[58.46, 2],
				[62.9, 2],
				[67.34, 2],
				[71.78, 2],
				[76.22, 2],
				[80.66, 2],
				[85.1, 2]
			],
			"四段伤害": [
				69.66,
				75.33,
				81,
				89.1,
				94.77,
				101.25,
				110.16,
				119.07,
				127.98,
				137.7,
				147.42,
				157.14,
				166.86,
				176.58,
				186.3
			],
			"五段伤害": [
				84.62,
				91.50999999999999,
				98.4,
				108.24000000000001,
				115.13,
				123,
				133.82,
				144.65,
				155.47,
				167.28,
				179.09,
				190.9,
				202.7,
				214.51,
				226.32
			],
			"五段伤害2": [
				[41.62, 43],
				[45.01, 46.5],
				[48.4, 50],
				[53.24, 55],
				[56.63, 58.5],
				[60.5, 62.5],
				[65.82, 68],
				[71.15, 73.5],
				[76.47, 79],
				[82.28, 85],
				[88.09, 91],
				[93.9, 97],
				[99.7, 103],
				[105.51, 109],
				[111.32, 115]
			],
			"重击伤害": [
				136.74,
				147.87,
				159,
				174.9,
				186.03,
				198.75,
				216.24,
				233.73,
				251.22,
				270.3,
				289.38,
				308.46,
				327.54,
				346.62,
				365.7
			],
			"下坠期间伤害": [
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
			],
			"低空/高空坠地冲击伤害": [
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
			],
			"低空/高空坠地冲击伤害2": [
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
			]
		},
		[GsTalentType.e]: {
			"技能伤害": [
				194.4,
				208.98,
				223.56,
				243,
				257.58,
				272.16,
				291.6,
				311.03999999999996,
				330.48,
				349.92,
				369.35999999999996,
				388.8,
				413.1,
				437.4,
				461.7
			],
			"技能伤害2": [
				[58.4, 136],
				[62.78, 146.2],
				[67.16, 156.4],
				[73, 170],
				[77.38, 180.2],
				[81.76, 190.4],
				[87.6, 204],
				[93.44, 217.6],
				[99.28, 231.2],
				[105.12, 244.8],
				[110.96, 258.4],
				[116.8, 272],
				[124.1, 289],
				[131.4, 306],
				[138.7, 323]
			]
		},
		[GsTalentType.q]: {
			"技能伤害": [
				256,
				275.2,
				294.4,
				320,
				339.20000000000005,
				358.4,
				384,
				409.6,
				435.2,
				460.8,
				486.4,
				512,
				544,
				576,
				608
			],
			"技能伤害2": [
				[104, 152],
				[111.8, 163.4],
				[119.6, 174.8],
				[130, 190],
				[137.8, 201.4],
				[145.6, 212.8],
				[156, 228],
				[166.4, 243.2],
				[176.8, 258.4],
				[187.2, 273.6],
				[197.6, 288.8],
				[208, 304],
				[221, 323],
				[234, 342],
				[247, 361]
			],
			"冰枪持续伤害": [
				132,
				141.9,
				151.8,
				165,
				174.9,
				184.8,
				198,
				211.2,
				224.4,
				237.6,
				250.8,
				264,
				280.5,
				297,
				313.5
			]
		}
	},
	cons: new Map([
		[1, {
			name: "罪之导引",
			desc: [
				"罗莎莉亚的攻击造成暴击后，自身攻击速度提升10%，普通攻击造成的伤害提升10%，持续4秒。"
			]
		}],
		[2, {
			name: "无福之地",
			desc: [
				"终命的圣礼创造的冰枪持续时间延长4秒。"
			]
		}],
		[3, {
			name: "告解之仪",
			desc: [
				"噬罪的告解的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "苦痛恩典",
			desc: [
				"噬罪的告解造成暴击时，为罗莎莉亚自己恢复5点元素能量。",
				"每次噬罪的告解至多触发1次该效果。"
			]
		}],
		[5, {
			name: "临终祈礼",
			desc: [
				"终命的圣礼的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "代行裁判",
			desc: [
				"终命的圣礼的攻击会使敌人的物理抗性降低20%，持续10秒。"
			]
		}]
	]),
	passive: [
		{
			name: "夜行",
			desc: [
				"在夜间（18时至6时），队伍中自己的角色移动速度提高10%。",
				"该效果在秘境、征讨领域、深境螺旋中无效，且无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "聆听忏悔的幽影",
			desc: [
				"噬罪的告解从技能目标的背后攻击时，罗莎莉亚的暴击率提升12%，持续5秒。"
			],
		},
		{
			name: "暗中支援的黯色",
			desc: [
				"施放终命的圣礼时，基于自身暴击率的15%，提高附近的队伍中所有角色（不包括罗莎莉亚自己）的暴击率，持续10秒。",
				"通过这种方式获得的暴击率提升，无法超过15%。"
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
			["1", [1030, 20.12, 59.51, 0]],
			["20", [2647, 51.7, 152.89, 0]],
			["40", [5118, 99.95, 295.61, 0]],
			["50", [6516, 127.26, 376.36, 6]],
			["60", [8096, 158.12, 467.64, 12]],
			["70", [9493, 185.4, 548.33, 12]],
			["80", [10891, 212.71, 629.07, 18]],
			["90", [12289, 240.01, 709.82, 24]],
			["20+", [3417, 66.73, 197.35, 0]],
			["40+", [5665, 110.63, 327.2, 6]],
			["50+", [7245, 141.5, 418.48, 12]],
			["60+", [8643, 168.8, 499.23, 12]],
			["70+", [10040, 196.08, 579.92, 18]],
			["80+", [11438, 223.39, 660.66, 24]]
		])
	},
};