import {
  SelectSH,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Select = ({ items }: { items: string[] }) => {
  return (
    <SelectSH>
      <SelectTrigger className="w-[180px] focus-visible:ring-0 focus-visible:ring-offset-0">
        <SelectValue placeholder={items[0]} />
      </SelectTrigger>
      <SelectContent className="focus-visible:ring-0 focus-visible:ring-offset-0">
        {items.map((item, index) => (
          <SelectItem value={item} key={index}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectSH>
  );
};

export default Select;
