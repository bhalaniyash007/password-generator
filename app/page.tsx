"use client";
import { Button, Heading, TextField } from "@components";
import useCopyToClipboard from "@hooks/copyToClipboard";
import { Stack } from "@mui/material";
import { useState } from "react";
import BoltIcon from "@mui/icons-material/Bolt";
export default function Home() {
  const [password, setPassword] = useState("");
  const [copyValue, setCopyValue] = useCopyToClipboard();
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
      <div className="flex h-screen  items-center bg-blue-500">
        <div className="flex justify-start flex-col  text-left m-40">
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <Heading text="Generate" color="text-white-300" />
              <span
                className={`typography-headings text-5xl text-orange-200 font-extrabold font-poppins line-through`}
              >
                Random
              </span>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Heading text="Strong" color="text-orange-300" />
              <Heading text="Password" color="text-orange-100" />
            </Stack>
            <br />
            <TextField
              label="text field"
              value={password}
              onChange={() => {}}
              onClickHandler={() => setCopyValue(password)}
              type={"text"}
            />
            <br />
            <Button
              text={"Generate"}
              onClickHandler={generatePasswordHandler}
            />
          </Stack>
        </div>
      </div>
    </main>
  );
}
