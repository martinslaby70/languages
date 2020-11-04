import React from 'react'

interface paginationProps {
    setCurrentPage: (x: number) => void,
    currentPage: number,
    totalItems: number
}

const paginate = ({totalItems, currentPage, setCurrentPage}: paginationProps) => {
    let ret: number[] = [];
    if (totalItems < 7)
    {
        for (let i = 1; (i < 7 && i <= totalItems) ; i++) 
        ret.push(i);    
    }
    else
    {
        switch (currentPage)   
        {
            case 1:
            case 2:
            case 3: {
                ret = [1,2,3,4,5,6,7];
                break;
            }
            case totalItems:
            case totalItems -1:
            case totalItems -2: {
                ret = [totalItems - 6,totalItems - 5,totalItems - 4,totalItems - 3,totalItems - 2,totalItems - 1,totalItems]
                break;
            }
            default: {
                ret = [currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3,];
                break;
            }
        }
    }

    const buttons = ret.map( page => {
        return(
            <button onClick={() => setCurrentPage(page)} key={page} className={ page === currentPage ? 'active' : ''}>
                {page}
            </button>
        )
    });

    return(
        <div className="pagination">
            <button onClick={() => setCurrentPage(1)}>First</button>
            {buttons}
            <button onClick={() => setCurrentPage(totalItems)}>Last</button>
        </div>
    )
}


export default paginate;