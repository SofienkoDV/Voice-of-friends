import { Message } from "../../components";
import "./Home.scss";

function Home() {
  return (
    <section className="home">
      <div className="home__content">
        <Message
          avatar="https://i.pravatar.cc/150?img=1"
          user={{
            fullName: "John Doe",
          }}
          text="Привіт, як справи?"
          date={new Date()}
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
          user={{
            fullName: "Frank Sinatra",
          }}
          text="Привіт, все добре, а ти?"
          date={new Date()}
          isMe={true}
        />
      </div>
    </section>
  );
}

export default Home;
