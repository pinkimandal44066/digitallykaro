// // import React, { useState } from "react";
// // import { PDFDocument, rgb } from "pdf-lib";
// // import download from "downloadjs";

// // const Form = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [contact, setContact] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [error, setError] = useState("");

// //   const fillPdf = async () => {
// //     if (!firstName || !lastName || !contact || !email) {
// //       setError("Please fill in all required fields.");
// //       return;
// //     } else if (!/^\d{10}$/.test(contact)) {
// //       setError("Please enter a valid 10-digit contact number.");
// //       return;
// //     } else {
// //       setError("");
// //     }

// //     const existingPdfBytes = await fetch("/pdf.pdf").then((res) =>
// //       res.arrayBuffer()
// //     );

// //     const pdfDoc = await PDFDocument.load(existingPdfBytes);

// //     const pages = pdfDoc.getPages();
// //     const firstPage = pages[0];

// //     firstPage.drawText(firstName, {
// //       x: 50,
// //       y: 700,
// //       size: 12,
// //       color: rgb(0, 0, 0),
// //     });

// //     firstPage.drawText(lastName, {
// //       x: 50,
// //       y: 670,
// //       size: 12,
// //       color: rgb(0, 0, 0),
// //     });

// //     firstPage.drawText(contact, {
// //       x: 50,
// //       y: 640,
// //       size: 12,
// //       color: rgb(0, 0, 0),
// //     });

// //     firstPage.drawText(email, {
// //       x: 50,
// //       y: 610,
// //       size: 12,
// //       color: rgb(0, 0, 0),
// //     });

// //     const pdfBytes = await pdfDoc.save();

// //     download(pdfBytes, "filled_form.pdf", "application/pdf");

// //     setFirstName("");
// //     setLastName("");
// //     setContact("");
// //     setEmail("");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
// //       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
// //         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
// //           Fill PDF Form
// //         </h1>

// //         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">
// //             First Name <span className="text-red-500">*</span>
// //           </label>
// //           <input
// //             type="text"
// //             placeholder="Enter First Name"
// //             value={firstName}
// //             onChange={(e) => setFirstName(e.target.value)}
// //             required
// //             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">
// //             Last Name <span className="text-red-500">*</span>
// //           </label>
// //           <input
// //             type="text"
// //             placeholder="Enter Last Name"
// //             value={lastName}
// //             onChange={(e) => setLastName(e.target.value)}
// //             required
// //             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-sm font-medium text-gray-700">
// //             Contact Details <span className="text-red-500">*</span>
// //           </label>
// //           <input
// //             type="text"
// //             placeholder="Enter Contact Details"
// //             value={contact}
// //             onChange={(e) => setContact(e.target.value)}
// //             required
// //             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>

// //         <div className="mb-6">
// //           <label className="block text-sm font-medium text-gray-700">
// //             Email <span className="text-red-500">*</span>
// //           </label>
// //           <input
// //             type="email"
// //             placeholder="Enter Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           />
// //         </div>

// //         <button
// //           onClick={fillPdf}
// //           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
// //         >
// //           Generate Filled PDF
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Form ;




// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import { saveAs } from 'file-saver'; // For saving the modified PDF

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");

//   const fillPdf = async () => {
//     // Input validation
//     if (!firstName || !lastName || !contact || !email) {
//       setError("Please fill in all required fields.");
//       return;
//     } else if (!/^\d{10}$/.test(contact)) {
//       setError("Please enter a valid 10-digit contact number.");
//       return;
//     } else {
//       setError("");
//     }

//     // Fetch the existing PDF from the public folder
//     const existingPdfBytes = await fetch("/doc.pdf").then((res) =>
//       res.arrayBuffer()
//     );

//     // Load a PDFDocument from the existing PDF
//     const pdfDoc = await PDFDocument.load(existingPdfBytes);

//     // Get the first page of the document
//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];

//     // Define the position where the text will be placed
//     const { width, height } = firstPage.getSize();
//     const fontSize = 12;

