import { Message, Dialogs } from "../../components";

import "./Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <Dialogs
          userId={0}
          items={[
            {
              _id: 0,
              user: {
                fullname: "Аліса Шевченко",
                isOnline: true,
                avatar: "https://i.pravatar.cc/150?img=1",
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

        {/* <Message
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
        /> */}
        <Message
          avatar="https://i.pravatar.cc/150?img=7"
          date="Sun Apr 11 2023 15:00:00 GMT+0300"
          audio="https://notificationsounds.com/soundfiles/3b0b4b5b5b5b5b5b5b5b5b5b5b5b5b5b/file-sounds-1105-just-like-that.mp3"
        />
      </div>
    </section>
  );
}

export default Home;
