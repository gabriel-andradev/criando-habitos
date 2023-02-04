import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form className='w-full flex flex-col mt-6'>

      <label
        htmlFor="title"
        className="font-bold leading-tight"
      >
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, estudos, etc..."
        className="p-3 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
      />

      <label
        htmlFor="title"
        className="font-bold leading-tight mt-4"
      >
        Qual a recorrência?
      </label>

      <button type="submit" className="mt-6 rounded-lg p-4 flex gap-3 items-center justify-center font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}