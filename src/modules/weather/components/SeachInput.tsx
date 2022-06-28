import React from "react";
import { useState } from "react";
import { Input, InputGroup } from "rsuite";
import { Search } from "@rsuite/icons";
import { SearchInputProps } from "../Weather.type";

function SearchInput({
  placeholder,
  action,
  width,
  size,
  ...props
}: SearchInputProps) {
  const [loading, seLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(undefined);

  function handleClick() {
    action(searchValue);
  }

  function handleChange(value: string) {
    // if (typingTimeout) {
    //   clearTimeout(typingTimeout);
    // }
    // seLoading(true);
    // const timeout = setTimeout(() => {
    //   action(value);
    //   seLoading(false);
    // }, 1000);

    // setTypingTimeout(timeout);
    setSearchValue(value);
  }

  return (
    <>
      <InputGroup {...props} style={{ width, maxWidth: "1280px" }} inside>
        <Input placeholder={placeholder} onChange={handleChange} />
        <InputGroup.Button onClick={handleClick} loading={loading}>
          <Search />
        </InputGroup.Button>
      </InputGroup>
    </>
  );
}

export default SearchInput;
