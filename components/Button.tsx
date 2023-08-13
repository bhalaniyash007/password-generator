import { Button as MuiButton } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

interface ButtonProps {
  variant?: string;
  disableElevation?: boolean;
  text: string;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
  const {
    variant = "contained",
    disableElevation,
    text,
    onClickHandler,
  } = props;
  return (
    <>
      <MuiButton
        variant="contained"
        disableElevation
        sx={{
          textTransform: "none",
        }}
        className="bg-orange-300 font-poppins font-semibold hover:bg-orange-300 p-5 text-lg"
        onClick={onClickHandler}
        startIcon={<BoltIcon />}
      >
        {text}
      </MuiButton>
    </>
  );
};

export { Button };
