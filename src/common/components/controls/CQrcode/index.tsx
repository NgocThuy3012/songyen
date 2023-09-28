import QrCode2Icon from "@mui/icons-material/QrCode2";
import { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

import { useReactToPrint } from "react-to-print";
import { CQrcodeProps } from "./types";

export const CQrcode: React.FC<CQrcodeProps> = ({ id }) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <QrCode2Icon onClick={handlePrint} />
      <div style={{ display: "none" }}>
        <div ref={componentRef}>
          <QRCodeCanvas
            value={`https://www.npmjs.com/package/qrcode.react${id}`}
          />
        </div>
      </div>
    </div>
  );
};
