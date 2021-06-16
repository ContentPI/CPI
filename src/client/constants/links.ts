type Params = {
  language?: string
  appId?: string
  stage?: string
  model?: string
  section?: string
  enumeration?: string
}

export const GET_LINK = (p: Params) => {
  const stage = `/${p?.language}/dashboard/${p?.appId}/${p?.stage}`
  const asset = `${stage}/content/model/asset`
  const content = `${stage}/content/${p?.section}/${p?.model}`
  const create = `${stage}/create/${p?.section}/${p?.model}`
  const editEntry = `${stage}/edit/${p?.section}/${p?.model}`
  const enumeration = `${stage}/schema/enumeration/${p?.enumeration}`
  const i18n = `${stage}/content/model/i18n`
  const logout = `/${p?.language}/logout`
  const model = `${stage}/schema/model/${p?.model}`
  const slack =
    'https://join.slack.com/t/developereducation/shared_invite/zt-eatjcqlw-dRtII6skC9oxT_Fpth_Qlg'

  return {
    asset,
    content,
    create,
    editEntry,
    enumeration,
    i18n,
    logout,
    model,
    slack,
    stage
  }
}
