import Image from 'next/image'
export const Card = (marker:any) => {
    const {mark } = marker
    console.log(mark)
    return (
        <div className="w-full overflow-hidden my-4 px-4">
                <div className="bg-white dark:bg-gray-600 h-80 flex items-center md:items-start flex-col w-full rounded-xl overflow-hidden shadow-xl ">
                    <div className="p-4">
                        <span className="bg-red-400 py-2 px-4 text-sm font-semibold text-white rounded-full ">Pages:{mark.path}</span>
                        <h1 className="mt-4 text-3xl font-bold hover:underline dark:text-gray-100">{mark.abstract}</h1>
                        <p className="mt-2 font-sans text-gray-700 dark:text-gray-400"> by {mark.author.name}</p>
                    </div>
                    <p className="mt-2 font-bold text-green-500 ml-4">ID:{mark.id}</p>
                    <div className="relative w-full min-h-80 items-center flex">
                        <Image src={mark.resource.cover} alt="marker" width={1600} height={900} />
                    </div>
                </div>     
        </div>
        
    )
}
