import { LoadingContainer, LoadingText, Spinner } from './Loading.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

type LoadingProps = {
    message?: string;
    error?: boolean;
};
const Loading = ({ message, error }: LoadingProps) => {
    return (
        <LoadingContainer>
            {error ? <FontAwesomeIcon icon={faNetworkWired} /> : <Spinner />}
            <LoadingText>{message}</LoadingText>
        </LoadingContainer>
    );
};

export default Loading;
