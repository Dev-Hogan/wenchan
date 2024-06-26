export type Icon =
  | 'addTag'
  | 'addQuestion'
  | 'all'
  | 'answer'
  | 'arrowBottom'
  | 'arrowLeft'
  | 'arrowLeft2x'
  | 'arrowRight'
  | 'arrowTop'
  | 'ask1'
  | 'ask2'
  | 'ask3'
  | 'ask4'
  | 'checked'
  | 'checkedTheme'
  | 'close'
  | 'fold'
  | 'unfold'
  | 'copy'
  | 'edit'
  | 'focus'
  | 'focus2'
  | 'focus3'
  | 'focus4'
  | 'fullscreen1'
  | 'quotation'
  | 'info'
  | 'link'
  | 'link2'
  | 'more'
  | 'pdf2'
  | 'search'
  | 'setting2'
  | 'share'
  | 'sort'
  | 'sort2'
  | 'tag'
  | 'trash'
  | 'unfocus'
  | 'random'
  | 'allQuestion'
  | 'bold'
  | 'li'
  | 'picture'
  | 'numbering'
  | 'linkTag'
  | 'fullScreen2'
  | 'publish'
  | 'pdf'
  | 'pdf3'
  | 'DownOutlined'
  | 'arrowLeft3'
  | 'link3'
  | 'focusTheme'
  | 'editTheme'
  | 'linkTheme'
  | 'fullscreen1Theme'
  | 'shareTheme'
  | 'trashTheme'
  | 'tagTheme'
  | 'tag2'
  | 'add'

export type IconMap = Partial<Record<Icon, [string, boolean?]>>
