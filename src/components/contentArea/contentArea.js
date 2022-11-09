import './contentArea.css';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { context } from '../../App';

function ContentArea() {
    let ctx = useContext(context);
    const[content, setContent] = useState()
    useEffect(()=>{
        let template = {result:ctx.result}
        setContent(template)
    }, [ctx.result])
    
    console.log(ctx.result)
    return (
        <div className='content-area-container'>
            <div>Content Area</div>
            <pre>{JSON.stringify(content, null, 2)}</pre>
            {/* <pre>{content && content}</pre> */}
        </div>
    );
}

export default ContentArea;