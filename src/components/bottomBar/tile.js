function Tile({color, text, onClick}) {
    return (
        <div style={{textAlign:'center', textTransform:'capitalize'}} onClick={onClick}>
            <div style={{background: `${color}`, height: 80, width: 150}}></div>
            <div>{text}</div>
        </div>
    );
}

export default Tile;