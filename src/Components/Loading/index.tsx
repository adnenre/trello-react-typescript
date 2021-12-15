import { LoadingContainer, LoadingText, Spinner } from "./Loading.styled";

type LoadingProps = {
  message?: string;
};
const Loading = ({ message }: LoadingProps) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
