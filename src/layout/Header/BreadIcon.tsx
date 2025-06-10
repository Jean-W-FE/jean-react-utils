const spanDefaultCls= 'w-full h-0.5 bg-black transition-transform duration-300'
const spanOpacityCls= 'w-full h-0.5 bg-black transition-opacity duration-300'

export default function BreadIcon({isMenuOpen}: {isMenuOpen: boolean}) {
    return (
        <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`${spanDefaultCls} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`${spanOpacityCls} ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`${spanDefaultCls} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
    )
}