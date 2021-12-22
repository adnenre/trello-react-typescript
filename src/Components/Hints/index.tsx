import { HintsBox, HintsBoxIcon, HintsBoxMessage } from "./Hints.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

type HintsProps = {
  message: string | undefined;
};
const Hints = ({ message }: HintsProps) => {
  if (message) {
    return (
      <>
        <HintsBox danger>
          <HintsBoxIcon>
            <FontAwesomeIcon icon={faExclamationCircle} />
          </HintsBoxIcon>
          <HintsBoxMessage>{message}</HintsBoxMessage>
        </HintsBox>
      </>
    );
  } else {
    return null;
  }
};

export default Hints;
