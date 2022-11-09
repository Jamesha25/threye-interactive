import './bottomBar.css';
import Tile from './tile';
import { useContext } from 'react';
import { context } from '../../App';

function BottomBar() {
    let ctx = useContext(context);
    return (
        <div className='bottom-bar-container'>
            <div>Bottom Bar</div>
            <div className='tiles-container'>
                {ctx?.INPUT?.length>0 && 
                ctx.INPUT.map((item, ind)=>{
                    if(item.type==='Action')
                    return <Tile color={item.color} text={item.key} key={ind} onClick={()=>ctx.handleDisplayForm(item)}/>
                })}     
            </div>
        </div>
    );
}

export default BottomBar;