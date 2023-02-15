import { Card, Col, Row } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Page = ({ id }) => {
  const navigate = useNavigate();

  const NavigateToSpecificTaskPage = () => {
    navigate("/page/" + id);
  };

  return (
    <Card
      title={"Title"}
      style={{ margin: "2em" }}
      hoverable={true}
      onClick={() => NavigateToSpecificTaskPage()}
    >
      <Row>
        <Meta
          title={"My Id is: " + id}
          description="click me!"
          style={{ margin: "1em" }}
        />
      </Row>
    </Card>
  );
};

export default Page;
