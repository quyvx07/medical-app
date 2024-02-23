"use client";
import useOnClickOutside from "@/hook/useOnClickOutside";
import { IconClose, IconMenu } from "@/icons/common";
import React, { useRef, useState } from "react";

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div ref={ref} className="relative inline-block">
      <div onClick={toggleDropdown} className="cursor-pointer">
        {isOpen ? (
          <IconClose className="text-ds-primary-400" />
        ) : (
          <IconMenu className="text-ds-primary-400" />
        )}
      </div>

      {isOpen && children}
    </div>
  );
};

export default Dropdown;
