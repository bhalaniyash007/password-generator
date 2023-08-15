import { Button as MuiButton } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

interface ButtonProps {
  text: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const { text, onClickHandler } = props;

  return (
    <>
      <button
        className="bg-orange-300 font-poppins font-semibold hover:bg-orange-300 p-5 text-lg text-gray-100 rounded-md"
        onClick={onClickHandler}
      >
        <span>
          <BoltIcon />
        </span>
        {text}
      </button>
    </>
  );
};

export { Button };
