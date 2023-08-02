import Link from "next/link";
import React from "react";

function ProceedToPayment() {

  return (
    <div className="customer-details-wrapper text-end">
        <div className="customer-form-submit-btn">
            <Link href="/payment">
              <button>Continue To payment</button>
            </Link>
        </div>
    </div>
  );
}

export default ProceedToPayment;
