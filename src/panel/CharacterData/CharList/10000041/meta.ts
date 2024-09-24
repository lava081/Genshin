import { AttrKeys, MaterialType } from "@/types";
import { GsTalentType } from "karin-plugin-mystool";

/** 莫娜 */
export const metaData = {
	info: {
		title: "星天水镜",
		allegiance: "蒙德城",
		birth: "8-31",
		astro: "映天座",
		desc: "神秘的少女占星术士，声称自己是「伟大的占星术士莫娜」，拥有与名号相符的不俗实力，博学而高傲。",
		cncv: "陈婷婷",
		jpcv: "小原好美",
		ver: 1
	},
	costumes: [],
	baseAttr: {
		[AttrKeys.hp]: 10409,
		[AttrKeys.atk]: 287.01,
		[AttrKeys.def]: 653.27
	},
	growAttr: {
		key: AttrKeys.recharge,
		value: 32
	},
	materials: {
		[MaterialType.gem]: "涤净青金",
		[MaterialType.boss]: "净水之心",
		[MaterialType.specialty]: "慕风蘑菇",
		[MaterialType.normal]: "原素花蜜",
		[MaterialType.talent]: "「抗争」的哲学",
		[MaterialType.weekly]: "北风之环"
	},
	talent: {
		[GsTalentType.a]: {
			id: 4131,
			name: "普通攻击·因果点破",
			desc: [
				"<h3>普通攻击</h3>",
				"进行至多四段的水花攻击，造成水元素伤害。",
				"<h3>重击</h3>",
				"消耗一定体力，短暂咏唱后，造成水元素范围伤害。",
				"<h3>下落攻击</h3>",
				"凝聚水元素的力量，从空中下坠冲击地面，攻击下落路径上的敌人，并在落地时造成水元素范围伤害。"
			],
			tables: [
				{
					name: "一段伤害",
					isSame: false,
					values: [
						"37.6%",
						"40.42%",
						"43.24%",
						"47%",
						"49.82%",
						"52.64%",
						"56.4%",
						"60.16%",
						"63.92%",
						"67.68%",
						"71.44%",
						"75.2%",
						"79.9%",
						"84.6%",
						"89.3%"
					]
				},
				{
					name: "二段伤害",
					isSame: false,
					values: [
						"36%",
						"38.7%",
						"41.4%",
						"45%",
						"47.7%",
						"50.4%",
						"54%",
						"57.6%",
						"61.2%",
						"64.8%",
						"68.4%",
						"72%",
						"76.5%",
						"81%",
						"85.5%"
					]
				},
				{
					name: "三段伤害",
					isSame: false,
					values: [
						"44.8%",
						"48.16%",
						"51.52%",
						"56%",
						"59.36%",
						"62.72%",
						"67.2%",
						"71.68%",
						"76.16%",
						"80.64%",
						"85.12%",
						"89.6%",
						"95.2%",
						"100.8%",
						"106.4%"
					]
				},
				{
					name: "四段伤害",
					isSame: false,
					values: [
						"56.16%",
						"60.37%",
						"64.58%",
						"70.2%",
						"74.41%",
						"78.62%",
						"84.24%",
						"89.86%",
						"95.47%",
						"101.09%",
						"106.7%",
						"112.32%",
						"119.34%",
						"126.36%",
						"133.38%"
					]
				},
				{
					name: "重击伤害",
					isSame: false,
					values: [
						"149.72%",
						"160.95%",
						"172.18%",
						"187.15%",
						"198.38%",
						"209.61%",
						"224.58%",
						"239.55%",
						"254.52%",
						"269.5%",
						"285.07%",
						"305.43%",
						"325.79%",
						"346.15%",
						"366.51%"
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
			id: 4132,
			name: "水中幻愿",
			desc: [
				"<h3>聚集水花汇成命运的虚影。</h3>",
				"<h3>虚影</h3>",
				"具有如下特性：",
				"·持续嘲讽周围的敌人，吸引火力；",
				"·持续对附近的敌人造成水元素伤害；",
				"·持续时间结束时，虚影破裂，造成水元素范围伤害。",
				"<h3>长按</h3>",
				"借助水流之势迅速后退，并唤出虚影。",
				"场上同时只能存在一个通过水中幻愿创造的虚影。",
				"<i>高深的占星术士一直试图制造自身的虚影来转嫁将要到来的厄运。但是如此嘲讽厄运的人，莫娜应该是提瓦特第一个。</i>"
			],
			tables: [
				{
					name: "持续伤害",
					isSame: false,
					values: [
						"32%",
						"34.4%",
						"36.8%",
						"40%",
						"42.4%",
						"44.8%",
						"48%",
						"51.2%",
						"54.4%",
						"57.6%",
						"60.8%",
						"64%",
						"68%",
						"72%",
						"76%"
					]
				},
				{
					name: "爆裂伤害",
					isSame: false,
					values: [
						"132.8%",
						"142.76%",
						"152.72%",
						"166%",
						"175.96%",
						"185.92%",
						"199.2%",
						"212.48%",
						"225.76%",
						"239.04%",
						"252.32%",
						"265.6%",
						"282.2%",
						"298.8%",
						"315.4%"
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
			id: 4139,
			name: "星命定轨",
			desc: [
				"凝聚粼粼的水波，倒映出虚幻星空，对大范围内的敌人施加泡影状态。",
				"<h3>泡影</h3>",
				"以星相的气泡包裹敌人，施加潮湿状态。较弱的敌人会被禁锢在泡影中，无法行动。",
				"处于泡影影响下的敌人受到伤害时，会产生以下效果：",
				"·对敌人施加星异的伤害加成效果，并以此提高这一次造成的伤害；",
				"·解除泡影效果，并额外造成一次水元素伤害。",
				"<h3>星异</h3>",
				"持续时间内，提高受到的伤害。",
				"<i>自从神的目光开始牵引着天上的光明，命运自此被称之为命运。</i>"
			],
			tables: [
				{
					name: "泡影持续时间",
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
					name: "泡影破裂伤害",
					isSame: false,
					values: [
						"442.4%",
						"475.58%",
						"508.76%",
						"553%",
						"586.18%",
						"619.36%",
						"663.6%",
						"707.84%",
						"752.08%",
						"796.32%",
						"840.56%",
						"884.8%",
						"940.1%",
						"995.4%",
						"1050.7%"
					]
				},
				{
					name: "伤害加成",
					isSame: false,
					values: [
						"42%",
						"44%",
						"46%",
						"48%",
						"50%",
						"52%",
						"54%",
						"56%",
						"58%",
						"60%",
						"60%",
						"60%",
						"60%",
						"60%",
						"60%"
					]
				},
				{
					name: "星异持续时间",
					isSame: false,
					values: [
						"4秒",
						"4秒",
						"4秒",
						"4.5秒",
						"4.5秒",
						"4.5秒",
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
				37.6,
				40.42,
				43.24,
				47,
				49.82,
				52.64,
				56.4,
				60.16,
				63.92,
				67.68,
				71.44,
				75.2,
				79.9,
				84.6,
				89.3
			],
			"二段伤害": [
				36,
				38.7,
				41.4,
				45,
				47.7,
				50.4,
				54,
				57.6,
				61.2,
				64.8,
				68.4,
				72,
				76.5,
				81,
				85.5
			],
			"三段伤害": [
				44.8,
				48.16,
				51.52,
				56,
				59.36,
				62.72,
				67.2,
				71.68,
				76.16,
				80.64,
				85.12,
				89.6,
				95.2,
				100.8,
				106.4
			],
			"四段伤害": [
				56.16,
				60.37,
				64.58,
				70.2,
				74.41,
				78.62,
				84.24,
				89.86,
				95.47,
				101.09,
				106.7,
				112.32,
				119.34,
				126.36,
				133.38
			],
			"重击伤害": [
				149.72,
				160.95,
				172.18,
				187.15,
				198.38,
				209.61,
				224.58,
				239.55,
				254.52,
				269.5,
				285.07,
				305.43,
				325.79,
				346.15,
				366.51
			],
			"下坠期间伤害": [
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
			],
			"低空/高空坠地冲击伤害": [
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
			],
			"低空/高空坠地冲击伤害2": [
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
			]
		},
		[GsTalentType.e]: {
			"持续伤害": [
				32,
				34.4,
				36.8,
				40,
				42.4,
				44.8,
				48,
				51.2,
				54.4,
				57.6,
				60.8,
				64,
				68,
				72,
				76
			],
			"爆裂伤害": [
				132.8,
				142.76,
				152.72,
				166,
				175.96,
				185.92,
				199.2,
				212.48,
				225.76,
				239.04,
				252.32,
				265.6,
				282.2,
				298.8,
				315.4
			]
		},
		[GsTalentType.q]: {
			"泡影破裂伤害": [
				442.4,
				475.58,
				508.76,
				553,
				586.18,
				619.36,
				663.6,
				707.84,
				752.08,
				796.32,
				840.56,
				884.8,
				940.1,
				995.4,
				1050.7
			],
			"伤害加成": [
				42,
				44,
				46,
				48,
				50,
				52,
				54,
				56,
				58,
				60,
				60,
				60,
				60,
				60,
				60
			],
			"星异持续时间": [
				4,
				4,
				4,
				4.5,
				4.5,
				4.5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5,
				5
			]
		}
	},
	cons: new Map([
		[1, {
			name: "沉没的预言",
			desc: [
				"队伍中自己的角色攻击命中处于星异状态下的敌人后的8秒内，水元素相关反应的效果提升：",
				"·感电反应造成的伤害提升15%，蒸发反应造成的伤害提升15%，水元素扩散反应造成的伤害提升15%；",
				"·冻结反应的持续时间延长15%。"
			]
		}],
		[2, {
			name: "星月的连珠",
			desc: [
				"普通攻击命中时，有20%的几率自动施放一次重击。",
				"该效果每5秒只能触发一次。"
			]
		}],
		[3, {
			name: "不休的天象",
			desc: [
				"星命定轨的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[4, {
			name: "灭绝的预言",
			desc: [
				"队伍中所有角色攻击处于星异状态下的敌人时，暴击率提升15%。"
			]
		}],
		[5, {
			name: "命运的嘲弄",
			desc: [
				"水中幻愿的技能等级提高3级。",
				"至多提升至15级。"
			]
		}],
		[6, {
			name: "厄运的修辞",
			desc: [
				"进入虚实流动状态后，每移动1秒，莫娜的下一次重击伤害就增加60%，",
				"通过这种方式至多可以获得180%重击伤害加成，该效果至多持续8秒。"
			]
		}]
	]),
	passive: [
		{
			name: "运行原理",
			desc: [
				"合成武器突破素材时，有25%概率返还部分合成材料。"
			],
		},
		{
			name: "「老太婆来抓我啊！」",
			desc: [
				"进入虚实流动状态2秒后，如果周围存在敌人，则自动凝聚一个虚影。",
				"通过这种方式产生的虚影持续2秒，造成的破裂伤害相当于水中幻愿伤害的50%。"
			],
		},
		{
			name: "「托付于命运吧！」",
			desc: [
				"莫娜的水元素伤害加成获得额外提升，提升程度相当于她的元素充能效率的20%。"
			],
		},
		{
			name: "虚实流动",
			desc: [
				"<h3>替代冲刺</h3>",
				"隐入流水，以消耗体力为代价，化为激流快速移动。",
				"在虚实流动状态下，莫娜可以在水面上高速移动。",
				"结束虚实流动现身时，对周围的敌人施加潮湿状态。",
				"<i>这是莫娜能办到，她老师却办不到的事情。无关水元素神之眼，毕竟她老师又不会被追着教育。</i>"
			],
		}
	],
	attr: {
		keys: [
			AttrKeys.hp + "Base",
			AttrKeys.atk + "Base",
			AttrKeys.def + "Base",
			AttrKeys.recharge
		],
		details: new Map([
			["1", [810, 22.34, 50.86, 0]],
			["20", [2102, 57.96, 131.92, 0]],
			["40", [4185, 115.39, 262.64, 0]],
			["50", [5383, 148.42, 337.82, 8]],
			["60", [6752, 186.19, 423.78, 16]],
			["70", [7964, 219.59, 499.82, 16]],
			["80", [9184, 253.23, 576.37, 24]],
			["90", [10409, 287.01, 653.27, 32]],
			["20+", [2797, 77.12, 175.52, 0]],
			["40+", [4678, 129, 293.62, 8]],
			["50+", [6041, 166.57, 379.13, 16]],
			["60+", [7246, 199.8, 454.76, 16]],
			["70+", [8458, 233.21, 530.8, 24]],
			["80+", [9677, 266.84, 607.35, 32]]
		])
	},
};