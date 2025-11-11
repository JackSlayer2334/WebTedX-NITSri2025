import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface UPIQrProps {
  upiId: string;
  name: string;
  amount: number;
  note?: string;
}

const UPIQr: React.FC<UPIQrProps> = ({ upiId, name, amount, note }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(
      name
    )}&am=${amount}&cu=INR${note ? `&tn=${encodeURIComponent(note)}` : ""}`;

    if (canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        upiLink,
        {
          width: 220,
          margin: 1,
          color: {
            dark: "#000000",
            light: "#ffffff",
          },
        },
        (err) => {
          if (err) console.error("QR Code generation failed:", err);
        }
      );
    }
  }, [upiId, name, amount, note]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-gradient-to-br from-black via-zinc-900 to-red-900 rounded-2xl shadow-lg p-8 w-full max-w-xl mx-auto">
      {/* QR Section */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md">
        <canvas ref={canvasRef} />
        <p className="mt-3 text-sm text-gray-600 text-center font-medium">
          Scan to pay using UPI
        </p>
      </div>

      {/* Payment Info Section */}
      <div className="flex flex-col items-center text-center space-y-3 text-white">
        <p className="text-lg font-semibold">
          Amount: <span className="text-red-400 text-xl">₹{amount}</span>
        </p>
        <p className="text-base font-medium">
          Recipient: <span className="text-gray-200"> Kavita Choudhary</span>
        </p>
        {note && <p className="text-sm text-gray-400 italic">Note: {note}</p>}
        <p className="text-xs text-gray-500">UPI ID: {upiId}</p>
      </div>
    </div>
  );
};

export default UPIQr;
