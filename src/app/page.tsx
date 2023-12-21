'use client'

import { useTheme } from './contextTheme'
import { TimeoutComponent } from './timeoutComponent'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={theme}>
      <TimeoutComponent />
      <div className="min-h-screen flex flex-col justify-center items-center gap-10 bg-indigo-50 dark:bg-slate-900 selection:bg-violet-400 dark:selection:bg-violet-700">
        <div className="max-w-[960px] p-5 bg-slate-100 dark:bg-zinc-900 rounded-lg flex gap-4 border border-zinc-900 dark:border-zinc-200 hover:shadow-cartom hover:dark:shadow-cartom-dark duration-300 cursor-pointer">
          <div className="w-24 h-24 bg-indigo-500 rounded-lg" />
          <span className="flex-1 flex justify-center items-center">
            <p className="text-justify text dark:text-slate-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              molestias recusandae quisquam architecto optio, maiores nostrum
              omnis aliquid, quos ducimus est repellendus doloremque dolor ipsa
              modi sapiente labore similique quidem.
            </p>
          </span>
        </div>

        <button
          className="bg-indigo-400 hover:bg-indigo-500 dark:bg-indigo-700 duration-300 p-5 rounded-md border border-zinc-900 dark:border-zinc-200 font-bold dark:text-slate-200 hover:shadow-cartom hover:dark:shadow-cartom-dark"
          onClick={toggleTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  )
}
