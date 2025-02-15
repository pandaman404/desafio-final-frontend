import { TbFaceIdError } from "react-icons/tb";
import styled from "styled-components";
import FlexContainer from "../../layout/FlexContainer";

const InternalError = () => {
  return (
    <ErrorContainer>
      <TbFaceIdError />
      <h2>Algo salió mal. Intenta más tarde.</h2>
    </ErrorContainer>
  );
};

export default InternalError;

const ErrorContainer = styled(FlexContainer)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 100px;
  }
`;
