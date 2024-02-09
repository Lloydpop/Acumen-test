import { SearchNormal, CloseCircle } from "iconsax-react";
interface SearchProps {
  placeholder: string;
  value: string;
  setValue?: (val: string) => void;
  onSearch?: () => void;
  onClick: () => void;
}
const SearchFilter = ({
  placeholder,
  value,
  setValue,
  onSearch,
  onClick,
}: SearchProps) => {
  return (
    <div className="relative mt-4 w-full md:w-[300px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.();
        }}
      >
        <input
          className="w-full border outline-none px-4 py-3 rounded-md bg-transparent cursor-pointer"
          placeholder={placeholder}
          value={value}
          onChange={(e: any) => setValue?.(e.target.value)}
          onClick={onClick}
        />

        <button type="submit">
          <SearchNormal className="w-5 h-5 absolute top-3 right-3 text-gray-500" />
        </button>
        {value?.length > 0 && (
          <button
            type="button"
            onClick={() => {
              setValue?.("");
              setTimeout(() => {
                onSearch?.();
              }, 1);
            }}
          >
            <CloseCircle className="w-5 h-5 absolute top-3 right-9 text-gray-500" />
          </button>
        )}
      </form>
    </div>
  );
};

export default SearchFilter;
