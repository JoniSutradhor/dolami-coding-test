import LeftPanel from "../left-panel/LeftPanel";

const Contents = ()=> {
    return (
        <>
            <div className="flex mt-20">
                <div className="w-1/5 border-2 border-amber-800">
                    <LeftPanel />
                </div>
                <div className="w-4/5 border-2 border-amber-800">
                    <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center">
                        <div className="py-10">
                            <div className="rounded overflow-hidden max-w-sm">
                                <img src="logo192.png" alt="" className="w-full "/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"></div>
                                    <p className="text-gray-500">Kaccu baccu details</p>
                                </div>
                                <div className="grid grid-flow-col gap-4 pb-2 px-6">
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kattu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">battu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kuttu</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="rounded overflow-hidden max-w-sm">
                                <img src="logo192.png" alt="" className="w-full "/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"></div>
                                    <p className="text-gray-500">Kaccu baccu details</p>
                                </div>
                                <div className="grid grid-flow-col gap-4 pb-2 px-6">
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kattu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">battu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kuttu</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="rounded overflow-hidden max-w-sm">
                                <img src="logo192.png" alt="" className="w-full "/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"></div>
                                    <p className="text-gray-500">Kaccu baccu details</p>
                                </div>
                                <div className="grid grid-flow-col gap-4 pb-2 px-6">
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kattu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">battu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kuttu</span>
                                </div>
                            </div>
                        </div>
                        <div className="py-10">
                            <div className="rounded overflow-hidden max-w-sm">
                                <img src="logo192.png" alt="" className="w-full "/>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"></div>
                                    <p className="text-gray-500">Kaccu baccu details</p>
                                </div>
                                <div className="grid grid-flow-col gap-4 pb-2 px-6">
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kattu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">battu</span>
                                    <span className="bg-gray-200 rounded-full px-3 py-1 font-base mb-2">kuttu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contents;