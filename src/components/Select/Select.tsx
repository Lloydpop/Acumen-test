import React, { FC } from "react";
import { Controller, FieldValues, FieldPath } from "react-hook-form";
import ReactSelect, { components } from "react-select";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { Label } from "../Label/Label";

interface SelectProps {
  control: any;
  options?: any[];
  isMulti?: boolean;
  name: FieldPath<FieldValues>;
  error?: string;
  label?: string;
  placeholder?: string;
}

const CustomDropdownIndicator: React.FC<any> = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <div className="text-black">
        {props.selectProps.menuIsOpen ? (
          <ArrowUp2 className="w-4 h-4" />
        ) : (
          <ArrowDown2 className="w-4 h-4" />
        )}
      </div>
    </components.DropdownIndicator>
  );
};

const style: object = {
  control: (base: React.CSSProperties, state: any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    backgroundColor: "#fff",
    boxShadow: state.isFocused ? 0 : 0,
    paddingLeft: 4,
  }),
};

export const Select: FC<SelectProps> = ({
  control,
  options = [],
  isMulti,
  name,
  label,
  placeholder,
}) => {
  return (
    <div className="relative">
      {label && <Label label={label} />}
      <div className="mt-1">
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <ReactSelect
              placeholder={placeholder}
              {...field}
              styles={style}
              components={{ DropdownIndicator: CustomDropdownIndicator }}
              options={options}
              isMulti={isMulti}
              className="block w-full  font-inter px-1 py-1  border border-[#9999BC] appearance-none  placeholder:text-[11px] shadow-sm  rounded-sm   sm:text-sm disabled:cursor-not-allowed disabled:opacity-50 focus:border-secondary focus:outline-none focus:ring-secondary bg-white"
            />
          )}
        />
      </div>
    </div>
  );
};
