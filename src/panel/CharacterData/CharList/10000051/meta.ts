import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 优菈 */
export const meta: CharDetailInfo  = {
    info: {
		title: "浪沫的旋舞",
		allegiance: "西风骑士团",
		birth: "10-25",
		astro: "浪沫座",
		desc: "古老家族出身的「浪花骑士」，西风骑士团游击小队队长。身为旧贵族后裔却加入了堪称死对头的西风骑士团，该事件至今仍是蒙德一大谜团。",
		cncv: "子音",
		jpcv: "佐藤利奈",
		ver: 1
	},
	costumes: [],
	baseAttr:{
		[AttrKeys.hp]: 13226,
		[AttrKeys.atk]: 342.03,
		[AttrKeys.def]: 750.88
	},
	growAttr:{
		key: AttrKeys.cdmg,
		value: 38.4
	},
	materials:{
		[MaterialType.gem]: "哀叙冰玉",
		[MaterialType.boss]: "晶凝之华",
		[MaterialType.specialty]: "蒲公英籽",
		[MaterialType.normal]: "不祥的面具",
		[MaterialType.talent]: "「抗争」的哲学",
		[MaterialType.weekly]: "龙王之冕"
	},
	talent:{
		[GsTalentType.a]: {
			id: 5131,
			name: "普通攻击·西风剑术·宗室",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多五段的连续挥砍。",
				"<h3>重击</h3>",
				"持续消耗体力，快速进行连续的斩击。",
				"重击结束时，会进行一次格外有力的挥砍。",
				"<h3>下落攻击</h3>",
				"从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"89.73%",
						"97.04%",
						"104.34%",
						"114.77%",
						"122.08%",
						"130.43%",
						"141.9%",
						"153.38%",
						"164.86%",
						"177.38%",
						"191.72%",
						"208.6%",
						"225.47%",
						"242.34%",
						"260.75%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"93.55%",
						"101.17%",
						"108.78%",
						"119.66%",
						"127.27%",
						"135.98%",
						"147.94%",
						"159.91%",
						"171.87%",
						"184.93%",
						"199.88%",
						"217.47%",
						"235.06%",
						"252.65%",
						"271.84%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"56.8% + 56.8%",
						"61.42% + 61.42%",
						"66.04% + 66.04%",
						"72.65% + 72.65%",
						"77.27% + 77.27%",
						"82.56% + 82.56%",
						"89.82% + 89.82%",
						"97.09% + 97.09%",
						"104.35% + 104.35%",
						"112.28% + 112.28%",
						"121.36% + 121.36%",
						"132.04% + 132.04%",
						"142.72% + 142.72%",
						"153.4% + 153.4%",
						"165.05% + 165.05%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"112.64%",
						"121.81%",
						"130.98%",
						"144.08%",
						"153.25%",
						"163.72%",
						"178.13%",
						"192.54%",
						"206.95%",
						"222.67%",
						"240.68%",
						"261.86%",
						"283.03%",
						"304.21%",
						"327.32%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"71.83% + 71.83%",
						"77.68% + 77.68%",
						"83.53% + 83.53%",
						"91.88% + 91.88%",
						"97.73% + 97.73%",
						"104.41% + 104.41%",
						"113.6% + 113.6%",
						"122.79% + 122.79%",
						"131.97% + 131.97%",
						"142% + 142%",
						"153.48% + 153.48%",
						"166.99% + 166.99%",
						"180.49% + 180.49%",
						"194% + 194%",
						"208.74% + 208.74%"
					]
				},
				{
					name: "重击循环伤害",
					isSame: false,
					values: [
						"68.8%",
						"74.4%",
						"80%",
						"88%",
						"93.6%",
						"100%",
						"108.8%",
						"117.6%",
						"126.4%",
						"136%",
						"147%",
						"159.94%",
						"172.87%",
						"185.81%",
						"199.92%"
					]
				},
				{
					name: "重击终结伤害",
					isSame: false,
					values: [
						"124.4%",
						"134.52%",
						"144.65%",
						"159.12%",
						"169.24%",
						"180.81%",
						"196.72%",
						"212.64%",
						"228.55%",
						"245.9%",
						"265.79%",
						"289.18%",
						"312.57%",
						"335.96%",
						"361.48%"
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
						"74.59%",
						"80.66%",
						"86.73%",
						"95.4%",
						"101.47%",
						"108.41%",
						"117.95%",
						"127.49%",
						"137.03%",
						"147.44%",
						"159.37%",
						"173.39%",
						"187.41%",
						"201.44%",
						"216.74%"
					]
				},
				{
					name: "低空/高空坠地冲击伤害",
					isSame: false,
					values: [
						"149.14% / 186.29%",
						"161.28% / 201.45%",
						"173.42% / 216.62%",
						"190.77% / 238.28%",
						"202.91% / 253.44%",
						"216.78% / 270.77%",
						"235.86% / 294.6%",
						"254.93% / 318.42%",
						"274.01% / 342.25%",
						"294.82% / 368.25%",
						"318.67% / 398.03%",
						"346.71% / 433.06%",
						"374.75% / 468.08%",
						"402.79% / 503.11%",
						"433.38% / 541.32%"
					]
				}
			],
		},
		[GsTalentType.e]: {
			id: 5132,
			name: "冰潮的涡旋",
			desc: [
				"<h3>极寒的冰气、迅捷的剑舞。</h3>",
				"<h3>点按</h3>",
				"快速挥斩，造成冰元素伤害。",
				"命中敌人时，优菈自己获得一层冷酷之心效果，最多叠加2次，每0.3秒内只能触发1次。",
				"<h3>冷酷之心</h3>",
				"提高优菈的抗打断能力和防御力。",
				"<h3>长按</h3>",
				"消耗所有的冷酷之心效果，并挥舞大剑向前挥砍，对前方的敌人造成冰元素范围伤害。",
				"若消耗了冷酷之心效果，会使身边的敌人的物理抗性与冰元素抗性降低。",
				"每一层被消耗的冷酷之心会转化为一柄冰涡之剑，对附近的敌人造成冰元素伤害。",
				"<i>「浪花就是这样打着旋，吞没了高贵的头冠。随后，冰冷浪潮的每一滴飞沫里，都映着一个金冠；每一滴浪沫，都闪烁着光。」</i>"
			],
			tables: [
				{
					name: "点按伤害",
					isSame: false,
					values: [
						"146.4%",
						"157.38%",
						"168.36%",
						"183%",
						"193.98%",
						"204.96%",
						"219.6%",
						"234.24%",
						"248.88%",
						"263.52%",
						"278.16%",
						"292.8%",
						"311.1%",
						"329.4%",
						"347.7%"
					]
				},
				{
					name: "长按伤害",
					isSame: false,
					values: [
						"245.6%",
						"264.02%",
						"282.44%",
						"307%",
						"325.42%",
						"343.84%",
						"368.4%",
						"392.96%",
						"417.52%",
						"442.08%",
						"466.64%",
						"491.2%",
						"521.9%",
						"552.6%",
						"583.3%"
					]
				},
				{
					name: "冰涡之剑伤害",
					isSame: false,
					values: [
						"96%",
						"103.2%",
						"110.4%",
						"120%",
						"127.2%",
						"134.4%",
						"144%",
						"153.6%",
						"163.2%",
						"172.8%",
						"182.4%",
						"192%",
						"204%",
						"216%",
						"228%"
					]
				},
				{
					name: "防御力提升",
					isSame: true,
					values: [
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%",
						"每层30%"
					]
				},
				{
					name: "冷酷之心持续时间",
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
					name: "物理抗性降低",
					isSame: false,
					values: [
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
						"25%",
						"25%",
						"25%",
						"25%"
					]
				},
				{
					name: "冰元素抗性降低",
					isSame: false,
					values: [
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
						"25%",
						"25%",
						"25%",
						"25%"
					]
				},
				{
					name: "抗性降低时间",
					isSame: true,
					values: [
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒",
						"7秒"
					]
				},
				{
					name: "点按冷却时间",
					isSame: true,
					values: [
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒",
						"4秒"
					]
				},
				{
					name: "长按冷却时间",
					isSame: true,
					values: [
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒",
						"10秒"
					]
				}
			],
		},
		[GsTalentType.q]: {
			id: 5139,
			name: "凝浪之光剑",
			desc: [
				"猛烈挥舞大剑，对周围的敌人造成冰元素伤害，并创造一柄跟随自己，至多持续存在7秒的光降之剑。",
				"在持续期间内，光降之剑会提高优菈自己的抗打断能力，并在优菈自己的普通攻击、元素战技或元素爆发对敌人造成伤害时，为光降之剑积蓄能量。每0.1秒只能积攒一层能量。",
				"持续时间结束后，光降之剑会降下并猛烈爆发，对周围的敌人造成物理伤害。",
				"此伤害受益于光降之剑积蓄的能量层数。",
				"优菈退场时，光降之剑会立即爆发。",
				"<i>沉沦是件很容易的事情。尽管如此，她仍想要冻结住这股潮流。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"245.6%",
						"264.02%",
						"282.44%",
						"307%",
						"325.42%",
						"343.84%",
						"368.4%",
						"392.96%",
						"417.52%",
						"442.08%",
						"466.64%",
						"491.2%",
						"521.9%",
						"552.6%",
						"583.3%"
					]
				},
				{
					name: "光降之剑基础伤害",
					isSame: false,
					values: [
						"367.05%",
						"396.92%",
						"426.8%",
						"469.48%",
						"499.36%",
						"533.5%",
						"580.45%",
						"627.4%",
						"674.34%",
						"725.56%",
						"784.25%",
						"853.26%",
						"922.27%",
						"991.29%",
						"1066.57%"
					]
				},
				{
					name: "每层能量伤害",
					isSame: false,
					values: [
						"74.99%",
						"81.1%",
						"87.2%",
						"95.92%",
						"102.02%",
						"109%",
						"118.59%",
						"128.18%",
						"137.78%",
						"148.24%",
						"160.23%",
						"174.33%",
						"188.43%",
						"202.53%",
						"217.91%"
					]
				},
				{
					name: "能量层数上限",
					isSame: true,
					values: [
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30",
						"30"
					]
				},
				{
					name: "冷却时间",
					isSame: true,
					values: [
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒",
						"20秒"
					]
				},
				{
					name: "元素能量",
					isSame: true,
					values: [
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80",
						"80"
					]
				}
			],
		}
	},
	talentData: {
		[GsTalentType.a]: new Map([
			["一段伤害", [
				89.73,
				97.04,
				104.34,
				114.77,
				122.08,
				130.43,
				141.9,
				153.38,
				164.86,
				177.38,
				191.72,
				208.6,
				225.47,
				242.34,
				260.75
			]],
			["二段伤害", [
				93.55,
				101.17,
				108.78,
				119.66,
				127.27,
				135.98,
				147.94,
				159.91,
				171.87,
				184.93,
				199.88,
				217.47,
				235.06,
				252.65,
				271.84
			]],
			["三段伤害", [
				113.6,
				122.84,
				132.08,
				145.3,
				154.54,
				165.12,
				179.64,
				194.18,
				208.7,
				224.56,
				242.72,
				264.08,
				285.44,
				306.8,
				330.1
			]],
			["三段伤害2", [
				[56.8, 56.8],
				[61.42, 61.42],
				[66.04, 66.04],
				[72.65, 72.65],
				[77.27, 77.27],
				[82.56, 82.56],
				[89.82, 89.82],
				[97.09, 97.09],
				[104.35, 104.35],
				[112.28, 112.28],
				[121.36, 121.36],
				[132.04, 132.04],
				[142.72, 142.72],
				[153.4, 153.4],
				[165.05, 165.05]
			]],
			["四段伤害", [
				112.64,
				121.81,
				130.98,
				144.08,
				153.25,
				163.72,
				178.13,
				192.54,
				206.95,
				222.67,
				240.68,
				261.86,
				283.03,
				304.21,
				327.32
			]],
			["五段伤害", [
				143.66,
				155.36,
				167.06,
				183.76,
				195.46,
				208.82,
				227.2,
				245.58,
				263.94,
				284,
				306.96,
				333.98,
				360.98,
				388,
				417.48
			]],
			["五段伤害2", [
				[71.83, 71.83],
				[77.68, 77.68],
				[83.53, 83.53],
				[91.88, 91.88],
				[97.73, 97.73],
				[104.41, 104.41],
				[113.6, 113.6],
				[122.79, 122.79],
				[131.97, 131.97],
				[142, 142],
				[153.48, 153.48],
				[166.99, 166.99],
				[180.49, 180.49],
				[194, 194],
				[208.74, 208.74]
			]],
			["重击循环伤害", [
				68.8,
				74.4,
				80,
				88,
				93.6,
				100,
				108.8,
				117.6,
				126.4,
				136,
				147,
				159.94,
				172.87,
				185.81,
				199.92
			]],
			["重击终结伤害", [
				124.4,
				134.52,
				144.65,
				159.12,
				169.24,
				180.81,
				196.72,
				212.64,
				228.55,
				245.9,
				265.79,
				289.18,
				312.57,
				335.96,
				361.48
			]],
			["下坠期间伤害", [
				74.59,
				80.66,
				86.73,
				95.4,
				101.47,
				108.41,
				117.95,
				127.49,
				137.03,
				147.44,
				159.37,
				173.39,
				187.41,
				201.44,
				216.74
			]],
			["低空/高空坠地冲击伤害", [
				[149.14, 186.29],
				[161.28, 201.45],
				[173.42, 216.62],
				[190.77, 238.28],
				[202.91, 253.44],
				[216.78, 270.77],
				[235.86, 294.6],
				[254.93, 318.42],
				[274.01, 342.25],
				[294.82, 368.25],
				[318.67, 398.03],
				[346.71, 433.06],
				[374.75, 468.08],
				[402.79, 503.11],
				[433.38, 541.32]
			]],
			["低空/高空坠地冲击伤害2", [
				[149.14, 186.29],
				[161.28, 201.45],
				[173.42, 216.62],
				[190.77, 238.28],
				[202.91, 253.44],
				[216.78, 270.77],
				[235.86, 294.6],
				[254.93, 318.42],
				[274.01, 342.25],
				[294.82, 368.25],
				[318.67, 398.03],
				[346.71, 433.06],
				[374.75, 468.08],
				[402.79, 503.11],
				[433.38, 541.32]
			]]
		]),
		[GsTalentType.e]: new Map([
			["点按伤害", [
				146.4,
				157.38,
				168.36,
				183,
				193.98,
				204.96,
				219.6,
				234.24,
				248.88,
				263.52,
				278.16,
				292.8,
				311.1,
				329.4,
				347.7
			]],
			["长按伤害", [
				245.6,
				264.02,
				282.44,
				307,
				325.42,
				343.84,
				368.4,
				392.96,
				417.52,
				442.08,
				466.64,
				491.2,
				521.9,
				552.6,
				583.3
			]],
			["冰涡之剑伤害", [
				96,
				103.2,
				110.4,
				120,
				127.2,
				134.4,
				144,
				153.6,
				163.2,
				172.8,
				182.4,
				192,
				204,
				216,
				228
			]],
			["物理抗性降低", [
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
				25,
				25,
				25,
				25
			]],
			["冰元素抗性降低", [
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
				25,
				25,
				25,
				25
			]]
		]),
		[GsTalentType.q]: new Map([
			["技能伤害", [
				245.6,
				264.02,
				282.44,
				307,
				325.42,
				343.84,
				368.4,
				392.96,
				417.52,
				442.08,
				466.64,
				491.2,
				521.9,
				552.6,
				583.3
			]],
			["光降之剑基础伤害", [
				367.05,
				396.92,
				426.8,
				469.48,
				499.36,
				533.5,
				580.45,
				627.4,
				674.34,
				725.56,
				784.25,
				853.26,
				922.27,
				991.29,
				1066.57
			]],
			["每层能量伤害", [
				74.99,
				81.1,
				87.2,
				95.92,
				102.02,
				109,
				118.59,
				128.18,
				137.78,
				148.24,
				160.23,
				174.33,
				188.43,
				202.53,
				217.91
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "光潮的幻象",
			desc: [
				"消耗冰潮的涡旋的冷酷之心效果后，优菈的物理伤害加成提高30%，持续6秒，",
				"每消耗一层冷酷之心，都会使这个效果的持续时间延长6秒，最多不会超过18秒。"
			]
		}],
		[2, {
			name: "海沫的少女",
			desc: [
				"缩短冰潮的涡旋长按的冷却时间，使其降低至与点按的冷却时间相同。"
			]
		}],
		[3, {
			name: "劳伦斯的血脉",
			desc: [
				"凝浪之光剑的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "自卑者的逞强",
			desc: [
				"对生命值低于50%的敌人，光降之剑造成的伤害提高25%。"
			]
		}],
		[5, {
			name: "骑士的素质",
			desc: [
				"冰潮的涡旋的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "高贵者的义务",
			desc: [
				"凝浪之光剑创造的光降之剑立即获得5层能量。普通攻击、元素战技或元素爆发造成伤害使其积蓄能量层数时，有50%的概率额外获得一层。"
			]
		}]
	]),
	passive: [
		{
			name: "贵族的自省",
			desc: [
				"合成角色天赋素材时，有10%概率获得2倍产出。"
			],
		},
		{
			name: "潮卷冰削",
			desc: [
				"长按施放冰潮的涡旋时，若一次性消耗了2层冷酷之心效果，则创造会立即爆发的残缺光降之剑，造成相当于凝浪之光剑的光降之剑基础伤害50%的物理伤害。"
			],
		},
		{
			name: "战欲涌现",
			desc: [
				"施放凝浪之光剑时，重置冰潮的涡旋的冷却时间，并为优菈赋予一层冷酷之心效果。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.cdmg
		],
		details: new Map([
			["1", [1030, 26.63, 58.45, 0]],
			["20", [2671, 69.07, 151.63, 0]],
			["40", [5317, 137.51, 301.88, 0]],
			["50", [6839, 176.87, 388.29, 9.6]],
			["60", [8579, 221.87, 487.09, 19.2]],
			["70", [10119, 261.68, 574.5, 19.2]],
			["80", [11669, 301.76, 662.48, 28.8]],
			["90", [13226, 342.03, 750.88, 38.4]],
			["20+", [3554, 91.9, 201.75, 0]],
			["40+", [5944, 153.73, 337.49, 9.6]],
			["50+", [7675, 198.49, 435.77, 19.2]],
			["60+", [9207, 238.09, 522.71, 19.2]],
			["70+", [10746, 277.9, 610.11, 28.8]],
			["80+", [12296, 317.98, 698.09, 38.4]]
		])
	},
};