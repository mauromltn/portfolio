'use client';
import { useState } from "react";
import Button from "./ui/Button";

export default function Menu() {

   const [ isActive, setIsActive ] = useState(false);

  return (
      <Button isActive={isActive} setIsActive={setIsActive}/>
  )
}
