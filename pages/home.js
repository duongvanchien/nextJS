import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { Row, Col, Card, Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { submitUsername } from "../store/user/action";

const { Meta } = Card;

const Home = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Trang chủ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Đăng nhập thành công</h1>
        <h3>{props.user.name}</h3>
        <Link href="/login">
          <a>Đăng xuất</a>
        </Link>
        <Row style={{ marginTop: 5 }}>
          {props.items?.map((value, key) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              xl={4}
              style={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link href={`item/${value.id}`}>
                <Card
                  hoverable
                  style={{ width: 240, marginTop: 20 }}
                  cover={
                    <img
                      alt="example"
                      src="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg"
                    />
                  }
                >
                  <Meta title={value.title} description={value.body} />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

Home.getInitialProps = async () => {
  let items = [];
  await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      items = response.data;
    })
    .catch(function (error) {
      alert(error);
    });

  return {
    items,
  };
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitUsername: bindActionCreators(submitUsername, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