//     // Add the text on the first page (you can adjust the coordinates)
//     firstPage.drawText(`First Name: ${firstName}`, {
//       x: 50,
//       y: height - 100,
//       size: fontSize,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(`Last Name: ${lastName}`, {
//       x: 50,
//       y: height - 120,
//       size: fontSize,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(`Contact: ${contact}`, {
//       x: 50,
//       y: height - 140,
//       size: fontSize,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(`Email: ${email}`, {
//       x: 50,
//       y: height - 160,
//       size: fontSize,
//       color: rgb(0, 0, 0),
//     });

//     // Serialize the PDFDocument to bytes (a Uint8Array)
//     const pdfBytes = await pdfDoc.save();

//     // Save the PDF
//     const blob = new Blob([pdfBytes], { type: "application/pdf" });
//     saveAs(blob, "filled_form.pdf");

//     // Clear the form inputs
//     setFirstName("");
//     setLastName("");
//     setContact("");
//     setEmail("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Contact Details <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Contact Details"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">
//             Email <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;





// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import { saveAs } from "file-saver"; // For saving the modified PDF

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [signature, setSignature] = useState(null); // For signature image
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignatureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSignature(reader.result); // Store signature image as base64
//     };
//     reader.readAsDataURL(file);
//   };

//   const fillPdf = async () => {
//     if (!firstName || !lastName || !isChecked || !signature) {
//       setError("Please fill all the required fields and upload a signature.");
//       return;
//     } else {
//       setError("");
//     }

//     // Fetch the existing PDF from the public folder
//     const existingPdfBytes = await fetch("/doc.pdf").then((res) =>
//       res.arrayBuffer()
//     );

//     // Load a PDFDocument from the existing PDF
//     const pdfDoc = await PDFDocument.load(existingPdfBytes);

//     // Get the first page of the document
//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];
//     const { width, height } = firstPage.getSize();
//     const fontSize = 12;

//     // Add the text on the first page (coordinates are examples, adjust as needed)
//     firstPage.drawText(`First Name: ${firstName}`, {
//       x: 50,
//       y: height - 100,
//       size: fontSize,
//       color: rgb(0, 0, 0),
//     });

//     firstPage.drawText(`Last Name: ${lastName}`, {
//       x: 50,
//       y: height - 120,
//       size: fontSize,
//       color: rgb(0, 0, 0),
//     });

//     // Checkbox (assuming checkbox is on top-left corner with size 10x10)
//     if (isChecked) {
//       firstPage.drawText("✔", {
//         x: 50, // Adjust these coordinates
//         y: height - 150, // Adjust these coordinates
//         size: 20,
//         color: rgb(0, 0, 0),
//       });
//     }

//     // Add signature image
//     if (signature) {
//       const signatureImageBytes = await fetch(signature).then((res) =>
//         res.arrayBuffer()
//       );
//       const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
//       const signatureDims = signatureImage.scale(0.5); // Resize the image

//       firstPage.drawImage(signatureImage, {
//         x: 50, // Adjust as needed
//         y: height - 300, // Adjust as needed
//         width: signatureDims.width,
//         height: signatureDims.height,
//       });
//     }

//     // Serialize the PDFDocument to bytes (a Uint8Array)
//     const pdfBytes = await pdfDoc.save();

//     // Save the PDF
//     const blob = new Blob([pdfBytes], { type: "application/pdf" });
//     saveAs(blob, "filled_form.pdf");

//     // Clear form inputs
//     setFirstName("");
//     setLastName("");
//     setSignature(null);
//     setIsChecked(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Signature <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleSignatureUpload}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2">I agree to the terms and conditions</span>
//           </label>
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;



// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import { saveAs } from "file-saver"; // For saving the modified PDF

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [signature, setSignature] = useState(null); // For signature image
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignatureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSignature(reader.result); // Store signature image as base64
//     };
//     reader.readAsDataURL(file);
//   };

//   const fillPdf = async () => {
//     try {
//       if (!firstName || !lastName || !isChecked || !signature) {
//         setError("Please fill all the required fields and upload a signature.");
//         return;
//       } else {
//         setError("");
//       }

//       // Fetch the existing PDF from the public folder (you may need to adjust the path)
//       const existingPdfBytes = await fetch("/doc.pdf").then((res) => {
//         if (!res.ok) {
//           throw new Error("PDF not found!");
//         }
//         return res.arrayBuffer();
//       });

