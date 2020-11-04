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

    //setting collapse
    const [isCollapsed, setCollapse] = useState(true);
    const arrowClass =  isCollapsed ? 'arrow down' : 'arrow up';
    const collapseClass = isCollapsed ? 'collapsed' : '';

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setCollapse(true);
        e.preventDefault();

        if (numberValue >= 5 && numberValue <= 50)
            setItemsPerPage(numberValue)
        else 
            console.log("this number must be higher then 4 and lower then 21");
            //red pop-up
        
        setShowNative(checkBoxValue);
    }

    return(
        <div className="form-container" >

            <h3 onClick={() => setCollapse(!isCollapsed)} >Settings <i className={arrowClass} /></h3>
            <form onSubmit={(e) => handleSubmit(e)} className={collapseClass}>
                <div>
                    <label>Countries per page:</label>
                    <input type="number" onChange={(e) => setNumberValue(Number(e.target.value))} placeholder="5-50" defaultValue={itemsPerPage}/>
                </div>
                <div>
                    <label>view native language</label>
                    <input type="checkbox" onChange={(e) => setCheckBoxValue(e.target.checked)} defaultChecked={showNative}/>
                </div>
                
                <button type="submit">Apply settings</button>
            </form>
        </div>
    )
}

export default Settings;