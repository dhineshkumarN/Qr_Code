import { useState } from "react"

export const QrCode = () => {
    const [img , setImg] = useState(" ");
    const[loading, setLoading] = useState(false);
    const[qrData, setQrData] = useState("https://www.instagram.com/joyboy_dk_/");
    const [qrSize,setQrSize] = useState("150");

    async function generateQR() {

       setLoading(true);
       try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);
       } catch(error){
        console.error("Error generating QR code", error);
       } finally{
        setLoading(false);
       }
    }
    function downloadQR(){
        fetch(img).then((response)=>response.blob())
        .then((blob)=> {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch((error)=> {
            console.error("Error dowloading QR Code" , error);
        });
    }  
  return (
  <div className="app-container">
    <h1>QR CODE GENERATOR</h1>
    {loading && <p>please wait...</p>}
    {img && <img src={img} className="Qrcode-image"/>} 
    <div>
        <label htmlFor="dataInput" className="input-label" >
            Data for QR code: 
        </label>
        <input type="text" id="sizeInput" placeholder="Enter data for Qr code" value={qrData} onChange={(e)=> setQrData(e.target.value)}    />
        <label htmlFor="dataInput" className="input-label">
            Image size(eg.,150):
        </label>
        <input type="text" id="sizeInput" placeholder="Enter image size" value={qrSize} onChange={(e)=> setQrSize(e.target.value)}/>
        <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className="download-button" onClick={downloadQR} >Download QR code</button>
    </div>
  </div>)
}
