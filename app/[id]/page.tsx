"use client";
import Link from "next/link";
import axios from "axios";
import React, { useEffect } from "react";

// const course = {
// 	id: 3,
// 	title: "Data Structures",
// 	description:
// 		"Learn the fundamental concepts of data structures and algorithms. This course covers arrays, linked lists, trees, graphs, and more. Perfect for both beginners and those looking to refresh their knowledge.",
// 	slug: "data-structures",
// 	lectures: 3,
// 	duration: 30,
// 	rating: 3.5,
// 	price: 300,
// 	currency: "$",
// 	thumbnail: "https://via.placeholder.com/150",
// 	video: "https://via.placeholder.com/150",
// 	instructor: {
// 		name: "Dr. Jane Smith",
// 		image: "https://via.placeholder.com/100",
// 		title: "Computer Science Professor",
// 	},
// };
const Page = ({ params }: { params: { id: string } }) => {
	const [course, setCourse] = React.useState<any>(null);
	console.log(params);
	const getCourse = async () => {
		axios
			.get(`https://wz24x6z9-3000.inc1.devtunnels.ms/courses/${params.id}`)
			.then((res: any) => {
				console.log(res);
				setCourse(res.data);
				console.log(res.data);
			});
	};
	useEffect(() => {
		getCourse();
	}, []);

	const enrollNow = () => {
		axios
			.post(`https://wz24x6z9-3000.inc1.devtunnels.ms/courses/enroll`, {
				userId: "yourUserId",
				courseId: course.id,
			})
			.then((response) => {
				// window.location.href = "/courses";
				window.alert("Enrolled successfully");
				setCourse((prev: any) => ({ ...prev, enrolled: true }));
			})
			.catch((error) => {
				window.alert("You've already enrolled in the course");
				// Handle error
			});
	};

	if (!course) return "Loading..";
	return (
		<div className="bg-gray-100 min-h-screen">
			<div className="container mx-auto p-4">
				{/* Header */}
				<div className="flex items-center mb-6">
					<Link href="/">
						<button className="mr-4 px-4 py-2 bg-white text-blue-600 rounded-md shadow hover:bg-blue-50 transition duration-300">
							&larr; Back to Courses
						</button>
					</Link>
					<h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
				</div>
				{/* Main content */}
				<div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
					{/* Video */}
					<div className="w-full lg:w-2/3">
						{course.enrolled ? (
							<iframe
								src={course.video}
								className="w-full h-[500px]"
								// controls
								// poster={course.thumbnail}
							>
								Your browser does not support the video tag.
							</iframe>
						) : (
							<img src={course.thumbnail}></img>
						)}
					</div>
					{/* Course info */}
					<div className="w-full lg:w-1/3 p-6">
						<h2 className="text-2xl font-semibold mb-3 text-gray-800">
							{course.title}
						</h2>
						<p className="text-gray-600 mb-6">{course.description}</p>
						{/* Instructor */}
						<div className="flex items-center mb-6">
							<img
								src={course.instructor.image}
								alt={course.instructor.name}
								className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500"
							/>
							<div>
								<span className="font-medium text-lg text-gray-800">
									{course.instructor.name}
								</span>
								<p className="text-sm text-gray-600">
									{course.instructor.title}
								</p>
							</div>
						</div>
						{/* Course details */}
						<div className="mb-6 bg-blue-50 p-4 rounded-md">
							<p className="mb-2">
								<span className="font-semibold">Lectures:</span>{" "}
								{course.lectures}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Duration:</span>{" "}
								{course.duration} minutes
							</p>
							<p>
								<span className="font-semibold">Rating:</span> {course.rating}/5
								:star:️
							</p>
						</div>
						{/* Price and enroll button */}
						<div className="flex items-center justify-between">
							<span className="text-3xl font-bold text-gray-800">
								{course.currency}
								{course.price}
							</span>
							<button
								onClick={enrollNow}
								// disabled={course.enrolled}
								className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
							>
								{!course.enrolled ? "Enroll Now" : "Enrolled"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Page;
