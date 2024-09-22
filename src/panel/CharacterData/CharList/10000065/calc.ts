details = [{
  title: '超绽放伤害',
  dmg: ({ calc, attr }, { reaction }) => {
    return reaction('hyperBloom')
  }
}, {
  title: 'E释放伤害',
  dmg: ({ talent }, { dmg }) => dmg(talent[GsTalentType.e].get('技能伤害'], GsTalentType.e)
}, {
  title: 'E每跳治疗',
    dmg: ({ talent, calc, attr }, { heal }) => {
      let ec = talent[GsTalentType.e].get('越祓草轮治疗量2']
    return heal(calc(attr.hp) * ec[0] / 100 + ec[1] * 1 + calc(attr.mastery) * 0.75)
    }
}, {
  title: 'Q每跳伤害',
    dmg: ({ talent, calc, attr }, { basic }) => basic(talent[GsTalentType.q].get('单次伤害'] * calc(attr.hp) / 100, GsTalentType.q)
}]

defDmgIdx = 0
mainAttr = 'hp,atk,cpct,cdmg,mastery'

buffs = [{
  title: '久岐忍被动：生命低于50%时提高治疗加成15%',
  data: {
    heal: 15
  }
}, {
  title: '久岐忍被动：基于元素精通提高治疗量[healNum]，伤害[ePlus]',
  sort: 9,
  data: {
    healNum: ({ attr, calc }) => calc(attr.mastery) * 0.75,
    ePlus: ({ attr, calc }) => calc(attr.mastery) * 0.25
  }
}]