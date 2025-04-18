import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCamera, FaFilePdf, FaSignature } from 'react-icons/fa';
import { Switch } from '@headlessui/react'
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js";


const Members = () => {
    // const [members, setMembers] = useState([]);
    // const [showForm, setShowForm] = useState(false);
    // const inputClass = "input-field";
    // const buttonClass = "upload-button";
    // const [enabled, setEnabled] = useState(false);


    // const renderPdfToImage = async (file) => {
    //     const fileReader = new FileReader();
    //     return new Promise((resolve) => {
    //         fileReader.onload = async () => {
    //             const typedarray = new Uint8Array(fileReader.result);
    //             const pdf = await pdfjsLib.getDocument(typedarray).promise;
    //             const page = await pdf.getPage(1);

    //             const canvas = document.createElement('canvas');
    //             const context = canvas.getContext('2d');
    //             const viewport = page.getViewport({ scale: 1.5 });
    //             canvas.height = viewport.height;
    //             canvas.width = viewport.width;

    //             await page.render({ canvasContext: context, viewport }).promise;
    //             resolve(canvas.toDataURL());
    //         };
    //         fileReader.readAsArrayBuffer(file);
    //     });
    // };

    // // Combine both formData states into one
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     drivingLicense: null,
    //     avatar: null,
    //     signature: null,
    // });

    // const [modalImage, setModalImage] = useState(null);

    // // Function to fetch members
    // const fetchMembers = async () => {
    //     try {
    //         const res = await axios.get('http://localhost:5000/api/members'); // ✅ FIXED
    //         setMembers(res.data);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // // Handle form data changes
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // // Handle file input change (avatar and signature)
    // const handleFileChange = (e) => {
    //     const { name, files } = e.target;
    //     if (files.length > 0) {
    //         setFormData((prevData) => ({
    //             ...prevData,
    //             [name]: files[0],  // Update the respective file field
    //         }));
    //     }
    // };

    // // Handle form submission
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formDataToSend = new FormData();

    //     // Append form data
    //     formDataToSend.append('firstName', formData.firstName);
    //     formDataToSend.append('middleName', formData.middleName);
    //     formDataToSend.append('lastName', formData.lastName);
    //     formDataToSend.append('email', formData.email);
    //     formDataToSend.append('phone', formData.phone);
    //     formDataToSend.append('preferredContact', formData.preferredContact);
    //     formDataToSend.append('address', formData.address);
    //     formDataToSend.append('unit', formData.unit);
    //     formDataToSend.append('city', formData.city);
    //     formDataToSend.append('state', formData.state);
    //     formDataToSend.append('zipCode', formData.zipCode);
    //     formDataToSend.append('dob', formData.dob);
    //     formDataToSend.append('socialSecurityNumber', formData.socialSecurityNumber);
    //     formDataToSend.append('driverLicenseNumber', formData.driverLicenseNumber);
    //     formDataToSend.append('licenseIssuedDate', formData.licenseIssuedDate);
    //     formDataToSend.append('licenseExpirationDate', formData.licenseExpirationDate);
    //     formDataToSend.append('emergencyFirstName', formData.emergencyFirstName);
    //     formDataToSend.append('emergencyLastName', formData.emergencyLastName);
    //     formDataToSend.append('emergencyPhone', formData.emergencyPhone);
    //     formDataToSend.append('emergencyEmail', formData.emergencyEmail);
    //     formDataToSend.append('emergencyNotes', formData.emergencyNotes);
    //     formDataToSend.append('preferredID', formData.preferredID);
    //     formDataToSend.append('status', formData.status);

    //     // Append files
    //     if (formData.avatar) {
    //         formDataToSend.append('avatar', formData.avatar);
    //     }
    //     if (formData.signature) {
    //         formDataToSend.append('signature', formData.signature);
    //     }

    //     try {
    //         const res = await axios.post('http://localhost:5000/api/members', formDataToSend, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',  // Important for handling files
    //             },
    //         });
    //         console.log('Form submitted successfully:', res.data);
    //         setFormData({
    //             firstName: '',
    //             middleName: '',
    //             lastName: '',
    //             email: '',
    //             phone: '',
    //             preferredContact: '',
    //             address: '',
    //             unit: '',
    //             city: '',
    //             state: '',
    //             zipCode: '',
    //             dob: '',
    //             socialSecurityNumber: '',
    //             driverLicenseNumber: '',
    //             licenseIssuedDate: '',
    //             licenseExpirationDate: '',
    //             emergencyFirstName: '',
    //             emergencyLastName: '',
    //             emergencyPhone: '',
    //             emergencyEmail: '',
    //             emergencyNotes: '',
    //             preferredID: '',
    //             status: false,
    //             avatar: null,
    //             signature: null,
    //         });
    //         setShowForm(false);
    //         fetchMembers();
    //     } catch (err) {
    //         console.error('Error submitting form:', err);
    //     }
    // };

    // // useEffect to fetch members on mount
    // useEffect(() => {
    //     fetchMembers();
    // }, []);

    // // Handle image click to view in modal
    // const handleImageClick = (image) => {
    //     setModalImage(image);
    // };

    // // Close modal
    // const closeModal = () => {
    //     setModalImage(null);
    // };

    // // Render image preview
    // const renderImagePreview = (file) => {
    //     if (!file) return null;
    //     return <img src={URL.createObjectURL(file)} alt="Preview" className="preview-image" />;
    // };


    const [members, setMembers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [previewDL, setPreviewDL] = useState(null);
    const [previewAvatar, setPreviewAvatar] = useState(null);
    const [previewSignature, setPreviewSignature] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredContact: '',
        address: '',
        unit: '',
        city: '',
        state: '',
        zipCode: '',
        dob: '',
        socialSecurityNumber: '',
        driverLicenseNumber: '',
        licenseIssuedDate: '',
        licenseExpirationDate: '',
        emergencyFirstName: '',
        emergencyLastName: '',
        emergencyPhone: '',
        emergencyEmail: '',
        emergencyNotes: '',
        preferredID: '',
        status: false,
        avatar: null,
        signature: null,
        drivingLicense: null,
    });
    const [modalImage, setModalImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const openModal = (imgSrc) => {
        setModalImage(imgSrc);
    };

    // Function to fetch members
    const fetchMembers = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/members');
            setMembers(res.data);
        } catch (err) {
            console.error('Error fetching members:', err);
        }
    };

    // Render PDF as image
    const renderPdfToImage = async (file) => {
        const fileReader = new FileReader();
        return new Promise((resolve) => {
            fileReader.onload = async () => {
                const typedarray = new Uint8Array(fileReader.result);
                const pdf = await pdfjs.getDocument(typedarray).promise;
                const page = await pdf.getPage(1);

                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1.5 });
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({ canvasContext: context, viewport }).promise;
                resolve(canvas.toDataURL());
            };
            fileReader.readAsArrayBuffer(file);
        });
    };

    // Handle form data changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle file input change (avatar, signature, and driving license)
    // const handleFile = (e) => {
    //     const { name, files } = e.target;
    //     if (!files[0]) return;
    //     const file = files[0];
    //     const url = URL.createObjectURL(file);

    //     setFormData((f) => ({ ...f, [name]: file }));

    //     if (name === 'drivingLicense') {
    //         setPreviewDL(url);
    //     } else if (name === 'avatar') {
    //         setPreviewAvatar(url);
    //     } else if (name === 'signature') {
    //         setPreviewSignature(url);
    //     }
    // };

    const handleFile = (e) => {
        const { id, files } = e.target;
        const file = files[0];
        if (!file) return;

        const previewURL = URL.createObjectURL(file);

        switch (id) {
            case 'drivingLicense':
                setPreviewDL(previewURL);
                setFormData({ ...formData, drivingLicenseFile: file });
                break;
            case 'avatar':
                setPreviewAvatar(previewURL);
                setFormData({ ...formData, avatarFile: file });
                break;
            case 'signature':
                setPreviewSignature(previewURL);
                setFormData({ ...formData, signatureFile: file });
                break;
            default:
                break;
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Append form data
        Object.keys(formData).forEach((key) => {
            if (formData[key]) {
                formDataToSend.append(key, formData[key]);
            }
        });

        try {
            const res = await axios.post('http://localhost:5000/api/members', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',  // Important for handling files
                },
            });
            console.log('Form submitted successfully:', res.data);
            setFormData({
                firstName: '',
                middleName: '',
                lastName: '',
                email: '',
                phone: '',
                preferredContact: '',
                address: '',
                unit: '',
                city: '',
                state: '',
                zipCode: '',
                dob: '',
                socialSecurityNumber: '',
                driverLicenseNumber: '',
                licenseIssuedDate: '',
                licenseExpirationDate: '',
                emergencyFirstName: '',
                emergencyLastName: '',
                emergencyPhone: '',
                emergencyEmail: '',
                emergencyNotes: '',
                preferredID: '',
                status: false,
                avatar: null,
                signature: null,
                drivingLicense: null,
            });
            setShowForm(false);
            fetchMembers();
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };

    // Handle image click to view in modal
    const handleImageClick = (image) => {
        setModalImage(image);
    };

    // Close modal
    const closeModal = () => {
        setModalImage(null);
    };

    // Modal rendering
    const renderImagePreview = (file) => {
        if (!file) return null;
        return <img src={URL.createObjectURL(file)} alt="Preview" className="preview-image" />;
    };

    // useEffect to fetch members on mount
    useEffect(() => {
        fetchMembers();
    }, []);



    return (
        <div className="p-6">
            {/* Header and Create Button */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Members</h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    {showForm ? 'Close' : '+ Create'}
                </button>
            </div>

            {/* Conditionally show form */}
            {showForm && (
                <form
                    className="mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white p-6 rounded-xl shadow-lg"
                    onSubmit={handleSubmit}
                >
                    {/* Personal Information */}
                    <div className="col-span-1">
                        <label htmlFor="firstName" className="block mb-1 text-sm font-semibold text-gray-700">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="middleName" className="block mb-1 text-sm font-semibold text-gray-700">Middle Name</label>
                        <input
                            id="middleName"
                            type="text"
                            placeholder="Middle Name"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="lastName" className="block mb-1 text-sm font-semibold text-gray-700">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="contact" className="block mb-1 text-sm font-semibold text-gray-700">Preferred Contact</label>
                        <input
                            id="contact"
                            type="text"
                            placeholder="Preferred Contact"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-1">
                        <label htmlFor="address" className="block mb-1 text-sm font-semibold text-gray-700">Address</label>
                        <input
                            id="address"
                            type="text"
                            placeholder="Address"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    {/* Unit, City, State, Zip Code */}
                    <div className="col-span-1">
                        <label htmlFor="unit" className="block mb-1 text-sm font-semibold text-gray-700">Unit</label>
                        <input
                            id="unit"
                            type="text"
                            placeholder="Unit"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="city" className="block mb-1 text-sm font-semibold text-gray-700">City</label>
                        <input
                            id="city"
                            type="text"
                            placeholder="City"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="state" className="block mb-1 text-sm font-semibold text-gray-700">State</label>
                        <input
                            id="state"
                            type="text"
                            placeholder="State"
                            className="input-field p-2 w-full"
                        />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="zip" className="block mb-1 text-sm font-semibold text-gray-700">Zip Code</label>
                        <input
                            id="zip"
                            type="text"
                            placeholder="Zip Code"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="col-span-1">
                        <label htmlFor="dob" className="block mb-1 text-sm font-semibold text-gray-700">Date of Birth</label>
                        <input
                            id="dob"
                            type="date"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    {/* License & Emergency */}
                    <div className="col-span-1">
                        <label htmlFor="ssn" className="block mb-1 text-sm font-semibold text-gray-700">Social Security Number</label>
                        <input
                            id="ssn"
                            type="text"
                            placeholder="SSN"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="driverLicense" className="block mb-1 text-sm font-semibold text-gray-700">Driver License Number</label>
                        <input
                            id="driverLicense"
                            type="text"
                            placeholder="Driver License"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    <div className="col-span-2 flex gap-4">
                        <div className="col-span-1">
                            <label htmlFor="issuedDate" className="block mb-1 text-sm font-semibold text-gray-700">Issued Date</label>
                            <input
                                id="issuedDate"
                                type="date"
                                className="input-field p-2 w-full"
                            />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="expDate" className="block mb-1 text-sm font-semibold text-gray-700">Expiration Date</label>
                            <input
                                id="expDate"
                                type="date"
                                className="input-field p-2 w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="emergencyFirstName" className="block mb-1 text-sm font-semibold text-gray-700">Emergency First Name</label>
                        <input
                            id="emergencyFirstName"
                            type="text"
                            placeholder="Emergency First Name"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="emergencyLastName" className="block mb-1 text-sm font-semibold text-gray-700">Emergency Last Name</label>
                        <input
                            id="emergencyLastName"
                            type="text"
                            placeholder="Emergency Last Name"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="emergencyPhone" className="block mb-1 text-sm font-semibold text-gray-700">Emergency Phone Number</label>
                        <input
                            id="emergencyPhone"
                            type="text"
                            placeholder="Emergency Phone"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    <div className="col-span-1">
                        <label htmlFor="emergencyEmail" className="block mb-1 text-sm font-semibold text-gray-700">Emergency Email Address</label>
                        <input
                            id="emergencyEmail"
                            type="email"
                            placeholder="Emergency Email"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="emergencyNotes" className="block mb-1 text-sm font-semibold text-gray-700">Emergency Notes</label>
                        <input
                            id="emergencyNotes"
                            type="text"
                            placeholder="Emergency Notes"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    {/* Preferred ID */}
                    <div className="col-span-1">
                        <label htmlFor="preferredId" className="block mb-1 text-sm font-semibold text-gray-700">Preferred ID</label>
                        <input
                            id="preferredId"
                            type="text"
                            placeholder="Preferred ID"
                            className="input-field p-2 w-full"
                        />
                    </div>

                    {/* Status Checkbox */}
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-700">Status</label>

                        <div className="flex items-center gap-2">
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-blue-600' : 'bg-gray-300'
                                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                            >
                                <span
                                    className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                                />
                            </Switch>

                            <span className="text-sm text-gray-600">
                                {enabled ? 'Active' : 'Unactive'}
                            </span>
                        </div>
                    </div>





                    {/* File Upload Section */}


                    <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                id: 'drivingLicense',
                                icon: <FaFilePdf size={28} />,
                                preview: previewDL,
                                alt: 'Driving License Preview',
                                label: 'Upload Driving License',
                            },
                            {
                                id: 'avatar',
                                icon: <FaCamera size={28} />,
                                preview: previewAvatar,
                                alt: 'Avatar Preview',
                                label: 'Upload Avatar',
                            },
                            {
                                id: 'signature',
                                icon: <FaSignature size={28} />,
                                preview: previewSignature,
                                alt: 'Signature Preview',
                                label: 'Upload Signature',
                            },
                        ].map(({ id, icon, preview, alt, label }) => (
                            <div
                                key={id}
                                className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow h-full"
                            >
                                {/* Preview Box */}
                                <div className="relative h-36 border border-dashed border-gray-300 rounded-md overflow-hidden flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition mb-3">
                                    {preview ? (
                                        <img
                                            src={preview}
                                            alt={alt}
                                            className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
                                            onClick={() => openModal(preview)}
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            {icon}
                                            <span className="mt-1 text-xs font-medium">{label}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Upload Button */}
                                <div className="relative">
                                    <label
                                        htmlFor={id}
                                        className="block text-center bg-blue-600 text-white text-sm py-1.5 px-3 rounded cursor-pointer hover:bg-blue-700 transition"
                                    >
                                        Choose File
                                    </label>
                                    <input
                                        id={id}
                                        name={id}
                                        type="file"
                                        accept={id === 'drivingLicense' ? 'image/*,application/pdf' : 'image/*'}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={handleFile}
                                    />
                                </div>
                            </div>
                        ))}

                        {/* Modal Preview */}
                        {modalImage && (
                            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                                <div className="relative bg-white p-5 rounded-lg shadow-xl max-w-xl w-full">
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-7 h-7 flex items-center justify-center text-sm"
                                    >
                                        ✕
                                    </button>
                                    <img
                                        src={modalImage}
                                        alt="Large Preview"
                                        className="w-full h-auto object-contain rounded"
                                    />
                                    <div className="text-center mt-3">
                                        <a
                                            href={modalImage}
                                            download="preview.jpg"
                                            className="bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 transition text-sm"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>




                    {/* Submit Button */}
                    <div className="col-span-3 md:col-span-2 lg:col-span-6 flex justify-end mt-4">
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition"
                        >
                            Save
                        </button>
                    </div>
                </form>
            )}



            {/* Members Table */}
            <table className="w-full bg-white rounded shadow text-sm">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Status</th>
                        <th className="p-3">Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((m) => (
                        <tr key={m._id} className="border-t">
                            <td className="p-3 font-semibold">{m.name}</td>
                            <td className="p-3 text-blue-600">{m.email}</td>
                            <td className="p-3">{m.phone}</td>
                            <td className="p-3">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                                    ✔ ACTIVE
                                </span>
                            </td>
                            <td className="p-3">{new Date(m.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};


export default Members;
