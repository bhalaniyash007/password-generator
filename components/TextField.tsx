import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onMouseDownHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TextField = (props: TextFieldProps) => {
  const {
    label,
    value,
    onChange,
    type = "text",
    onClickHandler,
    onMouseDownHandler,
  } = props;

  return (
    <FormControl sx={{ width: "25ch" }}>
      <OutlinedInput
        placeholder="Password"
        fullWidth
        className="bg-gray-100 font-poppins"
        value={value}
        readOnly={true}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClickHandler}
              onMouseDown={onMouseDownHandler}
              edge="end"
            >
              <ContentCopyOutlinedIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export { TextField };
