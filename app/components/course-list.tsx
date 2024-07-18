import { Button, Flex } from "antd";
import React, { useEffect, useState } from "react";
import Course from "./course";
// import { courses } from "../data";
import course from "./course";
import axios from "axios";

const CourseList = () => {
	const [selected, setSelected] = useState([]);

	const [courses, setCourses] = useState([]);
	const enroll = () => {
		selected.map(async (id) => {
			await axios
				.post(`https://wz24x6z9-3000.inc1.devtunnels.ms/courses/enroll`, {
					userId: "yourUserId",
					courseId: id,
				})
				.then((response) => {
					// window.location.href = "/courses";
				})
				.catch((error) => {
					window.alert("You've already enrolled in the course");
					// Handle error
				});
		});
		window.alert("Enrolled successfully");
        getCourse()
	};
	const getCourse = async () => {
		axios
			.get("https://wz24x6z9-3000.inc1.devtunnels.ms/courses")
			.then((res: any) => {
				console.log(res);
				setCourses(res.data);
				console.log(res.data);
			});
	};
	useEffect(() => {
		getCourse();
	}, []);
	return (
		<div>
			<Flex wrap gap={16} style={{ padding: 12 }}>
				{courses.map((course: any) => (
					<Course key={course.id} setSelected={setSelected} course={course} />
				))}
			</Flex>
			{selected.length != 0 ? (
				<div className="absolute bottom-2 right-2">
					<Button
						onClick={enroll}
						type="primary"
						className="!h-[50px] !w-[80px]"
					>
						Enroll
					</Button>
				</div>
			) : null}
		</div>
	);
};

export default CourseList;
