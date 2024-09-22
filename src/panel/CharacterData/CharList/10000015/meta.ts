import { AttrKeys, CharDetailInfo, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 凯亚 */
export const meta: CharDetailInfo  = {
    info: {
		title: "寒风剑士",
		allegiance: "西风骑士团",
		birth: "11-30",
		astro: "孔雀羽座",
		desc: "异国面容的剑斗士，西风骑士团的头脑派人物。",
		cncv: "孙晔",
		jpcv: "鸟海浩辅",
		ver: 1
	},
	costumes: [201501],
	baseAttr:{
		[AttrKeys.hp]: 11636,
		[AttrKeys.atk]: 223.02,
		[AttrKeys.def]: 791.72
	},
	growAttr:{
		key: AttrKeys.recharge,
		value: 26.67
	},
	materials:{
		[MaterialType.gem]: "哀叙冰玉",
		[MaterialType.boss]: "极寒之核",
		[MaterialType.specialty]: "嘟嘟莲",
		[MaterialType.normal]: "攫金鸦印",
		[MaterialType.talent]: "「诗文」的哲学",
		[MaterialType.weekly]: "北风的魂匣"
	},
	talent:{
		[GsTalentType.a]: {
			id: 1531,
			name: "普通攻击·仪典剑术",
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
						"53.75%",
						"58.13%",
						"62.5%",
						"68.75%",
						"73.12%",
						"78.13%",
						"85%",
						"91.87%",
						"98.75%",
						"106.25%",
						"114.84%",
						"124.95%",
						"135.06%",
						"145.16%",
						"156.19%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"51.69%",
						"55.89%",
						"60.1%",
						"66.11%",
						"70.32%",
						"75.13%",
						"81.74%",
						"88.35%",
						"94.96%",
						"102.17%",
						"110.43%",
						"120.15%",
						"129.87%",
						"139.59%",
						"150.19%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"65.27%",
						"70.59%",
						"75.9%",
						"83.49%",
						"88.8%",
						"94.88%",
						"103.22%",
						"111.57%",
						"119.92%",
						"129.03%",
						"139.47%",
						"151.74%",
						"164.01%",
						"176.29%",
						"189.67%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"70.86%",
						"76.63%",
						"82.4%",
						"90.64%",
						"96.41%",
						"103%",
						"112.06%",
						"121.13%",
						"130.19%",
						"140.08%",
						"151.41%",
						"164.73%",
						"178.06%",
						"191.38%",
						"205.92%"
					]
				},
				{
					name: "五段伤害",
					isSame: false,
					values: [
						"88.24%",
						"95.42%",
						"102.6%",
						"112.86%",
						"120.04%",
						"128.25%",
						"139.54%",
						"150.82%",
						"162.11%",
						"174.42%",
						"188.53%",
						"205.12%",
						"221.71%",
						"238.3%",
						"256.4%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"55.04% + 73.1%",
						"59.52% + 79.05%",
						"64% + 85%",
						"70.4% + 93.5%",
						"74.88% + 99.45%",
						"80% + 106.25%",
						"87.04% + 115.6%",
						"94.08% + 124.95%",
						"101.12% + 134.3%",
						"108.8% + 144.5%",
						"117.6% + 156.19%",
						"127.95% + 169.93%",
						"138.3% + 183.68%",
						"148.65% + 197.42%",
						"159.94% + 212.42%"
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
			id: 1532,
			name: "霜袭",
			desc: [
				"瞬间放出急冻的寒气，对前方的敌人造成冰元素伤害。",
				"<i>看上去如此亲切的凯亚，是谁也无法融化的坚冰。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"191.2%",
						"205.54%",
						"219.88%",
						"239%",
						"253.34%",
						"267.68%",
						"286.8%",
						"305.92%",
						"325.04%",
						"344.16%",
						"363.28%",
						"382.4%",
						"406.3%",
						"430.2%",
						"454.1%"
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
			id: 1539,
			name: "凛冽轮舞",
			desc: [
				"凝聚空气中的寒霜，召唤3枚围绕自身旋转的寒冰之棱。",
				"存在期间内，寒冰之棱会跟随角色运动，对路径上的敌人造成冰元素伤害。",
				"<i>亲切的笑容、和善的话语，和潜藏在这两者之下的毫不留情的冰霜，都是凯亚的武器。</i>"
			],
			tables: [
				{
					name: "技能伤害",
					isSame: false,
					values: [
						"77.6%",
						"83.42%",
						"89.24%",
						"97%",
						"102.82%",
						"108.64%",
						"116.4%",
						"124.16%",
						"131.92%",
						"139.68%",
						"147.44%",
						"155.2%",
						"164.9%",
						"174.6%",
						"184.3%"
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
		[GsTalentType.a]: new Map([
			["一段伤害", [
				53.75,
				58.13,
				62.5,
				68.75,
				73.12,
				78.13,
				85,
				91.87,
				98.75,
				106.25,
				114.84,
				124.95,
				135.06,
				145.16,
				156.19
			]],
			["二段伤害", [
				51.69,
				55.89,
				60.1,
				66.11,
				70.32,
				75.13,
				81.74,
				88.35,
				94.96,
				102.17,
				110.43,
				120.15,
				129.87,
				139.59,
				150.19
			]],
			["三段伤害", [
				65.27,
				70.59,
				75.9,
				83.49,
				88.8,
				94.88,
				103.22,
				111.57,
				119.92,
				129.03,
				139.47,
				151.74,
				164.01,
				176.29,
				189.67
			]],
			["四段伤害", [
				70.86,
				76.63,
				82.4,
				90.64,
				96.41,
				103,
				112.06,
				121.13,
				130.19,
				140.08,
				151.41,
				164.73,
				178.06,
				191.38,
				205.92
			]],
			["五段伤害", [
				88.24,
				95.42,
				102.6,
				112.86,
				120.04,
				128.25,
				139.54,
				150.82,
				162.11,
				174.42,
				188.53,
				205.12,
				221.71,
				238.3,
				256.4
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
				273.78999999999996,
				297.88,
				321.98,
				346.07,
				372.36
			]],
			["重击伤害2", [
				[55.04, 73.1],
				[59.52, 79.05],
				[64, 85],
				[70.4, 93.5],
				[74.88, 99.45],
				[80, 106.25],
				[87.04, 115.6],
				[94.08, 124.95],
				[101.12, 134.3],
				[108.8, 144.5],
				[117.6, 156.19],
				[127.95, 169.93],
				[138.3, 183.68],
				[148.65, 197.42],
				[159.94, 212.42]
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
				191.2,
				205.54,
				219.88,
				239,
				253.34,
				267.68,
				286.8,
				305.92,
				325.04,
				344.16,
				363.28,
				382.4,
				406.3,
				430.2,
				454.1
			]]
		]),
		[GsTalentType.q]: new Map([
			["技能伤害", [
				77.6,
				83.42,
				89.24,
				97,
				102.82,
				108.64,
				116.4,
				124.16,
				131.92,
				139.68,
				147.44,
				155.2,
				164.9,
				174.6,
				184.3
			]]
		])
	},
	cons: new Map([
		[1, {
			name: "卓越的血脉",
			desc: [
				"对受到冰元素影响的敌人，凯亚的普通攻击与重击暴击率提升15%。"
			]
		}],
		[2, {
			name: "无尽的霜舞",
			desc: [
				"在凛冽轮舞的持续时间内击败敌人时，持续时间延长2.5秒，最多不会超过15秒。"
			]
		}],
		[3, {
			name: "凛冽的冰戏",
			desc: [
				"霜袭的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "极寒的轻吻",
			desc: [
				"凯亚的生命值低于20%时自动触发：",
				"生成一个伤害吸收量等于生命值上限30%的护盾，持续20秒。",
				"该护盾对冰元素伤害有250%的吸收效果。",
				"该效果每60秒只能触发一次。"
			]
		}],
		[5, {
			name: "至冷的拥抱",
			desc: [
				"凛冽轮舞的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "轮旋的冰凌",
			desc: [
				"凛冽轮舞会产生一个额外的寒冰之棱，并在施放时返还15点元素能量。"
			]
		}]
	]),
	passive: [
		{
			name: "隐藏的实力",
			desc: [
				"队伍中自己的角色冲刺消耗的体力降低20%。",
				"无法与效果完全相同的固有天赋叠加。"
			],
		},
		{
			name: "冷血之剑",
			desc: [
				"霜袭每击中一个单位，便为凯亚恢复等同于攻击力15%的生命值。"
			],
		},
		{
			name: "冰渊之心",
			desc: [
				"霜袭使敌人冻结时，被冻结的敌人会掉落额外的元素微粒。",
				"一次霜袭至多因此产生2个额外元素微粒。"
			],
		}
	],
	attr:{
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.recharge
		],
		details: new Map([
			["1", [976, 18.7, 66.38, 0]],
			["20", [2506, 48.04, 170.53, 0]],
			["40", [4846, 92.88, 329.72, 0]],
			["50", [6170, 118.25, 419.78, 6.67]],
			["60", [7666, 146.93, 521.59, 13.33]],
			["70", [8989, 172.28, 611.59, 13.33]],
			["80", [10312, 197.65, 701.66, 20]],
			["90", [11636, 223.02, 791.72, 26.67]],
			["20+", [3235, 62.01, 220.12, 0]],
			["40+", [5364, 102.8, 364.95, 6.67]],
			["50+", [6860, 131.48, 466.76, 13.33]],
			["60+", [8184, 156.85, 556.83, 13.33]],
			["70+", [9507, 182.2, 646.83, 20]],
			["80+", [10830, 207.57, 736.89, 26.67]]
		])
	},
};