//       // Load a PDFDocument from the existing PDF
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);

//       // Get the first page of the document
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       const { width, height } = firstPage.getSize();
//       const fontSize = 12;

//       // Add the text on the first page (coordinates are examples, adjust as needed)
//       firstPage.drawText(`First Name: ${firstName}`, {
//         x: 50,
//         y: height - 100,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       firstPage.drawText(`Last Name: ${lastName}`, {
//         x: 50,
//         y: height - 120,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       // Checkbox (assuming checkbox is on top-left corner with size 10x10)
//       if (isChecked) {
//         firstPage.drawText("✔", {
//           x: 50, // Adjust these coordinates
//           y: height - 150, // Adjust these coordinates
//           size: 20,
//           color: rgb(0, 0, 0),
//         });
//       }

//       // Add signature image
//       if (signature) {
//         const signatureImageBytes = await fetch(signature).then((res) =>
//           res.arrayBuffer()
//         );
//         const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
//         const signatureDims = signatureImage.scale(0.5); // Resize the image

//         firstPage.drawImage(signatureImage, {
//           x: 50, // Adjust as needed
//           y: height - 300, // Adjust as needed
//           width: signatureDims.width,
//           height: signatureDims.height,
//         });
//       }

//       // Serialize the PDFDocument to bytes (a Uint8Array)
//       const pdfBytes = await pdfDoc.save();

//       // Save the PDF using file-saver
//       const blob = new Blob([pdfBytes], { type: "application/pdf" });
//       saveAs(blob, "filled_form.pdf");

//       // Clear form inputs
//       setFirstName("");
//       setLastName("");
//       setSignature(null);
//       setIsChecked(false);

//       console.log("PDF generated successfully!");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       setError("Something went wrong while generating the PDF.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Signature <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleSignatureUpload}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2">I agree to the terms and conditions</span>
//           </label>
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;














// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import { saveAs } from "file-saver"; // For saving the modified PDF

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [signature, setSignature] = useState(null); // For signature image
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignatureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSignature(reader.result); // Store signature image as base64
//     };
//     reader.readAsDataURL(file);
//   };

//   const fillPdf = async () => {
//     try {
//       if (!firstName || !lastName || !isChecked || !signature) {
//         setError("Please fill all the required fields and upload a signature.");
//         return;
//       } else {
//         setError("");
//       }

//       // Fetch the existing PDF from the public folder (you may need to adjust the path)
//       const existingPdfBytes = await fetch("/doc.pdf").then((res) => {
//         if (!res.ok) {
//           throw new Error("PDF not found!");
//         }
//         return res.arrayBuffer();
//       });

//       // Load a PDFDocument from the existing PDF
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);

//       // Get the first page of the document
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       const { width, height } = firstPage.getSize();
//       const fontSize = 12;

//       // Add the text on the first page (coordinates are examples, adjust as needed)
//       firstPage.drawText(`First Name: ${firstName}`, {
//         x: 50,
//         y: height - 100,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       firstPage.drawText(`Last Name: ${lastName}`, {
//         x: 50,
//         y: height - 120,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       // Checkbox (assuming checkbox is on top-left corner with size 10x10)
//       if (isChecked) {
//         firstPage.drawText("X", { // Changed "✔" to "X"
//           x: 50, // Adjust these coordinates
//           y: height - 150, // Adjust these coordinates
//           size: 20,
//           color: rgb(0, 0, 0),
//         });
//       }

//       // Add signature image
//       if (signature) {
//         const signatureImageBytes = await fetch(signature).then((res) =>
//           res.arrayBuffer()
//         );
//         const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
//         const signatureDims = signatureImage.scale(0.5); // Resize the image

//         firstPage.drawImage(signatureImage, {
//           x: 50, // Adjust as needed
//           y: height - 300, // Adjust as needed
//           width: signatureDims.width,
//           height: signatureDims.height,
//         });
//       }

//       // Serialize the PDFDocument to bytes (a Uint8Array)
//       const pdfBytes = await pdfDoc.save();

//       // Save the PDF using file-saver
//       const blob = new Blob([pdfBytes], { type: "application/pdf" });
//       saveAs(blob, "filled_form.pdf");

