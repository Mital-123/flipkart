import React, { useState, useEffect, useRef } from 'react';
import Swal from 'sweetalert2';

function AmazonPdfSplitter() {

    const fileInputRef = useRef(null);
    const [splitFiles, setSplitFiles] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("https://flipcartbackend-y19u.onrender.com/getamazon");
            const data = await res.json();
            setSplitFiles(data);
        } catch (error) {
            console.error("Failed to fetch files", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpload = async () => {
        const files = fileInputRef.current.files;
        if (!files.length) {
            Swal.fire({
                icon: 'warning',
                title: 'No File Selected',
                text: 'Please select at least one PDF file.',
            });
            return;
        }

        const formData = new FormData();
        for (let file of files) {
            formData.append("files", file);
        }

        try {
            const res = await fetch("https://flipcartbackend-y19u.onrender.com/postamazon", {
                method: "POST",
                body: formData
            });

            if (res.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Uploaded and split successfully!',
                    timer: 2000,
                    showConfirmButton: false,
                });
                fetchData();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Upload Failed',
                    text: 'Failed to upload. Please try again.',
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
        } catch (err) {
            console.error(err);
            alert("Error occurred"); Swal.fire({
                icon: 'error',
                title: 'An Error Occurred',
                text: 'Something went wrong. Please try again.',
                timer: 2000,
                showConfirmButton: false,
            });
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className="container py-5" style={{ maxWidth: '600px' }}>
                <h3 className="mb-4 text-center fw-medium">Amazon PDF Splitter</h3>

                <div className="card p-4 shadow">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label fw-medium">Select PDF</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            accept="application/pdf"
                            multiple
                            ref={fileInputRef}
                        />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-primary fw-bold fs-6 px-3 py-2 overflow-hidden" onClick={handleUpload}>
                            Upload & Split
                        </button>
                    </div>
                </div>

                <h4 className="mt-4 fw-medium text-center">Split Files</h4>
                <ul className="list-group">
                    {splitFiles.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <div className='p-1'>
                                <a
                                    href={`https://flipcartbackend-y19u.onrender.com/${item.part1}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="me-3 btn btn-sm btn-outline-success overflow-hidden"
                                >
                                    Barcode File
                                </a>
                                <a
                                    href={`https://flipcartbackend-y19u.onrender.com/${item.part2}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline-info overflow-hidden"
                                >
                                    Invoice File
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AmazonPdfSplitter;