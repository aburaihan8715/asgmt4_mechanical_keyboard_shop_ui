export type TProduct = {
  _id: string;
  title: string;
  image: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
  quantity: number;
};

export interface IUser {
  name: string;
  email: string;
  role: string;
  image?: string;
}
