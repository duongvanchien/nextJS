import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";

const { Meta } = Card;

const ItemDetail = (props) => {
  const [itemDetail, setItemDetail] = useState({});

  useEffect(() => {
    setItemDetail(props.item);
  });
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240, margin: "auto" }}
        cover={
          <img
            alt="example"
            src="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg"
          />
        }
      >
        <Meta title={itemDetail.title} description={itemDetail.body} />
      </Card>
    </div>
  );
};

ItemDetail.getInitialProps = async ({ query }) => {
  const { itemId } = query;
  let item = {};
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
    .then(function (response) {
      item = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });

  return {
    item,
  };
};

export default ItemDetail;
