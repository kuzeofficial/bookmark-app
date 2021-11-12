import Link from 'next/link'

interface Links {
    enlace: string
    texto: string
    icon: React.ReactNode
}
export const Links = ({enlace, texto, icon}:Links) => {
    return (
            <Link href={enlace} passHref>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  font-normal  rounded-lg cursor-pointer">
                        {icon}
                        <span>{texto}</span>
                </li>
            </Link>

    )
}
