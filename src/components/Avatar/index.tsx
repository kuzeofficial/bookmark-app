import Image from 'next/image'

export const Avatar = () => {
    return (
        <div className="flex justify-center">
            <Image className="mb-8 rounded-full w-24 h-24 " src="https://avatars.githubusercontent.com/u/65286318?v=4" width={40} height={40} alt="Logo Cristian"/>
        </div>
    )
}
