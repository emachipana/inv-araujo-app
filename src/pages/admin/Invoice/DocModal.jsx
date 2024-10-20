import { useState } from "react";
import Modal from "../../../components/Modal";
import { Spinner } from "reactstrap";
import { Doc, Loader } from "./styles";
import { FlexRow } from "../../../styles/layout";
import Button from "../../../components/Button";
import { FaEye } from "react-icons/fa6";
import { HiDocumentMinus } from "react-icons/hi2";
import { useAdmin } from "../../../context/admin";

function DocModal({ isActive, setIsActive, pdfUrl, setInvoice, invoiceId }) {
  const [toDelete, setToDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const { setError, deleteDocInvoice } = useAdmin();

  const handleDeleteClick = async () => {
    if(!toDelete) return setToDelete(true);

    try {
      setIsDeleting(true);
      const updatedInvoice = await deleteDocInvoice(invoiceId);
      setInvoice(updatedInvoice);
      setIsDeleting(false);
      onClose();
    }catch(error) {
      setToDelete(false);
      console.error(error);
      setError(error.message);
      setIsDeleting(false);
    }
  }

  const onClose = () => {
    setIsActive(false);
    if(!isLoading) setIsLoading(true);
    if(toDelete) setToDelete(false);
  }

  return (
    <Modal
      align="start"
      size="md"
      setIsActive={onClose}
      isActive={isActive}
    >
      <FlexRow
        width="100%"
        justify="space-evenly"
        gap={1}
        style={{margin: "1.5rem 0"}}
      >
        <Button
          Icon={FaEye}
          fontSize={15}
          iconSize={17}
        >
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver en navegador
          </a>
        </Button>
        <Button
          color="danger"
          fontSize={15}
          iconSize={17}
          Icon={toDelete || isDeleting ? null : HiDocumentMinus}
          onClick={handleDeleteClick}
          disabled={isDeleting}
        >
          {
            toDelete
            ? (isDeleting
                ? <>
                    <Spinner size="sm" />
                    Anulando...
                  </>
                : "Haga click nuevamente"
              )
            : "Anular"
          }
        </Button>
      </FlexRow>
      <Doc>
        { 
          isLoading
          &&
          <Loader>
            <Spinner 
              color="light"
            />
          </Loader>
        }
        <iframe 
          title="factura"
          src={pdfUrl}
          width="100%"
          height="100%"
          onLoad={() => setIsLoading(false)}
        >
        </iframe>
      </Doc>
    </Modal>
  );
}

export default DocModal;
