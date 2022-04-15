import {
  NotificationBox,
  NotificationBoxIcon,
  NofiticationMessageContainer,
  NotificationMessage,
} from "./Notification.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

type backendRespnce = {
  message: string | undefined;
  hints: string | undefined;
};
const Notification = ({ message, hints }: backendRespnce) => {
  if (message) {
    return (
      <>
        <NotificationBox danger>
          <NotificationBoxIcon>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </NotificationBoxIcon>
          <NofiticationMessageContainer>
            <NotificationMessage>{message}</NotificationMessage>
            <NotificationMessage>{hints}</NotificationMessage>
          </NofiticationMessageContainer>
        </NotificationBox>
      </>
    );
  } else {
    return null;
  }
};

export default Notification;
