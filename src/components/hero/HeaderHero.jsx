export default function HeaderHero(){

    return (

        <>
        
            <div className="flex flex-wrap items-center -mx-3">
                <div className="w-full lg:w-1/2 px-3">
                    <div className="py-12">
                        <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                                <span>Reflect, </span>
                                <span className="text-blue-600">Rediscover, </span>
                                <span>And Find Purpose.</span>
                            </h2>
                            <p className="text-blueGray-400 leading-relaxed">
                                Discover your authentic self, find your passion and life purpose in a private, judgment-free space.
                                Ludci analyzes dialogues, offering a real-time compass to align everyday life with passions and aspirations.
                            </p>
                        </div>
                        <div className="text-center lg:text-left">
                            <a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Get early access</a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
                    <div className="lg:h-128 flex items-center justify-center">
                        <img className="lg:max-w-lg" src="https://shuffle.dev/metis-assets/illustrations/work-tv.png" alt=""/>
                    </div>
                </div>
            </div>
        
        </>

    )

}