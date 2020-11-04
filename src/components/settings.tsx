import React, { useState } from 'react'


interface props {
    itemsPerPage: number,
    setItemsPerPage: (x: number) => void,
    showNative: boolean,
    setShowNative: (x: boolean) => void
}
const Settings = ({itemsPerPage, setItemsPerPage, showNative, setShowNative}: props) => {

    //input states
    const [numberValue, setNumberValue] = useState(itemsPerPage);
    const [checkBoxValue, setCheckBoxValue] = useState(showNative); 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (numberValue >= 5 && numberValue <= 20)
            setItemsPerPage(numberValue)
        else 
            console.log("this number must be higher then 4 and lower then 21");
            //red pop-up
        
        setShowNative(checkBoxValue);
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="number" onChange={(e) => setNumberValue(Number(e.target.value))} placeholder="5-20" defaultValue={itemsPerPage}/>
            <input type="checkbox" onChange={(e) => setCheckBoxValue(e.target.checked)} defaultChecked={showNative}/>
            <button type="submit">Apply settings</button>
        </form>
    )
}

export default Settings;