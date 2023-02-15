import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import { Menu, Image } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const items = [
  {
    label: <img src="logo.jpg" width={200} />,
    key: "/",
  },
  {
    label: "New Page",
    key: "page",
    icon: <CameraOutlined />,
  },
];
const App = () => {
  const [current, setCurrent] = useState("menu");
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default App;
