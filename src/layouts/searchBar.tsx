import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";

export default function UseFormControl() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl
        sx={{ width: "25ch" }}
        onSubmit={() => console.log("submitted")}
      >
        <OutlinedInput placeholder="Please enter text" />
      </FormControl>
    </Box>
  );
}
