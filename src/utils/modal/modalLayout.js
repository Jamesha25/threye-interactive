import "./modal.css";

function ModalLayout({children, setOpenModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {setOpenModal(false)}}>X</button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default ModalLayout;