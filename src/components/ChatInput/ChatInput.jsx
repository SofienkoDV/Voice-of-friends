import { Input } from "antd";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";

import "./ChatInput.scss";

function ChatInput() {
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <SmileOutlined style={{ fontSize: "20px" }} />
      </div>
      <Input
        size="large"
        placeholder="Введіть повідомлення..."
        className="chat-input__input"
      />
      <div className="chat-input__actions">
        <div className="chat-input__actions-camera">
          <CameraOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="chat-input__actions-record">
          <AudioOutlined style={{ fontSize: "20px" }} />
        </div>
        <div className="chat-input__actions-send">
          <SendOutlined style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