//       // Clear form inputs
//       setFirstName("");
//       setLastName("");
//       setSignature(null);
//       setIsChecked(false);

//       console.log("PDF generated successfully!");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       setError("Something went wrong while generating the PDF.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Signature <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleSignatureUpload}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2">I agree to the terms and conditions</span>
//           </label>
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;
















// done pr thoda sa fix krna hoga

// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import { saveAs } from "file-saver"; // For saving the modified PDF

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [signature, setSignature] = useState(null); // For signature image
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");

//   const handleSignatureUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setSignature(reader.result); // Store signature image as base64
//     };
//     reader.readAsDataURL(file);
//   };

//   const fillPdf = async () => {
//     try {
//       if (!firstName || !lastName || !isChecked || !signature) {
//         setError("Please fill all the required fields and upload a signature.");
//         return;
//       } else {
//         setError("");
//       }

//       // Fetch the existing PDF from the public folder (you may need to adjust the path)
//       const existingPdfBytes = await fetch("/doc.pdf").then((res) => {
//         if (!res.ok) {
//           throw new Error("PDF not found!");
//         }
//         return res.arrayBuffer();
//       });

//       // Load a PDFDocument from the existing PDF
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);

//       // Get the first page of the document
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       const { width, height } = firstPage.getSize();
//       const fontSize = 12;

//       // Add the text on the first page (coordinates are examples, adjust as needed)
//       firstPage.drawText(`First Name: ${firstName}`, {
//         x: 50,
//         y: height - 100,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       firstPage.drawText(`Last Name: ${lastName}`, {
//         x: 50,
//         y: height - 120,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       // Checkbox (assuming checkbox is on top-left corner with size 10x10)
//       if (isChecked) {
//         firstPage.drawText("X", { // Changed "✔" to "X"
//           x: 50, // Adjust these coordinates
//           y: height - 150, // Adjust these coordinates
//           size: 20,
//           color: rgb(0, 0, 0),
//         });
//       }

//       // Create a new page for the signature
//       const signaturePage = pdfDoc.addPage([width, height]);

//       // Add signature image
//       if (signature) {
//         const signatureImageBytes = await fetch(signature).then((res) =>
//           res.arrayBuffer()
//         );
//         const signatureImage = await pdfDoc.embedPng(signatureImageBytes);
//         const signatureDims = signatureImage.scale(0.5); // Resize the image

//         signaturePage.drawImage(signatureImage, {
//           x: 50, // Adjust as needed
//           y: height - 200, // Adjust as needed
//           width: signatureDims.width,
//           height: signatureDims.height,
//         });
//       }

//       // Serialize the PDFDocument to bytes (a Uint8Array)
//       const pdfBytes = await pdfDoc.save();

//       // Save the PDF using file-saver
//       const blob = new Blob([pdfBytes], { type: "application/pdf" });
//       saveAs(blob, "filled_form.pdf");

//       // Clear form inputs
//       setFirstName("");
//       setLastName("");
//       setSignature(null);
//       setIsChecked(false);

//       console.log("PDF generated successfully!");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       setError("Something went wrong while generating the PDF.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Signature <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleSignatureUpload}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2">I agree to the terms and conditions</span>
//           </label>
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;




// import React, { useState } from "react";
// import { PDFDocument, rgb } from "pdf-lib";
// import { saveAs } from "file-saver"; // For saving the modified PDF

// const Form = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isChecked, setIsChecked] = useState(false);
//   const [error, setError] = useState("");

//   const fillPdf = async () => {
//     try {
//       if (!firstName || !lastName || !isChecked) {
//         setError("Please fill all the required fields.");
//         return;
//       } else {
//         setError("");
//       }

//       // Fetch the existing PDF from the public folder (you may need to adjust the path)
//       const existingPdfBytes = await fetch("/doc.pdf").then((res) => {
//         if (!res.ok) {
//           throw new Error("PDF not found!");
//         }
//         return res.arrayBuffer();
//       });

//       // Load a PDFDocument from the existing PDF
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);

//       // Get the first page of the document
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];
//       const { width, height } = firstPage.getSize();
//       const fontSize = 12;

