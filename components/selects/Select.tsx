import { ChevronDown } from "lucide-react"
import React, { useState } from "react"

interface SelectProps {
  options: string[]
  onChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    onChange(option)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full flex items-center rounded-lg border bg-white duration-200 hover:border-purple/60 has-[input:focus]:border-purple/80">
      <div
        className="w-full h-full"
        onClick={() => { setIsOpen(!isOpen) }}
        tabIndex={0}
        onBlur={() => { setIsOpen(false) }}
      >
        <div className="w-full flex items-center p-2 gap-2 justify-between select-none cursor-pointer">
          <span className={`flex items-center truncate ${selectedOption ? 'text-dark' : 'text-slate-300'}`}>
            {selectedOption ?? 'Seleccionar'}
          </span>
          <ChevronDown
            size={16}
            className={`${
              isOpen ? "rotate-180 duration-200" : "rotate-0 duration-200"
            }`}
          />
        </div>

        <div
          className={`${
            isOpen ? "translate-y-0 visible opacity-100" : "invisible opacity-0"
          } -translate-y-5 origin-top-right overflow-hidden absolute right-0 left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none animation duration-200`}
          role="menu"
          aria-labelledby="options-menu"
        >
          <div role="none" onAnimationEnd={() => { setIsOpen(false) }}>
            {options.map((option, index) => (
              <span
                key={index}
                className={`block px-4 truncate py-2 text-sm leading-5 ${
                  option === selectedOption
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                } cursor-pointer`}
                role="menuitem"
                onClick={() => { handleOptionClick(option) }}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Select
