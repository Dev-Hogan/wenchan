async function getData(id: string | number) {
  console.log(id);
  
  const data = await fetch(`${process.env.API_URL}/dev/data/${id}`, { cache: 'no-store' })
  return data.json()
}

export default async function TestId({ params }: { params: { id: string } }) {
  const data = await getData(params.id)
  console.log(data)
  return (
    <div className="flex flex-col">
      <div>测试动态路由{params.id}</div>
      <div className="flex space-x-2">
        <div>测试fetch</div>
        {Object.entries(data).map((i, idx) => (
          <div key={idx}>
            {i[0] as string}-{i[1] as string}
          </div>
        ))}
      </div>
    </div>
  )
}
