"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "@/components/Header";
import Hero from "@/components/Route/Hero";

interface Props {}

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");
  return (
    <>
      <Heading
        title="EduPulse"
        description="EduPulse is a platform for students to learn and get help from teachers"
        keywords="Prograaming,MERN,Redux,Machine Learning, Aritificial Intelligence, Data Science, "
      />
      <div>
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <Hero />
      </div>
    </>
  );
};

export default Page;
