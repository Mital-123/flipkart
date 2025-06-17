import React from 'react'
import { useNavigate } from 'react-router-dom';

function ButtonCom() {

    const navigate = useNavigate();

    const handleFlipkartClick = () => {
        navigate("/flipkart");
    };

    const handlemeeshoClick = () => {
        navigate("/meesho");
    };

    const handleamazonClick = () => {
        navigate("/amazon");
    };

    return (
        <>
            <div className="main-bg d-flex align-items-center justify-content-center">
                <div className="upload-card shadow-lg p-5 rounded-4">
                    <h3 className="text-center fw-medium mb-4">Upload PDF To Platform</h3>
                    <div className="container">
                        <div className='d-flex justify-content-center align-items-center gap-3 flex-wrap'>
                            <button className="btn flipkart-btn fw-bold fs-6 px-3 py-2 border-none rounded-3 text-white overflow-hidden cursor-pointer" onClick={handleFlipkartClick}>Flipkart</button>
                            <button className="btn meesho-btn fw-bold fs-6 px-3 py-2 border-none rounded-3 text-white overflow-hidden cursor-pointer" onClick={handlemeeshoClick}>Meesho</button>
                            <button className="btn amazon-btn fw-bold fs-6 px-3 py-2 border-none rounded-3 text-white overflow-hidden cursor-pointer" onClick={handleamazonClick}>Amazon</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ButtonCom;