import { StarFilled, UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Flex, Typography, Progress, Checkbox } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import Link from "next/link";
const { Text } = Typography;

const course = ({ course, setSelected }: any) => {
	console.log(course);
	return (
		<Link href={`/${course.id}`}>
			<Card
				hoverable
				style={{ width: 320 }}
				cover={<img alt="example" src={course.thumbnail} />}
			>
				<Checkbox
					onClick={(e) => {
						e.preventDefault();
					}}
					onChange={(e) => {
						if (e.target.checked) {
							setSelected((prev: any) => [...prev, course.id]);
						} else {
							setSelected((prev: any) => [
								...prev.filter((val: any) => val.id != course.id),
							]);
						}
					}}
					className="absolute top-2 left-2"
				/>
				{course.enrolled && <Progress percent={course.enrolled ? 1 : 0} />}
				<Flex
					justify={"space-between"}
					style={{
						gap: 2,
					}}
				>
					<Text ellipsis style={{ fontSize: 18 }}>
						{course.title}
					</Text>
					<div className="flex gap-2 items-center">
						<StarFilled />
						{course.rating}
					</div>
				</Flex>
				<div>{course.duration} Minutes</div>
				<Flex align="center" gap={4}>
					<Avatar size={16} icon={<UserOutlined />} />
					<div>{course.instructor.name}</div>
				</Flex>
				<Flex align="center" gap={4}>
					<Text className="font-bold" style={{ fontSize: 16 }}>
						${course.price}
					</Text>
				</Flex>
			</Card>
		</Link>
	);
};

export default course;
