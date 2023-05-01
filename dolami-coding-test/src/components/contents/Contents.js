import LeftPanel from "../left-panel/LeftPanel";

const Contents = ()=> {
    return (
        <>
            <div className="flex mt-20">
                <div className="w-1/5 border-2 border-amber-800">
                    <LeftPanel />
                </div>
                <div className="w-4/5 border-2 border-amber-800">
                    Body
                </div>
            </div>
        </>
    )
}

export default Contents;