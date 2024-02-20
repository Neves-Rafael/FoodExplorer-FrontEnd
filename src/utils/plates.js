import image1 from "../assets/group-1.png";
import image2 from "../assets/group-2.png";

export const defaultPlates = [
  {
    id: "abc",
    name: "teste 1",
    category: "prato principal",
    description: "Refeição completa e deliciosa com frango e peixe!",
    value: "100",
    image: image1,
    ingredients: ["frango", "peixe", "arroz", "feijão"],
  },
  {
    id: "def",
    name: "teste 2",
    category: "bebidas",
    description: "Bebida gelada e refrescante!",
    value: "25",
    image: image2,
    ingredients: ["limão"],
  },
];
