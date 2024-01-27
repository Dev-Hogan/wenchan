'use client'

// import { createPlateUI } from '@/plate/create-plate-ui'
// import { createBasicElementsPlugin } from '@udecode/plate-basic-elements'
// import { createBasicMarksPlugin } from '@udecode/plate-basic-marks'
import { createPlugins, Plate } from '@udecode/plate-common'

import { Editor } from '@/components/plate-ui/editor'

export function EditorDefault() {
  // const plugins = createPlugins([createBasicElementsPlugin(), createBasicMarksPlugin()], {
  //   components: createPlateUI()
  // })

  return (
    <div className="mt-[72px] p-10">
      <Plate>
        <Editor placeholder="Type your message here." />
      </Plate>
    </div>
  )
}
