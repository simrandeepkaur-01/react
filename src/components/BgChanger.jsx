import { useState } from 'react'

function BgChanger() {
  const colors = ["red", "green", "blue", "gray", "orange", "lime", "yellow", 'pink', "purple", 'slate', 'neutral', 'zinc', 'rose', 'stone', 'emerald', 'violet'];
  const [selectedColor, setSelectedColor] = useState(null);

  const handleBtnClick = (selectedColor) => {
    setSelectedColor(selectedColor);
  }

  return (
    // <div className={`w-screen h-screen relative ${selectedColor ? `bg-${selectedColor}-400` : 'bg-sky-200'}`}>
    <div className={'w-screen h-screen relativ'} style={{ backgroundColor: selectedColor? selectedColor : 'pink'} }>
      <div className='inset-x-0 flex items-center justify-around absolute bottom-10 flex-wrap gap-4'>
        {colors.map((color) => (
          <button
            onClick={() => handleBtnClick(color)}
            // className={`bg-${color}-400 capitalize shadow-lg`}
            style={{backgroundColor:color}}
            aria-label='Colored Button'>{color}
          </button>
        ))}

      </div>
    </div>
  )
}
export default BgChanger;