import { useContext } from "react";
import { HiMiniPlus } from "react-icons/hi2";
import Modal from "../../../context/Modal";
import Menus from "../../../context/Menus";
import CreatePaymentMethod from "./CreatePaymentMethod";
import CreditCard from "./CreditCard";
import { BillingContext } from "../../../context/BillingContext";
import { PaymentMethod } from "../../../../shared/types/payment_method";

function BillPaymentMethod() {
  const { companyPaymentMethods } = useContext(BillingContext);

  return (
    <>
      <div className="flex flex-[1] flex-col">
        <h3 className="font-medium">Payment Method</h3>
        <p className="mt-2 text-sm lg:mt-6">Select default payment method.</p>
      </div>
      <div className="flex flex-[1] flex-col gap-y-2">
        {companyPaymentMethods && companyPaymentMethods.length > 0 ? (
          companyPaymentMethods?.map((method: PaymentMethod) => (
            <CreditCard key={method.id} resource={method} />
          ))
        ) : (
          <div>
            <h2 className="flex justify-center">
              No payment method set. Click the Add button to set one up.
            </h2>
          </div>
        )}
      </div>
      <div className="flex flex-[1] justify-end gap-4">
        <Modal>
          <Modal.Open opens="add">
            <Menus.Button type="add">
              Add Card
              <span className="ml-2">
                <HiMiniPlus />
              </span>
            </Menus.Button>
          </Modal.Open>
          <Modal.Window name="add">
            <CreatePaymentMethod onCloseModal={close} />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
}

export default BillPaymentMethod;
