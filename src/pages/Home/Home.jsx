import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Dialogs, Message, Search, Status, ChatInput } from "../../components";
import "./Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span>Збірка розмов</span>
            </div>
            <FormOutlined />
          </div>

          <div className="chat__sidebar-search">
            <Search />
          </div>

          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={0}
              items={[
                {
                  _id: 0,
                  user: {
                    fullname: "Аліса Шевченко",
                    isOnline: true,
                    avatar: null,
                  },
                  message: {
                    text: "Привіт, як справи?",
                    created_at: new Date("2021-03-11T12:00:00"),
                    isReaded: false,
                  },
                  unreaded: 3,
                  isMe: true,
                },
                {
                  _id: 1,
                  user: {
                    fullname: "Саша Червоний",
                    isOnline: true,
                    avatar: "https://i.pravatar.cc/150?img=2",
                  },
                  message: {
                    text: "Радий тебе бачити!",
                    created_at: new Date(),
                    isReaded: false,
                  },
                  unreaded: 3,
                  isMe: true,
                },
                {
                  _id: 2,
                  user: {
                    fullname: "Кирило Жовтий",
                    isOnline: true,
                    avatar: "https://i.pravatar.cc/150?img=3",
                  },
                  message: {
                    text: "Шо там?",
                    created_at: new Date(),
                    isReaded: false,
                  },
                  unreaded: 3,
                  isMe: true,
                },
              ]}
            />
          </div>
        </div>

        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <span className="chat__dialog-header-username">
                Аліса Шевченко
              </span>
              <div className="chat__dialog-header-status">
                <Status isOnline={true} />
              </div>
            </div>
            <EllipsisOutlined style={{ fontSize: "20px" }} />
          </div>
          <div className="chat__dialog-messages">
            <Message
              avatar="https://i.pravatar.cc/150?img=1"
              // user={{
              //   fullName: "John Doe",
              // }}
              text="Привіт, як справи?"
              date="Sun Apr 11 2023 14:00:00 GMT+0300"
              isMe={false}
              isReaded={true}
              attachments={[
                {
                  filename: "image.jpg",
                  url: "https://source.unsplash.com/100x100/?random=1&nature,water",
                },
                {
                  filename: "image.jpg",
                  url: "https://source.unsplash.com/100x100/?random=2&nature,water",
                },
                {
                  filename: "image.jpg",
                  url: "https://source.unsplash.com/100x100/?random=3&nature,water",
                },
              ]}
            />
            <Message
              avatar="https://i.pravatar.cc/150?img=2"
              // user={{
              //   fullName: "Frank Sinatra",
              // }}
              text="Привіт, все добре, а ти?"
              date="Sun Apr 11 2023 15:00:00 GMT+0300"
              isMe={true}
            />
            <Message avatar="https://i.pravatar.cc/150?img=3" isTyping />
            <Message
              avatar="https://i.pravatar.cc/150?img=8"
              isTyping
              isMe={true}
            />
            <Message
              avatar="https://i.pravatar.cc/150?img=5"
              attachments={[
                {
                  filename: "image.jpg",
                  url: "https://source.unsplash.com/150x150/?random=4&nature,water",
                },
              ]}
            />
            <Message
              avatar="https://i.pravatar.cc/150?img=7"
              attachments={[
                {
                  filename: "image.jpg",
                  url: "https://source.unsplash.com/150x150/?random=5&nature,water",
                },
              ]}
              isMe={true}
            />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