//       // Add the text on the first page (coordinates are examples, adjust as needed)
//       firstPage.drawText(`First Name: ${firstName}`, {
//         x: 50,
//         y: height - 100,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       firstPage.drawText(`Last Name: ${lastName}`, {
//         x: 50,
//         y: height - 120,
//         size: fontSize,
//         color: rgb(0, 0, 0),
//       });

//       // Checkbox (assuming checkbox is on top-left corner with size 10x10)
//       if (isChecked) {
//         firstPage.drawText("X", { // Changed "✔" to "X"
//           x: 50, // Adjust these coordinates
//           y: height - 150, // Adjust these coordinates
//           size: 20,
//           color: rgb(0, 0, 0),
//         });
//       }

//       // Serialize the PDFDocument to bytes (a Uint8Array)
//       const pdfBytes = await pdfDoc.save();

//       // Save the PDF using file-saver
//       const blob = new Blob([pdfBytes], { type: "application/pdf" });
//       saveAs(blob, "filled_form.pdf");

//       // Clear form inputs
//       setFirstName("");
//       setLastName("");
//       setIsChecked(false);

//       console.log("PDF generated successfully!");
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//       setError("Something went wrong while generating the PDF.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Fill PDF Form
//         </h1>

//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             First Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter First Name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Last Name <span className="text-red-500">*</span>
//           </label>
//           <input
//             type="text"
//             placeholder="Enter Last Name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//             className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={isChecked}
//               onChange={() => setIsChecked(!isChecked)}
//               className="form-checkbox h-5 w-5 text-blue-600"
//             />
//             <span className="ml-2">I agree to the terms and conditions</span>
//           </label>
//         </div>

//         <button
//           onClick={fillPdf}
//           className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//         >
//           Generate Filled PDF
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Form;


























// import React, { useState } from 'react';
// // import Demo from '../Components/Demo';



// const PdfFormComponent = () => {
//     const [selectedLib, setSelectedLib] = useState('minipdf');
//     const [loading, setLoading] = useState(false);

//     const handleDownload = (e) => {
//         e.preventDefault();
//         // Logic for downloading the PDF
//     };

//     const handleFill = () => {
//         setLoading(true);
//         // Logic for filling and downloading the PDF
//     };

//     return (
//       <>
      
      
      
      
//       <div className="max-w-lg mx-auto p-4">
//             <form className="url_form mb-4">
//                 <div className="mb-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                         Upload a PDF form file:
//                         <input type="file" name="file" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
//                     </label>
//                 </div>
//                 <div className="mb-2">
//                     <label className="block text-sm font-medium text-gray-700">
//                         or download one:
//                         <div className="flex items-center">
//                             <input type="text" size="40" defaultValue="Spielberichtsbogen_2BL.pdf" name="url" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
//                             <button onClick={handleDownload} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                                 Download
//                             </button>
//                         </div>
//                     </label>
//                 </div>
//             </form>

//             <form className="lib_form mb-4">
//                 <div className="mb-2">
//                     <span className="block text-sm font-medium text-gray-700">PDF library:</span>
//                     <label className="inline-flex items-center mt-2">
//                         <input type="radio" name="pdflib" value="minipdf" checked={selectedLib === 'minipdf'} onChange={(e) => setSelectedLib(e.target.value)} className="text-blue-600 border-gray-300 focus:ring-blue-500" />
//                         <span className="ml-2">minipdf</span>
//                     </label>
//                     <label className="inline-flex items-center mt-2">
//                         <input type="radio" name="pdflib" value="pdf.js" checked={selectedLib === 'pdf.js'} onChange={(e) => setSelectedLib(e.target.value)} className="text-blue-600 border-gray-300 focus:ring-blue-500" />
//                         <span className="ml-2">PDF.js</span>
//                     </label>
//                 </div>
//             </form>

//             <form className="fill_form mb-4">
//                 <button type="button" onClick={handleFill} className={`fill px-4 py-2 ${loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} text-white rounded-md transition`} disabled={loading}>
//                     {loading ? 'Loading...' : 'Fill and download PDF'}
//                 </button>
//             </form>

//             {loading && <div className="loading text-center text-sm text-gray-500">Loading (this may take a while since PDF.js is gigantic)</div>}
//         </div>
//       </>
        
