export default function Loading(){
  return (
    <div className="flex justify-center items-center gap-1">
      <div className="flex justify-center items-baseline gap-1">
        <h1>Carregando</h1>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-1 h-1 rounded-full animate-pulse dark:bg-fc-color-200"></div>
          <div className="w-1 h-1 rounded-full animate-pulse dark:bg-fc-color-200"></div>
          <div className="w-1 h-1 rounded-full animate-pulse dark:bg-fc-color-200"></div>
        </div>
      </div>
    </div>
  )
}