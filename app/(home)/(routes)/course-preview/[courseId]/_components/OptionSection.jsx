import Image from "next/image";

const OptionSection = () => {
  const options = [
    {
      id: 1,
      name: "Github",
      icon: "github.png",
    },
    {
      id: 2,
      name: "Demo",
      icon: "newspaper.png",
    },
    {
      id: 3,
      name: "Youtube",
      icon: "youtube.png",
    },
  ];
  return (
    <div className="flex justify-between">
      {options.map((option) => (
        <div
          className="p-2 w-1/3 mx-1 text-center rounded border"
          key={option.id}
        >
          <Image
            width={30}
            height={30}
            className="mx-auto"
            alt={option.icon}
            src={`/${option.icon}`}
          />
          <button>{option.name}</button>
        </div>
      ))}
    </div>
  );
};
export default OptionSection;
