import {Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";

const LeftPanel = ()=> {
    const [contents, setContents] = useState([
        {
            key : "vrChatOner",
            title : "VRChat(Quest)",
            value : 1
        },
        {
            key : "vrChatTwo",
            title : "VRChat(PCVR)",
            value : 2
        },
        {
            key : "others",
            title : "Others",
            value : 3
        },
    ])
    const [prices, setPrices] = useState([
        {
            key : 1,
            title : "Under $10",
        },
        {
            key : 2,
            title : "$10 to $20",
        },
        {
            key : 3,
            title : "$20 to $30",
        },
        {
            key : 4,
            title : "$30 to $40",
        },
        {
            key : 5,
            title : "$40 to $50",
        },
        {
            key : 6,
            title : "$50 to $70",
        },
        {
            key : 7,
            title : "$70 & above",
        },
    ])
    const [polygonAmounts, setPolygonAmounts] = useState([
        {
            key : 1,
            title : "Under △7,500",
        },
        {
            key : 2,
            title : "△7,500 to △10,000",
        },
        {
            key : 3,
            title : "△10,000 to △15,000",
        },
        {
            key : 4,
            title : "△15,000 to △20,000",
        },
        {
            key : 5,
            title : "△20,000 to △32,000",
        },
        {
            key : 6,
            title : "△32,000 to △70,000",
        },
        {
            key : 7,
            title : "",
        },
    ])
    const [uploadSupports, setUploadSupports] = useState([
        {
            key : 1,
            title : "Supported",
        },
        {
            key: 2,
            title: "Unsupported",
        }
    ])
    return (
        <>
            <div className="flex flex-col gap-2 px-3 py-3">
                <div>
                    <p className="font-bold" >Category</p>
                    <div className="px-3">
                        <p>Full avatar</p>
                        <p>Others</p>
                    </div>
                </div>
                <div>
                    <p className="font-bold" >Contents</p>
                    {
                        contents.map((content)=> {
                            return (
                                <p><Checkbox  style={{padding: 0}}/> {content.title}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <p className="font-bold" >Price</p>
                    {
                        prices.map((price)=> {
                            return (
                                <p><Checkbox  style={{padding: 0}}/> {price.title}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <p className="font-bold" >Polygon amount</p>
                    {
                        polygonAmounts.map((polygonAmount)=> {
                            return (
                                <p><Checkbox  style={{padding: 0}}/> {polygonAmount.title}</p>
                            )
                        })
                    }
                </div>
                <div>
                    <p className="font-bold" >Auto upload support</p>
                    {
                        uploadSupports.map((uploadSupport)=> {
                            return (
                                <p><Checkbox  style={{padding: 0}}/> {uploadSupport.title}</p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default LeftPanel;