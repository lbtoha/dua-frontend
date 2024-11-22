"use client";
import { Category } from "@/app/type/types";
import { useState } from "react";
import Categories from "./Categories";
import MainContent from "./MainContent";

type Props = {
  params: { catId: string };
  categories: Category[];
};

const SidebarAndContent = ({ params: { catId }, categories }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = () => {
    setSidebarOpen(!sidebarOpen);
    console.log({ sidebarOpen });
  };
  return (
    <>
      <Categories categories={categories} />

      <MainContent params={{ catId }}  />
    </>
  );
};

export default SidebarAndContent;
