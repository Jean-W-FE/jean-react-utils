import Link from 'next/link'

export default function Logo({siteConfig}: {siteConfig: {name: string}}) {
    return (
        <Link href="/" className="text-2xl font-bold text-gray-800">
        {siteConfig.name}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">.</span>
      </Link>
    )
}