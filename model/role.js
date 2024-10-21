import { MysInfo } from '#MysTool/mys'
import { Player } from '#MysTool/profile'
import { Base, Cfg } from '#MysTool/utils'
import { common } from 'node-karin'
import lodash from 'lodash'

export default class Role extends Base {
  constructor (e) {
    super(e, 'gs')
    this.model = 'role/rolelist'
    this.lable = Cfg.getdefSet('lable', this.game)
  }

  async roleList (refreshTalent = false) {
    const res = await MysInfo.get(this.e, 'character')
    if (res?.retcode !== 0) return this.e.reply(`UID: ${this.e.MysUid}, 获取角色信息失败，请先绑定ck/sk`)

    const player = new Player(this.e.MysUid, this.game)
    player.setBasicData(res.data.role, true)

    if (this.e.selfUid && (!player.name || !player.level || !player.face)) {
      const ret = await MysInfo.get(this.e, 'index', { UidType: 'ck' })
      if (res?.retcode === 0) {
        player.setBasicData(ret.data.role, true)
      }
    }

    const list = {
      avatars: res.data.avatars
    }

    if (this.e.HasMysCk && refreshTalent) {
      this.e.reply('正在刷新天赋数据，请稍等...')
      await this.skillData(list.avatars, player)
    } else if (!this.e.HasMysCk && refreshTalent) {
      this.e.reply('未绑定Cookie，无法刷新天赋数据')
      return false
    }

    // todo 圣遗物使用面板数据
    list.avatars.forEach((v, idx) => {
      delete list.avatars[idx].constellations

      const avatar = player.getAvatar(v.id, true)
      if (!avatar) return

      list.avatars[idx].cons = v.actived_constellation_num
      list.avatars[idx].imgs = avatar.char.getImgs(v.costumes?.[0]?.id)
      list.avatars[idx].weaponType = avatar.char.weaponType
      list.avatars[idx].elem = avatar.char.elem
      list.avatars[idx].talent = avatar.talent
    })

    return await this.renderImg({
      ...list,
      role: {
        ...res.data.role,
        face: player.face
      },
      version: this.lable.version
    }, { Scale: true })
  }

  /** @param {Player} player */
  async skillData (avatars, player = '') {
    logger.mark(`[${this.game}][${this.e.MysUid}]刷新天赋数据`)
    if (!player) player = new Player(this.e.MysUid, this.game)

    const ids = lodash.chunk(avatars.map(v => {
      return ['detail', { avatar_id: v.id }]
    }), 10)

    const skillList = []
    for (const id of ids) {
      skillList.push(...await MysInfo.get(this.e, id, { log: false, cached: true, cacheCd: 1800 }))
      await common.sleep(50 + Math.random() * 150)
    }

    lodash.remove(skillList, function (v) {
      return v?.retcode !== 0
    })

    avatars.forEach((v, idx) => {
      delete avatars[idx].constellations

      const talent = {}
      const avatar = player.getAvatar(v.id, true)
      if (!avatar) return

      const skill = skillList.find(i => i.reqData.avatar_id === v.id)
      const talents = lodash.orderBy(skill.data.skill_list, ['id'], 'desc')

      /** 这样并不是最合适的 */
      for (const { max_level, level_current, name } of talents) {
        if (max_level < 10) continue
        if (name.includes('普通攻击')) {
          talent.a = level_current
          continue
        }
        if (!talent.q) {
          talent.q = level_current
          continue
        }
        if (!talent.e) {
          talent.e = level_current
        }
        if (talent.a && talent.e && talent.q) break
      }
      avatars[idx].talent = talent
      avatars[idx].cons = v.actived_constellation_num
      avatar.setAvatar(avatars[idx], 'mys')
    })
    player.save()
  }
}
