const commonCls= 'w-full h-0.5 bg-primary duration-300'
const spanDefaultCls= `${commonCls} transition-transform`
const spanOpacityCls= `${commonCls} transition-opacity`

export default function BreadIcon({isMenuOpen}: {isMenuOpen: boolean}) {
    return (
        <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`${spanDefaultCls} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`${spanOpacityCls} ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`${spanDefaultCls} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
    )
}