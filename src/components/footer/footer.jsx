export default function Footer() {

    return (

        <>

            <section className="py-20">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" href="#">
                                <img className="h-10" src="/logo2.png" alt="" width="auto"/>
                            </a>
                        </div>
                        <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">Ludci is an AI company based in Toronto, Canada.
87 Peter Street,
M5V 0P1</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
                            <p className="lg:text-lg text-blueGray-400">info@ludci.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-xs text-blueGray-400">©2023 Ludci, Inc.</p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="#">
                                <img src="https://shuffle.dev/metis-assets/icons/facebook-blue.svg" alt=""/>
                            </a>
                            <a className="inline-block px-2" href="#">
                                <img src="https://shuffle.dev/metis-assets/icons/twitter-blue.svg" alt=""/>
                            </a>
                            <a className="inline-block px-2" href="#">
                                <img src="https://shuffle.dev/metis-assets/icons/instagram-blue.svg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}