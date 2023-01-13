import Button from "components/Button/Button";
import { CloseContainer, Container, Content } from "./Modal.styles";
import location from "location";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

function Modal({ children, isOpen, handleClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Container>
      <Content>
        {children}
        <CloseContainer>
          <Button onClick={handleClose}>
            {location.close}
          </Button>
        </CloseContainer>
      </Content>
    </Container>
  );
}
export default Modal;
