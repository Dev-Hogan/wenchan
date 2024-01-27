'use client'

import { useState } from 'react'

function getTypeString(val: any): string {
  if (val == null) {
    return 'string'
  } else if (val instanceof Array) {
    return `${getTypeString(val[0])}[]`
  } else if (val instanceof Object) {
    return `{\n${Object.keys(val)
      .map(k => `${k}?:${getTypeString(val[k])}`)
      .join('\n')}\n}`
  } else {
    return typeof val
  }
}

export default function Page() {
  const [tsCode, setTsCode] = useState('')

  return (
    <main>
      <div>
        <div>json2ts</div>
        <div className="flex">
          <textarea
            className="h-[300px] w-[300px] border"
            name="ts"
            id="typeString"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              const val = e.target.value
              let res = ''
              try {
                res = getTypeString(JSON.parse(val))
              } catch (err) {
                console.warn('parse error! need JSON!', err)
                res = 'parse error! need JSON!'
              }
              setTsCode(res)
            }}
          ></textarea>
          <div className="flex-1">
            <div>转换类型</div>
            <div className="w-[300px]">
              <code
                className="cursor-pointer "
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(tsCode)
                    alert('类型复制成功')
                  } catch (error) {
                    console.error(error)
                  }
                }}
              >
                {tsCode}
              </code>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
