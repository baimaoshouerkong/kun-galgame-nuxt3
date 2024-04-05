interface Item {
  i18n: string
  value: string
}

export const languageItems: Item[] = [
  {
    i18n: 'edit.galgame.introduction.en-us',
    value: 'en-us'
  },
  {
    i18n: 'edit.galgame.introduction.ja-jp',
    value: 'ja-jp'
  },
  {
    i18n: 'edit.galgame.introduction.zh-cn',
    value: 'zh-cn'
  }
]

export const typeOptions = [
  'game',
  'patch',
  'collection',
  'voice',
  'image',
  'ai',
  'others'
]
export const languageOptions = ['ja-jp', 'en-us', 'zh-cn', 'others']
export const platformOptions = [
  'windows',
  'mac',
  'linux',
  'emulator',
  'app',
  'others'
]
