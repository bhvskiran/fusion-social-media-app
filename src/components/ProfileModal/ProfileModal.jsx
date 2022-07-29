import { Modal, useMantineTheme } from "@mantine/core";
import "../../pages/Auth/Auth.css";

const ProfileModal = (props) =>  {
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
      <form className="infoForm">
        <h3>Your Info</h3>
        <div>
            <input type="text" className="infoInput"
              name="firstname" placeholder="First Name"/>
            <input type="text" className="infoInput"
              name="lastname" placeholder="Last Name"/>
        </div>

        <div>
            <input type="text" className="infoInput"
              name="worksat" placeholder="Works at"/>
        </div>

        <div>
            <input type="text" className="infoInput"
              name="livesin" placeholder="Lives in"/>
            <input type="text" className="infoInput"
              name="country" placeholder="Country"/>
        </div>

        <div>
            <input type="text" className="infoInput"
              name=" " placeholder="Relationship Status"/>
        </div>

        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
        </div>

        <button type="submit" className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;