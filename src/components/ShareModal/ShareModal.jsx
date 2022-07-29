import { Modal, useMantineTheme } from "@mantine/core";
import "../../pages/Auth/Auth.css";
import PostShare from "../PostShare/PostShare";

const ShareModal = (props) =>  {
  const {opened, onClose} = props;
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="50%"
      opened={opened}
      onClose={onClose}
    >
      <PostShare />
    </Modal>
  );
}

export default ShareModal;