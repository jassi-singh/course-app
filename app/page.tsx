"use client";
import Header from "./components/header";
import CourseList from "./components/course-list";
import { Button } from "antd";

export default function Home() {
	return (
		<main className="">
			<Header />
			<CourseList />
		</main>
	);
}