//     );
// };

// export default PdfFormComponent;


import React, { useState, useEffect } from 'react';
import { saveAs } from 'file-saver'; // Make sure to install this package
import pdfform from '../../public/doc.pdf'; // Make sure to import your PDF library

const PdfForm = () => {
    const [currentBuffer, setCurrentBuffer] = useState(null);
    const [pdfLib, setPdfLib] = useState('minipdf');
    const [error, setError] = useState('');
    const [loadedFileName, setLoadedFileName] = useState('');
    const [formFields, setFormFields] = useState({}); // State for form fields
    const [showForm, setShowForm] = useState(false); // State to control form visibility

    const makePdfform = () => {
        return pdfform(pdfLib === 'minipdf' ? minipdf : minipdf_js);
    };

    const list = (buf) => {
        // Implement listing logic here based on the buffer
        // For demonstration, this function should list available fields from the PDF
        // You might need to adjust this based on your specific PDF structure
    };

    const fill = (buf) => {
        try {
            const filled_pdf = makePdfform().transform(buf, formFields);
            const blob = new Blob([filled_pdf], { type: 'application/pdf' });
            saveAs(blob, 'filled_form.pdf');
        } catch (e) {
            setError(e.message);
        }
    };

    const onFile = (filename, buf) => {
        setCurrentBuffer(buf);
        setLoadedFileName(filename);
        // Implement logic to list fields
        list(buf);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (ev) => {
            onFile(file.name, ev.target.result);
        };
        reader.readAsArrayBuffer(file);
    };

    const handleUrlSubmit = (event) => {
        event.preventDefault();
        const url = event.target.url.value;
        fetch(url)
            .then((response) => {
                if (!response.ok) throw new Error('Failed to load URL');
                return response.arrayBuffer();
            })
            .then((buf) => onFile(url.split('/').pop(), buf))
            .catch((error) => setError(error.message));
    };

    const handleFillSubmit = (event) => {
        event.preventDefault();
        if (currentBuffer) {
            fill(currentBuffer);
        }
    };

    const handlePdfLibChange = (event) => {
        setPdfLib(event.target.value);
        if (currentBuffer) {
            list(currentBuffer); // Update the list if a buffer is loaded
        }
        setShowForm(event.target.value === 'minipdf'); // Show form only for minipdf
    };

    const handleFormFieldChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prevFields) => ({
            ...prevFields,
            [name]: value,
        }));
    };

    return (
        <div>
            <form onSubmit={handleUrlSubmit} className="url_form">
                <div>
                    Upload a PDF form file: 
                    <label>
                        <input type="file" name="file" onChange={handleFileUpload} />
                    </label>
                </div>
                <label>
                    or download one: 
                    <input type="text" size="40" defaultValue="Spielberichtsbogen_2BL.pdf" name="url" />
                    <button type="submit">Download</button>
                </label>
            </form>

            <div className="cur_file">
                {loadedFileName && <p>Loaded file {loadedFileName}</p>}
            </div>

            <form className="lib_form">
                PDF library:
                <label>
                    <input 
                        type="radio" 
                        name="pdflib" 
                        value="minipdf" 
                        checked={pdfLib === 'minipdf'} 
                        onChange={handlePdfLibChange} 
                    />
                    minipdf
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="pdflib" 
                        value="pdf.js" 
                        checked={pdfLib === 'pdf.js'} 
                        onChange={handlePdfLibChange} 
                    />
                    PDF.js
                </label>
            </form>

            {showForm && (
                <form className="fill_form" onSubmit={handleFillSubmit}>
                    <h3>Fill the Form</h3>
                    {/* Example fields; update these to match your PDF structure */}
                    <label>
                        Field 1: 
                        <input type="text" name="field1" onChange={handleFormFieldChange} />
                    </label>
                    <label>
                        Field 2: 
                        <input type="text" name="field2" onChange={handleFormFieldChange} />
                    </label>
                    {/* Add more fields as needed */}
                    <button type="submit">Fill and download PDF</button>
                </form>
            )}

            {error && <div className="error">{error}</div>}
            <div className="loading">Loading (this may take a while since PDF.js is gigantic)</div>
        </div>
    );
};

export default PdfForm;


















