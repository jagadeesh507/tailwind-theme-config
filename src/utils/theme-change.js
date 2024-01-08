"use client";
import React from "react";
import { changeTheme } from "./helper";

function ThemeChange() {
  const themes = [
    { label: "light", value: "" },
    { label: "dark", value: "dark" },
    { label: "lofi", value: "lofi" },
    { label: "luxury", value: "luxury" },
    { label: "retro", value: "retro" },
    { label: "emerald", value: "emerald" },
    { label: "aqua", value: "aqua" },
    { label: "garden", value: "garden" },
  ];
  return (
    <select
      id="theme"
      onChange={(e) => changeTheme(e.target.value)}
      className="border border-baseContent rounded-lg max-w-[60px] p-4 bg-background text-baseContent"
    >
      {themes.map((theme, index) => (
        <option key={index} value={theme.value}>
          {theme.label}
        </option>
      ))}
    </select>
  );
}

export default ThemeChange;
