import * as Popover from '@radix-ui/react-popover';
import HabitsList from './HabitsList';
import dayjs from 'dayjs';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';
import { useState } from 'react';

interface HabitDayProps {
  date: Date
  defaultCompleted?: number
  amount?: number
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')
  const month = dayjs(date).format('MMM')

  function handleCompletedChanged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 bg-zinc-900 flex items-center text-zinc-900 text-opacity-70 justify-center border-2 border-zinc-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-background', {
          'bg-zinc-900 border-zinc-800 text-zinc-600': completedPercentage === 0,
          'bg-cyan-900 border-cyan-800': completedPercentage > 0 && completedPercentage <= 20,
          'bg-cyan-800 border-cyan-700': completedPercentage > 20 && completedPercentage <= 40,
          'bg-cyan-700 border-cyan-600': completedPercentage > 40 && completedPercentage <= 60,
          'bg-cyan-600 border-cyan-500': completedPercentage > 60 && completedPercentage <= 80,
          'bg-cyan-400 border-cyan-300': completedPercentage > 80,
        })}
      >
        {month}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-background">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

          <ProgressBar progress={completedPercentage} />

          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />
          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}