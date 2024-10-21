import karin from 'node-karin'
import { MysUtil } from '#MysTool/mys'
import Profile from '../model/profile.js'

const reg = MysUtil.reg.gs

export const profile_Refresh = karin.command(
  new RegExp(`^${reg}?(全部面板更新|更新全部面板|获取游戏角色详情|更新面板|面板更新)\\s*((18|[1-9])[0-9]{8})?$`, 'i'),
  async (e) => {
    const img = await new Profile(e).refresh()
    if (img) e.reply(img)
    return true
  },
  { name: '更新原神角色面板', priority: 200 }
)

export const profile_List = karin.command(
  new RegExp(`^${reg}?面板(列表)?\\s*((18|[1-9])[0-9]{8})?$`, 'i'),
  async (e) => {
    const img = await new Profile(e).list()
    if (img) e.reply(img)
    return true
  },
  { name: '原神角色面板列表', priority: 200 }
)

export const profile__detail = karin.handler(
  'mys.gs.profile',
  async ({ e, profile, uid }) => {
    try {
      const img = await new Profile(e).detail(uid, profile)
      if (img) e.reply(img)
    } catch (error) {
      await e.reply('查询失败，请绑定ck或重新更新面板后查询')
    }
    return true
  },
  { name: '原神角色面板详情', priority: 200 }
)
