import React from "react";
import { useState } from "react";
import { Input, InputGroup } from "rsuite";
import { Search } from "@rsuite/icons";
import { SearchInputProps } from "../Weather.type";
import { SearchInputContainer, SearchInputGroup } from "../Weather.style";

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
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    seLoading(true);
    const timeout = setTimeout(() => {
      action(value);
      seLoading(false);
    }, 1000);

    setTypingTimeout(timeout);
    setSearchValue(value);
  }

  return (
    <SearchInputContainer justify="start">
      <SearchInputGroup {...props} width={width} inside>
        <Input
          placeholder={placeholder}
          onChange={handleChange}
          value={searchValue}
        />
        <InputGroup.Button onClick={handleClick} loading={loading}>
          <Search />
        </InputGroup.Button>
      </SearchInputGroup>
    </SearchInputContainer>
  );
}

export default SearchInput;
