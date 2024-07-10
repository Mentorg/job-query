import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { IoPencilSharp } from "react-icons/io5";
import Modal from "../../../context/Modal";
import Menus from "../../../context/Menus";
import Button from "../../../../shared/components/ui/Button";
import UpdatePaymentMethod from "./UpdatePaymentMethod";
import mastercard from "../../../../../public/logos/mastercard.svg";
import visa from "../../../../../public/logos/visa.svg";
import { BillingContext } from "../../../context/BillingContext";
import { PaymentMethod } from "../../../../shared/types/payment_method";

type CreditCardProps = {
  resource: PaymentMethod;
};

function CreditCard({ resource }: CreditCardProps) {
  const { handleSetDefaultCard, handleDeleteCard } = useContext(BillingContext);

  return (
    <div
      key={resource.id}
      onClick={() => handleSetDefaultCard(resource.id)}
      className={`${resource.is_active ? "border-blue-400" : ""} flex w-max cursor-pointer justify-between rounded-md border bg-slate-50 px-4 py-4`}
    >
      <div className="flex flex-col gap-1 xs:flex-row">
        <div className="flex items-center justify-center rounded-md border border-slate-200">
          <img
            src={resource.card_type === "MasterCard" ? mastercard : visa}
            alt={`${resource.name}'s logo`}
            className="w-[50%]"
          />
        </div>
        <div className="ml-4 flex flex-col gap-y-4">
          <h4 className="text-sm font-medium">{resource.card_type}</h4>
          <p className="text-xs">
            Exp. Date:{" "}
            <span className="font-semibold">{resource.expiration_date}</span>
          </p>
          <p>{resource.card_number}</p>
          <p className="text-xs font-semibold">
            CVV: <span className="font-normal">{resource.cvv}</span>
          </p>
          <p className="text-xs text-blue-400">
            {resource.is_active ? "Set as default" : ""}
          </p>
        </div>
        <div className="text-xs"></div>
      </div>
      <div className="flex">
        <Modal>
          <Modal.Open opens="edit">
            <Menus.Button type="icon">
              <IoPencilSharp className="h-fit w-full rounded-full p-2 transition-all hover:bg-gray-200" />
            </Menus.Button>
          </Modal.Open>
          <Modal.Window name="edit">
            <UpdatePaymentMethod resource={resource} onCloseModal={close} />
          </Modal.Window>
        </Modal>
        <Button
          onClick={() => handleDeleteCard(resource.id)}
          className="h-fit rounded-full p-2 transition-all hover:bg-gray-200"
        >
          <HiOutlineX />
        </Button>
      </div>
    </div>
  );
}

export default CreditCard;
