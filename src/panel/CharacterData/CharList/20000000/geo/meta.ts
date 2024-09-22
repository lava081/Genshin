import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType, GsElement } from "karin-plugin-mystool";

/** 旅行者 */
export const meta: CharDetailInfo  = {
    info: {
		title: "异界的旅人",
		allegiance: "——",
		birth: "-",
		astro: "旅人座",
		desc: "从世界之外漂流而来的旅行者，被神带走血亲，自此踏上寻找七神之路。",
		cncv: "宴宁/鹿喑",
		jpcv: "悠木碧/堀江瞬",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 10875,
		[AttrKeys.atk]: 212.4,
		[AttrKeys.def]: 682.52
	},
	growAttr:{
		key: AttrKeys.atk + "Pct",
		value: 24
	},
	materials:{
		[MaterialType.gem]: "璀璨原钻",
		[MaterialType.specialty]: "风车菊",
		[MaterialType.normal]: "不祥的面具",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "东风的吐息"
	},
	talent:{
		[GsTalentType.a]: {
			id: 731,
			name: "普通攻击·异邦岩锋",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续剑击。",
				"<h3>重击</h3>",
				"消耗一定体力，瞬间向前方挥出两剑。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"44.46%",
						"48.08%",
						"51.7%",
						"56.87%",
						"60.49%",
						"64.63%",
						"70.31%",
						"76%",
						"81.69%",
						"87.89%",
						"94.09%",
						"100.3%",
						"106.5%",
						"112.71%",
						"118.91%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"43.43%",
						"46.97%",
						"50.5%",
						"55.55%",
						"59.08%",
						"63.13%",
						"68.68%",
						"74.23%",
						"79.79%",
						"85.85%",
						"91.91%",
						"97.97%",
						"104.03%",
						"110.09%",
						"116.15%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"52.98%",
						"57.29%",
						"61.6%",
						"67.76%",
						"72.07%",
						"77%",
						"83.78%",
						"90.55%",
						"97.33%",
						"104.72%",
						"112.11%",
						"119.5%",
						"126.9%",
						"134.29%",
						"141.68%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"58.31%",
						"63.05%",
						"67.8%",
						"74.58%",
						"79.33%",
						"84.75%",
						"92.21%",
						"99.67%",
						"107.12%",
						"115.26%",
						"123.4%",
						"131.53%",
						"139.67%",
						"147.8%",
						"155.94%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"70.78%",
						"76.54%",
						"82.3%",
						"90.53%",
						"96.29%",
						"102.87%",
						"111.93%",
						"120.98%",
						"130.03%",
						"139.91%",
						"149.79%",
						"159.66%",
						"169.54%",
						"179.41%",
						"189.29%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"55.9% + 72.24%",
						"60.45% + 78.12%",
						"65% + 84%",
						"71.5% + 92.4%",
						"76.05% + 98.28%",
						"81.25% + 105%",
						"88.4% + 114.24%",
						"95.55% + 123.48%",
						"102.7% + 132.72%",
						"110.5% + 142.8%",
						"118.3% + 152.88%",
						"126.1% + 162.96%",
						"133.9% + 173.04%",
						"141.7% + 183.12%",
						"149.5% + 193.2%"
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
			id: 932,
			name: "星陨剑",
			desc: [
				"从大地深处升起荒星，引发爆炸，造成岩元素范围伤害。",
				"荒星视为岩元素创造物，可以阻拦攻击，可以攀爬。",
				"<h3>长按</h3>",
				"可以调整技能生效位置。",
				"<i>和派蒙讨论过流星的终点。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"248%",
						"266.6%",
						"285.2%",
						"310%",
						"328.6%",
						"347.2%",
						"372%",
						"396.8%",
						"421.6%",
						"446.4%",
						"471.2%",
						"496%",
						"527%",
						"558%",
						"589%"
					]
				},
				{
					name: "荒星存在时间",
					isSame: true,
					values: [
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒",
						"30秒"
					]
				},
				{
					name: "冷却时间",
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
				}
			],
		},
		[GsTalentType.q]: {
			id: 939,
			name: "岩潮叠嶂",
			desc: [
				"激活大地深处的岩元素，引发扩散的震荡波。",
				"击退周围的敌人，造成岩元素范围伤害。",
				"此后，在震荡波的外围形成突起的岩嶂。",
				"岩嶂视为岩元素创造物，可以阻拦攻击。",
				"<i>和派蒙一起研究过群山深处的脉动。</i>"
			],
			tables: [
				{
					name: "地震波单次伤害",
					isSame: false,
					values: [
						"148%",
						"159.1%",
						"170.2%",
						"185%",
						"196.1%",
						"207.2%",
						"222%",
						"236.8%",
						"251.6%",
						"266.4%",
						"281.2%",
						"296%",
						"314.5%",
						"333%",
						"351.5%"
					]
				},
				{
					name: "岩嶂存在时间",
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
	talentElem: new Map([
		[10077, GsElement.geo],
		[10078, GsElement.geo]
	]),
	talentData: {
		[GsTalentType.a]: new Map([
			["一段伤害", [
				44.46,
				48.08,
				51.7,
				56.87,
				60.49,
				64.63,
				70.31,
				76,
				81.69,
				87.89,
				94.09,
				100.3,
				106.5,
				112.71,
				118.91
			]],
			["二段伤害", [
				43.43,
				46.97,
				50.5,
				55.55,
				59.08,
				63.13,
				68.68,
				74.23,
				79.79,
				85.85,
				91.91,
				97.97,
				104.03,
				110.09,
				116.15
			]],
			["三段伤害", [
				52.98,
				57.29,
				61.6,
				67.76,
				72.07,
				77,
				83.78,
				90.55,
				97.33,
				104.72,
				112.11,
				119.5,
				126.9,
				134.29,
				141.68
			]],
			["四段伤害", [
				58.31,
				63.05,
				67.8,
				74.58,
				79.33,
				84.75,
				92.21,
				99.67,
				107.12,
				115.26,
				123.4,
				131.53,
				139.67,
				147.8,
				155.94
			]],
			["五段伤害", [
				70.78,
				76.54,
				82.3,
				90.53,
				96.29,
				102.87,
				111.93,
				120.98,
				130.03,
				139.91,
				149.79,
				159.66,
				169.54,
				179.41,
				189.29
			]],
			["重击伤害", [
				128.14,
				138.57,
				149,
				163.9,
				174.32999999999998,
				186.25,
				202.64,
				219.03,
				235.42000000000002,
				253.3,
				271.18,
				289.06,
				306.94,
				324.82,
				342.7
			]],
			["重击伤害2", [
				[55.9, 72.24],
				[60.45, 78.12],
				[65, 84],
				[71.5, 92.4],
				[76.05, 98.28],
				[81.25, 105],
				[88.4, 114.24],
				[95.55, 123.48],
				[102.7, 132.72],
				[110.5, 142.8],
				[118.3, 152.88],
				[126.1, 162.96],
				[133.9, 173.04],
				[141.7, 183.12],
				[149.5, 193.2]
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
			["技能伤害", [
				248,
				266.6,
				285.2,
				310,
				328.6,
				347.2,
				372,
				396.8,
				421.6,
				446.4,
				471.2,
				496,
				527,
				558,
				589
			]]
		]),
		[GsTalentType.q]: new Map([
			["地震波单次伤害", [
				148,
				159.1,
				170.2,
				185,
				196.1,
				207.2,
				222,
				236.8,
				251.6,
				266.4,
				281.2,
				296,
				314.5,
				333,
				351.5
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "巍然的青岩",
			desc: [
				"队伍中角色处于岩潮叠嶂的岩嶂包围中时，暴击率提升10%，并提高抗打断能力。"
			]
		}],
		[2, {
			name: "不稳的熔岩",
			desc: [
				"星陨剑的荒星被摧毁时会再度发生爆炸，造成等同于星陨剑伤害的额外岩元素范围伤害。"
			]
		}],
		[3, {
			name: "八方之岩",
			desc: [
				"岩潮叠嶂的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "险峻的重岩",
			desc: [
				"岩潮叠嶂引发的震荡波每击中一个敌人，都会恢复5点元素能量。",
				"通过这种方式，一次至多恢复25点元素能量。"
			]
		}],
		[5, {
			name: "天坠之岩",
			desc: [
				"星陨剑的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "永世的磐岩",
			desc: [
				"岩潮叠嶂的岩嶂持续时间延长5秒；",
				"星陨剑的荒星持续时间延长10秒。"
			]
		}]
	]),
	passive: [
		{
			name: "破碎的绝岩",
			desc: [
				"<h3>星陨剑的冷却时间减少2秒。</h3>"
			],
		},
		{
			name: "狂乱的崩岩",
			desc: [
				"普通攻击的最后一击会附带崩毁，对范围内的敌人造成60%攻击力的岩元素伤害。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.atk + "Pct"
		],
		details: new Map([
			["1", [912, 17.81, 57.22, 0]],
			["20", [2342, 45.75, 147.01, 0]],
			["40", [4529, 88.45, 284.24, 0]],
			["50", [5766, 112.62, 361.88, 6]],
			["60", [7164, 139.93, 449.65, 12]],
			["70", [8401, 164.07, 527.24, 12]],
			["80", [9638, 188.24, 604.88, 18]],
			["90", [10875, 212.4, 682.52, 24]],
			["20+", [3024, 59.05, 189.76, 0]],
			["40+", [5013, 97.91, 314.61, 6]],
			["50+", [6411, 125.22, 402.38, 12]],
			["60+", [7648, 149.38, 480.03, 12]],
			["70+", [8885, 173.53, 557.61, 18]],
			["80+", [10122, 197.69, 635.25, 24]]
		])
	},
};