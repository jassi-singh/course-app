import { UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
const { Title } = Typography;

const Header = () => {
	return (
		<Flex
			className="bg-purple-800 px-4 py-2 mb-4"
			justify="space-between"
			align="center"
		>
			<Title level={2} style={{ color: "#fff", margin: 0 }}>
				CourseEra
			</Title>

			<Avatar size={32} icon={<UserOutlined />} />
		</Flex>
	);
};

export default Header;
