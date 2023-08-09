"use client";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const generatePassword = (length: number): string => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    return password;
  };

  const generatePasswordHandler = () => {
    setPassword(generatePassword(10));
  };

  return (
    <main>
      <h1>Generate Strong Password</h1>
      <br />
      <input
        type="text"
        placeholder="password"
        value={password}
        className="border-2 border-gray-500"
      />
      <br />
      <button
        className="p-5 border-2 border-gray-500"
        onClick={generatePasswordHandler}
      >
        Generate
      </button>
    </main>
  );
}
