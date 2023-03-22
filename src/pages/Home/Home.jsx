import { Message } from "../../components";
import "./Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
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
    </section>
  );
}

export default Home;
