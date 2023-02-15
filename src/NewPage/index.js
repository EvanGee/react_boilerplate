import { useParams } from "react-router-dom";
import { Fragment, useContext, useEffect, useState } from "react";
import { StoreContext } from "../Store";
import { Card, Col, Row, Alert } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const TaskPage = () => {
  const params = useParams();
  const context = useContext(StoreContext);
  console.log(params);
  return (
    <Row>
      <Col span={6}>
        {params.id}
      </Col>
    </Row>
  );
};

export default TaskPage;
