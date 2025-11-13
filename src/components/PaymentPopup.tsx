import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import UPIQr from "./UPIQR";

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPopup: React.FC<PaymentPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Access the variables from .env
  const upiId = import.meta.env.VITE_UPI_ID;
  const amount = import.meta.env.VITE_TICKET_AMOUNT;

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="fixed inset-0 flex items-start justify-center z-50 p-4 pt-20 md:pt-24"
        onClick={onClose}
      >
        <div
          className="bg-[#111] border border-[#333] rounded-xl shadow-xl w-full max-w-2xl
                     relative transition-all transform opacity-100 scale-100 flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white
                       transition-colors rounded-full p-1 z-10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Scrollable Content */}
          <div
            className="p-4 md:p-8 space-y-6 md:space-y-8 
                       overflow-y-auto 
                       max-h-[80vh]
                       hide-scrollbar pb-24"
          >
            {/* Heading */}
            <h2 className="text-xl md:text-2xl font-bold text-white text-center pt-4">
              Complete Your Purchase
            </h2>

            {/* Step 1 */}
            <div className="text-center space-y-5">
              <h3 className="text-lg font-semibold text-[#E62B1E]">
                Step 1 · Scan to Pay
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">
                Scan the QR code below using any UPI app (Google Pay, PhonePe,
                Paytm, etc.) to complete your payment.
              </p>

              <div className="bg-gray-800/30 border border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-300 max-w-lg mx-auto">
                <p className="font-medium text-white mb-1">Note:</p>
                <p>
                  After completing the payment,{" "}
                  <span className="font-semibold text-white">
                    take a screenshot
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-white">
                    copy or note down your Transaction ID
                  </span>
                  . You’ll need to attach it in the next form.
                </p>
              </div>

              <div className="flex justify-center">
                <UPIQr
                  upiId={upiId}
                  name="TEDx NIT Srinagar"
                  amount={amount}
                  note="TEDx All Access Ticket"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#E62B1E] mb-3">
                  Step 2 · Confirm Payment
                </h3>
                <p className="text-gray-400 text-sm mb-4 max-w-lg mx-auto">
                  After completing the payment, click the button below to
                  confirm your registration by providing us with your payment
                  details and information for verification at the event.
                </p>
                <div className="bg-[#222] p-4 rounded-lg border border-[#333] max-w-lg mx-auto">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>All Access Ticket (x1)</span>
                    <span className="font-bold text-white">₹399.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FIXED RED BUTTON (bottom sticky) */}
          <div className="sticky bottom-0 left-0 w-full bg-[#111] border-t border-[#333] p-4 flex justify-center z-50">
            <Button
              asChild
              className="w-full max-w-lg bg-[#E62B1E] hover:bg-[#d8261b] text-white glow-effect text-base md:text-lg font-semibold transition-all duration-300"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScr6azk_px_1pRUItpQTjq8hDl9ftuf1A-wo1RorMAtViYdnQ/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
              >
                I’ve Paid ₹399
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPopup;
