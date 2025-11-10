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
      QRCode.toCanvas(canvasRef.current, upiLink, { width: 200 }, (err) => {
        if (err) console.error(err);
      });
    }
  }, [upiId, name, amount, note]);

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <canvas ref={canvasRef} />
      <p className="text-sm text-gray-500 text-center">
        Scan the QR code to pay ₹{amount}
      </p>
    </div>
  );
};

export default UPIQr;
